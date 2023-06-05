import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Data } from ".";

interface StepTwoProps {
  data: Data,
  changeDataHandler(key: string, value: string): void
}

export function StepTwo({ changeDataHandler, data }: StepTwoProps) {
  const options = ['Active', 'Inactive', 'Expired']

  return (
    <FormControl>
      <InputLabel>Status</InputLabel>
      <Select
        value={data.status}
        label='Status'
        onChange={(e) => changeDataHandler('status', e.target.value as string)}
      >
        {options.map((item, index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}