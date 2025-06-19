
const firstInput = document.getElementsByClassName("email-input")[0]
const secondInput = document.getElementsByClassName('password-input')[0]
const thirdInput = document.getElementsByClassName('password-input')[1]
const nextButton = document.getElementsByClassName('next')[0]
const btnContainer = document.querySelector('.buttons')
const inputContainer = document.querySelector('.inputs')
const termsSwitch = document.querySelector('.terms-switch')



function regSecondStage(){

    firstInput.classList.add('nickname-input')


    if (firstInput.classList.contains('nickname-input')) {
        firstInput.placeholder = 'Nickname';
    } else {
        firstInput.placeholder = 'Email';
    }

    secondInput.classList.add('number-input')

     if (secondInput.classList.contains('number-input')) {
        secondInput.placeholder = 'Number';
    } else {
        secondInput.placeholder = 'Password';
    }

    thirdInput.remove();
    nextButton.remove();


    const backBtn = document.createElement("button");
    backBtn.textContent = 'Back';
    backBtn.className = 'back';
    backBtn.onclick = regBack;
    btnContainer.appendChild(backBtn)

    termsSwitch.classList.remove('hidden')

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit"
    submitBtn.className = "submit"
    btnContainer.appendChild(submitBtn)
}

console.log(container)

function regBack(){

    firstInput.classList.remove('nickname-input')


    if (firstInput.classList.contains('nickname-input')) {
        firstInput.placeholder = 'Nickname';
    } else {
        firstInput.placeholder = 'Email';
    }

    secondInput.classList.remove('number-input')

     if (secondInput.classList.contains('number-input')) {
        secondInput.placeholder = 'Number';
    } else {
        secondInput.placeholder = 'Password';
    }

    inputContainer.append(thirdInput)
    btnContainer.append(nextButton)

    const backBtn = document.querySelector('.back')
    backBtn.remove();

    termsSwitch.classList.add('hidden')

    const submitBtn = document.querySelector('.submit')
    submitBtn.remove();
}