import { Message } from "../message/message.model";
import { userRef } from "../user/user.model";

export interface Conversation {
    id: number;
    name: string;
    messages: Message[];
    createdAt: string;
    createdBy: userRef;
    tag: ConversationTag;
    type: ConversationType[];
}

export type ConversationSearch = Partial<Pick<Conversation, 'name' | 'tag' | 'type'>>;

export type ConversationFun = Partial<Pick<Conversation, 'name' | 'messages' | 'createdAt' | 'createdBy'>>;

export enum ConversationTag {
    NEW = 'New',
    ACTIVE = 'Active',
    ARCHIVED = 'Archived'
}

export enum ConversationType {

    //Général
    BLOC = 'Bloc',
    DIFFICULTE = 'Difficulté',
    EXTERIEUR = 'Extérieur',
    INTERIEUR = 'Intérieur',

    //Intérieur
    CLIMBUP = 'Climb Up',
    ARKOSE = 'Arkose',
    ALTISSIMO = 'Altissimo',
    BLOCKOUT = 'Block Out',
    HAPIK = 'Hapik',
    VERTICALART = 'Vertical\'Art',
    CLIMBDISTRICT = 'Climb District',
    ANTREBLOC = 'Antrebloc',
    THEROOF = 'The Roof',
    BLOCBUSTER = 'Blocbuster',
    HARDBLOC = 'Hardbloc',
    ESPACEVERTICAL = 'Espace Vertical',
    MURMUR = 'Murmur',
    OBLOC = 'O\'Bloc',

    //Extérieur
    FONTAINEBLEAU = 'Fontainebleau',
    CEUSE = 'Céüse',
    BUOUX = 'Buoux',
    GORGEDUVERDON = 'Gorge du Verdon',
    SAINTLEGERDUVENTOUX = 'Saint Léger du Ventoux',
    LESDENTELLESDEMONTMIRAIL = 'Les Dentelles de Montmirail',
    ORPIERRE = 'Orpierre',
    AILEFROIDE = 'Ailefroide',
    LATURBIE = 'La Turbie',
    ANNOT = 'Annot',
    RUSSAN = 'Russan',
    CLARET = 'Claret',
    CHATEAUVERT = 'Chateauvert',
    OMBLEZE = 'Ombleze',
    GORGEDUTARN = 'Gorge du Tarn',
}