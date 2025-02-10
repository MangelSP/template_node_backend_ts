import { User } from '../models/auth/user.model';
import { UserDTO } from '../models/dto/user.model.dto';


export class UserMapper {
    static toDTO(user: User): UserDTO {
        const { password, ...userDTO } = user;
        return userDTO;
    }
}