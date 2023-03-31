
function validateform(){  
    var name=document.myform.name.value;  
    var firstpassword=document.myform.password.value;  
    var secondpassword=document.myform.password2.value;
    var num = document.myform.num.value;  
    var email = document.myform.email.value;  
    var atPosition =  email.indexOf("@");
    var dotPosition =  email.lastIndexOf(".");
    
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(firstpassword.length<6 || secondpassword.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
    } else if(firstpassword !== secondpassword){
        alert("Both the password are different."); 
        return false; 
    } else if(isNaN(num)) {
        document.getElementById("numloc").innerHTML = "Enter Numeric value only";
        return false; 
    } else if(num.length!==10){
        document.getElementById("numloc").innerHTML = "number should be atleast 10";
        return false
    } 
    else if(atPosition<1 || dotPosition< atposition+2 || dotPosition+2>=email.length){
        console.log(atPosition);
        console.log(dotPosition);
        document.getElementById("emailerr").innerHTML = "Enter correct email address";
        return false;
    } 
    else{
        alert("Login success");
 
    };
} 



