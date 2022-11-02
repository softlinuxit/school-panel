import authAxios from 'modules/shared/axios/authAxios';
import { AuthToken } from './authToken';

export default class AuthService {
    static async sendEmailVerification() {
        const response = await authAxios.post(
            '/auth/send-email-address-verification-email',
        );

        return response.data;
    }

    static async sendPasswordResetEmail(email) {
        const response = await authAxios.post(
            '/auth/send-password-reset-email',
            {
                email,
            },
        );

        return response.data;
    }

    static async registerWithEmailAndPassword(
        email,
        password,
        url
    ) {
        const response = await authAxios.post('/auth/sign-up', {
            email,
            password,
            url
        });

        return response.data;
    }

    static async signinWithEmailAndPassword(username, password) {
        const response = await authAxios.post('/auth/sign-in', {
            username,
            password
        });

        return response.data;
    }

    static async fetchMe() {
        const response = await authAxios.get('/auth/me');
        return response.data;
    }

    static async themeSetting() {
        const response = await authAxios.get('/themeSettings');
        return response.data;
    }

    static async isEmailConfigured() {
        const response = await authAxios.get(
            '/auth/email-configured',
        );
        return response.data;
    }

    static signout() {
        AuthToken.remove();
    }

    static async updateProfile(
        firstName,
        lastName,
        phoneNumber,
        avatars,
    ) {
        const body = {
            profile: {
                firstName,
                lastName,
                phoneNumber,
                avatars,
            },
        };

        const response = await authAxios.put(
            '/auth/profile',
            body,
        );

        return response.data;
    }

    static async passwordReset(token, password) {
        const response = await authAxios.put(
            '/auth/password-reset',
            {
                token,
                password,
            },
        );

        return response.data;
    }

    static async verifyEmail(token) {
        const response = await authAxios.put(
            '/auth/verify-email',
            {
                token,
            },
        );

        return response.data;
    }
}
