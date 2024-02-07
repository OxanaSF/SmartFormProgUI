import { Contact } from '../contexts/contact-context';

// Create Contact Start
export const createContactFormData = () => {
  return {
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    phoneNumber: '',
    isCompanyOwner: false,
    numberW2Employees: '',
    previouslyFilledForERC: false,
    // howManyQuartersFiled: '',
    preferredLanguage: '',
    referralCode: '',
  };
};

export const numberW2Employees = [
  '3 or Less',
  '4-49',
  '50-499',
  '500-2,500',
  '2,501+',
];

export const languages = ['English', 'Spanish'];

export const usStates = [
  'AL - Alabama',
  'AK - Alaska',
  'AZ - Arizona',
  'AR - Arkansas',
  'CA - California',
  'CO - Colorado',
  'CT - Connecticut',
  'DE - Delaware',
  'FL - Florida',
  'GA - Georgia',
  'HI - Hawaii',
  'ID - Idaho',
  'IL - Illinois',
  'IN - Indiana',
  'IA - Iowa',
  'KS - Kansas',
  'KY - Kentucky',
  'LA - Louisiana',
  'ME - Maine',
  'MD - Maryland',
  'MA - Massachusetts',
  'MI - Michigan',
  'MN - Minnesota',
  'MS - Mississippi',
  'MO - Missouri',
  'MT - Montana',
  'NE - Nebraska',
  'NV - Nevada',
  'NH - New Hampshire',
  'NJ - New Jersey',
  'NM - New Mexico',
  'NY - New York',
  'NC - North Carolina',
  'ND - North Dakota',
  'OH - Ohio',
  'OK - Oklahoma',
  'OR - Oregon',
  'PA - Pennsylvania',
  'RI - Rhode Island',
  'SC - South Carolina',
  'SD - South Dakota',
  'TN - Tennessee',
  'TX - Texas',
  'UT - Utah',
  'VT - Vermont',
  'VA - Virginia',
  'WA - Washington',
  'WV - West Virginia',
  'WI - Wisconsin',
  'WY - Wyoming',
];

export const quartersFiled = [1, 2, 3, 4, 5, 6, 7, 8, 'Unsure'];

export const createContactHTML = [
  {
    className: 'text-field',
    label: 'Email',
    required: false,
    name: 'email',
  },
  {
    className: 'text-field',
    label: 'First Name',
    required: true,
    name: 'firstName',
  },
  {
    className: 'text-field',
    label: 'Last Name',
    required: true,
    name: 'lastName',
  },
  {
    className: 'text-field',
    label: 'Company Name',
    required: true,
    name: 'companyName',
  },
  {
    className: 'text-field',
    label: 'Phone Number',
    required: true,
    name: 'phoneNumber',
  },
  {
    className: 'text-field radio-group-border',
    label: 'Are you a company owner',
    required: true,
    name: 'isCompanyOwner',
    isCompanyOwner: true,
  },
  {
    className: 'text-field',
    label: 'Number of W-2 Employees',
    required: true,
    name: 'numberW2Employees',
    numberW2Employees: numberW2Employees,
  },
  {
    className: 'text-field radio-group-border',
    label: 'Previously filled for ERC',
    required: true,
    name: 'Previously filled for ERC',
    previouslyFilledForERC: true,
  },

  {
    className: 'text-field',
    label: 'Preferred Communication Language',
    required: false,
    name: 'preferredLanguage',
    preferredLanguage: languages,
  },
  {
    className: 'text-field',
    label: 'Referral Code(Internal Use Only)',
    required: false,
    name: 'referralCode',
  },
];

// Create Contact End

// Survey 1 Start

export const initializeFormData = () => {
  return {
    sameAsPersonal: '',
    firstName: '',
    lastName: '',
    positionTitle: '',
    legalTitle: '',
    fein: '',
    mailingAddress: '',
    pointOfContact: '',
    streetAddress: '',
    unitNumber: '',
    cityStateZip: '',
    emailForNotices: '',
    businessAddress: '',
    isOwner: '',
    filedBefore: '',
    filed2020Q2: '',
    filed2020Q3: '',
    filed2020Q4: '',
    filed2021Q1: '',
    filed2021Q2: '',
    filed2021Q3: '',
    filed2021Q4: '',
    numEmployees2019: '',
    numEmployees2020: '',
    numEmployees2021: '',
    taxForm: '',
    fiscalYearEnd: '',
    firstYearTaxReturn: '',
  };
};

export const steps = [
  {
    step: 'Complete Survey (if refused to use TaxStatus and Finch)',
    page: '/',
    image: 'survey1.png',
  },
  {
    step: 'Complete Docusign',
    page: 'complete-docusign',
    image: 'doc.png',
  },
  {
    step: 'Complete TaxStatus verification',
    page: 'complete-taxstatus',
    image: 'tax.png',
  },
  {
    step: 'Complete Payroll verification',
    page: 'complete-payroll',
    image: 'salary.png',
  },
  // { step: 'Complete Survey', page: 'business-survey', image: 'survey.png' },
  { step: 'File Invite', page: 'file-invite', image: 'file-invite.png' },
  {
    step: 'Complete',
    page: 'complete',
    imageProcess: 'complete.png',
    imageComplete: 'complete.png',
  },
  // { step: 'ERC Issued, Make Payment', page: 'pagesix', image: 'wallet.png' },
];

