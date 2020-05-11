function clockMove() {
  var today=new Date();
  var min=today.getMinutes();
  var hour=today.getHours();
  var second=today.getSeconds();
console.log(today);
  var m=(min*6)+(second*6)/60;
  console.log(min);
  var s=second*6;
  var h=(hour*30)+((min*6)/12);
  document.getElementById("sec").style.transform =
    "rotate(" + s + "deg)";
  document.getElementById("min").style.transform =
    "rotate(" + m + "deg)";
  document.getElementById("hours").style.transform =
    "rotate(" + h + "deg)";
//    document.getElementById("hours").style.cssText ="transform:rotate(" + h + "deg);";

 // calling the function every second
 setTimeout(clockMove,1000);
}
function showCurrTime(){
  var today=new Date();
  var min=today.getMinutes();
  var hour=today.getHours();
  var second=today.getSeconds();

  document.getElementById("curr").innerHTML=displayCorrectTime(hour)+ ":" + displayCorrectTime(min) + ":" + displayCorrectTime(second);
  setTimeout(showCurrTime,1000);
}
function displayCorrectTime(num) {
    var r = "" + num;
    while (r.length < 2) {
        r = "0" + r;
    }
    return r;
}

// var markers = document.getElementsByClassName('othernum');
//
// for (var i = 1; i < 60; i++) {
//   console.log("i: "+i);
//    markers[i] = $(markers[i-1]).clone().insertAfter($(markers[i-1]));
//    $(markers[i]).css('transform', 'rotate(' + 6 * i + 'deg)');
// }

var markers2 = document.getElementsByClassName('secdiv');

for (var i = 1; i <= 60; i++) {

  console.log("i: "+i);
   markers2[i] = $(markers2[i-1]).clone().insertAfter($(markers2[i-1]));
   $(markers2[i]).css('transform', 'rotate(' + 6 * i + 'deg)');

}
