import { useState, useEffect } from 'react';
import {
  createContactFormData,
  createContactHTML,
} from '../../utils/formUtils';
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
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import ButtonConfirm from '../ButtonConfirm/ButtonConfirm';
import { useAuth0 } from '@auth0/auth0-react';
import UsStatePicker from './UsStatePicker';
import './CreateContactForm.css';

const CreateContactForm = ({ onSubmit }) => {
  const [createContactData, setCreateContactData] = useState(
    createContactFormData()
  );
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user?.name) {
      setCreateContactData((prevData) => ({
        ...prevData,
        email: user.name,
      }));
    }
  }, [isAuthenticated, user.name]);

  const handleInputChange = (e) => {
    console.log(`${e.target.name} changed: ${e.target.value}`);

    setCreateContactData((prevData) => {
      const newData = {
        ...prevData,
        [e.target.name]: e.target.value,
      };
      console.log('Updated createContactData:', newData);
      return newData;
    });
  };

  return (
    isAuthenticated &&
    user.name && (
      <div>
        <form className="create-contact-form">
          {createContactHTML.map((field) => (
            <div key={field.name} className={field.className}>
              <InputLabel htmlFor={field.name}>{field.label}</InputLabel>

              {field.numberW2Employees ? (
                <FormControl>
                  <Select
                    name={field.name}
                    value={createContactData[field.name]}
                    onChange={handleInputChange}
                    required={field.required}
                  >
                    {field.numberW2Employees.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : field.preferredLanguage ? (
                <FormControl>
                  <Select
                    name={field.name}
                    value={createContactData[field.name]}
                    onChange={handleInputChange}
                    required={field.required}
                  >
                    {field.preferredLanguage.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : field.isCompanyOwner || field.previouslyFilledForERC ? (
                <FormControl component="fieldset">
                  <RadioGroup
                    name={field.name}
                    value={createContactData[field.name]}
                    onChange={handleInputChange}
                    required={field.required}
                  >
                    <div className="radio-btn-yn-container">
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              ) : field.name === 'phoneNumber' ? (
                <InputMask
                  mask="+1 (999) 999-9999"
                  maskChar=""
                  value={createContactData[field.name]}
                  onChange={handleInputChange}
                >
                  {(inputProps) => (
                    <TextField
                      {...inputProps}
                      type="tel"
                      name={field.name}
                      required={field.required}
                    />
                  )}
                </InputMask>
              ) : (
                <TextField
                  type="text"
                  name={field.name}
                  value={createContactData[field.name]}
                  onChange={handleInputChange}
                />
              )}
            </div>
          ))}
          <ButtonConfirm onSubmit={onSubmit} />
        </form>
      </div>
    )
  );
};

export default CreateContactForm;
