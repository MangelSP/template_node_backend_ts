// src/interfaces/express.d.ts
import { User } from '../models/auth/user.model';

declare global {
    namespace Express {
        interface Request {
            user?: User; // Aquí defines la propiedad `user`
        }
    }
}