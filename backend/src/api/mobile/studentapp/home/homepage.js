const HomeService = require('../../../../mobileservices/homeService');

module.exports = async (req, res) => {
    try {
        // var host = req.get('host');
        const payload = await new HomeService(req).studentHome();
        res.status(200).send(payload);
    } catch (error) {

        if ([400, 403, 404].includes(error.code)) {
            return res.status(error.code).send({ message: error.message, data: null });
        }
        return res.status(500).send(error.message);
    }
};