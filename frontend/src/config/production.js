const backendUrl = `/api`;
const imageBaseUrl = `api/download?link=`;


const permissionData = [
  {
    value: "Dashboard",
    label: "Dashboard",
  },
  {
    value: "Configuration",
    label: "Configuration",
  },
  {
    value: "Manage Staff",
    label: "Manage Staff",
  },
  {
    value: "Admissions",
    label: "Admissions",
  },
  {
    value: "Attendance",
    label: "Attendance",
  },
  {
    value: "Syllabus",
    label: "Syllabus",
  },
  {
    value: "Circulars",
    label: "Circulars",
  },
  {
    value: "Homework",
    label: "Homework",
  },
  {
    value: "Time Table",
    label: "Time Table",
  },
  {
    value: "Gallery",
    label: "Gallery",
  },
  {
    value: "School News",
    label: "School News",
  },
  {
    value: "Fees",
    label: "Fees",
  },
  {
    value: "Daily Remarks",
    label: "Daily Remarks",
  },
  {
    value: "Student Achievements",
    label: "Student Achievements",
  },
  {
    value: "Calendar",
    label: "Calendar",
  },
  {
    value: "Examination",
    label: "Examination",
  },
  {
    value: "Student Promotion",
    label: "Student Promotion",
  },
  {
    value: "Teacher Dashboard",
    label: "Teacher Dashboard",
  },
  {
    value: "Transport",
    label: "Transport",
  },
  {
    value: "Front Desk",
    label: "Front Desk",
  },
  {
    value: "Student Info",
    label: "Student Info",
  },
  {
    value: "MIS Reports",
    label: "MIS Reports",
  },

];

const accessCheck = [
  {
    value: ["/"],
    label: "Dashboard",
  },
  {
    value: ["/academicyear", "/affiliationboard", "/wing", "/assessmentstructures", "/terms", "/gradestructures", "/grades",
      "/schoolclasses", "/sections", "/subjects", "/qualifications", "/languages", "/religions", "/periods", "/studentdocuments",
      "/salutations", "/bank", "/houses", "/departments", "/designation", "/usertype", "/occupations", "/subjectmapping",
      "/examschedules", "/aboutschool", "/manageadmissions", "/receiptnaming", "/frontdeskdocuments"],
    label: "Configuration",
  },
  {
    value: ["/staffdashboard", "/staff", "/staffqualifications"],
    label: "Manage Staff",
  },
  {
    value: ["/admissiondashboard", "/enquiries", "/registrations", "/admissions"],
    label: "Admissions",
  },
  {
    value: ["/studentattendance"],
    label: "Attendance",
  },
  {
    value: ["/syllabus"],
    label: "Syllabus",
  },
  {
    value: ["/circulars"],
    label: "Circulars",
  },
  {
    value: ["/homeworks"],
    label: "Homework",
  },
  {
    value: ["/timetable"],
    label: "Time Table",
  },
  {
    value: ["/gallery"],
    label: "Gallery",
  },
  {
    value: ["/schoolnews"],
    label: "School News",
  },
  {
    value: ["/feedashboard", "/feecycle", "/feeperiods", "/feecomponent", "/feestructure", "/studentconcessions", "/feereceipt", "/concessions", "/studentfeewaiver", "/latefeesfine", "/studentlatefeewaiver", "/admissionfee", "/registrationfee", "/chequedetails", "/transportfee", "/annualfee"],
    label: "Fees",
  },
  {
    value: ["/dailyremarks"],
    label: "Daily Remarks",
  },
  {
    value: ["/calendar"],
    label: "Calendar",
  },
  {
    value: ["/entermarks", "/enterremarks", "/entergrades", "/reportcard"],
    label: "Examination",
  },
  {
    value: ["/teacherdashboard"],
    label: "Teacher Dashboard",
  },
  {
    value: ["/students", "/studentpromotion", "/studentachievements", "/studentinfodashboard", "/transfercertificate", "/assignrollno", "/assignhouse"],
    label: "Student Info",
  },
  {
    value: ["/vehicletypes", "/busdocumenttypes", "/vehicles", "/fuellogs", "/busdrivers", "/busroutes", "/busstops", "/busroutestoplinks", "/studentbusroutes"],
    label: "Transport",
  },
  {
    value: ["/frontdeskdashboard", "/visitors", "/studentpass", "/appointments", "/callstats", "/staffoutpass", "/incomingregister", "/outgoingregister",],
    label: "Front Desk",
  },
  {
    value: ["/misadmissiondashboard", "/misfeedashboard", "/misadmissionreport", "/misadmissionstatusreport", "/misadmissionanalysis", "/misfeecollectionreport", "/misstaffanalysis"],
    label: "MIS Reports",
  },
];


