import { useState } from "react"

export function useRegisterDocument(steps: JSX.Element[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(index: number) {

    if (index < 0 || index > steps.length) return
    
    setCurrentStep(index)
  }
  
  return {
    changeStep,
    currentComponent: steps[currentStep],
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    currentStep
  }
}