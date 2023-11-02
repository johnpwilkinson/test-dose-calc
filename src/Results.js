import React from "react";
import { Sheet, Card, CardContent, Typography, Stack, Divider } from "@mui/joy";
import { ReactComponent as DL } from "./assets/dl.svg";
import {
  calculateDose,
  calculatePeptideConcentration,
  computeSlin,
  formatFrequency,
} from "./maths";
export default function Results(props) {
  const result = calculateDose(
    props.weeklyAmt,
    props.frequency,
    props.concentration
  );

  const hcgResult = calculatePeptideConcentration(
    props.amtVial,
    props.amtWater,
    props.weeklyAmt
  );
  console.log(hcgResult);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
      {props.isTrt ? (
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
                  <Typography variant="body2" paragraph>
                    Weekly Dose: {props.weeklyAmt} mg
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Injection Frequency: {formatFrequency(props.frequency)}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Concentration: {props.concentration} mg/ml
                  </Typography>
                </Sheet>
                <Sheet>
                  <Typography variant="overline">Result</Typography>
                  <Typography variant="body2" paragraph>
                    {result} ml per injection
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {computeSlin(result)} units in insulin syringe
                  </Typography>
                </Sheet>
              </Stack>
            </CardContent>
          </div>
        </Card>
      ) : (
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
                  hCG Dosing Results
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
                  <Typography variant="body2" paragraph>
                    Weekly Dose: {props.weeklyAmt} iu
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Vial Amount: {props.amtVial} iu
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Bariostatic Water: {props.amtWater} ml
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Concentration: {props.amtVial / props.amtWater} iu/ml
                  </Typography>
                </Sheet>
                <Sheet>
                  <Typography variant="overline">Result</Typography>
                  <Typography variant="body2" paragraph>
                    {hcgResult.iu} ml per injection
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {hcgResult.slin} units in insulin syringe
                  </Typography>
                </Sheet>
              </Stack>
            </CardContent>
          </div>
        </Card>
      )}
    </div>
  );
}
