var insanity = 0;
var courage = 0;
var boring = 0;
var mainTrait = "Courageous";
var mainScore = 0;

// for opening the board with the 10 most recent players to play
$(function()
{
	var j = 9;
	var value = 1;
	$("#boardOpen").on("click", function(){
	$.ajax({
		type: "GET",
        url: 'https://glacial-sands-13729.herokuapp.com/getScores?title_id=' + value,
        success: function (result) {
        	for (var i = result.length; i >= result.length-9; i--)
        	{
        		var plus = j+1;
        		var tag = '#b' + plus;
        		if (result[i] != undefined)
        		{
        			score = result[i].score * 10;
        			$(tag).html(result[i].name + " is " + score + "\% " + result[i].category);
        		}
        		j--;
        	}

        	$("#board").dialog("open");
        }
    });

    
    	
    });
});

// puts name and score data into the database, with their main trait or category
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
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: function (result) {
        	alert('Successfully inserted name into the board!');
        	$("#insert").dialog("close");
        }
    });

    document.getElementById("insertData").style.visibility = "hidden";
}

//will give a response when the user picks an option
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

        		document.getElementById("r1").style.visibility = "hidden";
        		document.getElementById("r2").style.visibility = "hidden";
        		document.getElementById("r3").style.visibility = "hidden";
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

        		document.getElementById("r1").style.visibility = "visible";
        		document.getElementById("r2").style.visibility = "visible";
        		document.getElementById("r3").style.visibility = "visible";
            }    
    });

    document.getElementById("r1").value = value;
    document.getElementById("r2").value = value;
    document.getElementById("r3").value = value;
    

	});
  } );
