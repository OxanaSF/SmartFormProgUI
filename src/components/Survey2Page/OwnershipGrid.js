import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Grid, Typography, TextField } from '@mui/material';
import './OwnershipGrid.css';







const OwnershipGrid = ({ formData, relationshipOptions }) => {
  const [rows, setRows] = useState([formData.ownershipData]);

  const handleAddRow = () => {
    setRows([
      ...rows,
      { ownerFullName: '', percentage: '', fullName: '', relationship: '' },
    ]);
  };

  const handleInputChange = (index, fieldName, value) => {
    const updatedRows = [...rows];
    updatedRows[index][fieldName] = value;
    setRows(updatedRows);
  };

  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid container item spacing={1}>
          <Grid item xs={3}>
            <Typography variant="subtitle1">Ownership</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1">Percentage</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1">Full Name</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1">Relationship</Typography>
          </Grid>
        </Grid>

        {rows.map((row, index) => (
          <Grid
            container
            item
            spacing={1}
            key={index}
            className="ownership-table"
          >
            <Grid item xs={3} className="ownership-row remove-underline">
              <TextField
                value={row.ownerFullName}
                onChange={(e) =>
                  handleInputChange(index, 'ownerFullName', e.target.value)
                }
                fullWidth
                placeholder="Full Name"
                InputProps={{
                  notched: false,
                  classes: {
                    root: 'no-border',
                  },
                }}
              />
            </Grid>
            <Grid item xs={3} className="ownership-row">
              <TextField
                value={row.percentage}
                onChange={(e) =>
                  handleInputChange(index, 'percentage', e.target.value)
                }
                fullWidth
                placeholder="%"
                InputProps={{
                  notched: false,
                  classes: {
                    root: 'no-border',
                  },
                }}
              />
            </Grid>
            <Grid item xs={3} className="ownership-row">
              <TextField
                value={row.fullName}
                onChange={(e) =>
                  handleInputChange(index, 'fullName', e.target.value)
                }
                fullWidth
                placeholder="Full Name"
                InputProps={{
                  // notched: false,
                  classes: {
                    root: 'no-border',
                  },
                }}
              />
            </Grid>
            <Grid item xs={3} className="ownership-row">
              <TextField
                select
                value={row.relationship}
                defaultValue="Owner himself"
                onChange={(e) =>
                  handleInputChange(index, 'relationship', e.target.value)
                }
                fullWidth
                InputProps={{
                  notched: false,
                  classes: {
                    root: 'no-border',
                  },
                }}
              >
                {relationshipOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        ))}

        <Grid
          container
          item
          xs={12}
          justifyContent="flex-end"
          className="custom-button-container"
        >
          <Button
            variant="outlined"
            onClick={handleAddRow}
            fullWidth
            className="custom-button"
          >
            <span>+</span>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OwnershipGrid;