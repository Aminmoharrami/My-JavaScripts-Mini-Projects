let EnterInput = document.querySelector("#input")
let InputCounter = document.querySelector(".input");
let StartCounter = document.querySelector("#Start-Counter");
let ErrorMassege = document.querySelector("#ErrorMassege");
let CartTimer = document.querySelector(".card");
let CartNumber = document.querySelector(".number > h3");
let LoadingMassege = document.querySelector(".Massege > .Loading");
let SucssesMassege = document.querySelector(".Massege > .Success");
let ProgressBar =document.querySelector("#ProgressBar")
console.log(ProgressBar)

StartCounter.addEventListener('click', function (e) {
    let Seconds = parseInt(InputCounter.value)

    if (isNaN(Seconds)) {

        ErrorMassege.textContent = 'زمان را به درستی وارد کنید';
        ErrorMassege.classList.add('active');
        return
    } else {
        EnterInput.style.display = 'none'
        ErrorMassege.remove('active')
        CartTimer.style.display = 'Flex';
        CartNumber.textContent = Seconds;
        LoadingMassege.style.display = 'block';

    }
    let OrginalSecond = Seconds;
    let timerId = setInterval(() => {
        if (Seconds <= 1) {
            clearInterval(timerId);
            LoadingMassege.style.display = 'none';
            SucssesMassege.style.display = 'block';
        }
        Seconds -= 1;
        let Percent = Math.floor(((OrginalSecond - Seconds) / OrginalSecond) * 100);
        ProgressBar.style.cssText = '--percent:'+ Percent;

        CartNumber.textContent = Seconds;

    }, 1000);

})