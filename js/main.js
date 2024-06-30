/*function funcCheckBox() {
    var correct1 = document.getElementById("correct1");
    var correct2 = document.getElementById("correct2");
    var correct3 = document.getElementById("correct3");
    var correct4 = document.getElementById("correct4");


    let gateCloset = document.getElementById("gateCloset").innerHTML;
    let gateClosep = document.getElementById("gateClosep").innerHTML;
    let gateOpent = document.getElementById("gateOpent").innerHTML;
    let gateOpenp = document.getElementById("gateOpenp").innerHTML;


 



    if (   correct1.checked == true && correct2.checked == true && correct3.checked == true && correct4.checked == true
        ){
            gateOpent.style.display = "block";
            gateOpenp.style.display = "block";

            gateCloset.style.display = "none";

            gateClosep.style.display = "none";
    } else {
        gateOpent.style.display = "none";
        gateOpenp.style.display = "none";

        gateCloset.style.display = "block";
        gateClosep.style.display = "block";

    }
  }
  */




  function funcCheckBox() {
    var correct1 = document.getElementById("correct1");
    var correct2 = document.getElementById("correct2");
    var correct3 = document.getElementById("correct3");
    var correct4 = document.getElementById("correct4");
    var correct5 = document.getElementById("correct5");


    var gateCloset = document.getElementById("gateCloset");
    var gateClosep = document.getElementById("gateClosep");

    var gateOpent = document.getElementById("gateOpent");
    var gateOpenp = document.getElementById("gateOpenp");



    if (   correct1.checked == true 
        && correct2.checked == true
        && correct3.checked == true
        && correct4.checked == true
        && correct5.checked == true

        ){
            gateOpent.style.display = "block";
            gateOpenp.style.display = "block";

            gateCloset.style.display = "none";

            gateClosep.style.display = "none";
    } else {
        gateOpent.style.display = "none";
        gateOpenp.style.display = "none";

        gateCloset.style.display = "block";
        gateClosep.style.display = "block";

    }
  }
 