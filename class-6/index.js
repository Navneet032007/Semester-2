const cart = [ 'shirt' , 'trouser' , 'shoes', 'shades'];

const promise = createOrder(cart); //async function -- will get orderID

//print
console.log("hellooo")

//consume
promise.then(
    function (orderID){
        console.log(orderID)
    }

).catch(  function(err){
    console.log(234);
        console.log(err.message);

    }
)

//creation of promise backend side/ producer side.
function createOrder(cart){ 
    const pr = new Promise(
        function(resolve, reject){
            //create orderID
            //validate the cart (check in stock)
            //returnorderID

            //failed-first approach
            if( !validateCart(cart)){
                console.log("tich")
                const err = new Error("Cart is invalid");
                reject(err);
            }

            const orderID = '1101';

            if(orderID ){
                setTimeout(() => {
                    resolve(orderID)
                    
                }, 2000);
            }
        }
    );
    return pr;
}

function validateCart(cart){
    if ( cart.length > 5){
        return true;
    }
    else{

    return false;
    }
}