function isValidEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
};


function validatePassword(password) {
    if (password.length <= 5 || password === '') {
        return false;
    } return true;
};


function isEmpty(input) {
    if (input === undefined || input === '') {
        return true;
    }
    if (input.replace(/\s/g, '').length) {
        return false;
    } return true;
};

function empty(input) {
    if (input === undefined || input === '') {
        return true;
    }
};


module.exports = {
    isValidEmail,
    validatePassword,
    isEmpty,
    empty,
};