export function calculateDose(weeklyAmt, frequency, concentration) {
  console.log(weeklyAmt, frequency, concentration)
  const result = weeklyAmt / frequency / concentration;

  return parseFloat(result.toFixed(6));
}

export function formatFrequency(frequency) {
  if (frequency > 1) {
    return `${frequency} times per week`;
  } else {
    return `${frequency} time per week`;
  }
}

export function computeSlin(ml) {
  let unit = 0.01;
  let result = ml / unit;
  return parseFloat(result.toFixed(4));
}

export function calculatePeptideConcentration(
  amountPowder,
  amountWater,
  desiredDose
) {
  console.log(amountPowder, amountWater, desiredDose);
  const constituted = amountPowder / amountWater;
  const dose = desiredDose / constituted;
  const amount = dose * 100;
  return { iu: dose, slin: amount };
}

// To calculate how many units to draw into an insulin syringe, you can use the following formula:

// Units to draw = Desired IU amount / Concentration

// In your case, you have:

// Desired IU amount: 250 IU
// Concentration: 6000 IU per 3 mL (you mentioned you mixed 6000 IU powder with 3 mL of bacteriostatic water)
// So, to calculate the units to draw:

// Units to draw = 250 IU / (6000 IU / 3 mL)

// First, calculate the concentration in IU per mL:

// Concentration = 6000 IU / 3 mL = 2000 IU/mL

// Now, calculate the units to draw:

// Units to draw = 250 IU / 2000 IU/mL = 0.125 mL

// Since insulin syringes are typically marked in units, you would need to convert 0.125 mL to units. Most insulin syringes have 100 units per 1 mL.

// Units to draw = 0.125 mL * 100 units/mL = 12.5 units

// So, you would need to draw 12.5 units of the solution into your insulin syringe to obtain 250 IU of the peptide.
