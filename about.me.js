'use strict';
var user = prompt(" Can You Please Tell Us Your Name ")
alert("Welcome You Here " + user + " I wish You Enjoy Knowing Me..")

var name = prompt('did you know who am I? ' );
name = name.toLowerCase();

if (name =='yes') {
    alert('Sure you know me ');
    console.log ("Sure you know me");
} else if (name =='y') {
    alert('Sure you know me ');
    console.log ("Sure you know me");

} else {
    alert('Check your memory again');
    console.log ("Check your memory again");

}
var studied = prompt('Do you know what I studied at university? ' );
studied = studied.toLowerCase();
switch(studied) {
    case 'yes':
alert('Maybe you know me from university');  
console.log ("Maybe you know me from university");

    break;
    case 'y':
        alert('Maybe you know me from university');  
        console.log ("Maybe you know me from university");

        break;
    default:
        alert('not proplem ');  
        console.log ("not proplem");

    }
    var industrial  = prompt(' Do you know what industrial engineering is? ' );
industrial =industrial.toLowerCase();

if (industrial =='yes') {
    alert('You know it\'s a great specialty ');
    console.log ("'You know it\'s a great specialty ");

} else if (name =='y') {
    alert('You know it\'s a great specialty ');
    console.log ("You know it\'s a great specialty ");
} else {
    alert('So Read my page');
    console.log ("So Read my page ");
}
var like  = prompt(' Do you know what I like? ' );
like =like.toLowerCase();

if (like =='yes') {
    alert('Nice! ');
    console.log ("Nice! ");
}
    
 else if (like =='y') {
    alert('Nice! ');
    console.log ("Nice! ");
} else {
    alert('never mind');
    console.log ("never mind ");
}

var questions = prompt('Were the questions annoying? ' );
questions =questions.toLowerCase();

if (questions =='yes') {
    alert('I\'m sorry for that') ;
    console.log ("I\'m sorry for that ");
} else if (questions =='y') {
    alert('I\'m sorry for that') ;
    console.log ("I\'m sorry for that ");
} else {
    alert(' thanks for your kindness');
    console.log (" thanks for your kindness ");
}

alert("Thanks for being here " + user);
