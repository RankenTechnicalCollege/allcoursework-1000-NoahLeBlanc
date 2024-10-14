
document.getElementById('btnClick').onclick = () => {
  let burgerNum = (1.00 * document.getElementById('burgerNum').value);
  let friesNum = (2.00 * document.getElementById('friesNum').value);
  let sodasNum = (2.50 * document.getElementById('sodasNum').value);
  const total = (burgerNum + friesNum + sodasNum)
  const html = `<h3>Total Cost</h3> <p>$${total.toFixed(2)}</p>`
  document.write(html)
};