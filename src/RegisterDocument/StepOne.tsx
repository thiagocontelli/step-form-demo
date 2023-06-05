import { TextField } from "@mui/material";
import { Data } from ".";

interface StepOneProps {
  data: Data,
  changeDataHandler(key: string, value: string): void
}

export function StepOne({ data, changeDataHandler }: StepOneProps) {
  return (
    <TextField fullWidth value={data.name} onChange={e => changeDataHandler('name', e.target.value)} label='Name' />
  )
}