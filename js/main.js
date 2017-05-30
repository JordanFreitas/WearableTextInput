


 document.addEventListener("DOMContentLoaded", function(event) {

    var userData = document.implementation.createDocument(null, "TextTest");
    var entriesCount = 0;
    
	var downloadButton;

    var currentString = document.getElementById('displayText');
     var count = document.getElementById('counter');

	 var globalIndex = 0; //current index in the array of string
     count.innerHTML = globalIndex+1;

	var strings = [
                    'my watch fell in the water',
                    'prevailing wind from the east',
                    'never too rich and never too thin',
                    'breathing is difficult',
                    'I can see the rings on Saturn',
                    'physics and chemistry are hard',
                    'my bank account is overdrawn',
                    'elections bring out the best',
                    'we are having spaghetti',
                    'time to go shopping',
                    'a problem with the engine',
                    'elephants are afraid of mice',
                    'my favorite place to visit',
                    'three two one zero blast off',
                    'my favorite subject is psychology',
                    'circumstances are unacceptable',
                    'watch out for low flying objects',
                    'if at first you do not succeed',
                    'please provide your date of birth',
                    'we run the risk of failure',
                    'prayer in schools offends some',
                    'he is just like everyone else',
                    'great disturbance in the force',
                    'love means many things',
                    'you must be getting old',
                    'the world is a stage',
                    'can I skate with sister today',
                    'neither a borrower nor a lender be',
                    'one heck of a question',
                    'question that must be answered',
                    'beware the ides of March',
                    'double double toil and trouble',
                    'the power of denial',
                    'I agree with you',
                    'do not say anything',
                    'play it again Sam',
                    'the force is with you',
                    'you are not a jedi yet',
                    'an offer you cannot refuse',
                    'are you talking to me',
                    'yes you are very smart',
                    'all work and no play',
                    'hair gel is very greasy',
                    'Valium in the economy size',
                    'the facts get in the way'
			];
	currentString.innerHTML = '<p>' + strings[globalIndex] + '</p>'; 
 
	appendTrial(strings, 0); // set initial first trial





    // Create a new input element
    var input = document.createElement("input");
    //input.className = "input"; // set the CSS class

    // Append the new input element to you DOM in the desired location
    var container = document.getElementById('input-p');
    //container.appendChild(input);
      var keyboard1 = document.getElementById('key1');
      var keyboard2 = document.getElementById('key2');
      var keyboard3 = document.getElementById('key3');
    //   keyboard1.style.display = "block";
    //   keyboard2.style.display = "none";
    //   keyboard3.style.display = "none";

    var cont1 = document.getElementById("cont1");
    var cont2 = document.getElementById("cont2");
    var cont3 = document.getElementById("cont3");
    var cont4 = document.getElementById("cont4");
    var cont5 = document.getElementById("cont5");

    var k2cont1 = document.getElementById("k2cont1");
    var k2cont2 = document.getElementById("k2cont2");
    var k2cont3 = document.getElementById("k2cont3");


    // Assign a click event to your button that:
    document.getElementById("btn1").addEventListener("click", function() {
        cont1.style.display = "block";
        cont2.style.display = "none";
       cont3.style.display = "none";
      cont4.style.display = "none";
       cont5.style.display = "none";
       //cont6.style.display = "none";
    });
    document.getElementById("btn2").addEventListener("click", function() {
         cont1.style.display = "none";
        cont2.style.display = "block";
       cont3.style.display = "none";
       cont4.style.display = "none";
       cont5.style.display = "none";
       //cont6.style.display = "none";
    });
    document.getElementById("btn3").addEventListener("click", function() {
         cont1.style.display = "none";
        cont2.style.display = "none";
       cont3.style.display = "block";
       cont4.style.display = "none";
       cont5.style.display = "none";
       //cont6.style.display = "none";
    });
    document.getElementById("btn4").addEventListener("click", function() {
        cont1.style.display = "none";
        cont2.style.display = "none";
       cont3.style.display = "none";
       cont4.style.display = "block";
       cont5.style.display = "none";
       //cont6.style.display = "none";
    });
    document.getElementById("btn5").addEventListener("click", function() {
        cont1.style.display = "none";
        cont2.style.display = "none";
       cont3.style.display = "none";
       cont4.style.display = "none";
       cont5.style.display = "block";
       //cont6.style.display = "none";
    });
    // document.getElementById("btn6").addEventListener("click", function() {
    //    cont1.style.display = "none";
    //    cont2.style.display = "none";
    //    cont3.style.display = "none";
    //    cont4.style.display = "none";
    //    cont5.style.display = "none";
    //   // cont6.style.display = "block";

    // });



    function appendTrial(strings, index) {
		var trialElement = userData.createElement("Trial");		
		trialElement.setAttribute("number", index + 1); // trial number is not based 0, so add 1
		if (index < 5) { //first 5 of 45 are just practice 
			trialElement.setAttribute("testing", "false");
		} else { 
			trialElement.setAttribute("testing", "true");		
		}
		trialElement.setAttribute("entries", entriesCount);
		userData.getElementsByTagName("TextTest")[0].appendChild(trialElement);	
		appendPresented(strings, index);	
	}

	function appendPresented(strings, index) {
		var presentedElement = userData.createElement("Presented");
		presentedElement.textContent = strings[index];
		userData.getElementsByTagName("Trial")[index].appendChild(presentedElement);   		
	}

	function appendEntry(index, char) {
		var ticks = (new Date().getTime() * 10000) + 621355968000000000 ; // https://stackoverflow.com/questions/7966559/how-to-convert-javascript-date-object-to-ticks
		var seconds = new Date().getTime() / 1000; //convert ms to seconds
		var entryElement = userData.createElement("Entry");
		entryElement.setAttribute("char", char);
        if (char == ' ') { //a space value has to be 32, charCodeAt returns 160
            entryElement.setAttribute("value", 32);
        } else if (char === '&#x8;') {
            console.log('inside');
            entryElement.setAttribute("value", 8); // a backspace value has to be 8, charCodeAt returns 38;
        } else {
            entryElement.setAttribute("value", char.charCodeAt(0));            
        }
        console.log(entryElement);
		entryElement.setAttribute("ticks", ticks);		
		entryElement.setAttribute("seconds", seconds);
        console.log(index);
		userData.getElementsByTagName("Trial")[index].appendChild(entryElement);
		userData.getElementsByTagName("Trial")[index].setAttribute("entries", entriesCount);        
	}

	function appendTranscribed(transcription) {
		var transcribedElement = userData.createElement("Transcribed");
		transcribedElement.textContent = transcription;
		userData.getElementsByTagName("Trial")[globalIndex].appendChild(transcribedElement);
	}

/************************************************************************/	


    var hammertime = new Hammer(container, );

        var touchTest = document.getElementById("touchTest");
        var hamTouch = new Hammer(touchTest);
        var message = "";
        hamTouch.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
        var containerMain = document.getElementsByClassName('container');
        var message1 = document.getElementById("msg1");
        var sent = document.getElementById("chatlog");

        // var currentLetter = "";
        $("button").click(function() {
            var letter = this.id; // or alert($(this).attr('id'));
            if (this.className == "charL") {
                // currentLetter = letter;
                message += letter;
         		appendEntry(globalIndex, letter);

                //var node = document.createTextNode(letter);
                message1.innerHTML = message;
                //containerMain[0].appendChild(node);
                //console.log(message);
            } else if (this.className == "send") {
                var node = document.createTextNode(message);
                document.getElementsByClassName('history')[0].appendChild(node);
                var br = document.createElement("br");
                document.getElementsByClassName('history')[0].appendChild(br);
                //sent.innerHTML = message;
              
                message = "";
                message1.innerHTML = message;
                entriesCount = 0;
                // var textVal = $('#inputText h1').text()
		        // $('#inputText h1').empty();
		        appendTranscribed(message);
		        globalIndex++;
                count.innerHTML = globalIndex +1;
                console.log(globalIndex);
                console.log(strings.length);
                 if (globalIndex > strings.length - 1) { // reached end of string array
                    alert('test is done!');

                    console.log('userData = ' + userData);
                    //create button
                    // downloadButton = $('<button type="button" class="btn btn-primary">Download Data </button>');
                    // $('#transcribeText').append(downloadButton);
                    console.log(downloadButton[0]);

		} 
        currentString.innerHTML = '<p>' + strings[globalIndex] + '</p>';
        if (globalIndex < strings.length) {
    		appendTrial(strings, globalIndex);
        }
		console.log(userData);
        }
           
        });

       hamTouch.on("swipeup", function(event){
          // cont1.style.visibility = "hidden";
           //k2cont1.style.visibility = 'inherit';
           $("#cont1").hide();
           $("#cont2").show();
           k2cont2.style.display = "none";
           k2cont3.style.display = "none";
        //    cont6.style.display = "block";
          // alert("up");

        });


        hamTouch.on("swipedown", function(event){

            //  var classes = ['key1','key2','key3'];
                // $('div').each(function(){
                    console.log("check");
                    // this.className1 = classes[($.inArray(this.className, classes)+1)%classes.length];
                    // this.className2 = classes[($.inArray(this.className, classes)+2)%classes.length];
                    // this.className3 = classes[($.inArray(this.className, classes)+3)%classes.length];
                    // console.log(this.className1);
                    // console.log(this.className2);
                    // console.log(this.className3);

                    console.log(keyboard1);
                    // if(document.getElementById('key1').style.display = "block"){
                    //    keyboard1.style.display = "none"
                    //     keyboard2.style.display = "block";
                    //     keyboard3.style.display = "none";
                    //     console.log("display2");
                    // }
                    if(keyboard1.style.display == 'block'){
                        keyboard1.style.display = "none";
                        keyboard2.style.display = "block";
                        keyboard3.style.display = "none";
                        console.log("display3");
                    }
                    if(keyboard2.style.display == 'block'){
                        keyboard1.style.display = "none";
                        keyboard2.style.display = "none";
                        keyboard3.style.display = "block";
                        console.log("display3");
                    }
                    if(keyboard3.style.display == 'block'){
                        keyboard1.style.display = "block";
                        keyboard2.style.display = "none";
                        keyboard3.style.display = "none";
                        console.log("display1");
                    }

                // });
                });


        //    cont1.style.display = "none";
        //    cont2.style.display = "none";
        //    cont3.style.display = "none";
        //    cont4.style.display = "none";
        //    cont5.style.display = "block";
        // //    cont6.style.display = "none";
        //    alert("down");

        hamTouch.on("swipeleft", function(event){
            // containerMain.removeChild(containerMain.lastChild);
            message = message.slice(0,-1);
        var appendVal = "&#x8;" //backspace character   
		var val = $('#inputText h1');
		var valLength = val.text().length;

		val.text(val.text().substring(0, valLength - 1));
        entriesCount++;
		appendEntry(globalIndex, '&#x8;');

            console.log(message);
            message1.innerHTML = message;

        });
        hamTouch.on("swiperight", function(event){
            message += " ";
            var node = document.createTextNode(" ");
            var appendVal = "\xa0";
  		    var val = $('#inputText h1');
  		    val.text(val.text() + appendVal);
            entriesCount++;
		    appendEntry(globalIndex, " ");
            //containerMain[0].appendChild(node);
            message1.innerHTML = message;

           console.log(message);
        });
   



/*******************Date stuff for <TextTest> node *********************/
    var rootElement = userData.documentElement; //grabs the <TextTest node>
    
    rootElement.setAttribute("version", "2.7.2");
    rootElement.setAttribute("trials", strings.length); 
    rootElement.setAttribute("ticks", (new Date().getTime() * 10000) + 621355968000000000);  
    rootElement.setAttribute("seconds", new Date().getTime() / 1000);
    
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var date = new Date();
    var currentDate = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() + ' ' + date.getHours()  + ':' + date.getMinutes() + ':' + date.getSeconds();
    currentDate = formatDate(currentDate);
    
    // https://stackoverflow.com/questions/4898574/converting-24-hour-time-to-12-hour-time-w-am-pm-using-javascript
    function formatDate(date) {
        var d = new Date(date);
        var hh = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        var dd = "AM";
        var h = hh;
        if (h >= 12) {
            h = hh - 12;
            dd = "PM";
        }
        if (h == 0) {
            h = 12;
        }
        m = m < 10 ? "0" + m : m;

        s = s < 10 ? "0" + s : s;

        /* if you want 2 digit hours:
        h = h<10?"0"+h:h; */

        var pattern = new RegExp("0?" + hh + ":" + m + ":" + s);

        var replacement = h + ":" + m;
        /* if you want to add seconds
        replacement += ":"+s;  */
        replacement += " " + dd;

        return date.replace(pattern, replacement);
    }    
    
    var currentDate = days[date.getDay()] + ', ' + currentDate;
    rootElement.setAttribute("date", currentDate);
	console.log(userData);
/************************ download button events ********************/ 
	$('#download').on('click', downloadButton, function() {
		var a = document.createElement('a'), xml, ev;
		a.download = 'Test_Result.xml'; // file name
		xml = (new XMLSerializer()).serializeToString(userData).replace(/&amp;#x8;/gi, "&#x8;"); // convert node to xml string
		var xmlNode = '<?xml version = "1.0" encoding="utf-8" standalone="yes"?>';
		xml = xmlNode + xml;
		a.href = 'data:application/octet-stream;base64,' + btoa(xml); // create data uri
		// <a> constructed, simulate mouse click on it
		ev = document.createEvent("MouseEvents");
		ev.initMouseEvent("click", true, false, self, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		a.dispatchEvent(ev);

		downloadButton.attr('disabled', 'disabled'); // disable the button after click
	})
	
 });



