let a = 10; //global scope

function test(){
    let b = 20; //functional scope
    if(true)
    {
        let c = 30; //block scope
    }
    let c = 30;
    console.log(b);
    console.log(c);
}