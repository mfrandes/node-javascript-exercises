/* print page  */

$('#print').on('click', function () {
    var table = $('table');
    window.print();
    return false;
});
/* Limit character input in the textarea including count */

var maxLength = 15;
$('#textarea').keyup(function () {
    var textlen = maxLength - $(this).val().length;
    $('#rchars').text(textlen);
});

/* turn first word to bold */

$('#listLearn p').each(function () {
    var pdata = $(this);
    pdata.html(pdata.text().replace(/(^\w+)/, '<strong>$1</strong>'));
});

/* Create new div */

function newDiv() {
    console.log("click pe div");
    $(document).ready(function () {
        var test = {
            id: "div",
            class: "wrap",
        }
        var $div = $("<div>", test);
        var g = $("#textarea").val();
        if(g == ""){
            alert("Textbox must not be empty")
            console.warn("Please enter text");
        }else{
            $div.html(`${g}`);
            $(".container").append($div);
        }
    });
}

/* transfer btn from one div to another */

$(".transferBtn").click(function () {
    console.log("I'm alive!!!")
    if ($(this).parent().attr("id") == "leftSide") {
        $(this).detach().appendTo('#rightSide');
    } else {
        $(this).detach().appendTo('#leftSide');
    }
})
/* options on a select box */

function removeOptions(e){
    var eatAOnion = $(e).siblings().children("option:selected", this).attr('value');
    console.log("options:", eatAOnion);
    $(e).siblings().empty().append(`<option selected="selected" value="${eatAOnion}">${eatAOnion}</option>`);
}

$('#myColorLeft').on('change', function () {
    var selectVal = $("#myColorLeft option:selected").val();
    
    $(document).ready(function(){
       var element = $("#leftSide")
        element.css(`background-color`, `${selectVal}`);
        
        console.log("s-a selectat:", selectVal);
    })
    
})
$('#myColorRight').on('change', function () {
    var selectVal = $("#myColorRight option:selected").val();
    
    $(document).ready(function(){
       var element = $("#rightSide")
        element.css(`background-color`, `${selectVal}`);
        
        console.log("s-a selectat:", selectVal);
    })
    
})
/* text decoration and counting*/
$("#textDe h2").each(function(){
    var textWords = $(this).text().split('');
    
    $(this).empty().html(function(){
        for(i=0; i < textWords.length; i++ ) {
            if(i === 0){
                $(this).append(`<span style="text-decoration:underline">` + textWords[i] + `</span>`);
            }else{
                $(this).append(`<span style="text-decoration:underline">` + textWords[i] + `</span>`);
            }
        }
    });
});
$("#textDe form input").keyup(function(){
    var tValue = $(this).val();
    var tLenght = $(this).val().length;
    
    $("#charNr").text(tLenght);

})
/* Remove all class */

function classRemover(){
    console.log("click pe remoove classes")
    $('div').removeClass();
};

/** remove style using .css funtion */
function remClassTextUderLine(){
    console.log("you hit the Hot spot!!");
    $("#textDe h2 span").css("text-decoration", "none");
};

/** identify left or right click */
$("#remClass").click(function(){
    console.log("Left mouse click!");
});
$("#remClass").on("contextmenu", function(){
    console.log("Right mouse click!");
    return false;
});
/** Check if a obgect is Jquery */
function checkJq(){
    var $q = $("#textDe form input").val();
   
    console.log("to check:", $q );
    
    if($q.jquery){
        alert("Your text is Jquery")
        
    }else{
        alert("Your text is Not Jquery")
    }
}
/** check if Enter key is presed */

$(document).keypress(function(e){
    if(e.which == 13){
        console.log("you pressed ENTER!");
    }
});
/** count number of rows and colums in a table */


$(document).ready(function countTable() {
    var a =$('#table-first tbody tr');
    var b =$('#table-first tr td');
    $("#rowSpan").text(a.length);
    $("#columsSpan").text(b.length / a.length);
});

/** turn j query in to a string exercise 27 w3 */

$(document).ready(function(){
var element = $('<h1>',{
    text : "jQuery",
    class : "test"
});
console.log("acesta este un test pentru element", element);
$('#unAltId').text( element.get(0).outerHTML);
});
/**  detect a textbox's content has changed */

$("#textDe form input").on("input", function(){
    var e = $(this).val();
    console.log("text changed to: ", e );
});