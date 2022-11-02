const AcademicYearService = require('../../../services/academicYearService');

module.exports = async (req, res) => {
    try {

        const payload = await new AcademicYearService(req).autoComplete(req.query);
        res.status(200).send(payload);
    } catch (error) {

        if ([400, 403, 404].includes(error.code)) {
            return res.status(error.code).send(error.message);
        }
        return res.status(500).send(error.message);
    }
};
