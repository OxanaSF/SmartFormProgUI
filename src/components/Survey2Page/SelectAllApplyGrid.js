import { Grid, Typography, TextField, Paper, Radio } from '@mui/material';
import { getClassNamesForAllThatApply } from '../../utils/gridUtils';
import './SelectAllApplyGrid.css';

const SelectAllApplyGrid = ({
  allThatApplyMatrix,
  formData,
  handleChange,
  generateDataKey,
}) => {
  return (
    <Grid container spacing={0} style={{ marginTop: '5%' }}>
      {allThatApplyMatrix.map((row, rowIndex) => (
        <Grid item xs={12} key={rowIndex}>
          <Paper>
            <Grid container spacing={0}>
              {row.map((col, colIndex) => (
                <Grid
                  item
                  key={colIndex}
                  xs={colIndex === 0 ? 4.6 : colIndex === 1 ? 0.2 : 0.6}
                  className={getClassNamesForAllThatApply(rowIndex, colIndex)}
                >
                  <Typography
                    className="survey-grid"
                    variant="body1"
                    align="center"
                  >
                    {col === 'O' ? (
                      <Radio
                        checked={formData[generateDataKey(row, colIndex)]}
                        control={<Radio />}
                        onChange={(event) =>
                          handleChange(event, generateDataKey(row, colIndex))
                        }
                      />
                    ) : col === 'T' ? (
                      <Grid item className="integer-field">
                        <TextField
                          type="number"
                          name={generateDataKey(row, colIndex)}
                          value={formData[generateDataKey(row, colIndex)]}
                          variant="outlined"
                          fullWidth
                          InputProps={{
                            inputProps: { min: 0 },
                            classes: {
                              root: 'no-border',
                            },
                          }}
                          onChange={(event) =>
                            handleChange(event, generateDataKey(row, colIndex))
                          }
                        />
                      </Grid>
                    ) : col === 'boolean' ? (
                      <TextField
                        className="boolean-container-cell"
                        name={generateDataKey(row, colIndex)}
                        value={formData[generateDataKey(row, colIndex)]}
                        variant="outlined"
                        type="text"
                        fullWidth
                        InputProps={{
                          classes: {
                            root: 'no-border',
                          },
                        }}
                        onChange={(event) =>
                          handleChange(event, generateDataKey(row, colIndex))
                        }
                      />
                    ) : colIndex === 0 ? (
                      col[0]
                    ) : (
                      col
                    )}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default SelectAllApplyGrid;
