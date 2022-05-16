$(function () {
    // Init function
    $("div").click(function () {
        $("div").fadeOut(1000).fadeIn(500);
       //$("p:first").text("SlideDown Effect...").slideDown(1000) ;
    })
 })

function calculate(){
    tbUname = document.getElementById("uname");
    selectDestination = document.getElementById("destination");
    cbBusiness = document.getElementById("business");
    tbLuggage = document.getElementById("luggage");
    taResult = document.getElementById("result");        
    switch(selectDestination.value){
      case "dev": price = 100; break;
      case "bwl": price = 250; break;
      case "dro": price = 550; break;
      case "mer": price = 550; break;
      case "lan": price = 550; break;
      case "mur": price = 550; break;
      case "red": price = 550; break;
    }
    if(cbBusiness.checked)
      price +=100;

    price += (parseInt(tbLuggage.value)-10)*2;
    
    taResult.value = "Dear "+tbUname.value.toUpperCase()+", \nTotal Price is "+price+" TL";                
    //Try below statement and see the problem
    //document.write("Dear <span> "+tbUname.value+"<span>, <br>Total Price is"+price+" TL");
    document.getElementById("res").innerHTML="Dear "+tbUname.value.toUpperCase()+",<br>Total Price is "+price+" TL"; 
    document.querySelector("#res").innerHTML = "Dear <span> "+tbUname.value.toUpperCase()+"</span>,<br>Total Price is <span>"+price+"</span>TL";    
    taResult.style.backgroundColor = "yellow";
    document.querySelector("#res").style.margin='10px auto';
    document.querySelector("#res").style.width='50%';
    document.querySelector("#res").style.backgroundColor='aqua';        
  }