const receiptNamingData = [
  { value: "Enquiry Form", label: "Enquiry Form" },
  { value: "Registration Form", label: "Registration Form" },
  { value: "Student Admission No", label: "Student Admission No" },
  { value: "Registration Fee", label: "Registration Fee" },
  { value: "Admission Fee", label: "Admission Fee" },
  { value: "Annual Fee", label: "Annual Fee" },
  { value: "School Fee", label: "School Fee" },
  { value: "Transport Fee", label: "Transport Fee" },
  { value: "Transfer Certificate No", label: "Transfer Certificate No" },
  { value: "Gate Pass", label: "Gate Pass" },
];


const fuelTypeData = [
  { value: "Petrol", label: "Petrol" },
  { value: "Diesel", label: "Diesel" },
  { value: "CNG", label: "CNG" },
  { value: "Electric", label: "Electric" },
];

const followUpTypeData = [
  { value: "Phone", label: "Phone" },
  { value: "In-Person", label: "In-Person" },
  { value: "Email", label: "Email" },
  { value: "SMS", label: "SMS" },
];

const followUpStatusData = [
  { value: "Pending", label: "Pending" },
  { value: "Complete", label: "Complete" },
];

const amountConcessionTye = [
  { value: "Amount", label: "Amount" },
  { value: "Percentage", label: "Percentage" },
];

const busDriversTypeData = [
  { value: "Driver", label: "Driver" },
  { value: "Conductor", label: "Conductor" },
];

const colorData = [
  { value: "Red", label: "Red" },
  { value: "Green", label: "Green" },
  { value: "Yellow", label: "Yellow" },
];

const concessionTypeData = [
  { value: "Percent", label: "Percent" },
  { value: "Amount", label: "Amount" },

];


const examStatusData = [

  { value: "AB", label: "AB" },
  { value: "ML", label: "ML" },
  { value: "NA", label: "NA" },
  { value: "EX", label: "EX" },

];


const attendanceData = [
  { value: "Present", label: "Present" },
  { value: "Absent", label: "Absent" },
  { value: "Leave", label: "Leave" },
  { value: "Half-Day", label: "Half-Day" },
  { value: "Holiday", label: "Holiday" },

];



const remarkTypeData = [
  { value: "Good", label: "Good" },
  { value: "Average", label: "Average" },
  { value: "Bad", label: "Bad" },

];


const feeTypeData = [

  { value: "Tuition Fee", label: "Tuition Fee" },
  { value: "Transport Fee", label: "Transport Fee" },
  { value: "Optional Fee", label: "Optional Fee" },
];

const showToData = [
  { value: "Students", label: "Students" },
  { value: "Staff", label: "Staff" },
  { value: "Both", label: "Both" },

];

const bloodGroupData = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" }
];

const studentCategoryData = [
  { value: "General", label: "General" },
  { value: "OBC", label: "OBC" },
  { value: "BC", label: "BC" },
  { value: "SC", label: "SC" },
  { value: "ST", label: "ST" },
  { value: "EWS", label: "EWS" },
  { value: "Staff", label: "Staff" }
];


const genderData = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
]


const subjectTypeData = [
  { value: "Scholastic", label: "Scholastic" },
  { value: "Co-Scholastic", label: "Co-Scholastic" },
]


const paymentTypeData = [
  { value: "Cash", label: "Cash" },
  { value: "Cheque/DD", label: "Cheque/DD" },
  { value: "Debit/Credit Card", label: "Debit/Credit Card" },
  { value: "NEFT", label: "NEFT" },
  { value: "RTGS", label: "RTGS" },
  { value: "UPI", label: "UPI" },
  { value: "Online", label: "Online" },
  { value: "Payment in Bank", label: "Payment in Bank" },
]


const weekDayData = [
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" }
]


const LateFeeData = [
  { value: "Fixed", label: "Fixed" },
  { value: "Per Day", label: "Per Day" }
]

