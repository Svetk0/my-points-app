let errors = [];

function checkValidity(input) {
    //let validity = input.validity;
    const errors = [];
    if (input) {
        errors.push("Error in get request");
    }
    // if (validity.patternMismatch) {
    //     errors.push("Неверный формат заполнения");
    // }
    // if (validity.rangeOverflow) {
    //     errors.push("Значение превосходит максимально допустимое");
    // }
  
    // if (validity.rangeUnderflow) {
    //     errors.push("Значение меньше минимально допустимого");
    // }
  
    // if (validity.stepMismatch) {
    //     errors.push("Недопустимое значение в соответствии с шагом");
    // }
  
    // if (validity.tooLong) {
    //     errors.push("Значение слишком длинное");
    // }
  
    // if (validity.tooShort) {
    //     errors.push("Значение слишком короткое");
    // }
  
    // if (validity.valueMissing) {
    //     errors.push("Необходимо заполнить поле");
    // }
    return errors.length ? errors.join(". \n") : "";
}

export function checkAll(inputs) {
    errors = [];
    //let inputs = document.querySelectorAll("input");
    let errorDiv = document.querySelector(".card-main-error");
    errorDiv.textContent = "";
    errors.push(checkValidity(inputs));

    // for (let input of inputs) {
    //     let error = checkValidity(input);
    //     if (error) {
    //         errors.push(error);
    //     }
    // }

    if (errors.length > 0) {
        errorDiv.classList.remove('errorsInfo-content');
        errorDiv.classList.add('errorsInfo');
        errorDiv.innerHTML = errors.join('.  <br>');
    }
}