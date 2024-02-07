//Denegar simbolos especiales
function check(e){
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

//Encriptar
function encrypt(){
    var cadena2 = [];
    var cadena = [];
    var texto = document.getElementById("textcrypt").value;
    var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','0','1','2','3','4','5','6','7','8','9'];
    var abx = ['u','l','2','0','s','y','z','j','x','q','7','t','n','5','v','k','4','8','o','1','9','3','6','r','w','m','p','f','h','e','b','a','d','i','c','g','x'];
    var textoArray = texto.split('');

    for (let i = 0; i < textoArray.length; i++) {
        cadena.push(abc.indexOf(textoArray[i]));
        var random = Math.floor((Math.random() * 9));
        cadena.push(random);
    }

    for(let f = 0; f < cadena.length; f++){
        cadena2.push(abx[cadena[f]]);
    }
    var cadena3 = cadena2.join("");
    document.getElementById('textcrypt2').value = cadena3;
    document.getElementById('textcrypt').value = "";
}
//Desencriptar:
function decrypt(){
    var flag = 0;
    var cadena2 = [];
    var cadena = [];
    var texto = document.getElementById("textcrypt").value;
    var nospace = texto.replace(/\s+/g,"%")
    var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','0','1','2','3','4','5','6','7','8','9',"%"];
    var abx = ['u','l','2','0','s','y','z','j','x','q','7','t','n','5','v','k','4','8','o','1','9','3','6','r','w','m','p','f','h','e','b','a','d','i','c','g','x','A'];
    var textoArray = texto.split('');

    for (let i = 0; i < textoArray.length; i++) {
        cadena.push(abx.indexOf(textoArray[i]));
        if(flag == 0){
            flag ++;
        }
        else{
            cadena.pop();
            flag = 0;
        }
    }

    for(let f = 0; f < cadena.length; f++){
        cadena2.push(abc[cadena[f]]);
    }

    console.log(cadena);
    console.log(cadena2);
    var cadena3 = cadena2.join("");
    console.log(cadena3);
    document.getElementById('textcrypt2').value = cadena3;
    document.getElementById('textcrypt').value = "";
}

function copiar(){
    var textocopiado = document.getElementById('textcrypt2');
    navigator.clipboard.writeText(textocopiado.value);
}