export const legalTitleOptions = [
  'LLC - Managing Member',
  '1065 - Partner',
  '1065 - Limited Partner',
  '990 - Director',
  'C Corp/S Corp/LLC Chief Accounting Officer',
  'C Corp/S Corp/LLC Chief Executive Officer',
  'C Corp/S Corp/LLC Chief Operations Officer',
  'C Corp/S Corp/LLC Chief Financial Officer',
  'C Corp/S Corp/LLC President',
  'C Corp/S Corp/LLC Vice President',
  'C Corp/S Corp/LLC Secretary',
  'C Corp/S Corp/LLC Treasurer',
  'C Corp/S Corp/LLC Assistant Treasurer',
  'C Corp/S Corp/LLC Controller',
  'Sole Proprietor - Owner',
  'Sole Proprietor - Sole Proprietor',
  'Trust - Executor',
  'Trust - Beneficiary',
  'Trust - Trustee',
  'Trust - Administrator',
];

export const taxFormOptions = [
  'Form 1065 - Partnership',
  'Form 1120/1120S - Corporation',
  'Form 990 - Nonprofit',
  'Form 1041 - Estates and Trusts',
  'Form 1040 - Self Employed (1040 Schedule C, E, etc.)',
];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Survey 1 End

// Survey 2 Start

export const allThatApplyQuestions = [
  '',
  '',
  'Select all that apply:',
  'In which quarters did your business experience any partial or full government shutdowns?',
  'Did your business have an inability to conduct meetings face to face?',
  'Did your business suffer from supply chain disruption or any supplier delays caused by the pandemic?',
  'Did any of your suppliers/vendors suffer from any supply chain disruptions that caused delays?',
  "What was your business' gross income in each quarter?",
  'Did your business suffer a revenue reduction of 50% or more in 2020 compared to the corresponding quarters in 2019?',
  'Did your business suffer a revenue reduction of 20% or more in 2021 compared to the corresponding quarters in 2019?',
  'What was your number of full-time W-2s issued for your employees at year end?',
];

export const allThatApplyMatrix = [
  ['', '', '', '', '2019', '', '', '', '2020', '', '', '', '2021', ''],
  [
    '',
    '',
    'Q1',
    'Q2',
    'Q3',
    'Q4',
    'Q1',
    'Q2',
    'Q3',
    'Q4',
    'Q1',
    'Q2',
    'Q3',
    'Q4',
  ],
  [
    ['Select all that apply:', ''],
    '',
    '01/01 to 3/31',
    '04/01 to 06/30',
    '07/01 to 9/30',
    '10/01 to 12/31',
    '01/01 to 3/31',
    '04/01 to 06/30',
    '07/01 to 9/30',
    '10/01 to 12/31',
    '01/01 to 3/31',
    '04/01 to 06/30',
    '07/01 to 9/30',
    '10/01 to 12/31',
  ],
  [
    [
      'In which quarters did your business experience any partial or full government shutdowns?',
      'governmentShutdownData',
    ],
    '',
    '',
    '',
    '',
    '',
    '',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
  ],
  [
    [
      'Did your business have an inability to conduct meetings face to face?',
      'meetingInabilityData',
    ],
    '',
    '',
    '',
    '',
    '',
    '',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
  ],
  [
    [
      'Did your business suffer from supply chain disruption or any supplier delays caused by the pandemic?',
      'supplyDisruptionPandemic',
    ],
    '',
    '',
    '',
    '',
    '',
    '',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
  ],
  [
    [
      'Did any of your suppliers/vendors suffer from any supply chain disruptions that caused delays?',
      'supplyDisruptionsDelays',
    ],
    '',
    '',
    '',
    '',
    '',
    '',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
  ],
  [
    [
      "What was your business' gross income in each quarter?",
      'grossIncomeEachQuarter',
    ],
    '',
    'T',
    'T',
    'T',
    'T',
    'T',
    'T',
    'T',
    'T',
    'T',
    'T',
    'T',
    'T',
  ],
  [
    [
      'Did your business suffer a revenue reduction of 50% or more in 2020 compared to the corresponding quarters in 2019?',
      'revenueReduction50More2020',
    ],
    '',
    '',
    '',
    '',
    '',
    '',
    'boolean',
    'boolean',
    'boolean',
    '',
    '',
    '',
    '',
  ],
  [
    [
      'Did your business suffer a revenue reduction of 20% or more in 2021 compared to the corresponding quarters in 2019?',
      'revenueReduction20More2021',
    ],
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'boolean',
    'boolean',
    'boolean',
    'boolean',
  ],
  [
    [
      'What was your number of full-time W-2s issued for your employees at year end?',
      'numberFullTimeW2sIssued',
    ],
    '',
    '',
    '',
    '',
    'T',
    '',
    '',
    '',
    'T',
    '',
    '',
    '',
    'T',
  ],
];

