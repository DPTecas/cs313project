function addPath()
{
	$(document).ready(function(){
	    $("#path1").click(function(){
	        $(this).hide();
	    });
	});
}

function fillResponse()
{
	var value = document.getElementById("r1").value;

	$.ajax({
		type: "GET",
        url: 'https://glacial-sands-13729.herokuapp.com/getResponses?id=' + value,
        success: function (result) {
             
        		if ($(this.name() == "r1"))
        			$('#response').html(result[0].r1);
        		else if ($(this.name() == "r2"))
        			$('#response').html(result[0].r1);
        		else if ($(this.name() == "r3"))
        			$('#response').html(result[0].r3);
            }
      
    });
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
             
        		$('#prompt').html(result[0].prompt);
        		$('#op1').html(result[0].option1);
        		$('#op2').html(result[0].option2);
        		$('#op3').html(result[0].option3);
            }

      
    });

    document.getElementById("r1").value = value;
    document.getElementById("r2").value = value;
    document.getElementById("r3").value = value;

    $("#dialog").dialog("open");
	});



  } );
  