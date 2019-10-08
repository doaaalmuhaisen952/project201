'use strict';
var user = prompt(" Can You Please Tell Us Your Name ")

alert("Welcome You Here " + user + " I wish You Enjoy Knowing Me..")
var counter =0;

var questions = [
    [
        'did you know who am I?',
        'Sure you know me ',
        'Check your memory again',
    ],
    [
        'Do you know what I studied at university? ',
        'Maybe you know me from university',
        'not proplem',
    ],
    [
        ' Do you know what industrial engineering is? ',
        'You know it\'s a great specialty ',
        'So Read my page',
    ],
    [
        ' Do you know what I like? ',
        'Nice! ',
        'never mind',
    ],
    [
        'Were the questions annoying? ' ,
        'I\'m sorry for that',
        ' thanks for your kindness',' thanks for your kindness'
    ]
]

for (var i=0; i<5; i++){
    var exactArray = questions[i];
    var promptQuestion = exactArray[0];
    var posetiveReply = exactArray[1];
    var negativeReply = exactArray[2];
    var name = prompt(promptQuestion);
    promptQuestion = promptQuestion.toLowerCase();
    switch (name) {
    case "yes":
    case "y":
    alert(posetiveReply);
    console.log(name)
counter=counter+1
    break;

    
    
    case "no":
    case "n":
    alert(negativeReply);
    console.log(name)
    break;
    
    default :
    alert ('try a gain') ;
    break;
    }}
    
for (var family= 0; family <4; family++){
  var family = prompt("Guess How many members of my family ?.... You have 4 trials")
    if (family ==8){
        alert("Yes exactly!");
        counter=counter+1;
        console.log(family)
        break;

    } else if (family >8) {
        alert ("too high");
        console.log(family)
    } else if ( family< 8){
        alert(" too low");
        console.log(family)
    }}
    alert ("My family is 8 ")


    var sits = ["lebnan", 'Venice', 'France', 'Turkey', 'Amazon Forest', 'Chaina']
 for(var count=0;count<5 ; count++) {
    var place = prompt("I wish visiting 6 place in the world .. Can you guess one of them?");
    switch (place){
       case sits[0]:
       case sits[1]:
       case sits[2]:
       case sits[3]:
       case sits[4]:
       case sits[5] :
        alert(" You are right.. My fav place lebnan, Venice, France , Turkey , Amazon forest, Chaina ");
        counter = counter + 1;
        console.log(place);
    count = 5;
        break;
    default:
        alert("You are wrong .. Try it again ")
    
        console.log(place);
        break;

 }
 alert(" You are right.. My fav place lebnan, Venice, France , Turkey , Amazon forest, Chaina ");

 alert( "thanks "  + counter + " this is your mark ");
 
