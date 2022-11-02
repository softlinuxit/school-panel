module.exports = {
  env: 'production',
  google: {
    projectId: 'lateral-origin',
    bucket: 'demo-panel-prod',
    keyFilename: './lateral-origin-351907-3f78b425e63d.json',
  },
  database: {

    connection: 'postgres://schools:91Hg2E1pN3fkcouu@34.142.235.250:5432/schools',
  },
  authJwtSecret: '$$demoschool',
  user_type_admin: 'Dashboard,Manage Staff,Admissions,Fees,Attendance,Examination,Syllabus,Homework,Time Table,Gallery,Calendar,School News,Circulars,Daily Remarks,Student Achievements,Student Promotion,Transport,Student Info,Front Desk,MIS Reports,Configuration',
  user_type_teacher: 'Teacher Dashboard,Attendance,Syllabus,Circulars,Homework,Time table,Gallery,School news,Daily Remarks,Student Achievements,Calendar,Examination',
};
