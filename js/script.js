function script(event){
    alert("do you want to proceed?");
    if(confirm("Want to go to next page")){
        return true;
    }else
    {
        event.preventDefault();
        return false;
    }
    }
     
    
    function prompthandle(){
    
    var ans = prompt("what is your name?","");
    if(ans) {
        alert("your name is: " + ans);
        document.getElementById('displaytxt').innerHTML = ans;
    }else{
        alert("You did not say anything");
    }
    
    }

    function alertbutton(){
    alert("you clicked the alert button");
    
    }