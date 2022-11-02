module.exports = (app) => {

    app.get(`/studentapp/home`, require('./homepage'));

};