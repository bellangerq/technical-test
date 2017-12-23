'use strict';

var amountInput = document.querySelector('input[name=amount]');
var amount = amountInput.value;
var total = document.querySelector('.total');
var taxRate = document.querySelector('.tax-rate').innerHTML / 100;
var exclTax = document.querySelector('.excl-tax');
var taxAmount = document.querySelector('.tax-amount');

total.innerHTML = parseInt(amount).toFixed(2);
exclTax.innerHTML = (amount - amount * taxRate).toFixed(2);
taxAmount.innerHTML = (amount * taxRate).toFixed(2);

amountInput.addEventListener('blur', function () {
  amount = amountInput.value;
  total.innerHTML = parseInt(amount).toFixed(2);
  exclTax.innerHTML = (amount - amount * taxRate).toFixed(2);
  taxAmount.innerHTML = (amount * taxRate).toFixed(2);
});