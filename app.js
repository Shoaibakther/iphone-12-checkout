function updateProductNumber(product,price, isIncreasing) {
     const productInput = document.getElementById(product +'-number');
    let productTotal = productInput.value;
    if (isIncreasing) {
        productTotal = parseInt(productTotal) + 1;
        
    } else if(productInput.value > 0) {
        productTotal = parseInt(productTotal) - 1;
    }
    productInput.value = productTotal;
    const cashTotal = document.getElementById(product + '-total').innerText = productTotal * price;
    calculateTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxamount = subTotal / 10;
    const totalAmount = subTotal + taxamount;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = taxamount;
    document.getElementById('total').innerText = totalAmount;

}
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone',1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone',1219, false);
})

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case',59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case',59, false)
});