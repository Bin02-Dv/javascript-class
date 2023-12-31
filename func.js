function on(){
    document.querySelector('img').src = "on.png";
    document.getElementById('bulp').innerHTML = "Bulp in now On";
    document.getElementById('btn_1').style = "border: 1px solid red;";
    document.getElementById('btn_2').style = "border: none;";
}
function off(){
    document.querySelector('img').src = "off.png";
    document.getElementById('bulp').innerHTML = "Bulp in now Off";
    document.getElementById('btn_2').style = "border: 1px solid green;";
    document.getElementById('btn_1').style = "border: none;";
}