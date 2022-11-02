const express = require('express');
const cors = require('cors');
const app = express();
const authMiddleware = require('../auth/authMiddleWare');

const path = require('path');
const fs = require('fs');
// const helmet = require('helmet');
var admin = require("firebase-admin")
var serviceAccount = require("../../studety-323209-firebase-adminsdk-j3r5n-d3e5fc1e23.json")

// Enables CORS
app.use(cors({ origin: true }));

// Configures the authentication middleware
// to set the currentUser to the requests
app.use(authMiddleware);

// Enables Helmet, a set of tools to
// increase security.
// app.use(helmet.contentSecurityPolicy({
//     directives: {
//         defaultSrc: ["'self'"],
//         frameSrc: ["'self'", 'blob: data:'],
//         styleSrc: ["'self'", "'unsafe-inline'", 'cdn.ckeditor.com',
//             'fonts.googleapis.com', 'use.fontawesome.com'],
//         scriptSrc: ["'self'", "'unsafe-inline'", 'cdn.ckeditor.com', "'unsafe-eval'"],
//         fontSrc: ["'self'", 'fonts.googleapis.com', 'fonts.gstatic.com', 'use.fontawesome.com'],
//         imgSrc: ["'self'", 'data: https:', 'data: http:', 'blob: https:', 'blob: http:', 'blob: data:'],
//     },
// }));


// app.use(helmet.dnsPrefetchControl());
// app.use(helmet.expectCt());
// app.use(helmet.frameguard());
// app.use(helmet.hidePoweredBy());
// app.use(helmet.hsts());
// app.use(helmet.ieNoOpen());
// app.use(helmet.noSniff());
// app.use(helmet.permittedCrossDomainPolicies());
// app.use(helmet.referrerPolicy());
// app.use(helmet.xssFilter());

// Parses the body of POST/PUT request
// to JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure the Entity routes
const routes = express.Router();

if (admin.apps.length === 0) {

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });

}

//Web Routes
require('./web/file')(routes);
require('./web/auth')(routes);
require('./web/themeSettings')(routes);
require('./web/academicYear')(routes);
require('./web/affiliationBoard')(routes);
require('./web/bankNames')(routes);
require('./web/wing')(routes);
require('./web/schoolClasses')(routes);
require('./web/sections')(routes);
require('./web/houses')(routes);
require('./web/qualifications')(routes);
require('./web/languages')(routes);
require('./web/religions')(routes);
require('./web/periods')(routes);
require('./web/studentDocuments')(routes);
require('./web/salutations')(routes);
require('./web/subjects')(routes);
require('./web/departments')(routes);
require('./web/designation')(routes);
require('./web/occupations')(routes);
require('./web/userType')(routes);
require('./web/concessions')(routes);
require('./web/attendanceStatus')(routes);
require('./web/studentAttendance')(routes);
require('./web/receiptNaming')(routes);
require('./web/frontDeskDocuments')(routes);

require('./web/staff')(routes);
require('./web/staffQualifications')(routes);

require('./web/manageAdmissions')(routes);
require('./web/enquiries')(routes);
require('./web/registrations')(routes);
require('./web/admissions')(routes);

require('./web/studentAttendance')(routes);
require('./web/studentAttendanceDetails')(routes);

require('./web/homeworks')(routes);

require('./web/syllabus')(routes);

require('./web/schoolNews')(routes);

require('./web/circulars')(routes);

require('./web/calendar')(routes);

require('./web/studentAchievements')(routes);

require('./web/gallery')(routes);

require('./web/dailyRemarks')(routes);

require('./web/timeTable')(routes);

require('./web/feeCycle')(routes);
require('./web/feePeriods')(routes);
require('./web/feeComponent')(routes);
require('./web/feeStructure')(routes);
require('./web/studentConcessions')(routes);
require('./web/studentFeeWaiver')(routes);
require('./web/feeReceipt')(routes);
require('./web/lateFeeFine')(routes);
require('./web/studentLateFeeWaiver')(routes);
require('./web/admissionReceipts')(routes);
require('./web/annualReceipts')(routes);
require('./web/registrationReceipts')(routes);
require('./web/chequeDetails')(routes);
require('./web/transportFee')(routes);

