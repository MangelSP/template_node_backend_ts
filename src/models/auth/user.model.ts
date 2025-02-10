import { Role } from "./role.model";

// src/models/user.model.ts
export interface User {
    id: number;
    email: string;
    password: string;
    roles: Role[];
}


