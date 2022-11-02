const AuthService = require('../services/authService');

async function authMiddleware(req, res, next) {

    if (
        req.originalUrl === '/api/auth/createSchool' ||
        req.originalUrl === '/api/staff/createAdmin' ||
        req.originalUrl === '/api/auth/sign-in' ||
        req.originalUrl === '/api/teacherapp/staff/login' ||
        req.originalUrl === '/api/studentapp/admissions/login' ||
        req.originalUrl === '/api/studentapp/school/code' ||
        !req.originalUrl.startsWith("/api")
    ) {
        return next();
    }

    const isTokenEmpty =
        (!req.headers.authorization ||
            !req.headers.authorization.startsWith('Bearer ')) &&
        !(req.cookies && req.cookies.__session);

    if (isTokenEmpty) {
        return res.status(403).send('Unauthorized');
    }

    let idToken;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer ')
    ) {
        // Read the ID Token from the Authorization header.
        idToken = req.headers.authorization.split('Bearer ')[1];
    } else if (req.cookies) {
        // Read the ID Token from cookie.
        idToken = req.cookies.__session;
    } else {
        return next();
    }

    try {

        var host = req.get('host');
        if (host === 'localhost:8080' || host === '192.168.1.50:8080' || "5ed8-122-173-29-133.ngrok.io") {
            host = 'demo'
        }

        if (req.originalUrl.startsWith("/api/studentapp")) {

            const currentUser = await AuthService.findByStudentToken(idToken, 'demo');

            if (currentUser && !currentUser.status) {
                throw new Error(
                    `User '${currentUser.emailid}' is disabled`,
                );
            }


            if (currentUser && !currentUser.school_status) {

                throw new Error(
                    'Your School Plan has Expired!'
                );

            }



            req.currentUser = currentUser;
            return next();

        } else {

            const currentUser = await AuthService.findByToken(idToken, host);


            if (currentUser && !currentUser.status) {
                throw new Error(
                    `User '${currentUser.email}' is disabled`,
                );
            }

            if (currentUser && !currentUser.school_status) {

                throw new Error(
                    'Your School Plan has Expired!'
                );

            }

            req.currentUser = currentUser;
            return next();
        }
    } catch (error) {
        console.error('Error while verifying ID token:', error);
        res.status(403).send('Unauthorized');
    }
}


module.exports = authMiddleware;