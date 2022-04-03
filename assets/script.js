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



var saveTasks = function(){
localStorage.setItem("tasks",JSON.stringify(tasks));





$('.saveBtn').on("click",function() {
var updatedTask = [];
for (var i = 0; i < timeBlocks.length; i++){
    updatedTask.push(document.getElementsByTagName("input")[i].value);
}
userBlocks = updatedTask;
localStorage.setItem("tasks", JSON.stringify(userBlocks));
console.log('hello')
});




    
//  $(this).on("click", function(){


}

//save local storage

        // jquery to all of save button, based on a save button, it will save to local storage, based on time to match the block?
                

//save local storage

        // jquery to all of save button, based on a save button, it will save to local storage, based on time to match the block?
        // array that will = a Json

//load local storage
        //pull the json above
            //find text area based on id, set it to whatever is saved in local storage

// function loadLocalStorage () {}

// //click listener to save buttons
// $('.saveBtn').each(function(event) {
//     $(this).on("click", function(){
        



// // local storage Json
// var savedTask = JSON.parse(localStorage.getItem('savedTask'));
// if (savedTask == null) {
//     savedTask = [];
// }
// // saves text to array
// plans[saveHour] = toSaveText;
// localStorage.setItem('plans', JSON.stringify(plans));
            


//     })
// })

timeColor();