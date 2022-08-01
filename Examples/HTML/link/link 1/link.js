

 
 function html_5() {
 
    document.getElementById('from').style.display = 'none';
    document.getElementById('on').style.display = 'block';
    
}


function off_on() {

    document.getElementById('from').style.display = 'block';
    document.getElementById('on').style.display = 'none';

}

function rr() {
    document.getElementById('h4').style.display = 'block';
    var fm1 = document.getElementById('fnn');
    var ln1 = document.getElementById('LN');
    var e = document.getElementById('E');
    //password
    var pas = document.getElementById('pas');

    //el balad
    var c = document.getElementById('co');
    //elno3 
    var ma = document.getElementById("mm5");
    var fma = document.getElementById('fm');
    var G = " ";
    if (ma.checked == true) { G = 'Male'; } else if (fma.checked == true) { G = 'Female'; };

    var hhh = "";
    hhh = "Name:" + fm1.value + '.' + ln1.value + "";
    hhh += "<br/>eamil:" + e.value + "   ";
    hhh += "<br/>password:" + pas.value + "      ";
    hhh += "<br/>Gender:" + G + "  \n    ";
    hhh += "<br/>Contre:" + c.value + "       ";
    document.getElementById('h4').innerHTML = hhh;
}




/************************ */

function mood() {
    document.getElementById("des").style.display = "none"
    document.getElementById("vv").style.display = "none"
    document.getElementById("d1").style.display = "block"
    document.getElementById("x100").style.display = "block"


}

function Des() {
    document.getElementById("des").style.display = "block"
    document.getElementById("vv").style.display = "block "
    document.getElementById("d1").style.display = "none"
    document.getElementById("x100").style.display = "none"


}