import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';

const PaycheckProtectionGrid = ({ formData, handleChange }) => {
  return (
    <Grid className="form-right-col">
      <Paper>
        <Grid container item xs={12}>
          <Grid item xs={9} className="business-survey-form-first-col">
            <Typography variant="subtitle1">
              Paycheck Protection Program (PPP)
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

        <Grid container item xs={12} spacing={0}>
          <Grid item xs={9} className="second-row-left">
            <Typography variant="body1">Did you obtain PPP loan 1? </Typography>
          </Grid>
          <Grid
            item
            xs={0.5}
            className={`question-div empty-column empty-middle`}
          ></Grid>
          <Grid item xs={2.5} spacing={2} className="third-row-right">
            <RadioGroup
              value={formData.obtainPPPLoan1}
              onChange={(event) => handleChange(event, 'obtainPPPLoan1')}
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

        <Grid container item xs={12} spacing={0}>
          <Grid item xs={9}>
            <Typography>
              If PPP loan 1 was forgiven, enter forgiveness amount:
            </Typography>
          </Grid>

          <Grid
            item
            xs={0.5}
            className={`question-div empty-column empty-middle`}
          ></Grid>

          <Grid item xs={2.5} spacing={2} className="third-row-right">
            <TextField
              name="ppp1ForgivenessAmount"
              value={formData.ppp1ForgivenessAmount}
              variant="outlined"
              type="number"
              fullWidth
              InputProps={{
                notched: false,
                classes: {
                  root: 'no-border',
                },
              }}
              onChange={(event) => handleChange(event, 'ppp1ForgivenessAmount')}
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={0}>
          <Grid item xs={9} className="second-row-left">
            <Typography variant="body1">Did you obtain PPP loan 2? </Typography>
          </Grid>
          <Grid
            item
            xs={0.5}
            className={`question-div empty-column empty-middle`}
          ></Grid>
          <Grid item xs={2.5} spacing={2} className="third-row-right">
            <RadioGroup
              value={formData.obtainPPPLoan2}
              onChange={(event) => handleChange(event, 'obtainPPPLoan2')}
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

        <Grid container item xs={12} spacing={0}>
          <Grid item xs={9} className="second-row-left paycheck-bottom">
            <Typography variant="body1">
              If PPP loan 2 was forgiven, enter forgiveness amount:
            </Typography>
          </Grid>

          <Grid
            item
            xs={0.5}
            className={`question-div empty-column empty-middle`}
          ></Grid>

          <Grid
            item
            xs={2.5}
            spacing={2}
            className="third-row-right paycheck-bottom"
          >
            <TextField
              name="ppp2ForgivenessAmount"
              value={formData.ppp2ForgivenessAmount}
              variant="outlined"
              type="number"
              fullWidth
              InputProps={{
                notched: false,
                classes: {
                  root: 'no-border',
                },
              }}
              onChange={(event) => handleChange(event, 'ppp2ForgivenessAmount')}
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PaycheckProtectionGrid;