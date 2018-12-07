function addPath()
{
	$(document).ready(function(){
	    $("#path1").click(function(){
	        $(this).hide();
	    });
	});
}


$(function() {

	let value = $('#opener').val();

	$.ajax({
		type: "GET",
        url: 'https://glacial-sands-13729.herokuapp.com/getDialogues?id=' + value,
        success: function (result) {
                
        		$('#prompt').html(JSON.stringify(result[0].prompt));
                console.log(result[0].prompt);
            }
    });

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
 
    $("#opener").on("click", function() {
      $("#dialog").dialog("open");
    });
  } );
  