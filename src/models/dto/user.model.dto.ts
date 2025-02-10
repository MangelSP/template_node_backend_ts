import { Role } from "../auth/role.model";

export interface UserDTO {
    id: number;
    email: string;
    roles: Role[];
}