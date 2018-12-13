var insanity = 0;
var courage = 0;
var boring = 0;
var mainTrait = "Courageous";
var mainScore = 0;

$(function()
{
	var value = 1;

	$.ajax({
		type: "GET",
        url: 'https://glacial-sands-13729.herokuapp.com/getScores?id=' + value,
        success: function (result) {
        	for (var i = 9; i >= 0; i--)
        	{
        		tag = '#b' + i;
        		if (result[i] != undefined)
        			$(tag).html(result[i].name);// + result[i].score + result[i].category);
        	}
        	$("#board").dialog("open");
        }
    });
});

function insertData()
{
	var value = 1;
	var name = document.getElementById("name").value;

	var data = {};
	data.title_id = value;
	data.name = name;
	data.score = mainScore;
	data.category = mainTrait;

	$.ajax({
		type: "POST",
        url: 'https://glacial-sands-13729.herokuapp.com/postScores',
        data: data,
        success: function (result) {
        	alert('Successfully inserted name intot the board!');
        }
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
        		{
        			$('#response').html(result[0].r1);
        			insanity += 1;
        		}
        		else if (name == "r2")
        		{
        			$('#response').html(result[0].r2);
        			courage += 1;
        		}
        		else if (name == "r3")
        		{
        			$('#response').html(result[0].r3);
        			boring += 1;
        		}

        		if (insanity > boring && insanity > courage)
        		{
        			mainTrait = "Insane";
        			mainScore = insanity;
        		}
        		else if (boring > insanity && boring > courage)
        		{
        			mainTrait = "Boring";
        			mainScore = boring;
        		}
        		else 
        		{
        			mainTrait = "Courageous";
        			mainScore = courage;
        		}
            }   
    });
}


$(function() {

	$("#board").dialog({
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

	$("#insert").dialog({
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
    
    document.getElementById("response").innerHTML = "";

    $.ajax({
		type: "GET",
        url: 'https://glacial-sands-13729.herokuapp.com/getDialogues?id=' + value,
        success: function (result) {
             
        		$('#prompt').html(result[0].prompt);
        		$('#op1').html(result[0].option1);
        		$('#op2').html(result[0].option2);
        		$('#op3').html(result[0].option3);

        		if(value == "10")
        			$("#insert").dialog("open");

        		$("#dialog").dialog("open");
            }    
    });

    document.getElementById("r1").value = value;
    document.getElementById("r2").value = value;
    document.getElementById("r3").value = value;
    

	});
  } );
