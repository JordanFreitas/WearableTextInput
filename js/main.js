


 document.addEventListener("DOMContentLoaded", function(event) {
    // Create a new input element
    var input = document.createElement("input");
    input.className = "input"; // set the CSS class

    // Append the new input element to you DOM in the desired location
    var container = document.getElementById('input-p');
    container.appendChild(input);

    var cont1 = document.getElementById("cont1");
     var cont2 = document.getElementById("cont2");
      var cont3 = document.getElementById("cont3");
       var cont4 = document.getElementById("cont4");
        var cont5 = document.getElementById("cont5");
         var cont6 = document.getElementById("cont6");


    // Assign a click event to your button that:
    document.getElementById("btn1").addEventListener("click", function() {
        cont1.style.display = "block";
        cont2.style.display = "none";
       cont3.style.display = "none";
      cont4.style.display = "none";
       cont5.style.display = "none";
       cont6.style.display = "none";
    });
    document.getElementById("btn2").addEventListener("click", function() {
         cont1.style.display = "none";
        cont2.style.display = "block";
       cont3.style.display = "none";
       cont4.style.display = "none";
       cont5.style.display = "none";
       cont6.style.display = "none";
    });
    document.getElementById("btn3").addEventListener("click", function() {
         cont1.style.display = "none";
        cont2.style.display = "none";
       cont3.style.display = "block";
       cont4.style.display = "none";
       cont5.style.display = "none";
       cont6.style.display = "none";
    });
    document.getElementById("btn4").addEventListener("click", function() {
        cont1.style.display = "none";
        cont2.style.display = "none";
       cont3.style.display = "none";
       cont4.style.display = "block";
       cont5.style.display = "none";
       cont6.style.display = "none";
    });
    document.getElementById("btn5").addEventListener("click", function() {
        cont1.style.display = "none";
        cont2.style.display = "none";
       cont3.style.display = "none";
       cont4.style.display = "none";
       cont5.style.display = "block";
       cont6.style.display = "none";
    });
    document.getElementById("btn6").addEventListener("click", function() {
       cont1.style.display = "none";
       cont2.style.display = "none";
       cont3.style.display = "none";
       cont4.style.display = "none";
       cont5.style.display = "none";
       cont6.style.display = "block";

    });

    var hammertime = new Hammer(container, );

        var touchTest = document.getElementById("touchTest");

        var hamTouch = new Hammer(touchTest);

        hamTouch.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
        var message = "";
        var containerMain = document.getElementsByClassName('container');


        // var currentLetter = "";
        $("button").click(function() {

            var letter = this.id; // or alert($(this).attr('id'));
            if (this.className == "charL") {
                // currentLetter = letter;
                message += letter;
                var node = document.createTextNode(letter);
                containerMain[0].appendChild(node);
                //console.log(message);
            }
        });


       hamTouch.on("swipeup", function(event){
        cont1.style.display = "none";
           cont2.style.display = "none";
           cont3.style.display = "none";
           cont4.style.display = "none";
           cont5.style.display = "none";
           cont6.style.display = "block";
           alert("up");

        });
        hamTouch.on("swipedown", function(event){
           cont1.style.display = "none";
           cont2.style.display = "none";
           cont3.style.display = "none";
           cont4.style.display = "none";
           cont5.style.display = "block";
           cont6.style.display = "none";
           alert("down");
        });
        hamTouch.on("swipeleft", function(event){
            containerMain[0].removeChild(this)
            message = message.slice(0,-1);

            console.log(message);

        });
        hamTouch.on("swiperight", function(event){
            message += " ";
            var node = document.createTextNode(" ");
            containerMain[0].appendChild(node);
           console.log(message);
        });
    });





    //    var cont1 = document.getElementById("cont6");
    //         if (cont1.style.display == 'none') {
    //             document.getElementById("cont1").style.display = "initial";
    //                   }
    //         else {
    //             console.log("here");
    //             document.getElementById("cont1").style.display = "none";
    //         }
            // // Creates a new paragraph of text from your input element
            // var txt = document.getElementsByTagName('input')[0].value;
            // var paragraph = document.createElement("p");
            // var node = document.createTextNode(txt);
            // paragraph.appendChild(node);
            // document.getElementsByClassName('container')[0].appendChild(paragraph);

            // // Clears the text of the input element
            // document.getElementsByTagName('input')[0].value = '';
