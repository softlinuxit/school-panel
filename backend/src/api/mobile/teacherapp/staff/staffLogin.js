const StaffService = require('../../../../mobileservices/staffService');

module.exports = async (req, res) => {
    try {
        var host = req.get('host');
        if (host === 'localhost:8080' || host === '192.168.1.50:8080' || "5ed8-122-173-29-133.ngrok.io") {
            host = 'demo'
        }

        const payload = await new StaffService(req).login(
            req.body.username,
            req.body.password,
            req.body.fcmtoken,
            'demo');
        res.status(200).send(payload);
    } catch (error) {

        if ([400, 403, 404].includes(error.code)) {
            return res.status(error.code).send({ message: error.message, data: null });
        }
        return res.status(500).send(error.message);
    }
};