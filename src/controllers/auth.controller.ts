// src/controllers/auth.controller.ts
import { Request, Response } from 'express';
import { AuthService } from '../services/auth/auth.service';
import { logger } from '../config/logger';

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            logger.info(`Intento de inicio de sesión para el email: ${email}`);
            
            const token = await this.authService.login(email, password);
            if (token) {
                logger.info(`Inicio de sesión exitoso para el email: ${email}`);
                res.json({ token });
            } else {
                logger.warn(`Inicio de sesión fallido para el email: ${email}`);
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            logger.error('Error en login:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async getProfile(req: Request, res: Response): Promise<void> {
        try {
            const userId = (req as any).user.id;
            logger.info(`Obteniendo perfil para el usuario ID: ${userId}`);
            
            const user = await this.authService.getUserById(userId);
            if (user) {
                logger.info(`Perfil recuperado exitosamente para el usuario ID: ${userId}`);
                res.json(user);
            } else {
                logger.warn(`Usuario no encontrado para el ID: ${userId}`);
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            logger.error('Error en getProfile:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}