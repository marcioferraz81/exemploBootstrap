$("#calcular").click(function () {

    var valor = parseFloat($("#txtvalor").val());
    var desconto = parseFloat($("#txtdesconto").val());
    var multa = parseFloat($("#txtmulta").val());
    var final = parseFloat((valor * (desconto / 100) + multa));

    var moeda = final.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    $('#txtresultado')
        .css({ 'font-weight': 'bold', 'font-size': '18pt' })
        .text('Resultado: ' + moeda);

    //alert(final);

    //if else
    if (valor <= 5) {
        alert('Valor abaixo');
    } else {
        alert('Valor acima');
    }

    //if ternário 
    var mostrar = 'da média';
    mostrar = valor > 7 ? 'acima ' + mostrar : 'abaixo ' + mostrar;

    alert('Cálculo de média condicional ternário: ' + mostrar);

    //switch case
    var msg = 'Resultado é ';

    switch (parseInt(final) % 2) {
        case 0:
            msg += 'par';
            break;
        default:
            msg += 'ímpar';
            break;
    }

    $('#txtmsg')
        .css({ 'font-weight': 'bold', 'font-size': '14pt', 'color': 'blue' })
        .text(msg);


    //fatorial
    var fatorial = 1;
    for (var x = 1; x <= valor; x++) {
        fatorial *= x;
    }

    $('#txtfatorial')
        .css({ 'font-weight': 'bold', 'font-size': '20pt', 'color': 'blue' })
        .text('Fatorial de ' + valor + '! é: ' + fatorial);

});