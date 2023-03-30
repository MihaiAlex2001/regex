function extractPattern() {

    var pattern = document.getElementById('input').value; // pattern regex
    var text = document.getElementById('textarea1').value; // valori box1
    var results = "";
    
    try {
        var regex = new RegExp(pattern, 'gi');
    } catch(e) {
        alert(e);
        return false;
    }

    var matches = text.match(regex);
    

    if (matches != null) {
        for (const currentMatch of matches) {
            results = results + currentMatch + "\n";
        }
        document.getElementById('textarea2').value = results;
    } else {
        document.getElementById('textarea2').value = "Niciun rezultat gasit.";
    }
}