var firstName = document.getElementById('firstName');
var salary = document.getElementById('salary');

const loanPay = () => {
    var monthlyPayment;
    var duration;
    if (salary.value <= 150000) {
        monthlyPayment = .58 * salary.value;
        duration = 2080000 / monthlyPayment;
        alert(`Dear ${firstName.value}, You will be paying #${monthlyPayment} monthly for ${duration} months. Thank You`)
    } else if (salary.value >= 150001 && salary.value <= 200000 ) {
        monthlyPayment = .58 * salary.value;
        duration = 2080000 / monthlyPayment;
        alert(`Dear ${firstName.value}, You will be paying #${monthlyPayment} monthly for ${duration} months. Thank You`)
    } else if (salary.value >= 200001 && salary.value <= 300000) {
        monthlyPayment = .44 * salary.value;
        duration = 2080000 / monthlyPayment;
        alert(`Dear ${firstName.value}, You will be paying #${monthlyPayment} monthly for ${duration} months. Thank You`)
    } else if (salary.value >= 300001 && salary.value <= 400000) {
        monthlyPayment = .29 * salary.value;
        duration = 2080000 / monthlyPayment;
        alert(`Dear ${firstName.value}, You will be paying #${monthlyPayment} monthly for ${duration} months. Thank You`)
    } else {
        monthlyPayment = .22 * salary.value;
        duration = 2080000 / monthlyPayment;
        alert(`Dear ${firstName.value}, You will be paying #${monthlyPayment} monthly for ${duration} months. Thank You`)
    }
}