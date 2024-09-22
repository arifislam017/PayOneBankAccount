document.getElementById("buttonAddMoney")
.addEventListener("click", function(event){
    event.preventDefault();

    const addMoney = document.getElementById("add_money").value;
    const pinNumber = document.getElementById("pin_number").value;
    console.log(pinNumber,addMoney); 
    
    if(pinNumber == '1234'){
       const inputMoney = document.getElementById("account_balance").innerText;
       const  addTakaOne =parseFloat(addMoney);
       const  addTakaTwo =parseFloat(inputMoney);
       total_taka = addTakaOne + addTakaTwo;

       document.getElementById('account_balance').innerText = total_taka;
       console.log(total_taka);
    }
    else{
        alert("Wrong Password or Number")
    }

})