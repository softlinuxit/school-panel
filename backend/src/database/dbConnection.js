const pool = require('./pool');

pool.on('connect', () => {
  console.log('connected to the db');
});

const createSchoolTable = () => {
  const schoolsCreateQuery = `CREATE TABLE IF NOT EXISTS schools
  (id SERIAL PRIMARY KEY, 
  email VARCHAR(200) UNIQUE NULL,
  subdomain_name VARCHAR(200) UNIQUE NULL,
  school_name VARCHAR(200), 
  website VARCHAR(200),
  phone VARCHAR(200),
  affilition_no VARCHAR(200), 
  address TEXT,
  school_code VARCHAR(200),
  tax_registration_no VARCHAR(200),
  state VARCHAR(200),
  city VARCHAR(200),
  pincode VARCHAR(200),
  school_logo VARCHAR(500),
  school_plan VARCHAR(200) NULL,
  about TEXT NULL,
  expiry_date DATE NULL,
  created_on DATE NULL,
  status BOOLEAN DEFAULT TRUE
  )`;

  pool.query(schoolsCreateQuery)

};

/**
 * Create User Table
 */
const createAdminTable = () => {
  const adminCreateQuery = `CREATE TABLE IF NOT EXISTS admin
  (id SERIAL PRIMARY KEY, 
  email VARCHAR(200) NULL, 
  username VARCHAR(200) NULL, 
  name VARCHAR(200), 
  phone VARCHAR(200), 
  address TEXT, 
  state VARCHAR(200), 
  city VARCHAR(200), 
  pincode VARCHAR(200), 
  photo VARCHAR(500), 
  sign_photo VARCHAR(500), 
  bloodgroup VARCHAR(200), 
  gender VARCHAR(200), 
  aadharcard VARCHAR(200), 
  pancard VARCHAR(200), 
  bankaccount VARCHAR(200), 
  ifsc VARCHAR(200), 
  password VARCHAR(200) NULL,
  usertype_id int4, 
  salutation_id int4, 
  religion_id int4, 
  subjects_id int4, 
  designation_id int4, 
  wing_id int4, 
  department_id int4, 
  section_id int4, 
  bankname_id int4, 
  dob DATE, 
  joiningdate DATE, 
  created_on DATE NULL,
  createdBy int4,
  updatedBy int4,
  status BOOLEAN DEFAULT TRUE,
  fcmtoken TEXT NULL,
  school_id int4 NOT NULL
  )`;

  pool.query(adminCreateQuery)

};


const createAllTables = () => {

  createSchoolTable();
  createAdminTable();

};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = createAllTables

require('make-runnable');