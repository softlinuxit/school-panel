import { connectRouter } from 'connected-react-router';

import auth from './auth/authReducer';
import settings from './settings/settingsReducer';
import academicYear from './academicYear/academicYearReducers';
import affiliationBoard from './affiliationBoard/affiliationBoardReducers';
import bank from './bank/bankReducers';
import wing from './wing/wingReducers';
import schoolClasses from './schoolClasses/schoolClassesReducers';
import sections from './sections/sectionsReducers';
import houses from './houses/housesReducers';
import qualifications from './qualifications/qualificationsReducers';
import occupations from './occupations/occupationsReducers';
import languages from './languages/languagesReducers';
import religions from './religions/religionsReducers';
import periods from './periods/periodsReducers';
import studentDocuments from './studentDocuments/studentDocumentsReducers';
import salutations from './salutations/salutationsReducers';
import designation from './designation/designationReducers';
import departments from './departments/departmentsReducers';
import subjects from './subjects/subjectsReducers';
import userType from './userType/userTypeReducers';
import concessions from './concessions/concessionsReducers';
import attendanceStatus from './attendanceStatus/attendanceStatusReducers';
import staff from './staff/staffReducers';
import staffQualifications from './staffQualifications/staffQualificationsReducers';
import enquiries from './enquiries/enquiriesReducers';
import registrations from './registrations/registrationsReducers';
import admissions from './admissions/admissionsReducers';
import studentAttendance from './studentAttendance/studentAttendanceReducers';
import studentAttendanceDetails from './studentAttendanceDetails/studentAttendanceDetailsReducers';
import homeworks from './homeworks/homeworksReducers';
import syllabus from './syllabus/syllabusReducers';
import schoolNews from './schoolNews/schoolNewsReducers';
import circulars from './circulars/circularsReducers';
import gallery from './gallery/galleryReducers';
import dailyRemarks from './dailyRemarks/dailyRemarksReducers';
import timeTable from './timeTable/timeTableReducers';
import feeCycle from './feeCycle/feeCycleReducers';
import feePeriods from './feePeriods/feePeriodsReducers';
import feeComponent from './feeComponent/feeComponentReducers';
import feeStructure from './feeStructure/feeStructureReducers';
import studentConcessions from './studentConcessions/studentConcessionsReducers';
import feeReceipt from './feeReceipt/feeReceiptReducers';
import transportFee from './transportFee/transportFeeReducers';
import studentFeeWaiver from './studentFeeWaiver/studentFeeWaiverReducers';
import lateFeeFine from './lateFeeFine/lateFeeFineReducers';
import studentLateFeeWaiver from './studentLateFeeWaiver/studentLateFeeWaiverReducers';
import assessmentStructures from './assessmentStructures/assessmentStructuresReducers';
import terms from './terms/termsReducers';
import gradeStructures from './gradeStructures/gradeStructuresReducers';
import grades from './grades/gradesReducers';
import subjectMapping from './subjectMapping/subjectMappingReducers';
import examSchedules from './examSchedules/examSchedulesReducers';
import examinationMarks from './examinationMarks/examinationMarksReducers';
import studentAchievements from './studentAchievements/studentAchievementsReducers';
import calendar from './calendar/calendarReducers';
import studentPromotion from './studentPromotion/studentPromotionReducers';
import dashboard from './dashboard/dashboardReducers';
import teacherdashboard from './teacherdashboard/teacherDashboardReducers';
import admissionDashboard from './admissionDashboard/admissionDashboardReducers';
import enquiryFollowUp from './enquiryFollowUp/enquiryFollowUpReducers';
import vehicleTypes from './vehicleTypes/vehicleTypesReducers';
import busDocumentTypes from './busDocumentTypes/busDocumentTypesReducers';
import vehicles from './vehicles/vehiclesReducers';
import fuelLogs from './fuelLogs/fuelLogsReducers';
import busDrivers from './busDrivers/busDriversReducers';
import busRoutes from './busRoutes/busRoutesReducers';
import busStops from './busStops/busStopsReducers';
import busRouteStopLinks from './busRouteStopLinks/busRouteStopLinksReducers';
import studentBusRoutes from './studentBusRoutes/studentBusRoutesReducers';
import schools from './schools/schoolsReducers';
import manageAdmissions from './manageAdmissions/manageAdmissionsReducers';
import receiptNaming from './receiptNaming/receiptNamingReducers';
import admissionReceipts from './admissionReceipts/admissionReceiptsReducers';
import annualReceipts from './annualReceipts/annualReceiptsReducers';
import registrationReceipts from './registrationReceipts/registrationReceiptsReducers';
import chequeDetails from './chequeDetails/chequeDetailsReducers';
import transferCertificate from './transferCertificate/transferCertificateReducers';
import assignRollNo from './assignRollNo/assignRollNoReducers';
import assignHouse from './assignHouse/assignHouseReducers';

import appointments from './frontDesk/appointments/appointmentsReducers';
import callStats from './frontDesk/callStats/callStatsReducers';
import incomingRegister from './frontDesk/incomingRegister/incomingRegisterReducers';
import outgoingRegister from './frontDesk/outgoingRegister/outgoingRegisterReducers';
import staffOutPass from './frontDesk/staffOutPass/staffOutPassReducers';
import studentInOutPass from './frontDesk/studentInOutPass/studentInOutPassReducers';
import visitors from './frontDesk/visitors/visitorsReducers';
import frontDeskDocuments from './frontDeskDocuments/frontDeskDocumentsReducers';

import { combineReducers } from 'redux';

export default (history) =>
    combineReducers({
        router: connectRouter(history),
        settings,
        auth,
        academicYear,
        affiliationBoard,
        bank,
        wing,
        schoolClasses,
        sections,
        houses,
        qualifications,
        languages,
        religions,
        periods,
        studentDocuments,
        salutations,
        designation,
        departments,
        subjects,
        userType,
        concessions,
        attendanceStatus,
        occupations,
        assessmentStructures,
        terms,
        gradeStructures,
        grades,

        staff,
        staffQualifications,

        enquiries,
        registrations,
        admissions,

        studentAttendance,
        studentAttendanceDetails,

        homeworks,

        syllabus,

        schoolNews,

        circulars,

        calendar,

        gallery,

        dailyRemarks,

        timeTable,

        studentAchievements,

        feeCycle,
        feePeriods,
        feeComponent,
        feeStructure,
        studentConcessions,
        feeReceipt,
        transportFee,
        studentFeeWaiver,
        lateFeeFine,
        studentLateFeeWaiver,

        subjectMapping,
        examSchedules,
        examinationMarks,

        studentPromotion,

        dashboard,
        teacherdashboard,
        admissionDashboard,
        enquiryFollowUp,

        vehicleTypes,
        busDocumentTypes,
        vehicles,
        fuelLogs,
        busDrivers,
        busRoutes,
        busStops,
        busRouteStopLinks,
        studentBusRoutes,
        schools,

        manageAdmissions,
        receiptNaming,
        admissionReceipts,
        annualReceipts,
        registrationReceipts,
        chequeDetails,
        transferCertificate,
        assignRollNo,
        assignHouse,

        appointments,
        callStats,
        incomingRegister,
        outgoingRegister,
        staffOutPass,
        studentInOutPass,
        visitors,
        frontDeskDocuments,

    })