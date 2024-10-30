const oddNumbers = []
/*------------------------------------Handles For LOOP------------------------------------*/
for(i=1; i<=100; i++)
  {
    if(i % 2 != 0)
      {
          oddNumbers.push(i);
      }
} 

/*------------------------------------Inject Outputs into HTML------------------------------------*/
const html = `<p>${oddNumbers}</p>`
document.write(html)