module.exports = (app) => {

    app.post(`/teacherapp/staff/login`, require('./staffLogin'));
    app.post(`/teacherapp/staff/updateToken`, require('./staffupdateFCMToken'));
    app.post(`/teacherapp/staff/changepassword`, require('./staffChangePassword'));

};