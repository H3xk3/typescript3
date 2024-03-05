$(document).ready(function() {
    // Functie om resultaat te tonen in invoerveld met idToShow
    function toonResultaat(nr1, nr2, idToShow) {
        let result = parseInt(nr1.val()) + parseInt(nr2.val());
        $(idToShow).val(result);
    }

    // Bereken knop 1
    $('#bereken1').on('click', function() {
        toonResultaat($('#g1'), $('#g2'), '#result1');
    });

    // Bereken knop 2
    $('#bereken2').on('click', function() {
        toonResultaat($('#g3'), $('#g4'), '#result2');
    });
});
