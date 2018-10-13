		function show(){
        var name = prompt("Enter your name: ");
        var answer1 = Number(prompt("1+1=?"));
        var result1 = "CORRECT!";
			if(answer1==1+1){
				result1= "CORRECT!";
			}else{
				result1 = "WRONG!";
      }
      var answer2 = Number(prompt("1+2=?"));
      var result2 = "CORRECT!";
      if(answer2==1+2){
        result2= "CORRECT!";
      }else{
        result2 = "WRONG!";
      }
      var answer3 = prompt("128√e980=?");
      var result3 = "CORRECT!";
      if(answer3=="I love you"){
        result3= "CORRECT!";
      }else{
        result3 = "WRONG!";
      }
      document.getElementById("name").innerHTML = "Player Name: " + name
      document.getElementById("answer1").innerHTML = "Question 1: 1+1=" + answer1
      document.getElementById("result1").innerHTML = result1
      document.getElementById("answer2").innerHTML = "Question 2: 1+2=" + answer2
      document.getElementById("result2").innerHTML = result2
      document.getElementById("answer3").innerHTML = "Question 3: 128√e980=" + answer3
      document.getElementById("result3").innerHTML = result3
    }
