// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { jwtConfig } from '../config/jwt.config';
import { User } from '../models/auth/user.model';
import { logger } from '../config/logger';

interface JWTError extends Error {
    name: 'JsonWebTokenError' | 'TokenExpiredError' | string;
    message: string;
    stack?: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    logger.info('Intento de autenticación', { token: token?.substring(0, 20) + '...' });
    
    if (!token) {
        logger.warn('Intento de acceso sin token');
        res.status(401).json({ message: 'Access denied. No token provided.' });
        return;
    }

    try {
        logger.debug('Verificando token con secret', { secretLength: jwtConfig.secret!.length });
        const decoded = verify(token, jwtConfig.secret!);
        logger.info('Token verificado exitosamente', { 
            userId: (decoded as User).id,

            email: (decoded as User).email 
        });
        req.user = decoded as User;
        next();
    } catch (error) {
        const jwtError = error as JWTError;
        logger.error('Error en la verificación del token', {
            error: jwtError.name,
            message: jwtError.message,
            stack: jwtError.stack
        });

        if (jwtError.name === 'JsonWebTokenError') {
            res.status(401).json({ message: 'Token inválido: ' + jwtError.message });
        } else if (jwtError.name === 'TokenExpiredError') {
            res.status(401).json({ message: 'Token expirado' });
        } else {
            res.status(400).json({ message: 'Error en la validación del token: ' + jwtError.message });
        }
    }
};