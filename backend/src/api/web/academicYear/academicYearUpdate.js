const AcademicYearService = require('../../../services/academicYearService');

module.exports = async (req, res) => {


    try {
        const payload = await new AcademicYearService(req).update(
            req.body.id,
            req.body.data,
        );

        res.status(200).send(payload);
    } catch (error) {

        if ([400, 403, 404].includes(error.code)) {
            return res.status(error.code).send(error.message);
        }

        console.error(error);
        return res.status(500).send(error.message);
    }
};
