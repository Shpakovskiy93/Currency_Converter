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