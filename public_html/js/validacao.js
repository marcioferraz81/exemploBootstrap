//Validação simples
//$("#formExemplo").validate();

$("#formExemplo").validate({
    debug: true,
    rules: {
        txtemail: {
            required: true,
            email: true,
        },
        txtnome: {
            rangelength: [2, 100], //entre 2 e 100 caract
            required: true,
        },
        txtidade: {
            min: 18,
            max: 100,
            // ou
            //range: [10, 15] //Realiza a mesma coisa dos anteriores
            required: true,
        }
    },
    messages: {
        txtemail: {
            required: "E-mail requerido",
            email: "Formato inválido de email",
        },
        txtnome: {
            required: "Nome requerido",
            minlength: jQuery.validator.format("Exigido 2 caracteres no mínimo"),
            maxlength: jQuery.validator.format("Permitido 100 caracteres no máximo"),
        },
        txtidade: {
            required: "Idade requerida",
            min : "Valor mínimo: 18",
            max : "Valor máximo: 100",
        }
    }
});