require('./web/visitors')(routes);
require('./web/studentInOutPass')(routes);
require('./web/staffOutPass')(routes);
require('./web/incomingRegister')(routes);
require('./web/outgoingRegister')(routes);
require('./web/appointments')(routes);
require('./web/callStats')(routes);

require('./web/assessmentStructures')(routes);
require('./web/terms')(routes);
require('./web/gradeStructures')(routes);
require('./web/grades')(routes);
require('./web/subjectMapping')(routes);
require('./web/examSchedules')(routes);
require('./web/examinationMarks')(routes);
require('./web/studentPromotion')(routes);
require('./web/dashboard')(routes);
require('./web/teacherDashboard')(routes);
require('./web/admissionDashboard')(routes);
require('./web/enquiryFollowUp')(routes);

require('./web/vehicleTypes')(routes);
require('./web/busDocumentTypes')(routes);
require('./web/vehicles')(routes);
require('./web/fuelLogs')(routes);
require('./web/busDrivers')(routes);
require('./web/busRoutes')(routes);
require('./web/busStops')(routes);
require('./web/busRouteStopLinks')(routes);
require('./web/studentBusRoutes')(routes);
require('./web/schools')(routes);
require('./web/transferCertificate')(routes);
require('./web/assignRollNo')(routes);
require('./web/assignHouse')(routes);

require('./web/misReports')(routes);

// Student Routes
require('./mobile/studentapp/admissions')(routes);
require('./mobile/studentapp/home')(routes);
require('./mobile/studentapp/schoolNews')(routes);
require('./mobile/studentapp/circulars')(routes);
require('./mobile/studentapp/timeTable')(routes);
require('./mobile/studentapp/studentAchievements')(routes);
require('./mobile/studentapp/calendar')(routes);
require('./mobile/studentapp/communications')(routes);
require('./mobile/studentapp/staff')(routes);
require('./mobile/studentapp/gallery')(routes);
require('./mobile/studentapp/homework')(routes);
require('./mobile/studentapp/studentLeaves')(routes);
require('./mobile/studentapp/syllabus')(routes);
require('./mobile/studentapp/attendance')(routes);
require('./mobile/studentapp/transport')(routes);
require('./mobile/studentapp/profile')(routes);
require('./mobile/studentapp/fees')(routes);
require('./mobile/studentapp/schools')(routes);

//Teacher Routes
require('./mobile/teacherapp/staff')(routes);
require('./mobile/teacherapp/communications')(routes);
require('./mobile/teacherapp/admissions')(routes);
require('./mobile/teacherapp/studentLeaves')(routes);
require('./mobile/teacherapp/teacherLeaves')(routes);
require('./mobile/teacherapp/home')(routes);
require('./mobile/teacherapp/schoolNews')(routes);
require('./mobile/teacherapp/circulars')(routes);
require('./mobile/teacherapp/timeTable')(routes);
require('./mobile/teacherapp/gallery')(routes);
require('./mobile/teacherapp/homework')(routes);
require('./mobile/teacherapp/attendance')(routes);
require('./mobile/teacherapp/syllabus')(routes);
require('./mobile/teacherapp/dailyRemarks')(routes);
require('./mobile/teacherapp/fees')(routes);
require('./mobile/teacherapp/profile')(routes);
require('./mobile/teacherapp/transport')(routes);


// Add the routes to the /api endpoint
app.use('/api', routes);


// Exposes the build of the frontend
// to the root / of the server
const frontendDir = path.join(
    __dirname,
    '../../../frontend/build',
);

if (fs.existsSync(frontendDir)) {
    app.use('/', express.static(frontendDir));

    app.get('*', function (request, response) {
        response.sendFile(
            path.resolve(frontendDir, 'index.html'),
        );
    });
}

module.exports = app;