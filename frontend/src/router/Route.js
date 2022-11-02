// Import all components here
import Dashboard from 'view/dashboard/Dashboard';

import Login from 'view/auth/Login';
import ForgotPassword from 'view/auth/ForgotPassword';
import NotFound from 'view/auth/404';
import InternalServer from 'view/auth/500';
import AuthServerError from 'view/auth/403';

import AcademicYear from 'view/configuration/academicYear/AcademicYear';
import AffiliationBoard from 'view/configuration/affiliationBoard/AffiliationBoard';
import Bank from 'view/configuration/bank/Bank';
import Wing from 'view/configuration/wing/Wing';
import Houses from 'view/configuration/houses/Houses';
import SchoolClasses from 'view/configuration/schoolClasses/SchoolClasses';
import Sections from 'view/configuration/sections/Sections';
import Qualifications from 'view/configuration/qualifications/Qualifications';
import Languages from 'view/configuration/languages/Languages';
import Religions from 'view/configuration/religions/Religions';
import Periods from 'view/configuration/periods/Periods';
import Salutations from 'view/configuration/salutations/Salutations';
import StudentDocuments from 'view/configuration/studentDocuments/StudentDocuments';
import Departments from 'view/configuration/departments/Departments';
import Designation from 'view/configuration/designation/Designation';
import Subjects from 'view/configuration/subjects/Subjects';
import UserType from 'view/configuration/userType/UserType';
import Occupations from 'view/configuration/occupations/Occupations';
import Concessions from 'view/configuration/concessions/Concessions';
import AttendanceStatus from 'view/configuration/attendanceStatus/AttendanceStatus';
import AssessmentStructures from 'view/configuration/assessmentStructures/AssessmentStructures';
import Terms from 'view/configuration/terms/Terms';
import GradeStructures from 'view/configuration/gradeStructures/GradeStructures';
import Grades from 'view/configuration/grades/Grades';
import AboutSchool from 'view/configuration/aboutschool/AboutSchool';
import ManageAdmissions from 'view/configuration/manageAdmissions/ManageAdmissions';
import ReceiptNaming from 'view/configuration/receiptNaming/ReceiptNaming';

import StaffDashboard from 'view/staff/staffDashboard/StaffDashboard';
import Staff from 'view/staff/staff/Staff';
import StaffQualifications from 'view/staff/staffQualifications/StaffQualifications';

import Enquiries from 'view/admissions/enquiries/Enquiries';
import Registrations from 'view/admissions/registrations/Registrations';
import Admissions from 'view/admissions/admissions/Admissions';

import StudentAttendance from 'view/studentAttendance/studentAttendance/StudentAttendance';

import Homeworks from 'view/homeworks/homeworks/Homeworks';

import Syllabus from 'view/syllabus/syllabus/Syllabus';

import SchoolNews from 'view/schoolNews/SchoolNews';

import Circulars from 'view/circulars/Circulars';

import Gallery from 'view/gallery/Gallery';

import DailyRemarks from 'view/dailyRemarks/DailyRemarks';

import TimeTable from 'view/timeTable/timeTable/TimeTable';

import StudentAchievements from 'view/studentInfo/studentAchievements/StudentAchievements';
import Calendar from 'view/calendar/Calendar';

import FeeDashboard from 'view/feeManagement/feedashboard/FeeDashboard';
import FeeCycle from 'view/feeManagement/feeCycle/FeeCycle';
import FeePeriods from 'view/feeManagement/feePeriods/FeePeriods';
import FeeComponent from 'view/feeManagement/feeComponent/FeeComponent';
import FeeStructure from 'view/feeManagement/feeStructure/FeeStructure';
import StudentConcessions from 'view/feeManagement/studentConcessions/StudentConcessions';
import FeeReceipt from 'view/feeManagement/feeReceipt/FeeReceipt';
import StudentFeeWaiver from 'view/feeManagement/studentFeeWaiver/StudentFeeWaiver';
import LateFeesFine from 'view/feeManagement/lateFeeFine/LateFeesFine';
import StudentLateFeeWaiver from 'view/feeManagement/studentLateFeeWaiver/StudentLateFeeWaiver';
import AdmissionFee from 'view/feeManagement/admissionFee/AdmissionFee';
import AnnualFee from 'view/feeManagement/annualFee/AnnualFee';
import RegistrationFee from 'view/feeManagement/registrationFee/RegistrationFee';
import ChequeDetails from 'view/feeManagement/chequeDetails/ChequeDetails';

