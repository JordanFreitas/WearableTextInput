document.addEventListener("DOMContentLoaded", function(event) {
    // Create a new input element
    var input = document.createElement("input");
    input.className = "input"; // set the CSS class

    // Append the new input element to you DOM in the desired location
    var container = document.getElementById('input-p');
    container.appendChild(input);

    // Assign a click event to your button that:
    document.getElementById("btn1").addEventListener("click", function() {
        var cont1 = document.getElementById("cont1");
        if (cont1.style.display == 'none') {
            document.getElementById("cont1").style.display = "initial";
                  }
        else {
            console.log("here");
            document.getElementById("cont1").style.display = "none";
        }
    });
    document.getElementById("btn2").addEventListener("click", function() {
        // document.getElementById("cont2").style.display = "initial";
         var cont1 = document.getElementById("cont2");
        if (cont1.style.display == 'none') {
            document.getElementById("cont1").style.display = "initial";
                  }
        else {
            console.log("here");
            document.getElementById("cont1").style.display = "none";
        }
    });
    document.getElementById("btn3").addEventListener("click", function() {
        var cont1 = document.getElementById("cont3");
        if (cont1.style.display == 'none') {
            document.getElementById("cont1").style.display = "initial";
                  }
        else {
            console.log("here");
            document.getElementById("cont1").style.display = "none";
        }
    });
    document.getElementById("btn4").addEventListener("click", function() {
        var cont1 = document.getElementById("cont4");
        if (cont1.style.display == 'none') {
            document.getElementById("cont1").style.display = "initial";
                  }
        else {
            console.log("here");
            document.getElementById("cont1").style.display = "none";
        }
    });
    document.getElementById("btn5").addEventListener("click", function() {
       var cont1 = document.getElementById("cont5");
        if (cont1.style.display == 'none') {
            document.getElementById("cont1").style.display = "initial";
                  }
        else {
            console.log("here");
            document.getElementById("cont1").style.display = "none";
        }
    });
    document.getElementById("btn6").addEventListener("click", function() {
         var cont1 = document.getElementById("cont6");
        if (cont1.style.display == 'none') {
            document.getElementById("cont1").style.display = "initial";
                  }
        else {
            console.log("here");
            document.getElementById("cont1").style.display = "none";
        }
    });
});




        // // Creates a new paragraph of text from your input element
        // var txt = document.getElementsByTagName('input')[0].value;
        // var paragraph = document.createElement("p");
        // var node = document.createTextNode(txt);
        // paragraph.appendChild(node);
        // document.getElementsByClassName('container')[0].appendChild(paragraph);

        // // Clears the text of the input element
        // document.getElementsByTagName('input')[0].value = '';