document.getElementById('btnClick').onclick = () => {
  let total = 0
  let Price = parseFloat(document.getElementById("purchasePrice").value);
  if(Price <= 25.00){
    total = Price + 1.50
  }
}

