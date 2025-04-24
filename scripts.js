/* ok, you know how to use inpect tool (better than me!) you deserve the code for the secret code*/
function secret() {
    let code = prompt("Enter code:");
    
    if (code == "@34,kd") {
        text ='this secret link is https://www.mathsisfun.com/ ,';
        extra = "it has some games, like tetris hidden in it ";
    } else if (code == "testcode") {
        text ='Debug secret code, no message here';
        extra = 'do you have any idea how much of a pain it was to make this website? (ok it took about 2 hours to make, impressive for a first try at webcoding, right?(have prior experience with regular coding))';
    }
    else if (code == "bobalan"){
        text = " this 'secret' link is https://sites.google.com/view/classroom6x/";
        extra ='it may be blocked but idk';
    }
    else if (code == 'totallysecure'){
        text = "this is placeholder secret message"
        extra = "you may find a proper link here"
    } 
    else {
        alert('Invalid code');
    }
  document.getElementById("code_result").innerHTML = text;
  document.getElementById("additional_infobox").innerHTML = extra;
}
