import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/mongo/repository/user.repository';

@Injectable()
export class UserService {

    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    async createUser(user: any): Promise<any>{
        console.log('user', user);
        return this.userRepository.createUser(user);
    }

    async getAllUsers(): Promise<any>{
        return this.userRepository.getAllUsers();
    }

    async getUserById(user: any): Promise<any>{
        return this.userRepository.getUserById(user);
    }

    async updateUser(id: string, user: any): Promise<any>{
        return this.userRepository.updateUser(id, user);
    }

    async deleteUser(user: any): Promise<any>{
        return this.userRepository.deleteUser(user);
    }
}
