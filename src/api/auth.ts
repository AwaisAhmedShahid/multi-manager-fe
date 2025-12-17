import { axiosInstance } from '@/lib/axios';
import type { AuthResponse, LoginRequest, SignupRequest } from '@/types/auth';
import { mockAuthApi } from './mockAuth';

// Toggle this to switch between real API and mock API
const USE_MOCK_API = true;

export const authApi = {
    login: async (data: LoginRequest): Promise<AuthResponse> => {
        if (USE_MOCK_API) {
            return mockAuthApi.login(data);
        }
        const response = await axiosInstance.post<AuthResponse>('/auth/login', data);
        return response.data;
    },

    signup: async (data: SignupRequest): Promise<AuthResponse> => {
        if (USE_MOCK_API) {
            return mockAuthApi.signup(data);
        }
        const response = await axiosInstance.post<AuthResponse>('/auth/signup', data);
        return response.data;
    },

    getCurrentUser: async () => {
        if (USE_MOCK_API) {
            return mockAuthApi.getCurrentUser();
        }
        const response = await axiosInstance.get('/auth/me');
        return response.data;
    },
};
