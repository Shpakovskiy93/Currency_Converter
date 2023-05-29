import state from "./state.js";
import { getFullTitle } from "./utils.js";

export const renderResult = ({code, amount, full}) => {
    return `
    <div class="form__result-item-icon icon">
        <img src="./img/arrow.svg" alt="from currencies">
    </div>

    <div class="form__result-item-titles">
        <div class="form__result-item-title">${code}</div>
        <div class="form__result-item-full">${full}</div>
    </div>

    <div class="form__result-item-value">${amount.toFixed(2)}</div>
    `;
}

const getCurrencyItemAction = (isBase) => {
    const { actions: {remove, change} } = state;

    const  actionName = isBase ? change : remove;

    return `
    <button class="currency__${actionName} currency-btn" data-action='${actionName}'>${actionName}</button> 
    `
}

export const renderCurrencyItem = ({ code, rate = 1, base_code }) => {

    const isBase = code === base_code;

    const action = getCurrencyItemAction(isBase);

    const full = getFullTitle(state.codes, code);


    return `
    <div class="currency__item ${isBase ? 'currency-current' : ''}" data-item='${code}'>
        <div class="currency__titles">
            <div class="currency__title">${code}</div>
            <div class="currency__full">${full}</div>
        </div>

        <div class="currency__amount">${rate.toFixed(2)}</div>
        <div class="currency__action">${action}</div>
    </div>
    `;
}