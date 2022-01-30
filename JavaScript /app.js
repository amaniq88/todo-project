'use strict';
const arrayanswers = [];

var sname = prompt(' Type your name ');
arrayanswers.push(sname);

var Gender = prompt(' Type your Gender ( F for Female or M for Male  ) ');
arrayanswers.push(Gender);

var MGender = ' ' ;

if(Gender ==  'M' )
{  
 MGender = 'Mr.'
 }
 else if ( Gender == 'F' )
 {
 MGender = 'Ms.'
 }
 else {
    alert (' you should enter valid Gender ! ')
 }

 
var age = prompt(' Type your Age ');
arrayanswers.push(age);

if (age <= 0 ) {
alert (' Age should be grater than 0 ')
}
var conf = confirm(' Do you want to contenue  to Welcome message ?')

if( conf == true){
    alert(" Your Welcome  ... " +  MGender + sname)
}

var Ques1 = prompt( 'Do you have driving lincses  ?( yes / no )');
if (Ques1 == ""){
    Ques1 = 'invalid';
}
var Ques2 = prompt( 'Do you have Bacaloria Dgree  ?( yes / no )');
if (Ques2 == ""){
    Ques2 = 'invalid';
}
var Ques3 = prompt( 'Did you finish all task for today  ?( yes / no )');
if (Ques3 == ""){
    Ques3 = 'invalid';
}
arrayanswers.push(Ques1);
arrayanswers.push(Ques2);
arrayanswers.push(Ques3);

const QueArray = ["your Name is .. " , " your Gender is .. ", " your Age is .. ", " Driving Linces .. " , "Bacaloria Dgree ..  ", " Finish All task .. "];

function print (arr){
    for ( let i=0 ; i< arrayanswers.length ; i++){
        console.log (QueArray[i]);
        console.log(arr[i]);

    }
}

print(arrayanswers);





