// src/repositories/auth.repository.ts
import { User } from '../../models/auth/user.model';
import { users } from '../../data/users';
import { UserMapper } from '../../mappers/user.mapper';
import { UserDTO } from '../../models/dto/user.model.dto';



export class AuthRepository {
    private users: User[] = users;

    async findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find(user => user.email === email);
        return user ? user : undefined;
    }


    async findById(id: number): Promise<UserDTO | undefined> {
        const user = this.users.find(user => user.id === id);
        return user ? UserMapper.toDTO(user) : undefined;
    }
}