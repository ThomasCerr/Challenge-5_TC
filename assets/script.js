//date and time at the top
var tasks;



var currentHour = moment().hour()
var time = moment().format("[Today's date is] dddd, MMMM Do")
var timeDisplay = $("#currentDay");
timeDisplay.text(time);

var textArea = $(".color"); //reference to each timeblock


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


// set up the local storage
function setLocalStorage(){
localStorage.setItem("tasks",JSON.stringify(tasks));}




$('.saveBtn').each(function(event) {
        $(this).on("click", function(){

timeColor();