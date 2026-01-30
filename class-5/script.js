document.getElementById('button').addEventListener('click',()=>{
    let inputField = document.getElementById("check")
    let location = inputField.value.trim();

    //call the API
    
    console.log(location);
    inputField.value = "";
    

});