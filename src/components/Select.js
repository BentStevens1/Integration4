import { FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectChip({ label, options, field, error }) {
  const theme = useTheme();

  return (
    <FormControl error={!!error} required sx={{ m: 1 }}>
      <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
      <Select
        {...field}
        defaultOpen
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            <Chip style={{ backgroundColor: 'white' }} key={selected} label={options.find(check => check.id === selected).name} />
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {options.map(({ id, name }) => (
          <MenuItem
            key={id}
            value={id}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>

  );
}