const seperatorData = [
  { value: "/", label: "/ (Slash)" },
  { value: "-", label: "- (Hyphen)" },
  { value: "_", label: "_ (Underscore)" },
]



const nationalityData = [

  { value: "Indian", label: "Indian" },
  { value: "Afghan", label: "Afghan" },
  { value: "Albanian", label: "Albanian" },
  { value: "Algerian", label: "Algerian" },
  { value: "Argentine", label: "Argentine" },
  { value: "Argentinian", label: "Argentinian" },
  { value: "Australian", label: "Australian" },
  { value: "Austrian", label: "Austrian" },
  { value: "Bangladeshi", label: "Bangladeshi" },
  { value: "Belgian", label: "Belgian" },
  { value: "Bolivian", label: "Bolivian" },
  { value: "Batswana", label: "Batswana" },
  { value: "Brazilian", label: "Brazilian" },
  { value: "Bulgarian", label: "Bulgarian" },
  { value: "Cambodian", label: "Cambodian" },
  { value: "Cameroonian", label: "Cameroonian" },
  { value: "Canadian", label: "Canadian" },
  { value: "Chilean", label: "Chilean" },
  { value: "Chinese", label: "Chinese" },
  { value: "Colombian", label: "Colombian" },
  { value: "Costa Rican", label: "Costa Rican" },
  { value: "Croatian", label: "Croatian" },
  { value: "Cuban", label: "Cuban" },
  { value: "Czech", label: "Czech" },
  { value: "Danish", label: "Danish" },
  { value: "Dominican", label: "Dominican" },
  { value: "Ecuadorian", label: "Ecuadorian" },
  { value: "Egyptian", label: "Egyptian" },
  { value: "Salvadorian", label: "Salvadorian" },
  { value: "English", label: "English" },
  { value: "Estonian", label: "Estonian" },
  { value: "Ethiopian", label: "Ethiopian" },
  { value: "Fijian", label: "Fijian" },
  { value: "Finnish", label: "Finnish" },
  { value: "French", label: "French" },
  { value: "German", label: "German" },
  { value: "Ghanaian", label: "Ghanaian" },
  { value: "Greek", label: "Greek" },
  { value: "Guatemalan", label: "Guatemalan" },
  { value: "Haitian", label: "Haitian" },
  { value: "Honduran", label: "Honduran" },
  { value: "Hungarian", label: "Hungarian" },
  { value: "Icelandic", label: "Icelandic" },
  { value: "Indonesian", label: "Indonesian" },
  { value: "Iranian", label: "Iranian" },
  { value: "Iraqi", label: "Iraqi" },
  { value: "Irish", label: "Irish" },
  { value: "Israeli", label: "Israeli" },
  { value: "Italian", label: "Italian" },
  { value: "Jamaican", label: "Jamaican" },
  { value: "Japanese", label: "Japanese" },
  { value: "Jordanian", label: "Jordanian" },
  { value: "Kenyan", label: "Kenyan" },
  { value: "Kuwaiti", label: "Kuwaiti" },
  { value: "Lao", label: "Lao" },
  { value: "Latvian", label: "Latvian" },
  { value: "Lebanese", label: "Lebanese" },
  { value: "Libyan", label: "Libyan" },
  { value: "Lithuanian", label: "Lithuanian" },
  { value: "Malagasy", label: "Malagasy" },
  { value: "Malaysian", label: "Malaysian" },
  { value: "Malian", label: "Malian" },
  { value: "Maltese", label: "Maltese" },
  { value: "Mexican", label: "Mexican" },
  { value: "Mongolian", label: "Mongolian" },
  { value: "Moroccan", label: "Moroccan" },
  { value: "Mozambican", label: "Mozambican" },
  { value: "Namibian", label: "Namibian" },
  { value: "Nepalese", label: "Nepalese" },
  { value: "Dutch", label: "Dutch" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "Nicaraguan", label: "Nicaraguan" },
  { value: "Nigerian", label: "Nigerian" },
  { value: "Norwegian", label: "Norwegian" },
  { value: "Pakistani", label: "Pakistani" },
  { value: "Panamanian", label: "Panamanian" },
  { value: "Paraguayan", label: "Paraguayan" },
  { value: "Peruvian", label: "Peruvian" },
  { value: "Philippine", label: "Philippine" },
  { value: "Polish", label: "Polish" },
  { value: "Portuguese", label: "Portuguese" },
  { value: "Romanian", label: "Romanian" },
  { value: "Russian", label: "Russian" },
  { value: "Saudi", label: "Saudi" },
  { value: "Scottish", label: "Scottish" },
  { value: "Senegalese", label: "Senegalese" },
  { value: "Serbian", label: "Serbian" },
  { value: "Singaporean", label: "Singaporean" },
  { value: "Slovak", label: "Slovak" },
  { value: "South African", label: "South African" },
  { value: "Korean", label: "Korean" },
  { value: "Spanish", label: "Spanish" },
  { value: "Sri Lankan", label: "Sri Lankan" },
  { value: "Sudanese", label: "Sudanese" },
  { value: "Swedish", label: "Swedish" },
  { value: "Swiss", label: "Swiss" },
  { value: "Syrian", label: "Syrian" },
  { value: "Taiwanese", label: "Taiwanese" },
  { value: "Tajikistani", label: "Tajikistani" },
  { value: "Thai", label: "Thai" },
  { value: "Tongan", label: "Tongan" },
  { value: "Tunisian", label: "Tunisian" },
  { value: "Turkish", label: "Turkish" },
  { value: "Ukrainian", label: "Ukrainian" },
  { value: "Emirati", label: "Emirati" },
  { value: "British", label: "British" },
  { value: "American", label: "American" },
  { value: "Uruguayan", label: "Uruguayan" },
  { value: "Venezuelan", label: "Venezuelan" },
  { value: "Vietnamese", label: "Vietnamese" },
  { value: "Welsh", label: "Welsh" },
  { value: "Zambian", label: "Zambian" },
  { value: "Zimbabwean", label: "Zimbabwean" },
]

