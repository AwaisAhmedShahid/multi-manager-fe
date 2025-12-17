export type UserRole = 'user' | 'manager' | 'admin' | 'super_admin';

export interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface SignupRequest {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}
