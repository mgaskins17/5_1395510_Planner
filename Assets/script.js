// Javascript file for the 5th assignment - Workday planner // the container is where the planner will go - need to locate that container
// building sections that have event listeners then append to the cotainer to build it
// the container itself will need to be formatted - use flex box?
// 3 colors - gray = past , red = current , green = future
// need to use moment toolbox - sync laptop time with the time frames? Only creating a work day so 9am - 5pm

// variable locators
var $containerEl = $(".container").attr('style','display:block; margin-bottom: 50px'); // locating and creating a variable for the div "container" 
var $jumboEl = $('.jumbotron');

// Updating the header with the current day in the header
var $today = moment().format('dddd');
var $date = moment().format('MMMM Do');

// Showing current time with updating seconds
var $showtime = $('<p>').appendTo($jumboEl);
let rendClock = function() {
    var $currenttime = moment().format('LTS');
    return $showtime.text($currenttime);
}
setInterval(rendClock,1000);
var $currentday = $('#currentDay').text($today + ', ' + $date); // identifying where the date will go

// obtaining the current time using the moment api
var $AMPM = moment().format('a'); // gives whether it's AM or PM 
if ($AMPM == "am") {
    var $starthour = moment().format('h'); // gives the hour
    console.log($starthour);
} else {
    var $starthour = (moment().format('h')); // gives the hour
    $starthour = parseInt($starthour)+12;
    console.log($starthour);
}
//first create a div for the house that will house the time on the left, a block for the planner, then the save button on the right
for (let i = 9; i < 18; i++) {

// building out the entire block which contains the hour, workspace, and save button
var $blockEl = $('<div>').addClass('time-blk').appendTo($containerEl).attr('style','display:flex; flex-direction:row; height: 75px');
$blockEl.data('time',i);

// An if statement dividing up whether there is AM or PM at the end of the time
if (i < 12) {
    $blockEl.addClass('am');
    var $hourEl = $('<h6>').text((i)+':00 AM').addClass('time-hr').attr('style','width:10%; border-top:2px solid black;').appendTo($blockEl);
} else if (i==12) {
    $blockEl.addClass('pm');
    var $hourEl = $('<h6>').text((i)+':00 PM').addClass('time-hr').attr('style','width:10%; border-top:2px solid black').appendTo($blockEl);
} else {
    $blockEl.addClass('pm');
    var $hourEl = $('<h6>').text((i-12)+':00 PM').addClass('time-hr').attr('style','width:10%; border-top:2px solid black').appendTo($blockEl);
}
// Building out the workspace where you can type out your schedule and save it using the button
var $workspc = $('<input>').addClass('text-input').attr('style','width: 80%; padding:0; background-color: white').appendTo($blockEl);
$workspc.attr('id',i);
// var $savebtncont = $('<div>').attr('style','border:2px solid black; width:10%').appendTo($blockEl);
var $savebtn = $('<button>').text('Save').addClass('save-btn btn').attr('style','width:10%; height:100%; background-color:rgb(122,206,244); position: relative').appendTo($blockEl);

}

// Saving Inputted information when save button is clicked
if (localStorage.getItem('To-Do') !== null) {
    console.log('Local Storage is not empty!')
    var ToDo = JSON.parse(localStorage.getItem('To-Do'));
} else {
    var ToDo = [];
    console.log('Local Storage is empty!')
}

$containerEl.on('click', 'button', function(e) {
    e.preventDefault
    ToDoObject = {
        hour: parseInt($(this).siblings('input').prop('id')) ,

        message: $(this).siblings('input').val(),
    }
    ToDo.push(ToDoObject);
    // Saving to local storage
    localStorage.setItem("To-Do",JSON.stringify(ToDo));
})

$('.text-input').each(function(e){
    e.preventDefault
    var ToDos = JSON.parse(localStorage.getItem('To-Do'));
    if (ToDos !== null) {
    for (let i = 0; i < ToDos.length; i++){
        var ToDoHour = ToDos[i].hour;
        var ToDoMessage = ToDos[i].message;
        InputNum = $('#' + ToDoHour);
        InputNum.val(ToDoMessage);
    }
    }
})

// formatting the options down here - using different colors - DOES NOT WORK RIGHT NOW
$('.text-input').each(function(){
    var compareval = parseInt($(this).prop('id'));
    if (compareval > $starthour) {
        $(this).attr('style','width: 80%; background-color:green');
    } else if (compareval == $starthour) {
        $(this).attr('style','width: 80%; background-color:red');
    } else {
        $(this).attr('style','width: 80%; background-color:gray');
    }
})










