function addPath()
{
	$(document).ready(function(){
	    $("#path1").click(function(){
	        $(this).hide();
	    });
	});
}

function fill()
{
	console.log("hello");
}

$(function() {
    $("#dialog").dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $(".opener").on("click", function() {

    var value = $(this).val();

    $.ajax({
		type: "GET",
        url: 'https://glacial-sands-13729.herokuapp.com/getDialogues?id=' + value,
        success: function (result) {

        		console.log(result[0].prompt);
                
        		$('#prompt').html(result[0].prompt);
        		$('#op1').html(JSON.stringify(result[0].option1));
        		$('#op2').html(JSON.stringify(result[0].option2));
        		$('#op3').html(JSON.stringify(result[0].option3));
            }
      
    });

    $("#dialog").dialog("open");
	});



  } );
  