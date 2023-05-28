import { handleInput, handleSubmit } from "./convert.js";
import { fetchCodes } from "./main.js";
import variables from "./variables.js";

const { amountInput, form } = variables;

fetchCodes();

amountInput.addEventListener('keyup', handleInput);
form.addEventListener('submit', handleSubmit);