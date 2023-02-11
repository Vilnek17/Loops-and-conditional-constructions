 const askAge=prompt("How old are you?")
 if (askAge<=17) {
     confirm("Do you study at school?")
 } else if (askAge>17 && askAge<25){
     confirm("Do you study at university?")
 } else if (askAge>=25 && askAge<60) {
     confirm("Do you have a job?")
 } else {
     confirm("What are you doing?")
 }


let prop=prompt("Which display properties do you know?")
switch(prop){
    case 'block':
        alert("block");
        break;
    case 'flex':
        alert("flex");
        break;
    case 'grid':
       alert("grid");
       break;
    case 'inline':
         alert("inline");
       break;
   case 'none':
       alert("none");
        break;
    default:
        alert("Set 'display:inline-block;");                        
    
 }


 let numbers;
 while (true) {
     numbers=prompt('Please enter the number');
  if (!isNaN(numbers) && numbers>0) break;
      alert(`Your number is incorrect, please enter corect number`) 
 }
  
alert(`${numbers} *12 is equil ${numbers*12}`);


for (let i=2; i<=50; i++) {
    if (i%2==0) {
        console.log(i);
    }
}
