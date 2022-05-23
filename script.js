console.log('Javascript carregado');

function validaCPF(cpf){
    console.log(cpf.length); //exibi na tela a quantidade de caracteres digitados para cpf
    if(cpf.length !=11){   //verifica se atigiu o tamanho de 11 caracteres
        return false;
    } else {

        var numeros = cpf.substring(0,9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma = soma + numeros.charAt(10-i)*i;
        }
        console.log(soma);

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11); // se a operação for menor que 2, valor final 0

        //validação primeiro digito
        if(resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0; //sobrescrevendo variavel
        numeros = cpf.substring(0, 10); //sobrescrevendo variavel

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);


        //validação do segundo digito
        if(resultado != digitos.charAt(1)){
            return false;
        }

        return true;
    }
    
}

function validacao() {
    console.log('Iniciando validação CPF');
    document.getElementById('success').style.display = 'none'; //limpa a tela ápos a validadação
    document.getElementById('error').style.display = 'none'; //limpa a tela ápos a validadação

    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);
    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao == true) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    } 
}