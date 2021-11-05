export const calculateBMI = (height, heightUnit, weight, weightUnit) => {
  let H = null;
  let W = null;
  let status = null;

  if (heightUnit === "inches") H = parseFloat(height) * 0.0254;
  else H = parseFloat(height);

  if (weightUnit === "pound") W = parseFloat(weight) * 0.453592;
  else W = parseFloat(weight);

  const res = W / (H * H);
  if (res < 18.5) status = "Underweight";
  else if (res <= 24.9) status = "Normal";
  else if (res <= 29.9) status = "Overweight";
  else status = "Obese";

  return { bmi: res.toFixed(2), status: status };
};
