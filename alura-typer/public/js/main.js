var frase = $(".frase").text();//text() retorna o conteudo que se encontra dentro da tag html
var numPalavras = frase.split(" ").length;//split() dividi o conteudo em que esta dentro da variavel em um array
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras)

var campo = $(".campo-digitacao")

campo.on("input", function(){//.on() fica o tempo todo escutando o evento

    var conteudo = campo.val()//Função .val() da acesso ao valor do input do usuários

    var qtdPalavras = conteudo.split(/\S+/).length -1;
    $("#contador-palavras").text(qtdPalavras);
    
    var qtdCaracteres = conteudo.length
    $("#contador-caracteres").text(qtdCaracteres);
});

var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus",function(){ //focus pega qualquer interação com o campo //.one() chama a função uma unica vez diferente da .on()
    var cronometroID = setInterval(function(){
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        if(tempoRestante < 1){
            campo.attr("disabled", true);//.attr() serve para pegar os atributos do html ou então altera-lós
            clearInterval(cronometroID);//clearInterval da stop no setInterval() (todo setInterval retorna seu ID, então possivel pegalo por meio de uma variavel)
        }

    },1000);//Função pura do javascript, que executa uma ação de tanto em tanto tempo 
});