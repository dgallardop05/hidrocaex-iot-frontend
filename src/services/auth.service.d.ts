import type { LoginRequest, LoginResponse } from '@/types/auth.types';
export declare const login: (credentials: LoginRequest) => Promise<LoginResponse>;
