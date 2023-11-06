import React, { useState, useEffect } from "react";
import Selector from "./Selector";
import { Card, CardContent, Typography } from "@mui/joy";
import { info } from "../assets/info";
import Form3 from "./Form";
import Resultz from "./Results";

function Calculator() {
  const [isTrt, setIsTrt] = useState(true);
  const [activeCompound, setActiveCompound] = useState(info[1]);
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (isTrt) {
      setActiveCompound(info[1]);
    } else {
      setActiveCompound(info[0]);
    }
  }, [isTrt]);

  const toggleTrt = () => {
    setIsTrt((prevIsTrt) => !prevIsTrt);
    setResults(null);
  };

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
    <Card variant="solid" color="primary" invertedColors style={{}}>
      <CardContent>
        <Typography level="h2" gutterBottom>
          {activeCompound.name} Dose Calculator
        </Typography>
        <Selector toggleTrt={toggleTrt} />
        <Form3
          activeCompound={activeCompound}
          setResults={setResults}
          isTrt={isTrt}
        />
      </CardContent>
      {results !== null ? (
        <Resultz
          results={results}
          activeCompound={activeCompound}
          isTrt={isTrt}
        />
      ) : (
        <></>
      )}
    </Card>
    </div>
  );
}

export default Calculator;
