import React, { ChangeEventHandler, useState } from 'react';
import {
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  Select,
  MenuItem,
  Typography,
  FormHelperText,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import YearPicker from './YearPicker';

import {
  legalTitleOptions,
  taxFormOptions,
  months,
  isEmail,
} from '../../utils/formUtils';
import InputMask from 'react-input-mask';
import './Survey1Form.css';
import { Button } from '@mui/material';
import { submitUpdateContact } from '../../core/api';
import { useAuth0 } from '@auth0/auth0-react';
import { FormikErrors, useFormik } from 'formik';
import { useContact } from '../../contexts/useContact';
import { PostContactInput, SurveyFormValues } from '../../types';

const normalizeSurveyFormData = (data: SurveyFormValues): PostContactInput => {
  return {
    ...data,
    docusign__signer__email: data.emailforlegalnotices_dsh,
    docusign__signer__first_name: data.firstname_dsh,
    docusign__signer__full_name: `${data.firstname_dsh} ${data.lastname_dsh}`,
    docusign__signer__last_name: data.lastname_dsh,
    docusign__signer__phone_number: data.phone,
    docusign__signer__title: data.title_dsh,
    docusign_city: data.citystatezip_dsh.split(',')[0],
    docusign_ein_tin: data.fein_dsh,
    docusign_legal_company_name: data.company,
    docusign_postal_code: data.citystatezip_dsh.split(',')[2],
    docusign_state_region__select_: data.citystatezip_dsh.split(',')[1],
    docusign_street_address: data.streetaddress_dsh,
  };
};

const isDataPrepared = (data: PostContactInput) => {
  return Object.values(data).every((v) => !!v);
};

interface ErcFormProps {
  onSuccess: () => void;
}

const ErcForm = ({ onSuccess }: ErcFormProps) => {
  const { contact } = useContact();

  console.log('contact', contact);

  const { user } = useAuth0();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isBusinessAddressSame, setIsBusinessAddressSame] = useState(false);

  const formik = useFormik<SurveyFormValues>({
    enableReinitialize: true,
    initialValues: {
      firstname_dsh: '',
      lastname_dsh: '',
      company: contact?.company || '',
      phone: contact?.phone || '',
      title_dsh: '',
      legaltitle_dsh: '',
      fein_dsh: '',
      mailingaddress_dsh: '',
      pointofcontact_dsh: '',
      streetaddress_dsh: '',
      unitnumber_dsh: '',
      citystatezip_dsh: '',
      emailforlegalnotices_dsh: '',
      businessaddress_dsh: '',
      isowner_dsh: '',
      filedbefore_dsh: '',
      filed2020q2_dsh: 'No',
      filed2020q3_dsh: 'No',
      filed2020q4_dsh: 'No',
      filed2021q1_dsh: 'No',
      filed2021q2_dsh: 'No',
      filed2021q3_dsh: 'No',
      filed2021q4_dsh: 'No',
      numemployees2019_dsh: '',
      numemployees2020_dsh: '',
      numemployees2021_dsh: '',
      taxform_dsh: '',
      fiscalyearend_dsh: '',
      firstyeartaxreturn_dsh: '',
    },
    validate: (values) => {
      const errors: FormikErrors<SurveyFormValues> = {};

      Object.entries(values).forEach(([key, value]) => {
        if (!value) {
          errors[key as keyof SurveyFormValues] = 'Required';
        }
      });

      if (
        values.emailforlegalnotices_dsh &&
        !isEmail(values.emailforlegalnotices_dsh)
      ) {
        errors.emailforlegalnotices_dsh = 'Invalid email address';
      }

      return errors;
    },
    onSubmit: (values) => {
      if (!user) return;

      const data = normalizeSurveyFormData(values);

      if (!isDataPrepared(data)) {
        return console.error(
          'Missing fields:',
          Object.entries(data)
            .filter(([_, v]) => !v)
            .map(([k]) => k)
        );
      }

      setIsSubmitting(true);
      submitUpdateContact(user.email!, normalizeSurveyFormData(values))
        .then(() => {
          onSuccess();
        })
        .catch(console.error)
        .finally(() => {
          setIsSubmitting(false);
        });
    },
  });

  const onChangeNumberInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target;
    if (isNaN(+value)) {
      return;
    }

    formik.setFieldTouched(name, true, true);
    formik.setFieldValue(name, value.split('.')[0], true);
  };

  const onCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, checked } = e.target;
    formik.setFieldValue(name, checked ? 'Yes' : 'No', true);
    formik.setFieldTouched(name, true, true);
  };

  // const validateFEIN = (value) => {
  //   const feinRegex = /^\d{2}-\d{7}$/;
  //   return feinRegex.test(value);
  // };

  const isChecked = (value: string) => {
    return value === 'Yes';
  };

  console.log('formik.errors', formik.errors);

  return (
    <form
      className="initial-survey-form"
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <div className="personal-information">
            <div>
              <h3>Personal Information</h3>
            </div>

            <div className="text-field">
              <InputLabel htmlFor="firstname_dsh" className="">
                First Name of Contract Signatory
              </InputLabel>
              <TextField
                name="firstname_dsh"
                value={formik.values.firstname_dsh}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormHelperText error>
                {formik.errors.firstname_dsh === 'Required'
                  ? 'First name of contract signatory is required'
                  : ''}
              </FormHelperText>
            </div>
            <div className="text-field">
              <InputLabel htmlFor="lastname_dsh">
                Last Name of Contract Signatory
              </InputLabel>
              <TextField
                name="lastname_dsh"
                value={formik.values.lastname_dsh}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <FormHelperText error>
                {formik.errors.lastname_dsh === 'Required'
                  ? 'Last name of contract signatory is required'
                  : ''}
              </FormHelperText>
            </div>
            <div className="text-field">
              <InputLabel htmlFor="title_dsh">
                Position/Title of Contract Signatory
              </InputLabel>
              <TextField
                name="title_dsh"
                value={formik.values.title_dsh}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <FormHelperText error>
                {formik.errors.title_dsh === 'Required'
                  ? 'Position/Title of contract signatory is required'
                  : ''}
              </FormHelperText>
            </div>
            <div className="text-field">
              <div className="text-field">
                <InputLabel htmlFor="legaltitle_dsh">
                  Legal Title of Contract Signatory
                </InputLabel>
                <FormControl>
                  <Select
                    name="legaltitle_dsh"
                    value={formik.values.legaltitle_dsh}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    label="Legal Title"
                  >
                    {legalTitleOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText error>
                    {formik.errors.legaltitle_dsh === 'Required'
                      ? 'Legal title of contract signatory is required'
                      : ''}
                  </FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className="text-field">
              <InputLabel htmlFor="fein_dsh">
                Federal Employer Identification Number (FEIN)
              </InputLabel>
              <InputMask
                mask="99-9999999"
                maskChar={null}
                value={formik.values.fein_dsh}
                onChange={(e) =>
                  formik.handleChange({
                    ...e,
                    target: { ...e.target, name: 'fein_dsh' },
                  })
                }
                onBlur={formik.handleBlur}
              >
                {/* @ts-ignore */}
                {(inputProps) => <TextField {...inputProps} />}
              </InputMask>
              <FormHelperText error>
                {formik.errors.fein_dsh === 'Required'
                  ? 'Federal Employer Identification Number (FEIN) is required'
                  : ''}
              </FormHelperText>
            </div>

            <div className="text-field">
              <InputLabel htmlFor="streetaddress_dsh">
                Street address for (legal) notices
              </InputLabel>
              <TextField
                name="streetaddress_dsh"
                value={formik.values.streetaddress_dsh}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormHelperText error>
                {formik.errors.streetaddress_dsh === 'Required'
                  ? 'Street address for (legal) notices is required'
                  : ''}
              </FormHelperText>
            </div>

            <div className="text-field">
              <InputLabel htmlFor="unitnumber_dsh">
                Unit number for notices address
              </InputLabel>
              <TextField
                name="unitnumber_dsh"
                value={formik.values.unitnumber_dsh}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormHelperText error>
                {formik.errors.unitnumber_dsh === 'Required'
                  ? 'Unit number for notices address is required'
                  : ''}
              </FormHelperText>
            </div>

            <div className="text-field">
              <InputLabel htmlFor="citystatezip_dsh">
                City, State, Zip for notices address
              </InputLabel>
              <TextField
                name="citystatezip_dsh"
                value={formik.values.citystatezip_dsh}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormHelperText error>
                {formik.errors.citystatezip_dsh === 'Required'
                  ? 'City, State, Zip for notices address is required'
                  : ''}
              </FormHelperText>
            </div>

            <div className="text-field">
              <InputLabel htmlFor="mailingaddress_dsh">
                Mailing Address For Legal Notice
              </InputLabel>
              <TextField
                name="mailingaddress_dsh"
                value={formik.values.mailingaddress_dsh}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormHelperText error>
                {formik.errors.mailingaddress_dsh === 'Required'
                  ? 'Mailing address for legal Nntice is required'
                  : ''}
              </FormHelperText>
            </div>
            <div className="text-field">
              <InputLabel htmlFor="pointofcontact_dsh">
                Point of Contact for Legal Notices
              </InputLabel>
              <TextField
                name="pointofcontact_dsh"
                value={formik.values.pointofcontact_dsh}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormHelperText error>
                {formik.errors.pointofcontact_dsh === 'Required'
                  ? 'Point of contact for cegal cotices is required'
                  : ''}
              </FormHelperText>
            </div>
            <div className="text-field">
              <InputLabel htmlFor="emailforlegalnotices_dsh">
                Email for Legal Notices
              </InputLabel>
              <TextField
                type="email"
                name="emailforlegalnotices_dsh"
                value={formik.values.emailforlegalnotices_dsh}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormHelperText error>
                {formik.errors.emailforlegalnotices_dsh === 'Required'
                  ? 'Email for legal notices is required'
                  : ''}
              </FormHelperText>
            </div>

            <div className="text-field">
              <InputLabel htmlFor="businessaddress_dsh">
                What business address was used on your last tax return?
              </InputLabel>
              <TextField
                name="businessaddress_dsh"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.businessaddress_dsh}
              />
              <FormHelperText error>
                {formik.errors.businessaddress_dsh === 'Required'
                  ? 'Business address is required'
                  : ''}
              </FormHelperText>
            </div>

            <div className="text-field">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isBusinessAddressSame}
                    onChange={(e) => {
                      if (e.target.checked) {
                        formik.setFieldValue(
                          'businessaddress_dsh',
                          `${formik.values.streetaddress_dsh} ${formik.values.unitnumber_dsh} ${formik.values.citystatezip_dsh}`
                        );
                      }
                      setIsBusinessAddressSame(e.target.checked);
                    }}
                  />
                }
                label={
                  <Typography variant="body1" className="custom-font-size">
                    Is your personal address the same as the address you
                    provided earlier?
                  </Typography>
                }
              />
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <div className="erc-estimate">
            <div>
              <h3>ERC Estimate</h3>
            </div>

            <FormControl component="fieldset">
              <FormLabel component="legend">
                Are you the Owner or acting on behalf of the owner?
              </FormLabel>

              <RadioGroup
                aria-label="Is Owner"
                name="isowner_dsh"
                value={formik.values.isowner_dsh}
                onChange={formik.handleChange}
              >
                <div className="radio-btn-yn-container">
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="No"
                  />
                </div>
              </RadioGroup>
              {formik.touched.isowner_dsh && formik.errors.isowner_dsh && (
                <FormHelperText error>
                  Please select whether you are the owner or acting on behalf of
                  the owner.
                </FormHelperText>
              )}
            </FormControl>

            <FormControl component="fieldset">
              <FormLabel component="legend">
                Have you previously filed for ERC?
              </FormLabel>

              <RadioGroup
                aria-label="Filed Before ERC"
                name="filedbefore_dsh"
                value={formik.values.filedbefore_dsh}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <div className="radio-btn-yn-container">
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="No"
                  />
                </div>
              </RadioGroup>
              {formik.touched.filedbefore_dsh &&
                formik.errors.filedbefore_dsh && (
                  <FormHelperText error>
                    Please select whether you previously filed for ERC.
                  </FormHelperText>
                )}
            </FormControl>

            <FormControl component="fieldset" className="text-field">
              <FormLabel component="legend">
                For which Quarters did you file ERC?
              </FormLabel>

              <div className="radio-button-field-container">
                <div className="field-container-year">2020:</div>
                <div className="radio-button-field">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked(formik.values.filed2020q2_dsh)}
                        onChange={onCheckboxChange}
                        onBlur={formik.handleBlur}
                        name="filed2020q2_dsh"
                      />
                    }
                    label="Q2"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked(formik.values.filed2020q3_dsh)}
                        onChange={onCheckboxChange}
                        onBlur={formik.handleBlur}
                        name="filed2020q3_dsh"
                      />
                    }
                    label="Q3"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked(formik.values.filed2020q4_dsh)}
                        onChange={onCheckboxChange}
                        onBlur={formik.handleBlur}
                        name="filed2020q4_dsh"
                      />
                    }
                    label="Q4"
                    labelPlacement="start"
                  />
                </div>
              </div>

              <div className="radio-button-field-container">
                <div className="field-container-year">2021:</div>
                <div className="radio-button-field">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked(formik.values.filed2021q1_dsh)}
                        onChange={onCheckboxChange}
                        onBlur={formik.handleBlur}
                        name="filed2021q1_dsh"
                      />
                    }
                    label="Q1"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked(formik.values.filed2021q2_dsh)}
                        onChange={onCheckboxChange}
                        onBlur={formik.handleBlur}
                        name="filed2021q2_dsh"
                      />
                    }
                    label="Q2"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked(formik.values.filed2021q3_dsh)}
                        onChange={onCheckboxChange}
                        onBlur={formik.handleBlur}
                        name="filed2021q3_dsh"
                      />
                    }
                    label="Q3"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked(formik.values.filed2021q4_dsh)}
                        onChange={onCheckboxChange}
                        onBlur={formik.handleBlur}
                        name="filed2021q4_dsh"
                      />
                    }
                    label="Q4"
                    labelPlacement="start"
                  />
                </div>
              </div>
            </FormControl>

            <div className="text-field-custom">
              <InputLabel htmlFor="numemployees2019_dsh">
                How many employees did you have in 2019?
              </InputLabel>

              <input
                className="no-outline"
                name="numemployees2019_dsh"
                value={formik.values.numemployees2019_dsh}
                onChange={onChangeNumberInput}
                onBlur={formik.handleBlur}
              />
              <FormHelperText error>
                {formik.errors.numemployees2019_dsh === 'Required'
                  ? ' Please type the number of employees you had in 2019?'
                  : ''}
              </FormHelperText>
            </div>

            <div className="text-field-custom">
              <InputLabel htmlFor="numemployees2020_dsh">
                How many employees did you have in 2020?
              </InputLabel>

              <input
                className="no-outline"
                name="numemployees2020_dsh"
                value={formik.values.numemployees2020_dsh}
                onChange={onChangeNumberInput}
                onBlur={formik.handleBlur}
              />
              <FormHelperText error>
                {formik.errors.numemployees2020_dsh === 'Required'
                  ? ' Please type the number of employees you had in 2020?'
                  : ''}
              </FormHelperText>
            </div>

            <div className="text-field-custom">
              <InputLabel htmlFor="numemployees2021_dsh">
                How many employees did you have in 2021?
              </InputLabel>

              <input
                className="no-outline"
                name="numemployees2021_dsh"
                value={formik.values.numemployees2021_dsh}
                onChange={onChangeNumberInput}
                onBlur={formik.handleBlur}
              />
              <FormHelperText error>
                {formik.errors.numemployees2021_dsh === 'Required'
                  ? 'Please type the number of employees you had in 2021?'
                  : ''}
              </FormHelperText>
            </div>
            <div className="text-field">
              <InputLabel htmlFor="taxform_dsh">
                Which tax form do you file?
              </InputLabel>
              <FormControl>
                <Select
                  name="taxform_dsh"
                  value={formik.values.taxform_dsh}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="Tax Form"
                >
                  {taxFormOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText error>
                  {formik.errors.numemployees2021_dsh === 'Required'
                    ? 'Please select which tax form do you file?'
                    : ''}
                </FormHelperText>
              </FormControl>
            </div>
            <div className="text-field">
              <InputLabel htmlFor="fiscalyearend_dsh">
                What month is your fiscal year end?
              </InputLabel>
              <FormControl>
                <Select
                  name="fiscalyearend_dsh"
                  value={formik.values.fiscalyearend_dsh}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="Fiscal Year End"
                >
                  {months.map((month) => (
                    <MenuItem key={month} value={month}>
                      {month}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText error>
                  {formik.errors.numemployees2021_dsh === 'Required'
                    ? 'Please select what month is your fiscal year end?'
                    : ''}
                </FormHelperText>
              </FormControl>
            </div>
            <div className="text-field">
              <InputLabel htmlFor="firstyeartaxreturn_dsh">
                What is the first year in which you filed a tax return?
              </InputLabel>

              <YearPicker
                value={formik.values.firstyeartaxreturn_dsh}
                onChange={(value: any) => {
                  formik.setFieldValue(
                    'firstyeartaxreturn_dsh',
                    String(value),
                    true
                  );
                  formik.setFieldTouched('firstyeartaxreturn_dsh', true, true);
                }}
              />
              <FormHelperText error>
                {formik.errors.numemployees2021_dsh === 'Required'
                  ? 'Please what is the first year in which you filed a tax return?'
                  : ''}
              </FormHelperText>
            </div>
          </div>
        </Grid>
      </Grid>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitting}
      >
        Confirm
      </Button>
    </form>
  );
};

export default ErcForm;
