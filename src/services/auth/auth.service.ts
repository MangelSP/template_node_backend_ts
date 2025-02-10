// src/services/auth.service.ts
import { AuthRepository } from '../../repositories/auth/auth.repository';
import { User } from '../../models/auth/user.model';
import { sign, SignOptions } from 'jsonwebtoken'; // Importa SignOptions
import { jwtConfig } from '../../config/jwt.config';
import { UserDTO } from '../../models/dto/user.model.dto';

export class AuthService {
    private authRepository: AuthRepository;

    constructor() {
        this.authRepository = new AuthRepository();
    }

    async login(email: string, password: string): Promise<string | null> {
        const user = await this.authRepository.findByEmail(email);
        if (!user || user.password !== password) {
            return null;
        }

        // Define el payload y las opciones explícitamente
        const payload = { id: user.id };
        const options: SignOptions = { expiresIn: Number(jwtConfig.expiresIn) };
        // Llama a la función sign con los tipos correctos
        const token = sign(payload,  jwtConfig.secret!, options);

        return token;
    }

    async getUserById(id: number): Promise<UserDTO | undefined> {
        return this.authRepository.findById(id);
    }
}