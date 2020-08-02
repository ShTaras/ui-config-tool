export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: null;
    role: {
        id: number;
        name: string;
        description: string;
        type: string
    };
    phone: number;
    created_at: string;
    updated_at: string;
}
