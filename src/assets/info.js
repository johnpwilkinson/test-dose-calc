export const info = [{
    name: "hCG",
    inputs: [{
      name: "vialAmount",
      label: "Amount of hCG in Vial",
      decorator: "iU"
    },
    {
      name: "waterAmount",
      label: "Amount of bacteriostatic water",
      decorator: "ml"
    },
    {
      name: "weeklyDose",
      label: "Weekly Dose",
      decorator: "iU"
    },
    {
      name: "injectionFrequency",
      label: "Injection Frequency",
      decorator: "injections / week"
    }]
  },
  {
    name: "TRT",
    inputs: [{
      name: "weeklyDose",
      label: "Weekly Dose",
      decorator: "mg"
    },
    {
      name: "concentration",
      label: "Vial Concentration",
      decorator: "mg/ml",
      val: ''
    },
    {
      name: "injectionFrequency",
      label: "Injection Frequency",
      decorator: "injections / week"
    }]
  }]
  