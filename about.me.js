 'use strict';
 var user = prompt(" Can You Please Tell Us Your Name ")

 alert("Welcome You Here " + user + " I wish You Enjoy Knowing Me..")
 var counter = 0;

////////////   first part that I change

function userEntry(ask, yes, no) {

    var response = prompt(ask)
    response = response.toUpperCase();
    if (response == 'YES' || response == 'Y') {
        alert(yes);
        
        counter = counter + 1;
    } else if (response == 'NO' || response == 'N') {
        alert(no);

    }
}
    userEntry('did you know who am I?', 'Sure you know me ', 'Check your memory again')
    userEntry('Do you know what I studied at university? ', 'Maybe you know me from university', 'not proplem')
    userEntry(' Do you know what industrial engineering is? ', 'greet !', 'So Read my page')
    userEntry(' Do you know what I like? ', 'Nice! ', 'never mind')
    userEntry('Were the questions annoying? ', 'I\'m sorry for that', ' thanks for your kindness', ' thanks for your kindness')
  


function doaa() {
    for (var num = 0; num < 4; num++) {
        var family = prompt("Guess How many members of my family ?.... You have 4 trials")
        if (family == 5) {
            alert("Yes exactly!");
            counter = counter + 1;
            console.log(family);
            break;
        } else if (family > 5) {
            alert("too high !!");
            console.log(family);
        } else if (family < 5) {
            alert(" too low");
            console.log(family);
        }
    }
 }
 doaa();
 alert("My family is 8 ")


function cities() {

    var sits = ["lebnan", 'Venice', 'France', 'Turkey', 'Amazon Forest', 'Jaban']
    for (var count = 0; count < 5; count++) {
        var place = prompt("I wish visiting 6 place in the world .. Can you guess one of them?");
        switch (place) {
            case sits[0]:
            case sits[1]:
            case sits[2]:
            case sits[3]:
            case sits[4]:
            case sits[5]:
                alert(" You are right.. My fav place lebnan, Venice, France , Turkey , Amazon forest, Chaina ");
                counter = counter + 1;
                console.log(place);
                count = 5;
                break;
            default:
                alert("You are wrong .. Try it again ");

                console.log(place);
                break;


        }
    }
    alert(" Opss  My fav place lebnan, Venice, France , Turkey , Amazon forest, Chaina ");
    alert("thank you "+ user +  " you gave me your timeto to answer my questions  " + counter + " this is your mark ");
    return(sits);
}

cities();
   