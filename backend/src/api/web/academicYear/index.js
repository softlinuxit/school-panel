module.exports = (app) => {
    app.post(`/academicyear`, require('./academicYearCreate'));
    app.put(`/academicyear/:id`, require('./academicYearUpdate'));
    app.get(`/academicyear`, require('./academicYearList'));
    app.get(`/academicyear/autocomplete`, require('./academicYearAutoComplete'));
    app.get(`/academicyear/autocompletePromotion`, require('./academicYearAutoCompletePromotion'));
    app.get(`/academicyear/months`, require('./academicYearGetMonths'));
    app.get(`/academicyear/:id`, require('./academicYearFind'));
};
