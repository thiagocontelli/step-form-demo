/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Container } from "@mui/material";
import { useState } from "react";
import { StepOne } from "./StepOne";
import { StepThree } from "./StepThree";
import { StepTwo } from "./StepTwo";
import { useRegisterDocument } from "./useRegisterDocument";

export interface Data {
  name: string
  status: string
}

export function RegisterDocument() {
  const initalState = {
    name: "",
    status: "",
  }

  const [data, setData] = useState<Data>(initalState)

  function changeDataHandler(key: string, value: any) {
    setData(state => {
      return { ...state, [key]: value }
    })
  }

  const steps = [
    <StepOne data={data} changeDataHandler={changeDataHandler} />,
    <StepTwo data={data} changeDataHandler={changeDataHandler} />,
    <StepThree data={data} />
  ]

  const { changeStep, currentComponent, isFirstStep, isLastStep, currentStep } = useRegisterDocument(steps)

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: '3rem', my: '2rem' }}>
      {currentComponent}

      <Box
        display='flex'
        justifyContent='space-between'
      >
        <Button disabled={isFirstStep} onClick={() => changeStep(currentStep - 1)}>Back</Button>
        <Button sx={{ display: isLastStep ? 'none' : 'initial' }} onClick={() => changeStep(currentStep + 1)}>Next</Button>
        <Button sx={{ display: isLastStep ? 'initial' : 'none' }} onClick={() => alert('Success!')}>Finish</Button>
      </Box>
    </Container>
  )
}