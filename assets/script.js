//date and time at the top
var tasks;
var text9 = document.getElementById("9")
var text10 = document.getElementById("10")
var text11 = document.getElementById("11")
var text12 = document.getElementById("12")
var text13 = document.getElementById("13")
var text14 = document.getElementById("14")
var text15 = document.getElementById("15")
var text16 = document.getElementById("16")
var text17 = document.getElementById("17")


var currentHour = moment().hour()
var time = moment().format("[Today's date is] dddd, MMMM Do")
var timeDisplay = $("#currentDay");
timeDisplay.text(time);

var textArea = $(".color"); //reference to each timeblock

var loadText = function () {
    var id9 = localStorage.getItem("9")
    var id10 = localStorage.getItem("10")
    var id11 = localStorage.getItem("11")
    var id12 = localStorage.getItem("12")
    var id13 = localStorage.getItem("13")
    var id14 = localStorage.getItem("14")
    var id15 = localStorage.getItem("15")
    var id16 = localStorage.getItem("16")
    var id17 = localStorage.getItem("17")
    
    text9.textContent = (id9)
    text10.textContent = (id10)
    text11.textContent = (id11)
    text12.textContent = (id12)
    text13.textContent = (id13)
    text14.textContent = (id14)
    text15.textContent = (id15)
    text16.textContent = (id16)
    text17.textContent = (id17)

    

}

var timeColor = function() { 
    for (var i= 0; i < textArea.length; i++ ){
        var hour = parseInt($(textArea[i]).attr("id"));
        console.log(hour)
    

        if (hour < currentHour){
            $(textArea[i]).addClass("past");
        } else if (hour == currentHour){
            $(textArea[i]).addClass("present");
        } else  {
            $(textArea[i]).addClass("future");
        }}}


// save

$('.saveBtn').on('click', function() {
        var time = $(this).siblings('.color').attr ('id');
        var value = $(this).siblings('.color').val();
        console.log(time,value);
        localStorage.setItem(time,value);
})

timeColor()
loadText()