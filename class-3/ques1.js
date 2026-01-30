function discountValue(items){
    let total = items*price*(1-discount);
    total = total + tax*total;
    return total;

}


let price = 500;
let discount = 0.1;
let tax = 0.18


let items = prompt('No of items');
let finalprice = 0;

if(items >= 10) finalprice = discountValue(items);
console.log(finalprice);
