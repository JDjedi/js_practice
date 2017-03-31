"use strict";

const PHONE = 8.99;
const ACCESSORY = 2.99;
const TAX_RATE = 0.08;
var purchase_total = 0;
var bank_account = prompt("Please enter in your account balance:");
var spending_limit = prompt("Please enter in your spending limit");


function purchaseCalculator(){
  while (purchase_total < spending_limit){
    if (((PHONE + ACCESSORY) + purchase_total) < spending_limit){
      purchase_total = purchase_total + PHONE + ACCESSORY;
    }
    else {
      purchase_total = purchase_total + PHONE;
    }
  }
  console.log("Purchase total: $" + purchase_total.toFixed(2));
  calculateTax(purchase_total, TAX_RATE)
}

function calculateTax(){
  purchase_total = purchase_total + (purchase_total * TAX_RATE);
  console.log("Purchase total with tax: $" + purchase_total.toFixed(2));
  canYouPurchase(purchase_total, bank_account)
}

function canYouPurchase(){
  if (purchase_total <= bank_account){
    bank_account = bank_account - purchase_total;
    console.log("Purchase booked. Your new account balance is $" + bank_account.toFixed(2));
  }
  else {
    console.log("You have insuffcient funds for this purchase.")
  }
}

purchaseCalculator(PHONE, ACCESSORY, purchase_total, spending_limit)

