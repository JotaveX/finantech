import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService,
    ) {}

    @Get()
    async getAllUsers(): Promise<any>{
        return this.userService.getAllUsers();
    }

    @Get(':id')
    async getUserById(@Param('id')id: string): Promise<any>{
        return this.userService.getUserById(id);
    }

    @Post()
    async createUser(@Body() user: any): Promise<any>{
        return this.userService.createUser(user);
    }

    @Put(':id')
    async updateUser(@Param('id')id: string, @Body() user: any): Promise<any>{
        return this.userService.updateUser(id, user);
    }

    @Delete(':id')
    async deleteUser(@Param('id')id: string): Promise<any>{
        return this.userService.deleteUser(id);
    }
}
