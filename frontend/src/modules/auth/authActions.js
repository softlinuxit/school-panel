import selectors from 'modules/auth/authSelector';
import service from './authService';
import Errors from 'modules/shared/error/errors';
import Message from 'view/shared/message';
import { getHistory } from 'modules/store';
import { AuthToken } from 'modules/auth/authToken';

const prefix = 'AUTH';

const actions = {
    ERROR_MESSAGE_CLEARED: `${prefix}_ERROR_MESSAGE_CLEARED`,

    AUTH_INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
    AUTH_INIT_ERROR: `${prefix}_INIT_ERROR`,

    AUTH_START: `${prefix}_START`,
    AUTH_SUCCESS: `${prefix}_SUCCESS`,
    AUTH_ERROR: `${prefix}_ERROR`,

    UPDATE_PROFILE_START: `${prefix}_UPDATE_PROFILE_START`,
    UPDATE_PROFILE_SUCCESS: `${prefix}_UPDATE_PROFILE_SUCCESS`,
    UPDATE_PROFILE_ERROR: `${prefix}_UPDATE_PROFILE_ERROR`,

    CURRENT_USER_REFRESH_START: `${prefix}_CURRENT_USER_REFRESH_START`,
    CURRENT_USER_REFRESH_SUCCESS: `${prefix}_CURRENT_USER_REFRESH_SUCCESS`,
    CURRENT_USER_REFRESH_ERROR: `${prefix}_CURRENT_USER_REFRESH_ERROR`,

    PASSWORD_RESET_EMAIL_START: `${prefix}_PASSWORD_RESET_EMAIL_START`,
    PASSWORD_RESET_EMAIL_SUCCESS: `${prefix}_PASSWORD_RESET_EMAIL_SUCCESS`,
    PASSWORD_RESET_EMAIL_ERROR: `${prefix}_PASSWORD_RESET_EMAIL_ERROR`,

    PASSWORD_RESET_START: `${prefix}_PASSWORD_RESET_START`,
    PASSWORD_RESET_SUCCESS: `${prefix}_PASSWORD_RESET_SUCCESS`,
    PASSWORD_RESET_ERROR: `${prefix}_PASSWORD_RESET_ERROR`,

    EMAIL_VERIFY_START: `${prefix}_EMAIL_VERIFY_START`,
    EMAIL_VERIFY_SUCCESS: `${prefix}_EMAIL_VERIFY_SUCCESS`,
    EMAIL_VERIFY_ERROR: `${prefix}_EMAIL_VERIFY_ERROR`,

    EMAIL_CONFIRMATION_START: `${prefix}_EMAIL_CONFIRMATION_START`,
    EMAIL_CONFIRMATION_SUCCESS: `${prefix}_EMAIL_CONFIRMATION_SUCCESS`,
    EMAIL_CONFIRMATION_ERROR: `${prefix}_EMAIL_CONFIRMATION_ERROR`,

    doClearErrorMessage() {
        return {
            type: actions.ERROR_MESSAGE_CLEARED,
        };
    },

    doClearUser() {
        return {
            type: actions.AUTH_ERROR,
        };
    },

    doSendEmailConfirmation: () => async (
        dispatch,
        getState,
    ) => {
        try {
            dispatch({ type: actions.EMAIL_CONFIRMATION_START });
            await service.sendEmailVerification(
                // @ts-ignore
                selectors.selectAuthenticationUser(getState()),
            );
            Message.success('Verification email sent successfullys');
            dispatch({
                type: actions.EMAIL_CONFIRMATION_SUCCESS,
            });
        } catch (error) {
            Errors.handle(error, dispatch);
            dispatch({ type: actions.EMAIL_CONFIRMATION_ERROR });
        }
    },

    doSendPasswordResetEmail: (email) => async (dispatch) => {
        try {
            dispatch({
                type: actions.PASSWORD_RESET_EMAIL_START,
            });
            await service.sendPasswordResetEmail(email);
            Message.success('Password reset email sent successfully');
            dispatch({
                type: actions.PASSWORD_RESET_EMAIL_SUCCESS,
            });
        } catch (error) {
            Errors.handle(error, dispatch);
            dispatch({
                type: actions.PASSWORD_RESET_EMAIL_ERROR,
            });
        }
    },

    doRegisterEmailAndPassword: (email, password) => async (
        dispatch,
    ) => {
        try {
            dispatch({ type: actions.AUTH_START });

            const token = await service.registerWithEmailAndPassword(
                email,
                password,
            );

            AuthToken.set(token, true);

            const currentUser = await service.fetchMe();

            dispatch({
                type: actions.AUTH_SUCCESS,
                payload: {
                    currentUser,
                },
            });
        } catch (error) {
            await service.signout();

            if (Errors.errorCode(error) !== 400) {
                Errors.handle(error, dispatch);
            }

            dispatch({
                type: actions.AUTH_ERROR,
                payload: Errors.selectMessage(error),
            });
        }
    },

    doSigninWithEmailAndPassword: (
        username,
        password,
        rememberMe,
    ) => async (dispatch) => {
        try {
            dispatch({ type: actions.AUTH_START });

            let currentUser = null;
            let themeSettings = null;

            const token = await service.signinWithEmailAndPassword(
                username,
                password
            );
            AuthToken.set(token, rememberMe);
            currentUser = await service.fetchMe();
            themeSettings = await service.themeSetting();

            if (themeSettings) {
                dispatch({
                    type: "THEME_COLOR_CHANGE",
                    payload: themeSettings.themecolor,
                });
                dispatch({
                    type: "CHANGE_DARK_MODE",
                    payload: themeSettings.isdarkmode,
                });
                dispatch({
                    type: "CHANGE_DARK_HEADER",
                    payload: themeSettings.isdarkheader,
                });
                dispatch({
                    type: "DARK_MIN_SIDEBAR",
                    payload: themeSettings.isminsidebar,
                });
                dispatch({
                    type: "DARK_SIDEBAR",
                    payload: themeSettings.isdarksidebar,
                });
                dispatch({
                    type: "CHANGE_GRADIENT_COLOR",
                    payload: themeSettings.isgradientcolor,
                });
                dispatch({
                    type: "IS_RTL",
                    payload: themeSettings.isrtl,
                });
                dispatch({
                    type: "CHANGE_FONT",
                    payload: themeSettings.isfont,
                });
                dispatch({
                    type: "TOGGLE_LEFT_SIDEBAR",
                    payload: themeSettings.menu_bar,
                });
            }

            dispatch({
                type: actions.AUTH_SUCCESS,
                payload: {
                    currentUser,
                },
            });
        } catch (error) {

            await service.signout();

            if (Errors.errorCode(error) !== 400) {
                Errors.handle(error, dispatch);
            }

            dispatch({
                type: actions.AUTH_ERROR,
                payload: Errors.selectMessage(error),
            });
        }
    },

    doSignout: () => async (dispatch) => {

        try {
            dispatch({ type: actions.AUTH_START });
            await service.signout();

            dispatch({
                type: actions.AUTH_SUCCESS,
                payload: {
                    currentUser: null,
                },
            });
        } catch (error) {
            Errors.handle(error, dispatch);

            dispatch({
                type: actions.AUTH_ERROR,
            });
        }
    },

    doInit: () => async (dispatch) => {
        try {
            const token = await AuthToken.get();

            let currentUser = null;
            let themeSettings = null;

            if (token) {
                currentUser = await service.fetchMe();
                themeSettings = await service.themeSetting();
            }
            if (themeSettings) {
                dispatch({
                    type: "THEME_COLOR_CHANGE",
                    payload: themeSettings.themecolor,
                });
                dispatch({
                    type: "CHANGE_DARK_MODE",
                    payload: themeSettings.isdarkmode,
                });
                dispatch({
                    type: "CHANGE_DARK_HEADER",
                    payload: themeSettings.isdarkheader,
                });
                dispatch({
                    type: "DARK_MIN_SIDEBAR",
                    payload: themeSettings.isminsidebar,
                });
                dispatch({
                    type: "DARK_SIDEBAR",
                    payload: themeSettings.isdarksidebar,
                });
                dispatch({
                    type: "CHANGE_GRADIENT_COLOR",
                    payload: themeSettings.isgradientcolor,
                });
                dispatch({
                    type: "IS_RTL",
                    payload: themeSettings.isrtl,
                });
                dispatch({
                    type: "CHANGE_FONT",
                    payload: themeSettings.isfont,
                });
                dispatch({
                    type: "TOGGLE_LEFT_SIDEBAR",
                    payload: themeSettings.menu_bar,
                });
            }

            dispatch({
                type: actions.AUTH_INIT_SUCCESS,
                payload: {
                    currentUser,
                },
            });
        } catch (error) {
            service.signout();
            Errors.handle(error, dispatch);

            dispatch({
                type: actions.AUTH_INIT_ERROR,
                payload: error,
            });

        }
    },

    doRefreshCurrentUser: () => async (
        dispatch,
        getState,
    ) => {
        try {
            dispatch({
                type: actions.CURRENT_USER_REFRESH_START,
            });

            let currentUser = null;
            const token = await AuthToken.get();

            if (token) {
                currentUser = await service.fetchMe();
            }

            dispatch({
                type: actions.CURRENT_USER_REFRESH_SUCCESS,
                payload: {
                    currentUser,
                },
            });
        } catch (error) {
            service.signout();
            Errors.handle(error, dispatch);

            dispatch({
                type: actions.CURRENT_USER_REFRESH_ERROR,
                payload: error,
            });
        }
    },

    doUpdateProfile: (
        firstName,
        lastName,
        phoneNumber,
        avatars,
    ) => async (dispatch) => {
        try {
            dispatch({
                type: actions.UPDATE_PROFILE_START,
            });

            await service.updateProfile(
                firstName,
                lastName,
                phoneNumber,
                avatars,
            );

            dispatch({
                type: actions.UPDATE_PROFILE_SUCCESS,
            });
            dispatch(actions.doRefreshCurrentUser());
            Message.success('Profile updated successfully');
            getHistory().push('/');
        } catch (error) {
            Errors.handle(error, dispatch);

            dispatch({
                type: actions.UPDATE_PROFILE_ERROR,
            });
        }
    },

    doVerifyEmail: (token) => async (dispatch) => {
        try {
            dispatch({
                type: actions.EMAIL_VERIFY_START,
            });

            await service.verifyEmail(token);

            dispatch(actions.doRefreshCurrentUser());
            Message.success('Email successfully verified');
            dispatch({
                type: actions.EMAIL_VERIFY_SUCCESS,
            });
            getHistory().push('/');
        } catch (error) {
            Errors.handle(error, dispatch);

            dispatch({
                type: actions.EMAIL_VERIFY_ERROR,
            });
            dispatch(actions.doSignout());
            getHistory().push('/');
        }
    },

    doResetPassword: (token, password) => async (
        dispatch,
    ) => {
        try {
            dispatch({
                type: actions.PASSWORD_RESET_START,
            });

            await service.passwordReset(token, password);

            Message.success('Password changed successfully');
            dispatch({
                type: actions.PASSWORD_RESET_SUCCESS,
            });
            getHistory().push('/');
        } catch (error) {
            Errors.handle(error, dispatch);

            dispatch({
                type: actions.PASSWORD_RESET_ERROR,
            });

            dispatch(actions.doSignout());
            getHistory().push('/');
        }
    },
};

export default actions;
