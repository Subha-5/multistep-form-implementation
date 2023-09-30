import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((prevStepIndex) => {
      if (prevStepIndex >= steps.length - 1) return prevStepIndex;
      return prevStepIndex + 1;
    });
  }
  function back() {
    setCurrentStepIndex((prevStepIndex) => {
      if (prevStepIndex <= 0) return prevStepIndex;
      return prevStepIndex - 1;
    });
  }
  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    goTo,
    next,
    back,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length-1,
  };
}
