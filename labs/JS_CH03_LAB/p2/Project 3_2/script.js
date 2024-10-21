document.getElementById('btnClick').onclick = () => {
  let price = parseFloat(document.getElementById("purchasePrice").value);
  let total = 0;
  let fee = 0;
  if(price <= 25.00){
    fee = 1.50;
    total = price + fee;
  }
  else if(price > 25.00){
    fee = price * 10 / 100;
    total = price + fee;
  };
  alert(`Price: $${price.toFixed(2)} + Fee: $${fee.toFixed(2)}\n= Total Price: $${total.toFixed(2)}`)
}

