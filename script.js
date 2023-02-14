
function sendmessage(){

    var number = document.getElementById("num").value;
  var message = document.getElementById("msg").value;

    var url = "https://wa.me/91"+number+"?text="
    + message ;
window.open(url, '_blank').focus();
}
