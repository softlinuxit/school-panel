const moment = require('moment');
const { dbQuery } = require('../database/dbQuery');
const ValidationError = require('../errors/validationError');
const ServerError = require('../errors/serverError');

module.exports = class AcademicYearService {
    constructor({ currentUser }) {
        this.currentUser = currentUser;
    }

    async list({ filter, orderBy, orderByField, offset, limit } = {
        filter: null,
        orderBy: null,
        orderByField: null,
        offset: 0,
        limit: 0
    }) {

        let school_id = 0
        if (this.currentUser) {
            school_id = this.currentUser.school_id
        }

        let whereCase = ''
        let paginationCase = ''
        let orderByCase = ''
        if (filter) {
            if (filter.name) {
                whereCase = `AND LOWER( name ) LIKE '%${filter.name.toLowerCase()}%' `
            }
        }

        if (limit > 0) {
            paginationCase = ` LIMIT ${limit} offset ${offset}`
        }
        if (orderByField && orderBy) {
            orderByCase = ` ORDER BY ${orderByField} ${orderBy}`
        }

        const query = `SELECT * FROM academicyear where school_id = ${school_id} ${whereCase} ${orderByCase}${paginationCase}`;
        const queryCount = `SELECT COUNT(*) FROM academicyear where school_id = ${school_id} ${whereCase} `;

        try {
            const { rows } = await dbQuery(query);
            const count = await dbQuery(queryCount);

            return { rows, count: parseInt(count.rows[0].count) };
        } catch (error) {
            throw new ServerError(
                'Server Error with code ' + error.code
            );
        }
    }

    async create(data) {
        const {
            name, from_date, to_date, status
        } = data;



        const created_on = moment().format('YYYY-MM-DD');
        let userID = 0
        let school_id = 0

        if (this.currentUser) {
            userID = this.currentUser.id
            school_id = this.currentUser.school_id
        }

        const createUserQuery = `INSERT INTO  academicyear(name, from_date, to_date, status, school_id,created_on,createdBy, updatedBy) VALUES($1, $2, $3, $4, $5,$6,$7,$8) returning *`;
        const values = [
            name, from_date, to_date, status, school_id, created_on, userID, userID
        ];


        try {
            const { rows } = await dbQuery(createUserQuery, values);
            const dbResponse = rows[0];

            const newquery = `UPDATE academicyear SET status = false WHERE id <> $1 AND school_id =$2 ;`

            const newvalues = [
                dbResponse.id, school_id
            ];

            await dbQuery(newquery, newvalues);

            return dbResponse;

        } catch (error) {

            if (error.code == 23505) {
                throw new ValidationError(
                    'Academic Name already exists!'
                );
            } else {
                throw new ServerError(
                    'Server Error with code ' + error.code
                );
            }
        }


    };

    async update(id, data) {

        let userID = 0
        let school_id = 0
        if (this.currentUser) {
            userID = this.currentUser.id
            school_id = this.currentUser.school_id
        }

        data.updatedBy = userID

        var query = await this.generateUpdateQuery(id, data, school_id);

        var colValues = Object.keys(data).map(function (key) {
            return data[key];
        });

        if (data.status) {
            try {
                const { rows } = await dbQuery(query, colValues);
                const dbResponse = rows[0];

                const newquery = `UPDATE academicyear SET status = false WHERE id <> $1 AND school_id =$2;`

                const newvalues = [
                    dbResponse.id, school_id
                ];

                await dbQuery(newquery, newvalues);

                return dbResponse;
            } catch (error) {
                if (error.code == 23505) {
                    throw new ValidationError(
                        'Academic Name already exists!'
                    );
                } else {
                    throw new ServerError(
                        'Server Error with code ' + error.code
                    );
                }
            }
        }
        const checkQuery = `SELECT * FROM academicyear where status=true AND id= $1 AND school_id=$2`;
        const values = [id, school_id];
        const checkStatus = await dbQuery(checkQuery, values);
        if (checkStatus.rows.length > 0) {
            throw new ValidationError(
                'Not Allowed'
            );
        } else {
            try {
                const { rows } = await dbQuery(query, colValues);
                const dbResponse = rows[0];
                return dbResponse;
            } catch (error) {
                if (error.code == 23505) {
                    throw new ValidationError(
                        'Academic Name already exists!'
                    );
                } else {
                    throw new ServerError(
                        'Server Error with code ' + error.code
                    );
                }
            }
        }

    };

    async findById(id) {

        let school_id = 0
        if (this.currentUser) {
            school_id = this.currentUser.school_id
        }

        const query = `SELECT * FROM academicyear WHERE id=$1 AND school_id=$2`;
        const values = [
            id, school_id
        ];

        try {
            const { rows } = await dbQuery(query, values);
            const dbResponse = rows[0];
            return dbResponse;
        } catch (error) {
            throw new ServerError(
                'Server Error with code ' + error.code
            );
        }
    }

    async generateUpdateQuery(id, cols, school_id) {
        // Setup static beginning of query
        var query = ['UPDATE academicyear'];
        query.push('SET');

        // Create another array storing each set command
        // and assigning a number value for parameterized query
        var set = [];
        Object.keys(cols).forEach(function (key, i) {
            set.push(key + ' = ($' + (i + 1) + ')');
        });

        query.push(set.join(', '));

        // Add the WHERE statement to look up by id
        query.push('WHERE id = ' + id + ' AND school_id = ' + school_id + ' returning *');

        // Return a complete query string
        return query.join(' ');
    }

    async autoCompletePromotion({ filter } = {
        filter: null
    }) {

        let school_id = 0
        if (this.currentUser) {
            school_id = this.currentUser.school_id
        }

        const query = `SELECT id as value, name as label FROM academicyear WHERE school_id=${school_id} and id > ${filter.id}  ORDER BY id DESC`;

        try {
            const { rows } = await dbQuery(query);
            return { rows };
        } catch (error) {
            throw new ServerError(
                'Server Error with code ' + error.code
            );
        }
    }

    async autoComplete({ filter } = {
        filter: null
    }) {
        let whereCase = ''
        let school_id = 0
        if (this.currentUser) {
            school_id = this.currentUser.school_id
        }

        if (filter) {
            if (filter.name) {
                whereCase = `AND LOWER( name ) LIKE '%${filter.name.toLowerCase()}%' `
            }
            if (filter.status) {
                whereCase = whereCase + `AND status = ${filter.status} `
            }
        }

        const query = `SELECT id as value, name as label FROM academicyear WHERE school_id=${school_id} ${whereCase} ORDER BY status DESC`;

        try {
            const { rows } = await dbQuery(query);
            return { rows };
        } catch (error) {
            throw new ServerError(
                'Server Error with code ' + error.code
            );
        }
    }


    async getMonthlyData() {

        let school_id = 0
        if (this.currentUser) {
            school_id = this.currentUser.school_id
        }
        const query = `SELECT from_date,to_date FROM academicyear WHERE school_id=${school_id} and status = TRUE`;


        try {
            const { rows } = await dbQuery(query);

            var dateStart = moment(rows[0].from_date);
            var dateEnd = moment(rows[0].to_date);
            var timeValues = [];

            while (dateEnd > dateStart || dateStart.format('M') === dateEnd.format('M')) {
                timeValues.push({
                    value: dateStart.format('YYYY-MM'),
                    label: dateStart.format('MMM-YYYY')
                });
                dateStart.add(1, 'month');
            }

            return { timeValues };
        } catch (error) {
            throw new ServerError(
                'Server Error with code ' + error.code
            );
        }
    }

}