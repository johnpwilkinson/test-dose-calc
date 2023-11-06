import React, { useState } from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import FormLabel from "@mui/joy/FormLabel";

export default function Form3({ activeCompound, setResults, isTrt }) {
  const [weeklyDose, setWeeklyDose] = useState(null);
  const [concentration, setConcentration] = useState(null);
  const [injectionFrequency, setInjectionFrequency] = useState(null);
  const [vialAmount, setVialAmount] = useState(null);
  const [waterAmount, setWaterAmount] = useState(null);

  const handleInputChange = (e) => {
    const newValue = parseFloat(e.target.value);

    switch (e.target.name) {
      case "weeklyDose":
        setWeeklyDose(newValue);
        break;
      case "concentration":
        setConcentration(newValue);
        break;
      case "injectionFrequency":
        setInjectionFrequency(newValue);
        break;
      case "vialAmount":
        setVialAmount(newValue);
        break;
      case "waterAmount":
        setWaterAmount(newValue);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    setResults({
      name: activeCompound.name,
      summary: {
        weeklyDose: weeklyDose,
        injectionFrequency: injectionFrequency,
        concentration: isTrt ? concentration : vialAmount / waterAmount,
      },
    });
    // Clear the local state
    setWeeklyDose(null);
    setConcentration(null);
    setInjectionFrequency(null);
    setVialAmount(null);
    setWaterAmount(null);
  };

  const stateSelector = {
    weeklyDose: weeklyDose,
    concentration: concentration,
    injectionFrequency: injectionFrequency,
    waterAmount: waterAmount,
    vialAmount: vialAmount,
  };

  return (
    <Stack spacing={1}>
      {activeCompound.inputs.map((input) => (
        <div key={input.name}>
          <FormLabel>{input.label}</FormLabel>
          <Input
            onChange={handleInputChange}
            name={input.name}
            value={stateSelector[input.name] || ""} // Control the input value directly from state
            endDecorator={<Button>{input.decorator}</Button>}
            type="number"
            required
          />
        </div>
      ))}
      <Button onClick={handleSubmit}>Submit</Button>
    </Stack>
  );
}
