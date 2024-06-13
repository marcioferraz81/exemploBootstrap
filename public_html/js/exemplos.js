
$("#alternar1").hide();

$("#esconder").click(function () {
    $("#teste1").fadeOut();
    //$("#teste").hide();

});

$("#mostrar").click(function () {
    $("#teste1").fadeIn();
    //$("#teste").show();
});

$("#alterarCSS").click(function () {
    $("#teste2").css({ "background-color": "yellow", "font-size": "200%" });
});

$("#alterarClass").click(function () {
    $("#teste3").removeClass("alert-success").addClass("alert-primary");
    $("#alterarClass").removeClass("btn-success").addClass("btn-primary");
});

$("#alternar1").click(function () {
    $("#link").attr({
        "href": "https://www.cps.sp.gov.br/",
        "title": "CPS"
    });
    $("#link").text("CPS");
    $("#alternar1").hide();
    $("#alternar2").show();
});

$("#alternar2").click(function () {
    $("#link").attr({
        "href": "https://fatecid.com.br/",
        "title": "Fatec Indaiatuba"
    });
    $("#link").text("Fatec");
    $("#alternar2").hide();
    $("#alternar1").show();
});