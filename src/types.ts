export interface SurveyFormValues {
  firstname_dsh: string;
  lastname_dsh: string;
  company: string;
  phone: string;
  title_dsh: string;
  legaltitle_dsh: string;
  fein_dsh: string;
  mailingaddress_dsh: string;
  pointofcontact_dsh: string;
  streetaddress_dsh: string;
  unitnumber_dsh: string;
  citystatezip_dsh: string;
  emailforlegalnotices_dsh: string;
  businessaddress_dsh: string;
  isowner_dsh: string;
  filedbefore_dsh: string;
  filed2020q2_dsh: string;
  filed2020q3_dsh: string;
  filed2020q4_dsh: string;
  filed2021q1_dsh: string;
  filed2021q2_dsh: string;
  filed2021q3_dsh: string;
  filed2021q4_dsh: string;
  numemployees2019_dsh: string;
  numemployees2020_dsh: string;
  numemployees2021_dsh: string;
  taxform_dsh: string;
  fiscalyearend_dsh: string;
  firstyeartaxreturn_dsh: string;
}

export interface PostContactInput extends SurveyFormValues {
  docusign__signer__email: string;
  docusign__signer__first_name: string;
  docusign__signer__full_name: string;
  docusign__signer__last_name: string;
  docusign__signer__phone_number: string;
  docusign__signer__title: string;
  docusign_city: string;
  docusign_ein_tin: string;
  docusign_legal_company_name: string;
  docusign_postal_code: string;
  docusign_state_region__select_: string;
  docusign_street_address: string;
}
