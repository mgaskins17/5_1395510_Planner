// Javascript file for the 5th assignment - Workday planner 
var $container = $(".container"); // locating and creating a variable for the div "container" 

// the container is where the planner will go - need to locate that container
// building sections that have event listeners then append to the cotainer to build it
// the container itself will need to be formatted - use flex box?
// 3 colors - gray = past , red = current , green = future
// need to use moment toolbox - sync laptop time with the time frames? Only creating a work day so 9am - 5pm

//first create a div for the house that will house the time on the left, a block for the planner, then the save button on the right
for (let i = 0; i<8; i++) { // hard coding an 8 hour "work" day

var $hourcontainer = $('<div>');
$hourcontainer.addClass('time-blk');
$hourcontainer.append($container);

var $textbox = $('<p>')
$textbox.text("Please show up");
$textbox.append($hourcontainer);
// var $timeEl = $('<h4>').text("time").append($hourcontainer);
}