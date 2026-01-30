//1.Function Declaration 
function discount(a)
{
    let finalprice = items*500;
    total = total + 0.18*total;
    return total;
}
let price = 500;
let discount = 0.1;
let tax = 0.18;

let items = prompt("Enter the number of items you want to get:");
let finalprice = 0;
if(items >=18)
    {
      finalprice = discount(items);
}
console.log(finalprice);