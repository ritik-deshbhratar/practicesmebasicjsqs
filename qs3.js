// write a function using if else laeder is adult ore not adult

function isadult(){
    let age =parseInt(prompt("enter your age "));
    if (age >18){
        document.write("you are adult now");

    }
    else if (age==18){
        document.write("waite few months  ");
    }
    else if(age<=17){
        document.write(alert("bache teri ma ki chut "));
    }
    else{
        document.write(alert("your not adult beta "));
    }
        
    
}
isadult();

