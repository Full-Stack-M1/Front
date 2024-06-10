import { Conversation } from "../conversation/conversation.model";
import { User } from "../user/user.model";

export interface Response {
    token?: string;
    conversations?: Conversation[];
    conversation?: Conversation;
    user?: User;
    success: boolean;
}