import SubjectMapping from 'view/examination/subjectMapping/SubjectMapping';
import ExamSchedules from 'view/examination/examSchedules/ExamSchedules';
import EnterMarks from 'view/examination/enterMarks/EnterMarks';
import EnterRemarks from 'view/examination/enterRemarks/EnterRemarks';
import EnterGrades from 'view/examination/enterGrades/EnterGrades';
import ReportCard from 'view/examination/reportCard/ReportCard';

import StudentPromotion from 'view//studentInfo/studentPromotion/StudentPromotion';
import TeacherDashboard from 'view/teacherDashboard/TeacherDashboard';
import AdmissionDashboard from 'view/admissions/dashboard/Dashboard';
import Profile from 'view/profile/Profile';
import ChangePassword from 'view/changePassword/ChangePassword';

import VehicleTypes from 'view/transport/vehicleTypes/VehicleTypes';
import BusDocumentTypes from 'view/transport/busDocumentTypes/BusDocumentTypes';
import Vehicles from 'view/transport/vehicles/Vehicles';
import FuelLogs from 'view/transport/fuelLogs/FuelLogs';
import BusDrivers from 'view/transport/busDrivers/BusDrivers';
import BusRoutes from 'view/transport/busRoutes/BusRoutes';
import BusStops from 'view/transport/busStops/BusStops';
import BusRouteStopLinks from 'view/transport/busRouteStopLinks/BusRouteStopLinks';
import StudentBusRoutes from 'view/transport/studentBusRoutes/StudentBusRoutes';

import Students from 'view/studentInfo/students/Students';
import StudentInfoDashboard from 'view/studentInfo/studentInfoDashboard/StudentInfoDashboard';

import TransferCertificate from 'view/studentInfo/transferCertificate/TransferCertificate';
import TransportFee from 'view/feeManagement/transportFee/TransportFee';
import AssignRollNo from 'view/studentInfo/assignRollNo/AssignRollNo';
import AssignHouse from 'view/studentInfo/assignHouse/AssignHouse';

import Visitors from 'view/frontDesk/visitors/Visitors';
import StudentPass from 'view/frontDesk/studentPass/StudentPass';
import Appointments from 'view/frontDesk/appointments/Appointments';
import CallStats from 'view/frontDesk/callStats/CallStats';
import StaffOutPass from 'view/frontDesk/staffOutPass/StaffOutPass';
import IncomingRegister from 'view/frontDesk/incomingRegister/IncomingRegister';
import OutgoingRegister from 'view/frontDesk/outgoingRegister/OutgoingRegister';
import FrontDeskDocuments from 'view/configuration/frontDeskDocuments/FrontDeskDocuments';
import FrontDeskDashboard from 'view/frontDesk/frontDeskDashboard/FrontDeskDashboard';

import MISAdmissionDashboard from 'view/misReports/admissionDashboard/AdmissionDashboard';
import MISFeeDashboard from 'view/misReports/feeDashboard/FeeDashboard';
import MISAdmissionReport from 'view/misReports/admissionReport/AdmissionReport';
import MISAdmissionStatusReport from 'view/misReports/admissionStatusReport/AdmissionStatusReport';
import MISAdmissionAnalysis from 'view/misReports/admissionAnalysis/AdmissionAnalysis';
import MISFeeCollectionReport from 'view/misReports/feeCollectionReport/FeeCollectionReport';
import MISStaffAnalysis from 'view/misReports/staffAnalysisReport/StaffAnalysis';