export const businessExperienceQuestions = [
  { name: 'fullShutdowns', question: 'Full Shutdowns' },
  { name: 'partialShutdowns', question: 'Partial Shutdowns' },
  { name: 'interruptedOperations', question: 'Interrupted Operations' },
  { name: 'supplyChainInterruptions', question: 'Supply Chain Interruptions' },
  {
    name: 'inabilityToAccessEquipment',
    question: 'Inability to Access Equipment',
  },
  { name: 'limitedCapacityToOperate', question: 'Limited Capacity to Operate' },
  {
    name: 'inabilityToWorkWithYourVendors',
    question: 'Inability to Work with Your Vendors',
  },
  {
    name: 'reductionInServicesOrGoods',
    question: 'Reduction in Services or Goods Offered to your Customers',
  },
  {
    name: 'reductionInHoursOfOperation',
    question: 'Reduction in your Hours of Operation',
  },
  {
    name: 'shiftingHoursForSanitation',
    question: 'Shifting Hours to Increase Sanitation/Cleaning of your Facility',
  },
  {
    name: 'challengesInFindingEmployees',
    question: 'Challenges in Finding and Retaining Employees',
  },
];

export const survey2FormData = () => {
  return {
    // first 2 sub forms of Survey 2 Start
    fullShutdowns: '',
    partialShutdowns: '',
    interruptedOperations: '',
    supplyChainInterruptions: '',
    inabilityToAccessEquipment: '',
    limitedCapacityToOperate: '',
    inabilityToWorkWithYourVendors: '',
    reductionInServicesOrGoods: '',
    reductionInHoursOfOperation: '',
    shiftingHoursForSanitation: '',
    challengesInFindingEmployees: '',
    other: '',
    governmentRelatedShutdowns: '',
    ownOtherBusinesses: '',
    obtainPPPLoan1: '',
    ppp1ForgivenessAmount: '',
    obtainPPPLoan2: '',
    ppp2ForgivenessAmount: '',
    // first 2 sub forms of Survey 2 End

    // 3d sub form of Survey 2 Start
    governmentShutdownData: {
      2020: {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
      },
      2021: {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
      },
    },

    meetingInabilityData: {
      2020: {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
      },
      2021: {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
      },
    },

    supplyDisruptionPandemic: {
      2020: {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
      },
      2021: {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
      },
    },
    supplyDisruptionsDelays: {
      2020: {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
      },
      2021: {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
      },
    },

    grossIncomeEachQuarter: {
      2019: {
        // Q1: 5,
        Q1: 0,
        Q2: 0,
        Q3: 0,
        Q4: 0,
      },
      2020: {
        // Q1: 16,
        Q1: 0,
        Q2: 0,
        Q3: 0,
        Q4: 0,
      },
      2021: {
        Q1: 0,
        Q2: 0,
        Q3: 0,
        Q4: 0,
      },
    },

    revenueReduction50More2020: {
      2020: {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
      },
    },

    revenueReduction20More2021: {
      2021: {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
      },
    },

    numberFullTimeW2sIssued: {
      2019: {
        Q4: '',
      },
      2020: {
        Q4: '',
      },
      2021: {
        Q4: '',
      },
    },

    // 3d sub form of Survey 2 End

    // 4th sub from of Survey 2 Start

    ownershipData: {
      ownerFullName: '',
      percentage: '',
      fullName: '',
      relationship: '',
    },

    // 4th sub from of Survey 2 Ends
  };
};
// Survey 2 End

export const relationshipOptions = [
  'Owner himself',
  'Grandparent or other ancestors',
  'Parent, Step-Parent or In-Law Parent',
  "Parent's Sibling",
  'Spouse',
  'Sibling, Half Sibling, Step Sibling, or In-Law Sibling',
  'Child or In-Law Child',
  "Sibling's Child",
  'Grandchild',
  "Other person that is a member of the majority owner's tax household",
];

// Survey Form 1 functions
// export const updateFormData = (prevData, name, value, type, checked) => {
//   if (type === 'checkbox') {
//     return {
//       ...prevData,
//       [name]: checked,
//     };
//   } else {
//     return {
//       ...prevData,
//       [name]: value,
//     };
//   }
// };
const contactProps: (keyof Contact)[] = [
  'firstname',
  'lastname',
  'phone',
  'company',
  'are_you_a_company_owner',
  'number_of_w_2_employees',
  'have_you_already_submitted_your_erc',
  'erc_quarters_filed',
  'preferred_communication_language',
];
interface InputData {
  [key: string]: {
    value: string;
  };
}

export const getNormalizedContactData = (data: InputData) => {
  console.log('data', data);
  return Object.entries(data).reduce((acc: Contact, [k, v]) => {
    if (contactProps.includes(k as keyof Contact)) {
      acc[k as keyof Contact] = v.value;
    }
    return acc;
  }, {});
};

export const isEmail = (value: string) =>
  // eslint-disable-next-line
  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
    value
  );
