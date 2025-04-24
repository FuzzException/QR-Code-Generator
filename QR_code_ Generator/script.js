function genQR() {
    var gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var myimg = document.getElementById("img");
    var mytext = document.getElementById("qrtext").value.trim();
    var mysize = document.getElementById("size").value;

    if (mytext !== "") {
        myimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${mysize}x${mysize}&data=${encodeURIComponent(mytext)}`;
        // Example: https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=hello
    } else {
        alert("Please Enter Text");
    }
}
