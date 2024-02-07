import { useState } from 'react';
import { Grid } from '@mui/material';
import {
  businessExperienceQuestions,
  survey2FormData,
  allThatApplyMatrix,
  relationshipOptions,
} from '../../utils/formUtils';
import PaycheckProtectionGrid from './PaycheckProtectionGrid';
import SelectAllApplyGrid from './SelectAllApplyGrid';
import OwnershipGrid from './OwnershipGrid';
import ButtonConfirm from '../ButtonConfirm/ButtonConfirm';

import './Survey2Form.css';
import BusinessExperienceGrid from './BusinessExperienceGrid';

const Survey2Form = ({ handleSubmit }) => {
  const [formData, setFormData] = useState(survey2FormData());

  const updateValuesBasedOnIncomeQuarter = (formData) => {
    const grossIncomeQ12020 = Number(
      formData.grossIncomeEachQuarter?.[2020]?.Q1
    );
    const grossIncomeQ12019 = Number(
      formData.grossIncomeEachQuarter?.[2019]?.Q1
    );
    const grossIncomeQ12021 = Number(
      formData.grossIncomeEachQuarter?.[2021]?.Q1
    );

    const threshold2020 = 0.499999 * grossIncomeQ12019;
    const threshold2021 = 0.799999 * grossIncomeQ12019;

    Object.keys(formData.grossIncomeEachQuarter).forEach((year) => {
      Object.keys(formData.grossIncomeEachQuarter[year]).forEach((quarter) => {
        formData.grossIncomeEachQuarter[year][quarter] =
          Number(formData.grossIncomeEachQuarter[year][quarter]) || 0;
      });
    });

    if (grossIncomeQ12020 > threshold2020) {
      if (
        formData.revenueReduction50More2020 &&
        formData.revenueReduction50More2020[2020]
      ) {
        formData.revenueReduction50More2020[2020].Q2 = 'No';
        formData.revenueReduction50More2020[2020].Q3 = 'No';
        formData.revenueReduction50More2020[2020].Q4 = 'No';
      }
    } else {
      if (
        formData.revenueReduction50More2020 &&
        formData.revenueReduction50More2020[2020]
      ) {
        formData.revenueReduction50More2020[2020].Q2 = 'Yes';
        formData.revenueReduction50More2020[2020].Q3 = 'Yes';
        formData.revenueReduction50More2020[2020].Q4 = 'Yes';
      }
    }
    if (grossIncomeQ12021 > threshold2021) {
      if (
        formData.revenueReduction20More2021 &&
        formData.revenueReduction20More2021[2021]
      ) {
        formData.revenueReduction20More2021[2021].Q1 = 'No';
        formData.revenueReduction20More2021[2021].Q2 = 'No';
        formData.revenueReduction20More2021[2021].Q3 = 'No';
        formData.revenueReduction20More2021[2021].Q4 = 'No';
      }
    } else {
      if (
        formData.revenueReduction20More2021 &&
        formData.revenueReduction20More2021[2021]
      ) {
        formData.revenueReduction20More2021[2021].Q1 = 'Yes';
        formData.revenueReduction20More2021[2021].Q2 = 'Yes';
        formData.revenueReduction20More2021[2021].Q3 = 'Yes';
        formData.revenueReduction20More2021[2021].Q4 = 'Yes';
      }
    }
    return formData;
  };

  const handleChange = (event, question, index) => {
    const { value, checked } = event.target;

    console.log('question: ', question, 'value:', value, 'checked: ', checked);

    if (parseFloat(value) < 0) {
      console.log("Can't be negative");
      return;
    }

    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData };

      if (question === 'other') {
        updatedFormData.other = value;
      } else if (question === 'governmentRelatedShutdowns') {
        updatedFormData.governmentRelatedShutdowns = value;
      } else if (question === 'ppp1ForgivenessAmount') {
        updatedFormData.ppp1ForgivenessAmount = value;
      } else if (question === 'ppp2ForgivenessAmount') {
        updatedFormData.ppp2ForgivenessAmount = value;
      } else if (question.startsWith('ownershipData')) {
        const [key, fieldName] = question.split('.');
        console.log(key, fieldName);

        if (!updatedFormData[key]) {
          updatedFormData[key] = [...prevFormData[key]];
        }

        updatedFormData[key][index][fieldName] = value;
      } else if (
        [
          'fullShutdowns',
          'partialShutdowns',
          'interruptedOperations',
          'supplyChainInterruptions',
          'inabilityToAccessEquipment',
          'limitedCapacityToOperate',
          'inabilityToWorkWithYourVendors',
          'reductionInServicesOrGoods',
          'reductionInHoursOfOperation',
          'shiftingHoursForSanitation',
          'challengesInFindingEmployees',
          'other',
          'governmentRelatedShutdowns',
          'ownOtherBusinesses',
          'obtainPPPLoan1',
          'obtainPPPLoan2',
        ].includes(question)
      ) {
        updatedFormData[question] =
          value === 'true' ? true : value === 'false' ? false : value;
      } else {
        const [key1, key2, key3] = question.split('.');
        console.log('AFTER SPLIT', key1, key2, key3);

        if (!updatedFormData[key1]) {
          updatedFormData[key1] = {};
        }
        if (!updatedFormData[key1][key2]) {
          updatedFormData[key1][key2] = {};
        }
        console.log('key1, key2, value', key1, key2, value);
        if (
          key1 === 'governmentShutdownData' ||
          key1 === 'meetingInabilityData' ||
          key1 === 'supplyDisruptionPandemic' ||
          key1 === 'supplyDisruptionsDelays' ||
          key1 === 'grossIncomeEachQuarter' ||
          key1 === 'revenueReduction50More2020' ||
          key1 === 'revenueReduction20More2021' ||
          key1 === 'numberFullTimeW2sIssued'
        ) {
          updatedFormData[key1][key2][key3] = Number(value);
        }
      }

      console.log('BEFORE UPDATE VALUES', updatedFormData);
      updateValuesBasedOnIncomeQuarter(updatedFormData);
      console.log('AFTER UPDATE VALUES', updatedFormData);

      return updatedFormData;
    });
  };

  console.log(formData);

  function generateDataKey(row, colIndex) {
    const year = row[0][1];

    const selectedYear =
      colIndex >= 2 && colIndex <= 5
        ? 2019
        : colIndex >= 6 && colIndex <= 9
        ? 2020
        : colIndex >= 10 && colIndex <= 13
        ? 2021
        : null;
    const selectedQuarter =
      colIndex === 2 || colIndex === 6 || colIndex === 10
        ? 'Q1'
        : colIndex === 3 || colIndex === 7 || colIndex === 11
        ? 'Q2'
        : colIndex === 4 || colIndex === 8 || colIndex === 12
        ? 'Q3'
        : colIndex === 5 || colIndex === 9 || colIndex === 13
        ? 'Q4'
        : null;

    if (selectedYear && selectedQuarter) {
      return `${year}.${selectedYear}.${selectedQuarter}`;
    }

    return null;
  }

  return (
    <form className='form'>
      <Grid>
        <Grid container spacing={2}>
          <BusinessExperienceGrid
            businessExperienceQuestions={businessExperienceQuestions}
            formData={formData}
            handleChange={handleChange}
          />

          <PaycheckProtectionGrid
            formData={formData}
            handleChange={handleChange}
          />

          <SelectAllApplyGrid
            allThatApplyMatrix={allThatApplyMatrix}
            formData={formData}
            handleChange={handleChange}
            generateDataKey={generateDataKey}
          />

          <OwnershipGrid
            formData={formData}
            relationshipOptions={relationshipOptions}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent='flex-end' mt={4}>
        <ButtonConfirm />
      </Grid>
    </form>
  );
};

export default Survey2Form;
