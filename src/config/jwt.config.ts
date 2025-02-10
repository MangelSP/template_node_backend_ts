// src/config/jwt.config.ts
import 'dotenv/config';

export const jwtConfig = {
    secret: process.env.JWT_SECRET, // Debe ser un string
    expiresIn: process.env.JWT_EXPIRES_IN, // Debe ser un string
};