const enquiryStatusData = [
  { value: "Approved", label: "Approved" },
  { value: "Rejected", label: "Rejected" },
];

const registrationStatusData = [
  { value: "Fees Pending", label: "Fees Pending" },
  { value: "Hold", label: "Hold" },
  { value: "Rejected", label: "Rejected" },
];

const admissionStatusData = [
  { value: "Approved", label: "Approved" },
  { value: "InActive", label: "InActive" },
  { value: "Rejected", label: "Rejected" },
  { value: "Document Pending", label: "Document Pending" },
  { value: "Fees Pending", label: "Fees Pending" },
];

const admissionAddFormStatusData = [
  { value: "Document Pending", label: "Document Pending" },
  { value: "Fees Pending", label: "Fees Pending" },
  { value: "Hold", label: "Hold" },
];

const admissionEditFormStatusData = [

  { value: "Document Pending", label: "Document Pending" },
  { value: "Fees Pending", label: "Fees Pending" },
  { value: "Rejected", label: "Rejected" },
  { value: "Hold", label: "Hold" },

];

const enquiryFilterStatusData = [
  { value: "Enq. Approved", label: "Enq. Approved" },
  { value: "Enq. Rejected", label: "Enq. Rejected" },
  { value: "Reg. Approved", label: "Reg. Approved" },
  { value: "Reg. Hold", label: "Reg. Hold" },
  { value: "Reg. Fees Pending", label: "Reg. Fees Pending" },
  { value: "Reg. Rejected", label: "Reg. Rejected" },
  { value: "Adm. Approved", label: "Adm. Approved" },
  { value: "Adm. Hold", label: "Adm. Hold" },
  { value: "Adm. Fees Pending", label: "Adm. Fees Pending" },
  { value: "Adm. Document Pending", label: "Adm. Document Pending" },
  { value: "Adm. InActive", label: "Adm. InActive" },
  { value: "Adm. Rejected", label: "Adm. Rejected" },
];

const regFilterStatusData = [
  { value: "Reg. Approved", label: "Reg. Approved" },
  { value: "Reg. Hold", label: "Reg. Hold" },
  { value: "Reg. Fees Pending", label: "Reg. Fees Pending" },
  { value: "Reg. Rejected", label: "Reg. Rejected" },
  { value: "Adm. Approved", label: "Adm. Approved" },
  { value: "Adm. Hold", label: "Adm. Hold" },
  { value: "Adm. Fees Pending", label: "Adm. Fees Pending" },
  { value: "Adm. Document Pending", label: "Adm. Document Pending" },
  { value: "Adm. InActive", label: "Adm. InActive" },
  { value: "Adm. Rejected", label: "Adm. Rejected" },
];

