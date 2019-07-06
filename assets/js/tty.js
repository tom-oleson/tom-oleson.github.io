/*  
javascript tty simulation
*/
// get the tty element. this is where we will inject typed
// characters
//var x = document.getElementsByClassName("tty")[0];
var i = 0, j = 0;
var str, clock, delay;

// type each line in the data array using a callback loop until done...
function type() {
  
  if(j >= data.length) {
    clearTimeout(clock);
    return;
  }

  if(i == 0 && j > 0) x.innerHTML += "</br>"; // new line...

  if(j < data.length) {
    delay = data[j].delay;  
    str = data[j].text;
  } else {
    i = 0, j = 0; loop++;
    clock = setTimeout(type, 3000);
    return;
  }

  if(i < str.length) {
    x.innerHTML += str.charAt(i++);
  } else {
    i = 0; j++; 
  }

  clock = setTimeout(type, delay); // async loop
}