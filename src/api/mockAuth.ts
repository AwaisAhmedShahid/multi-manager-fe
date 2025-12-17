import type { LoginRequest, SignupRequest, AuthResponse, User } from '@/types/auth';

// Mock user database (in-memory)
const mockUsers: User[] = [];
let userIdCounter = 1;

// Helper to generate mock JWT token
const generateMockToken = (userId: string) => {
    return `mock_jwt_token_${userId}_${Date.now()}`;
};

// Mock API delay to simulate network request
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockAuthApi = {
    login: async (data: LoginRequest): Promise<AuthResponse> => {
        await delay(800); // Simulate network delay

        const user = mockUsers.find(u => u.email === data.email);

        if (!user) {
            throw new Error('Invalid credentials');
        }

        // In a real app, you'd verify the password hash
        // For mock purposes, we'll just accept any password

        const token = generateMockToken(user.id);

        return {
            token,
            user,
        };
    },

    signup: async (data: SignupRequest): Promise<AuthResponse> => {
        await delay(1000); // Simulate network delay

        // Check if user already exists
        const existingUser = mockUsers.find(u => u.email === data.email);
        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        // Create new user
        const newUser: User = {
            id: `user_${userIdCounter++}`,
            email: data.email,
            name: data.name,
            role: data.role,
        };

        mockUsers.push(newUser);

        const token = generateMockToken(newUser.id);

        return {
            token,
            user: newUser,
        };
    },

    getCurrentUser: async (): Promise<User> => {
        await delay(500);

        // In a real app, you'd decode the JWT token
        // For mock purposes, we'll return the first user or throw an error
        if (mockUsers.length === 0) {
            throw new Error('No authenticated user');
        }

        return mockUsers[0];
    },
};
