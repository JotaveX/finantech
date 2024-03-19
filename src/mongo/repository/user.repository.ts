import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../interfaces/user.interface";
import { Model } from "mongoose";

@Injectable()
export class UserRepository{

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ) {}

    async createUser(user: User): Promise<User>{
        const newUser = new this.userModel(user);
        return newUser.save();
    }

    async getAllUsers(): Promise<User[]>{
        return this.userModel.find().exec();
    }

    async getUserById(userId: string): Promise<User>{
        return this.userModel.findById(userId).exec();
    }

    async updateUser(userId: string, user: User): Promise<User>{
        return this.userModel.findByIdAndUpdate(userId, user, {new: true});
    }

    async deleteUser(userId: string): Promise<User>{
        return this.userModel.findByIdAndDelete(userId);
    }
}