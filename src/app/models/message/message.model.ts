import { User } from "../user/user.model";

export interface Message {
    id: number;
    content: string;
    date: string;
    user: User;
}

const message: Message = {
    id: 1,
    content: 'Hello',
    date: '2021-03-09',
    user: {
        _id: 1,
        username: 'user1',
        email: '',
        password: '',
    }
};

export const messages: Message[] = [
    {
        id: 1,
        content: 'Hello',
        date: '2021-03-09',
        user: {
            _id: 1,
            username: 'user1',
            email: '',
            password: '',
        }
    },
    {
        id: 2,
        content: 'Hi',
        date: '2021-03-09',
        user: {
            _id: 2,
            username: 'user2',
            email: '',
            password: '',
        }
    },
    {
        id: 3,
        content: 'Hey',
        date: '2021-03-09',
        user: {
            _id: 3,
            username: 'user3',
            email: '',
            password: '',
        }
    },
    {
        id: 4,
        content: 'Bonjour',
        date: '2021-03-09',
        user: {
            _id: 4,
            username: 'user4',
            email: '',
            password: '',
        }
    },
    {
        id: 5,
        content: 'Salut',
        date: '2021-03-09',
        user: {
            _id: 5,
            username: 'user5',
            email: '',
            password: '',
        }
    },
    {
        id: 6,
        content: 'Yo',
        date: '2021-03-09',
        user: {
            _id: 6,
            username: 'user6',
            email: '',
            password: '',
        }
    },
    {
        id: 7,
        content: 'Hola',
        date: '2021-03-09',
        user: {
            _id: 7,
            username: 'user7',
            email: '',
            password: '',
        }
    },
    {
        id: 8,
        content: 'Ciao',
        date: '2021-03-09',
        user: {
            _id: 8,
            username: 'user8',
            email: '',
            password: '',
        }
    },
    {
        id: 9,
        content: 'Hallo',
        date: '2021-03-09',
        user: {
            _id: 9,
            username: 'user9',
            email: '',
            password: '',
        }
    },
    {
        id: 10,
        content: 'Hej',
        date: '2021-03-09',
        user: {
            _id: 10,
            username: 'user10',
            email: '',
            password: '',
        }
    },
    {
        id: 11,
        content: 'Hei',
        date: '2021-03-09',
        user: {
            _id: 11,
            username: 'user11',
            email: '',
            password: '',
        }
    },
];