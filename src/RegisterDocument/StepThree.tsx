import { Typography } from "@mui/material";
import { Data } from ".";

interface StepThreeProps {
  data: Data
}

export function StepThree({ data }: StepThreeProps) {
  return (
    <>
      <Typography>Name: {data.name}</Typography>
      <Typography>Status: {data.status}</Typography>
    </>
  )
}