import { Conversation } from "../conversation/conversation.model";

export interface Response {
    token?: string;
    conversations?: Conversation[];
    conversation?: Conversation;
    success: boolean;
}