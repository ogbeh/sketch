// function that builds a grid in the container
function build(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='squares'></div>");
        };
    };
    $(".squares").width(700/x);

    $(".squares").height(700/x);
};

// function that clears the grid
function clear(){
    $(".squares").remove();
};

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function renew(){
    var z = prompt("How many boxes per side?");
    clear();
    build(z);
};



// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    build(16);

    $(".squares").mouseover(function() {
        $(this).css("background-color", "black");
    });

    $(".newGrid").click(function() {
        renew();

        $(".squares").mouseover(function() {
            $(this).css("background-color", "black");
        });
    });
});