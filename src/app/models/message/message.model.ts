import { User } from "../user/user.model";

export interface Message {
    id: number;
    content: string;
    date: string;
    user: User;
}