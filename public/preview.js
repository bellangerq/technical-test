'use strict';

// Compute amounts
var amountInput = document.querySelector('input[name=amount]');
var amount = parseInt(amountInput.value);
var total = document.querySelector('.total');
var taxRateContainer = document.querySelector('.tax-rate');
var taxRate = taxRateContainer.innerHTML;
var subTotal = document.querySelector('.sub-total');
var taxAmount = document.querySelector('.tax-amount');

subTotal.innerHTML = amount.toFixed(2);
taxAmount.innerHTML = (amount * (taxRate / 100)).toFixed(2);
total.innerHTML = (amount + amount * (taxRate / 100)).toFixed(2);

amountInput.addEventListener('keyup', function () {
  amount = parseInt(amountInput.value);
  subTotal.innerHTML = amount.toFixed(2);
  taxAmount.innerHTML = (amount * (taxRate / 100)).toFixed(2);
  total.innerHTML = (amount + amount * (taxRate / 100)).toFixed(2);
});

// Update tax rate on country change
var select = document.querySelector('select');

select.addEventListener('change', function (e) {
  select.disabled = true;

  fetch('https://stripe-octobat-payment.herokuapp.com/compute_vat', {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ amount: amount, country: select.value })
  }).then(function (response) {
    return response.json();
  }).then(function (vat) {
    select.disabled = false;

    // Compute amounts
    taxRate = vat.applied_rate;
    taxRateContainer.innerHTML = taxRate;
    taxAmount.innerHTML = (amount * (taxRate / 100)).toFixed(2);
    total.innerHTML = (amount + amount * (taxRate / 100)).toFixed(2);

    // Update tax_evidence id
    var tev = document.querySelector("input[name='tev_id']");
    tev.value = vat.id;
  }).catch(function (error) {
    console.log(error);
    select.disabled = false;
  });
});