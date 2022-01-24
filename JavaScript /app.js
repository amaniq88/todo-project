'use strict';
var sname = prompt(' Type your name ');
var Gender = prompt(' Type your Gender ( F for Female or M for Male  ) ');
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
if (age <= 0 ) {
alert (' Age should be grater than 0 ')
}
var conf = confirm(' Do you want to contenue  to Welcome message ?')

if( conf == true){
    alert(" Your Welcome  ... " +  MGender + sname)
}
let arrayanswers = [];

var Ques1 = prompt( 'Do you have driving lincses  ?( yes / no )');
if (Ques1 == ""){
    Ques1 = 'string';
}
arrayanswers.push(Ques1);
var Ques2 = prompt( 'Do you have Bacaloria Dgree  ?( yes / no )');
if (Ques2 == ""){
    Ques2 = 'string';
}
arrayanswers.push(Ques2);
var Ques3 = prompt( 'Did you finish all task for today  ?( yes / no )');
if (Ques3 == ""){
    Ques3 = 'string';
}
arrayanswers.push(Ques3);

console.log(arrayanswers);



