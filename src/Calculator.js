import React, { useState } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import DropDown from "./Dropdown";
import Results from "./Results";

import { Sheet, Typography, Stack } from "@mui/joy";
import FloatingLabelInput from "./FloatingLabelInput";

function Calculator() {
  const concentrationOptions = [
    { id: 1, name: "100 mg/ml", value: 100 },
    { id: 2, name: "200 mg/ml", value: 200 },
    { id: 3, name: "250 mg/ml", value: 250 },
  ];
  const frequencyOptions = [
    { id: 1, name: "Once Per Week", value: 1.0 },
    { id: 2, name: "Twice Per Week", value: 2.0 },
    { id: 3, name: "Three Times Per Week", value: 3.0 },
    { id: 4, name: "Every Other Day", value: 3.5 },
    { id: 5, name: "Daily", value: 7.0 },
  ];

  const [selectedConcentration, setSelectedConcentration] = useState(null);
  const [selectedFrequency, setSelectedFrequency] = useState(null);
  const [selectedWeeklyDose, setSelectedWeeklyDose] = useState(null);
  const [calculationTimeout, setCalculationTimeout] = useState(null);

  const handleConcentrationChange = (event, newValue) => {
    setSelectedConcentration(newValue);
  };

  const handleFrequencyChange = (event, newValue) => {
    setSelectedFrequency(newValue);
  };
  const handleWeeklyDose = (event) => {
    let inputWeeklyDose = event.target.value;
    clearTimeout(calculationTimeout);
    const numericValue = inputWeeklyDose.replace(/[^0-9]/g, "");

    const timeoutId = setTimeout(() => {
      setSelectedWeeklyDose(numericValue);
    }, 300); // Set a delay of 300 milliseconds before updating the selectedWeeklyDose

    setCalculationTimeout(timeoutId);
  };

  const handleKeyPress = (event) => {
    // Allow only numeric characters, Backspace, and arrow keys
    if (!/[0-9]|Backspace|ArrowLeft|ArrowRight/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <Sheet p={4}>
      <Typography variant="h5" gutterBottom>
        Testosterone Dose Calculator
      </Typography>
      <Stack spacing={2}>
        <FloatingLabelInput
          title={"Weekly Dose (mg)"}
          handler={handleWeeklyDose}
          inputValue={selectedWeeklyDose}
          handleKey={handleKeyPress}
        />

        <Select
          placeholder={"Vial Concentration"}
          onChange={handleConcentrationChange}
        >
          {concentrationOptions.map((option) => (
            <Option key={option.id} value={option.value}>
              {option.name}
            </Option>
          ))}
        </Select>

        <Select
          placeholder={"Injection Frequency"}
          onChange={handleFrequencyChange}
        >
          {frequencyOptions.map((option) => (
            <Option key={option.id} value={option.value}>
              {option.name} 
            </Option>
          ))}
        </Select>
      </Stack>
      {selectedWeeklyDose && selectedConcentration && selectedFrequency && (
        <Results
          max={30}
          weeklyAmt={selectedWeeklyDose}
          frequency={selectedFrequency}
          concentration={selectedConcentration}
        />
      )}
    </Sheet>
  );
}

export default Calculator;
