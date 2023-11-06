import React from "react";
import { Card, CardContent, Typography } from "@mui/joy";
import { calculateDose, computeSlin } from "../utils/maths";
import Table from "@mui/joy/Table";

export default function Resultz({ results, isTrt }) {
  const { weeklyDose, concentration, injectionFrequency } = results.summary;
  const amountMl = calculateDose(weeklyDose, injectionFrequency, concentration);
  const amountUnits = computeSlin(amountMl);
  const measurements = isTrt
    ? {
        doseMeasurement: "mg",
        doseVol: "ml",
      }
    : {
        doseMeasurement: "iU",
        doseVol: "ml",
      };
  return (
    <Card variant="solid" color="primary" invertedColors>
      <CardContent>
        <Typography level="h2" gutterBottom>
          {results.name} Protocol Summary
        </Typography>
        <Table>
          <tr>
            <td style={{textAlign: 'right'}}>Weekly Dose :</td>
            <td style={{textAlign: 'left'}}>
              {weeklyDose} {measurements.doseMeasurement}
            </td>
          </tr>
          <tr>
            <td style={{textAlign: 'right'}}>Vial Concentration :</td>
            <td style={{textAlign: 'left'}}>
              {concentration} {measurements.doseMeasurement} /{" "}
              {measurements.doseVol}
            </td>
          </tr>
          <tr>
            <td style={{textAlign: 'right'}}>Injection Frequency :</td>
            <td style={{textAlign: 'left'}}>{injectionFrequency} times per week</td>
          </tr>
          <tr>
            <td style={{textAlign: 'right'}}>ml per injection :</td>
            <td style={{textAlign: 'left'}}>
              {amountMl} {measurements.doseVol}
            </td>
          </tr>
          <tr>
            <td style={{textAlign: 'right'}}>units in syringe :</td>
            <td style={{textAlign: 'left'}}>{amountUnits} units</td>
          </tr>
        </Table>
      </CardContent>
    </Card>
  );
}
