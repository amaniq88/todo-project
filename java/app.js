var sname = prompt(' Type your name ');
var Gender = prompt(' Type your Gender ( F for Female or M for Male  ) ');
var MG ;

if(Gender ==  'M' )
{  
var MG = 'Mr.'
 }
 else if ( Gender == 'F' )
 {
 var MG = 'Ms.'
 }
 else {
    alert (' you should enter valid Gender ! ')
MG = ' '
 }

 

 var age = prompt(' Type your Age ');
if (age <= 0 ) {
alert (' Age should be grater than 0 ')
}
var conf = confirm(' Do you want to contenue  to Welcome message ?')

if( conf == true){
    alert(" Your Welcome  ... " + MG + sname)
}
