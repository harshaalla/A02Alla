function calculate() 
{
  
		var iphone7 = document.getElementById('p1').value;	
		var iphone7p = document.getElementById('p2').value;

        var result = document.getElementById('result');	
		var myResult = (iphone7*650)+(iphone7p*750);
		result.value = myResult;
	}


    function final()
    {
        var iphone7 = document.getElementById('p1').value;	
		var iphone7p = document.getElementById('p2').value;
        var myResult = (iphone7*650)+(iphone7p*750);
		result.value = myResult;

        if (myResult>0) 
        {
        document.getElementById("s1").innerHTML="Your order has been placed successfully";
        document.getElementById("s2").innerHTML="Thank you";    

        }
        else
        {
            document.getElementById("s2").innerHTML="Please enter the quantity";  
            $("#dialog").dialog();
        }
    };