const studentTypeData = [
  { value: "Day Scholar", label: "Day Scholar" },
  { value: "Hosteler", label: "Hosteler" }
];

const chequeDetailsData = [
  { value: "Pending", label: "Pending" },
  { value: "Deposited", label: "Deposited" },
  { value: "Bounced", label: "Bounced" },
  { value: "Cleared", label: "Cleared" },
];

const lastResultData = [
  { value: "Pass", label: "Pass" },
  { value: "Fail", label: "Fail" },
];

const rollNoSequenceData = [
  { value: "Name Wise", label: "Name Wise" },
  { value: "Boy First", label: "Boy First" },
  { value: "Girls First", label: "Girls First" },
  { value: "Admission No. (Asc)", label: "Admission No. (Asc)" },
  { value: "Admission No. (Desc)", label: "Admission No. (Desc)" },
];

const addmisionFeeFilterData = [
  { value: "All Students", label: "All Students" },
  { value: "Waivers Only", label: "Waivers Only" },
];

const relationData = [
  { value: "Father", label: "Father" },
  { value: "Mother", label: "Mother" },
  { value: "Guardian", label: "Guardian" },
];

const passTypeData = [
  { value: "In Pass", label: "In Pass" },
  { value: "Out Pass", label: "Out Pass" },
];


const passStatusData = [
  { value: "Sanctioned", label: "Sanctioned" },
  { value: "Not Sanctioned", label: "Not Sanctioned" },
];

const appointmentStatusData = [
  { value: "Pending", label: "Pending" },
  { value: "Approved", label: "Approved" },
  { value: "Rejected", label: "Rejected" },
];

const appointmentSourceData = [
  { value: "Phone", label: "Phone" },
  { value: "In-Person", label: "In-Person" },
  { value: "Email", label: "Email" },
  { value: "SMS", label: "SMS" },
  { value: "Mobile App", label: "Mobile App" },
];

const frontDeskRegisterData = [
  { value: "Teacher", label: "Teacher" },
  { value: "Student", label: "Student" },
  { value: "Other", label: "Other" },
];

const visitorTypeData = [
  { value: "Parent", label: "Parent" },
  { value: "Other", label: "Other" },
];

const admissionStatusReportData = [
  { value: "enquiry_done", label: "Enquiry Done -> Registration Pending" },
  { value: "registration_done", label: "Registration Done -> Admission Pending" },
  { value: "admissions_done", label: "Admissions Done" },
];

const feeReportTypeData = [
  { value: "school_fee_wise", label: "School Fee Date Wise" },
  { value: "transport_wise", label: "Transport Fee Date Wise" },
  { value: "admission_wise", label: "Admission Fee Date Wise" },
  { value: "annual_wise", label: "Annual Fee Date Wise" },
  { value: "registration_wise", label: "Registration Fee Date Wise" },
  { value: "component_wise", label: "Fee Component Day Wise" },
  { value: "cheque_details", label: "Cheque Details" },
  { value: "cancelled_fee_receipts", label: "Cancelled Fee Receipt (Coming Soon)" },
];

export default {
  studentTypeData,
  backendUrl,
  imageBaseUrl,
  bloodGroupData,
  genderData,
  paymentTypeData,
  nationalityData,
  studentCategoryData,
  concessionTypeData,
  admissionStatusData,
  showToData,
  colorData,
  remarkTypeData,
  weekDayData,
  feeTypeData,
  LateFeeData,
  subjectTypeData,
  attendanceData,
  examStatusData,
  permissionData,
  accessCheck,
  followUpTypeData,
  followUpStatusData,
  fuelTypeData,
  busDriversTypeData,
  receiptNamingData,
  seperatorData,
  enquiryStatusData,
  registrationStatusData,
  enquiryFilterStatusData,
  regFilterStatusData,
  amountConcessionTye,
  chequeDetailsData,
  admissionAddFormStatusData,
  admissionEditFormStatusData,
  lastResultData,
  rollNoSequenceData,
  addmisionFeeFilterData,
  relationData,
  passTypeData,
  passStatusData,
  appointmentStatusData,
  appointmentSourceData,
  frontDeskRegisterData,
  visitorTypeData,
  admissionStatusReportData,
  feeReportTypeData,
};