var u = confirm("apakah anda ingin mengulang?");
var counter = 0;

while (u) {
    counter++;
    var bintang = "*".repeat(counter) + "<br>";
    document.write(counter + ": " + bintang);
    u = confirm("apakah anda ingin mengulang?");
}



