number = []
for(i=1; i<=100; i++)
  {
    if(i == 15)
      {
        number.push(i);
      }
    else if( i == 30)
      {
        number.push(i);
      }
    else if(i ==  45)
      {
        number.push(i);
      }
    else if(i ==  60)
      {
        number.push(i);
      }
    else if(i ==  75)
      {
        number.push(i);
      }
    else if(i == 90)
      {
        number.push(i);
      }
} 
const html = `<p>${number}</p>`
document.write(html)