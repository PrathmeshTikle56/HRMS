// components/Stepper.tsx
import React from "react";
import { Stepper as FormStepper, Step } from "react-form-stepper";

type StepperProps = {
  steps: string[];
  activeStep: number;
  children: React.ReactNode;
  styleConfig?: {
    activeBgColor?: string;
    completedBgColor?: string;
    inactiveColor?: string;
    size?: number;
    circleFontSize?: number;
    labelFontSize?: number;
    fontWeight?: number;
  };
};

const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  children,
  styleConfig,
}) => {
  styleConfig = {
    activeBgColor: "#124Afc",
    completedBgColor: "#000",
  };
  return (
    <div>
      <FormStepper activeStep={activeStep} styleConfig={styleConfig}>
        {steps.map((label, index) => (
          <Step key={index} label={label} />
        ))}
      </FormStepper>

      <div className="mt-6">
        {Array.isArray(children) ? children[activeStep] : children}
      </div>
    </div>
  );
};

export default Stepper;
