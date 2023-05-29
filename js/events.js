import { handleInput, handleSubmit, switchCurrency } from "./convert.js";
import { fetchCodes, handleTabClick } from "./main.js";
import { addCurrency, handeleSingleSelectChange, handleActionClick, handleAddSelectChange } from "./single.js";
import variables from "./variables.js";

const { amountInput, form, switchButton, tabs, currentCurrentcy, currentCurrencyList, singleSelect, addBtn, addCurrencySelect } = variables;

fetchCodes();

amountInput.addEventListener('keyup', handleInput);
form.addEventListener('submit', handleSubmit);
switchButton.addEventListener('click', switchCurrency);

tabs.forEach(tab => {
    tab.addEventListener('click', handleTabClick)
})

currentCurrentcy.addEventListener('click', handleActionClick);
currentCurrencyList.addEventListener('click', handleActionClick);
singleSelect.addEventListener('change', handeleSingleSelectChange);
addBtn.addEventListener('click', addCurrency);
addCurrencySelect.addEventListener('change', handleAddSelectChange);
