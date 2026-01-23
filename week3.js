const areaBtn = document.getElementById("Area_Btn");
const perimeterBtn = document.getElementById("Perimeter_Btn");
const averageBtn = document.getElementById("Average_Btn");
const bmiBtn = document.getElementById("BMI_Btn");
const minuteBtn = document.getElementById("Minute_Btn");
const maxValueBtn = document.getElementById("MaxValue_Btn");

const output = document.getElementById("output");

const getValues = () => {
  const one = Number(document.getElementById("one").value);
  const two = Number(document.getElementById("two").value);
  return { one, two };
};

// calc area
const calcArea = () => {
  const { one, two } = getValues();
  const result = one * two;
  output.innerHTML = `Result calcArea is ${result}`;
};

// calc perimeter
const calcPerimeter = () => {
  const { one, two } = getValues();
  const result = (one + two) * 2;
  output.innerHTML = `Result calcPerimeter is ${result}`;
};

const calcAvergage = () => {
  const { one, two } = getValues();
  const result = (one + two) / 2;
  output.innerHTML = `Result calcAverage is ${result}`;
};

const calcBmi = () => {
  const { one, two } = getValues();
  output.innerHTML = `Result calcBMI is Weight ${one} and Heghit ${two}`;
};

const calcMinute = () => {
  const { one, two } = getValues();
  output.innerHTML = `Result calcBMI is Hour ${one} and Minute ${two}`;
};

const calcMaxValue = () => {
  const { one, two } = getValues();
  const result = Math.max(one, two);
  output.innerHTML = `Result calcMaxValue is ${result}`;
};

const resetBtn = document.getElementById("Reset_Btn");

const resetAll = () => {
  document.getElementById("one").value = "";
  document.getElementById("two").value = "";
  output.innerHTML = "";
};

resetBtn.addEventListener("click", resetAll);

// event listeners
areaBtn.addEventListener("click", calcArea);
perimeterBtn.addEventListener("click", calcPerimeter);
averageBtn.addEventListener("click", calcAvergage);
bmiBtn.addEventListener("click", calcBmi);
minuteBtn.addEventListener("click", calcMinute);
maxValueBtn.addEventListener("click", calcMaxValue);
