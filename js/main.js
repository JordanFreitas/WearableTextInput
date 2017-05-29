


 document.addEventListener("DOMContentLoaded", function(event) {
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


//         var hamTouch1 = new Hammer(keyboard1);
//          hamTouch1.on("swipedown", function(event){
//                         keyboard1.style.display = "none"
//                         keyboard2.style.display = "block";
//                         keyboard3.style.display = "none";
//                         console.log("display3");
//                 });

//         var hamTouch2 = new Hammer(keyboard2);
//  hamTouch2.on("swipedown", function(event){
//                         keyboard1.style.display = "none"
//                         keyboard2.style.display = "none";
//                         keyboard3.style.display = "block";
//                         console.log("display3");
//                 });
//         var hamTouch3 = new Hammer(keyboard3);
//                  hamTouch3.on("swipedown", function(event){
//                         keyboard1.style.display = "block"
//                         keyboard2.style.display = "none";
//                         keyboard3.style.display = "none";
//                         console.log("display3");
//                 });
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

            // var node = document.createTextNode(message);
            // document.getElementsByClassName('container')[0].appendChild(node);

            console.log(message);
            message1.innerHTML = message;

        });
        hamTouch.on("swiperight", function(event){
            message += " ";
            var node = document.createTextNode(" ");
            //containerMain[0].appendChild(node);
            message1.innerHTML = message;
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
