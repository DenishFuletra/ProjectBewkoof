
var paymentWalletButton = document.getElementById("wallet");
var paymentUpiButton = document.getElementById("upi");
var paymentbankingButton = document.getElementById("banking");
var paymentcodButton = document.getElementById("cod");
var paymentdebitButton = document.getElementById("debit");

document.getElementById("payment-card").style.display = "block";
document.getElementById("walletapp").style.display = "none";
document.getElementById("payment-upi").style.display = "none";
document.getElementById("payment-banking").style.display = "none";
document.getElementById("payment-cod").style.display = "none";
paymentdebitButton.style.backgroundColor = "white";
  paymentdebitButton.style.borderLeft = "5px solid #42a2a2";

paymentWalletButton.addEventListener("click", () => {
  // left div changed
  paymentWalletButton.style.backgroundColor = "white";
  paymentWalletButton.style.borderLeft = "5px solid #42a2a2";
  paymentbankingButton.style.backgroundColor = "whitesmoke";
  paymentbankingButton.style.borderLeft = "none";
  paymentUpiButton.style.backgroundColor = "whitesmoke";
  paymentUpiButton.style.border = "none";
  paymentcodButton.style.backgroundColor = "whitesmoke";
  paymentcodButton.style.border = "none";
  paymentdebitButton.style.backgroundColor = "whitesmoke";
  paymentdebitButton.style.border = "none";

  // right div changed

  document.getElementById("walletapp").style.display = "block";
  document.getElementById("payment-upi").style.display = "none";
  document.getElementById("payment-banking").style.display = "none";
  document.getElementById("payment-cod").style.display = "none";
  document.getElementById("payment-card").style.display = "none";

});

paymentUpiButton.addEventListener("click", () => {


  paymentWalletButton.style.backgroundColor = "whitesmoke";
  paymentWalletButton.style.borderLeft = "none";
  paymentUpiButton.style.backgroundColor = "white";
  paymentUpiButton.style.borderLeft = "5px solid #42a2a2";
  paymentbankingButton.style.backgroundColor = "whitesmoke";
  paymentbankingButton.style.borderLeft = "none";
  paymentcodButton.style.backgroundColor = "whitesmoke";
  paymentcodButton.style.border = "none";
  paymentdebitButton.style.backgroundColor = "whitesmoke";
  paymentdebitButton.style.border = "none";
  paymentdebitButton.style.backgroundColor = "whitesmoke";
  paymentdebitButton.style.border = "none";


  document.getElementById("payment-upi").style.display = "block";
  document.getElementById("walletapp").style.display = "none";
  document.getElementById("payment-banking").style.display = "none";
  document.getElementById("payment-cod").style.display = "none";
  document.getElementById("payment-card").style.display = "none";

});
paymentbankingButton.addEventListener("click", () => {


  paymentWalletButton.style.backgroundColor = "whitesmbanking";
  paymentWalletButton.style.borderLeft = "none";
  paymentbankingButton.style.backgroundColor = "white";
  paymentbankingButton.style.borderLeft = "5px solid #42a2a2";
  paymentUpiButton.style.backgroundColor = "whitesmoke";
  paymentUpiButton.style.border = "none";
  paymentcodButton.style.backgroundColor = "whitesmoke";
  paymentcodButton.style.border = "none";
  paymentdebitButton.style.backgroundColor = "whitesmoke";
  paymentdebitButton.style.border = "none";

  document.getElementById("payment-banking").style.display = "block";
  document.getElementById("walletapp").style.display = "none";
  document.getElementById("payment-upi").style.display = "none";
  document.getElementById("payment-cod").style.display = "none";
  document.getElementById("payment-card").style.display = "none";

});


paymentcodButton.addEventListener("click", () => {


  paymentWalletButton.style.backgroundColor = "whitesmbanking";
  paymentWalletButton.style.borderLeft = "none";
  paymentcodButton.style.backgroundColor = "white";
  paymentcodButton.style.borderLeft = "5px solid #42a2a2";
  paymentUpiButton.style.backgroundColor = "whitesmoke";
  paymentUpiButton.style.border = "none";
  paymentbankingButton.style.backgroundColor = "whitesmoke";
  paymentbankingButton.style.border = "none";
  paymentdebitButton.style.backgroundColor = "whitesmoke";
  paymentdebitButton.style.border = "none";

  document.getElementById("payment-cod").style.display = "block";
  document.getElementById("walletapp").style.display = "none";
  document.getElementById("payment-upi").style.display = "none";
  document.getElementById("payment-banking").style.display = "none";
  document.getElementById("payment-card").style.display = "none";

});

paymentdebitButton.addEventListener("click", () => {


  paymentWalletButton.style.backgroundColor = "whitesmbanking";
  paymentWalletButton.style.borderLeft = "none";
  paymentdebitButton.style.backgroundColor = "white";
  paymentdebitButton.style.borderLeft = "5px solid #42a2a2";
  paymentUpiButton.style.backgroundColor = "whitesmoke";
  paymentUpiButton.style.border = "none";
  paymentbankingButton.style.backgroundColor = "whitesmoke";
  paymentbankingButton.style.border = "none";
  paymentcodButton.style.backgroundColor = "whitesmoke";
  paymentcodButton.style.border = "none";

  document.getElementById("payment-card").style.display = "block";
  document.getElementById("walletapp").style.display = "none";
  document.getElementById("payment-upi").style.display = "none";
  document.getElementById("payment-banking").style.display = "none";
  document.getElementById("payment-cod").style.display = "none";

});


function otp(){
  window.location.href = "otp.html";
}
