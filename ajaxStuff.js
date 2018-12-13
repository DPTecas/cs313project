function addPath()
{
	$(document).ready(function(){
	    $("#path1").click(function(){
	        $(this).hide();
	    });
	});
}

function fillResponse(name)
{
	var value = document.getElementById("r1").value;

	$.ajax({
		type: "GET",
        url: 'https://glacial-sands-13729.herokuapp.com/getResponses?id=' + value,
        success: function (result) {
             
        		if (name == "r1")
        			$('#response').html(result[0].r1);
        		else if (name == "r2")
        			$('#response').html(result[0].r2);
        		else if (name == "r3")
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
    $(this).hide();
    var value = $(this).val();

    document.getElementById("r1").value = "Loading...";
    document.getElementById("r2").value = "";
    document.getElementById("r3").value = "";
    document.getElementById("response").innerHTML = "";
    document.getElementById("r1").style.focus = false;

    $.ajax({
		type: "GET",
        url: 'https://glacial-sands-13729.herokuapp.com/getDialogues?id=' + value,
        success: function (result) {
             
        		$('#prompt').html(result[0].prompt);
        		$('#op1').html(result[0].option1);
        		$('#op2').html(result[0].option2);
        		$('#op3').html(result[0].option3);

        		$("#dialog").dialog("open");
            }

      
    });

    document.getElementById("r1").value = value;
    document.getElementById("r2").value = value;
    document.getElementById("r3").value = value;
    

	});
  } );