export const PrivateRoutes = [
    {
        path: "/",
        name: 'dashboard',
        exact: true,
        pageTitle: "Dashboard",
        component: Dashboard
    },
    {
        path: "/teacherdashboard",
        name: 'teacherDashboard',
        exact: true,
        pageTitle: "TeacherDashboard",
        component: TeacherDashboard
    },
    {
        path: "/admissiondashboard",
        name: 'admissionDashboard',
        exact: true,
        pageTitle: "AdmissionDashboard",
        component: AdmissionDashboard
    },
    {
        path: "/changepassword",
        name: 'changePassword',
        exact: true,
        pageTitle: "ChangePassword",
        component: ChangePassword
    },
    {
        path: "/profile",
        name: 'profile',
        exact: true,
        pageTitle: "Profile",
        component: Profile
    },
    {
        path: "/academicyear",
        name: 'academicYear',
        exact: true,
        pageTitle: "AcademicYear",
        component: AcademicYear
    },
    {
        path: "/affiliationboard",
        name: 'affiliationBoard',
        exact: true,
        pageTitle: "AffiliationBoard",
        component: AffiliationBoard
    },
    {
        path: "/bank",
        name: 'bank',
        exact: true,
        pageTitle: "Bank",
        component: Bank
    },
    {
        path: "/wing",
        name: 'wing',
        exact: true,
        pageTitle: "Wing",
        component: Wing
    },
    {
        path: "/schoolclasses",
        name: 'schoolClasses',
        exact: true,
        pageTitle: "SchoolClasses",
        component: SchoolClasses
    },
    {
        path: "/sections",
        name: 'sections',
        exact: true,
        pageTitle: "Sections",
        component: Sections
    },
    {
        path: "/houses",
        name: 'houses',
        exact: true,
        pageTitle: "Houses",
        component: Houses
    },
    {
        path: "/qualifications",
        name: 'qualifications',
        exact: true,
        pageTitle: "Qualifications",
        component: Qualifications
    },
    {
        path: "/occupations",
        name: 'occupations',
        exact: true,
        pageTitle: "Occupations",
        component: Occupations
    },
    {
        path: "/languages",
        name: 'languages',
        exact: true,
        pageTitle: "Languages",
        component: Languages
    },
    {
        path: "/religions",
        name: 'religions',
        exact: true,
        pageTitle: "Religions",
        component: Religions
    },
    {
        path: "/periods",
        name: 'periods',
        exact: true,
        pageTitle: "Periods",
        component: Periods
    },
    {
        path: "/studentdocuments",
        name: 'studentDocuments',
        exact: true,
        pageTitle: "StudentDocuments",
        component: StudentDocuments
    },
    {
        path: "/salutations",
        name: 'salutations',
        exact: true,
        pageTitle: "Salutations",
        component: Salutations
    },
    {
        path: "/departments",
        name: 'departments',
        exact: true,
        pageTitle: "Departments",
        component: Departments
    },
    {
        path: "/designation",
        name: 'designation',
        exact: true,
        pageTitle: "Designation",
        component: Designation
    },
    {
        path: "/subjects",
        name: 'subjects',
        exact: true,
        pageTitle: "Subjects",
        component: Subjects
    },
    {
        path: "/usertype",
        name: 'userType',
        exact: true,
        pageTitle: "UserType",
        component: UserType
    },
    {
        path: "/manageadmissions",
        name: 'manageadmissions',
        exact: true,
        pageTitle: "ManageAdmissions",
        component: ManageAdmissions
    },
    {
        path: "/busstops",
        name: 'BusStops',
        exact: true,
        pageTitle: "BusStops",
        component: BusStops
    },
    {
        path: "/concessions",
        name: 'Concessions',
        exact: true,
        pageTitle: "Concessions",
        component: Concessions
    }, {
        path: "/attendancestatus",
        name: 'Attendance Status',
        exact: true,
        pageTitle: "Attendance Status",
        component: AttendanceStatus
    },
    {
        path: "/staffdashboard",
        name: 'staffDashboard',
        exact: true,
        pageTitle: "StaffDashboard",
        component: StaffDashboard
    },
    {
        path: "/staff",
        name: 'staff',
        exact: true,
        pageTitle: "Staff",
        component: Staff
    },
    {
        path: "/staffqualifications",
        name: 'Staff Qualifications',
        exact: true,
        pageTitle: "StaffQualifications",
        component: StaffQualifications
    },
    {
        path: "/enquiries",
        name: 'Enquiries',
        exact: true,
        pageTitle: "Enquiries",
        component: Enquiries
    },

    {
        path: "/registrations",
        name: 'Registrations',
        exact: true,
        pageTitle: "Registrations",
        component: Registrations
    },
    {
        path: "/admissions",
        name: 'Admissions',
        exact: true,
        pageTitle: "Admissions",
        component: Admissions
    },
    {
        path: "/studentattendance",
        name: 'Student Attendance',
        exact: true,
        pageTitle: "Student Attendance",
        component: StudentAttendance
    },
    {
        path: "/homeworks",
        name: 'Homeworks',
        exact: true,
        pageTitle: "Homeworks",
        component: Homeworks
    },
    {
        path: "/syllabus",
        name: 'Syllabus',
        exact: true,
        pageTitle: "Syllabus",
        component: Syllabus
    },
    {
        path: "/schoolnews",
        name: 'SchoolNews',
        exact: true,
        pageTitle: "SchoolNews",
        component: SchoolNews
    },
    {
        path: "/circulars",
        name: 'Circulars',
        exact: true,
        pageTitle: "Circulars",
        component: Circulars
    },
    {
        path: "/gallery",
        name: 'Gallery',
        exact: true,
        pageTitle: "Gallery",
        component: Gallery
    },
    {
        path: "/dailyremarks",
        name: 'Daily Remarks',
        exact: true,
        pageTitle: "Daily Remarks",
        component: DailyRemarks
    },
    {
        path: "/timetable",
        name: 'Time Table',
        exact: true,
        pageTitle: "Time Table",
        component: TimeTable
    },
    {
        path: "/feedashboard",
        name: 'Fee Dashboard',
        exact: true,
        pageTitle: "Fee Dashboard",
        component: FeeDashboard
    },
    {
        path: "/feecycle",
        name: 'Fee Cycle',
        exact: true,
        pageTitle: "Fee Cycle",
        component: FeeCycle
    },
    {
        path: "/feeperiods",
        name: 'Fee Periods',
        exact: true,
        pageTitle: "Fee Periods",
        component: FeePeriods
    },
    {
        path: "/feecomponent",
        name: 'Fee Components',
        exact: true,
        pageTitle: "Fee Component",
        component: FeeComponent
    },
    {
        path: "/feestructure",
        name: 'Fee Structure',
        exact: true,
        pageTitle: "Fee Structure",
        component: FeeStructure
    },
    {
        path: "/studentconcessions",
        name: 'Student Concessions',
        exact: true,
        pageTitle: "Student Concessions",
        component: StudentConcessions
    },
    {
        path: "/feereceipt",
        name: 'School Fee',
        exact: true,
        pageTitle: "School Fee",
        component: FeeReceipt
    },
    {
        path: "/studentfeewaiver",
        name: 'Student Fee Waiver',
        exact: true,
        pageTitle: "Student Fee Waiver",
        component: StudentFeeWaiver
    },
    {
        path: "/latefeesfine",
        name: 'LateFees Fine',
        exact: true,
        pageTitle: "LateFees Fine",
        component: LateFeesFine
    },
    {
        path: "/studentlatefeewaiver",
        name: 'StudentLateFeeWaiver',
        exact: true,
        pageTitle: "StudentLateFeeWaiver",
        component: StudentLateFeeWaiver
    },
    {
        path: "/assessmentstructures",
        name: 'AssessmentStructures',
        exact: true,
        pageTitle: "AssessmentStructures",
        component: AssessmentStructures
    },
    {
        path: "/terms",
        name: 'Terms',
        exact: true,
        pageTitle: "Terms",
        component: Terms
    },
    {
        path: "/gradestructures",
        name: 'GradeStructures',
        exact: true,
        pageTitle: "GradeStructures",
        component: GradeStructures
    },
    {
        path: "/grades",
        name: 'Grades',
        exact: true,
        pageTitle: "Grades",
        component: Grades
    },
    {
        path: "/studentachievements",
        name: 'StudentAchievements',
        exact: true,
        pageTitle: "StudentAchievements",
        component: StudentAchievements
    },
    {
        path: "/calendar",
        name: 'Calendar',
        exact: true,
        pageTitle: "Calendar",
        component: Calendar
    },
    {
        path: "/subjectmapping",
        name: 'SubjectMapping',
        exact: true,
        pageTitle: "SubjectMapping",
        component: SubjectMapping
    },
    {
        path: "/examschedules",
        name: 'ExamSchedules',
        exact: true,
        pageTitle: "ExamSchedules",
        component: ExamSchedules
    },
    {
        path: "/entermarks",
        name: 'EnterMarks',
        exact: true,
        pageTitle: "EnterMarks",
        component: EnterMarks
    },
    {
        path: "/enterremarks",
        name: 'EnterRemarks',
        exact: true,
        pageTitle: "EnterRemarks",
        component: EnterRemarks
    },
    {
        path: "/entergrades",
        name: 'EnterGrades',
        exact: true,
        pageTitle: "EnterGrades",
        component: EnterGrades
    },
    {
        path: "/studentpromotion",
        name: 'StudentPromotion',
        exact: true,
        pageTitle: "StudentPromotion",
        component: StudentPromotion
    },
    {
        path: "/vehicletypes",
        name: 'VehicleTypes',
        exact: true,
        pageTitle: "VehicleTypes",
        component: VehicleTypes
    },
    {
        path: "/busdocumenttypes",
        name: 'BusDocumentTypes',
        exact: true,
        pageTitle: "BusDocumentTypes",
        component: BusDocumentTypes
    },
    {
        path: "/vehicles",
        name: 'Vehicles',
        exact: true,
        pageTitle: "Vehicles",
        component: Vehicles
    },
    {
        path: "/fuellogs",
        name: 'FuelLogs',
        exact: true,
        pageTitle: "FuelLogs",
        component: FuelLogs
    },
    {
        path: "/busdrivers",
        name: 'BusDrivers',
        exact: true,
        pageTitle: "BusDrivers",
        component: BusDrivers
    },
    {
        path: "/busroutes",
        name: 'BusRoutes',
        exact: true,
        pageTitle: "BusRoutes",
        component: BusRoutes
    },
    {
        path: "/busroutestoplinks",
        name: 'BusRouteStopLinks',
        exact: true,
        pageTitle: "BusRouteStopLinks",
        component: BusRouteStopLinks
    },
    {
        path: "/studentbusroutes",
        name: 'StudentBusRoutes',
        exact: true,
        pageTitle: "StudentBusRoutes",
        component: StudentBusRoutes
    },
    {
        path: "/aboutschool",
        name: 'AboutSchool',
        exact: true,
        pageTitle: "AboutSchool",
        component: AboutSchool
    },
    {
        path: "/students",
        name: 'Students',
        exact: true,
        pageTitle: "Students",
        component: Students
    },
    {
        path: "/studentinfodashboard",
        name: 'StudentInfoDashboard',
        exact: true,
        pageTitle: "StudentInfoDashboard",
        component: StudentInfoDashboard
    },
    {
        path: "/receiptnaming",
        name: 'ReceiptNaming',
        exact: true,
        pageTitle: "ReceiptNaming",
        component: ReceiptNaming
    },
    {
        path: "/admissionfee",
        name: 'AdmissionFee',
        exact: true,
        pageTitle: "AdmissionFee",
        component: AdmissionFee
    },
    {
        path: "/annualfee",
        name: 'Annual Fee',
        exact: true,
        pageTitle: "Annual Fee",
        component: AnnualFee
    },
    {
        path: "/registrationfee",
        name: 'RegistrationFee',
        exact: true,
        pageTitle: "RegistrationFee",
        component: RegistrationFee
    },
    {
        path: "/chequedetails",
        name: 'ChequeDetails',
        exact: true,
        pageTitle: "ChequeDetails",
        component: ChequeDetails
    },
    {
        path: "/transfercertificate",
        name: 'Transfer Certificate',
        exact: true,
        pageTitle: "Transfer Certificate",
        component: TransferCertificate
    },
    {
        path: "/transportfee",
        name: 'TransportFee',
        exact: true,
        pageTitle: "TransportFee",
        component: TransportFee
    },
    {
        path: "/assignrollno",
        name: 'AssignRollNo',
        exact: true,
        pageTitle: "AssignRollNo",
        component: AssignRollNo
    },
    {
        path: "/assignhouse",
        name: 'AssignHouse',
        exact: true,
        pageTitle: "AssignHouse",
        component: AssignHouse
    },
    {
        path: "/visitors",
        name: 'Visitors',
        exact: true,
        pageTitle: "Visitors",
        component: Visitors
    },
    {
        path: "/studentpass",
        name: 'StudentPass',
        exact: true,
        pageTitle: "Student Pass",
        component: StudentPass
    },
    {
        path: "/appointments",
        name: 'Appointments',
        exact: true,
        pageTitle: "Appointments",
        component: Appointments
    },
    {
        path: "/callstats",
        name: 'CallStats',
        exact: true,
        pageTitle: "CallStats",
        component: CallStats
    },
    {
        path: "/staffoutpass",
        name: 'Staff Out Pass',
        exact: true,
        pageTitle: "Staff Out Pass",
        component: StaffOutPass
    },
    {
        path: "/incomingregister",
        name: 'IncomingRegister',
        exact: true,
        pageTitle: "IncomingRegister",
        component: IncomingRegister
    },
    {
        path: "/outgoingregister",
        name: 'OutgoingRegister',
        exact: true,
        pageTitle: "OutgoingRegister",
        component: OutgoingRegister
    },
    {
        path: "/frontdeskdocuments",
        name: 'FrontDeskDocuments',
        exact: true,
        pageTitle: "FrontDeskDocuments",
        component: FrontDeskDocuments
    },
    {
        path: "/frontdeskdashboard",
        name: 'FrontDeskDashboard',
        exact: true,
        pageTitle: "FrontDeskDashboard",
        component: FrontDeskDashboard
    },
    {
        path: "/misadmissiondashboard",
        name: 'MISAdmissionDashboard',
        exact: true,
        pageTitle: "MISAdmissionDashboard",
        component: MISAdmissionDashboard
    },
    {
        path: "/misfeedashboard",
        name: 'MISFeeDashboard',
        exact: true,
        pageTitle: "MISFeeDashboard",
        component: MISFeeDashboard
    },
    {
        path: "/misadmissionreport",
        name: 'MISAdmissionReport',
        exact: true,
        pageTitle: "MISAdmissionReport",
        component: MISAdmissionReport
    },
    {
        path: "/misadmissionstatusreport",
        name: 'MISAdmissionStatusReport',
        exact: true,
        pageTitle: "MISAdmissionStatusReport",
        component: MISAdmissionStatusReport
    },
    {
        path: "/misadmissionanalysis",
        name: 'MISAdmissionAnalysis',
        exact: true,
        pageTitle: "MISAdmissionAnalysis",
        component: MISAdmissionAnalysis
    },
    {
        path: "/misfeecollectionreport",
        name: 'MISFeeCollectionReport',
        exact: true,
        pageTitle: "MISFeeCollectionReport",
        component: MISFeeCollectionReport
    },
    {
        path: "/misstaffanalysis",
        name: 'MISStaffAnalysis',
        exact: true,
        pageTitle: "MISStaffAnalysis",
        component: MISStaffAnalysis
    },
    {
        path: "/reportcard",
        name: 'Report Card',
        exact: true,
        pageTitle: "Report Card",
        component: ReportCard
    },

];

export const PublicRoutes = [
    {
        path: "/login",
        name: 'login',
        exact: true,
        pageTitle: "Tables",
        component: Login
    },
    {
        path: "/forgotpassword",
        name: 'forgotpassword',
        exact: true,
        pageTitle: "Tables",
        component: ForgotPassword
    },
    {
        path: "/404",
        name: 'notfound',
        exact: true,
        pageTitle: "Tables",
        component: NotFound
    },
    {
        path: "/500",
        name: 'internalserver',
        exact: true,
        pageTitle: "Tables",
        component: InternalServer
    },
    {
        path: "/403",
        name: 'authServerError',
        exact: true,
        pageTitle: "AuthServerError",
        component: AuthServerError
    },
];
