import React from "react";
import { Sheet, Card, CardContent, Typography, Stack, Divider } from "@mui/joy";
import { ReactComponent as DL } from "./assets/dl.svg";
import {
  calculateDose,
  computeSlin,
  formatFrequency,
} from "./maths";

export default function Results(props) {
  const result = calculateDose(
    props.weeklyAmt,
    props.frequency,
    props.concentration
  );

  // const hcgResult = calculatePeptideConcentration(
  //   props.amtVial,
  //   props.amtWater,
  //   props.weeklyAmt
  // );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
     
        <Card style={{ width: "90%", maxWidth: "500px" }}>
          <div id="results">
            <CardContent
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ flex: 1 }}>
                <Typography variant="h6" style={{ textAlign: "center" }}>
                  Testosterone Dosing Results
                </Typography>
              </div>
              <div>
                <DL
                  style={{ height: "2rem", width: "2rem" }}
                  onClick={props.handleScreenshot}
                />
              </div>
            </CardContent>

            <CardContent>
              <Stack divider={<Divider />} spacing={4}>
                <Sheet>
                  <Typography variant="overline">Summary</Typography>
                  <Typography variant="body2" paragraph="true">
                    Weekly Dose: {props.weeklyAmt} mg
                  </Typography>
                  <Typography variant="body2" paragraph="true">
                    Injection Frequency: {formatFrequency(props.frequency)}
                  </Typography>
                  <Typography variant="body2" paragraph="true">
                    Concentration: {props.concentration} mg/ml
                  </Typography>
                </Sheet>
                <Sheet>
                  <Typography variant="overline">Result</Typography>
                  <Typography variant="body2" paragraph="true">
                    {result} ml per injection
                  </Typography>
                  <Typography variant="body2" paragraph="true">
                    {computeSlin(result)} units in insulin syringe
                  </Typography>
                </Sheet>
              </Stack>
            </CardContent>
          </div>
        </Card>
      </div>
  )
}
