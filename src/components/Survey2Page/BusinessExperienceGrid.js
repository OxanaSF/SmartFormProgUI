import React, { Fragment } from 'react';

import {
  Grid,
  Typography,
  TextField,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';

import './BusinessExperienceGrid.css';

const BusinessExperienceGrid = ({
  businessExperienceQuestions,
  formData,
  handleChange,
}) => {
  return (
    <Grid className="form-left-col">
      <Paper>
        <Grid container>
          <Grid container item xs={12}>
            <Grid item xs={9} className="business-survey-form-first-col">
              <Typography variant="subtitle1">
                Did your business experience any of the following?
              </Typography>
            </Grid>

            <Grid
              item
              xs={0.5}
              className={`question-div empty-column empty-top`}
            ></Grid>

            <Grid item xs={2.5} className="yes-no-header">
              <Typography variant="subtitle1">Yes No</Typography>
            </Grid>
          </Grid>

          {businessExperienceQuestions.map((question, index) => (
            <Fragment key={index}>
              <Grid item xs={9} className="second-row-left">
                <Typography variant="body1">{question.question}</Typography>
              </Grid>

              <Grid
                item
                xs={0.5}
                className={`question-div empty-column empty-middle`}
              ></Grid>
              <Grid item xs={2.5} spacing={0} className="third-row-right">
                <RadioGroup
                  value={formData.name}
                  onChange={(event) => handleChange(event, question.name)}
                  row
                >
                  <FormControlLabel value="true" control={<Radio />} />
                  <FormControlLabel value="false" control={<Radio />} />
                </RadioGroup>
              </Grid>
            </Fragment>
          ))}

          <Grid item xs={12} className="third-row">
            <Paper>
              <Grid container item xs={12} spacing={0}>
                <Grid item xs={12}>
                  <label className="shutdowns-label">Other:</label>
                  <TextField
                    name="other"
                    value={formData.other}
                    sx={{ width: '100%' }}
                    multiline
                    onChange={(event) => handleChange(event, 'other')}
                  />
                </Grid>

                <Grid item xs={12}>
                  <label className="shutdowns-label">
                    If affected by shutdowns, what standards or operating
                    procedures were followed related to government orders:
                  </label>
                  <TextField
                    name="governmentRelatedShutdowns"
                    value={formData.governmentRelatedShutdowns}
                    id="outlined-start-adornment"
                    sx={{ width: '100%', textAlign: 'left' }}
                    InputProps={{
                      notched: false,
                      classes: {
                        root: 'no-border',
                      },
                      style: { fontSize: '8px' },
                    }}
                    multiline
                    onChange={(event) =>
                      handleChange(event, 'governmentRelatedShutdowns')
                    }
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid container item xs={12} spacing={1} className="fourth-row">
            <Grid item xs={12}></Grid>
          </Grid>

          <Grid container item xs={12} spacing={1} className="fifth-row">
            <Grid item xs={9} className="fifth-left">
              <Typography variant="body1">
                Do you own any other businesses (even 1% stake in other
                businesses)?{' '}
              </Typography>
            </Grid>
            <Grid
              item
              xs={0.5}
              className={`question-div empty-column empty-bottom`}
            ></Grid>

            <Grid item xs={2.5} className="fifth-right">
              <RadioGroup
                value={formData.ownOtherBusinesses}
                onChange={(event) => handleChange(event, 'ownOtherBusinesses')}
                row
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio />}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="No"
                  control={<Radio />}
                  labelPlacement="end"
                />
              </RadioGroup>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default BusinessExperienceGrid;
