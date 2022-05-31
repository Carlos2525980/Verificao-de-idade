function verificar() {

    var data = new Date() //pega a data
    var ano = data.getFullYear() // o ano com 4 digitos
    var fano = document.getElementById('txtano')//setando o input de ano
    // var res = document.getElementById('res')
    var res = document.querySelector('div#res')
    //validação de prenchimento de do campo ano de nascimento
    if (fano.value.length == 0 || Number(fano.value) > ano) {//verifica se ano foi digitado ou se ano digitado é maior que o ano atual

        window.alert('Verifique os dados e tente novamente')

    }

    else { //validação da idade
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //criando elemento foto
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { //validação de msg

            genero = 'Homem'
            if (idade >= 0 && idade < 10) {

                //criança
                img.setAttribute('src', 'homem-crianca.jpg' )

            } else if (idade < 21) {

                //jovem
                img.setAttribute('src', 'homem-jovem.jpg' )

            } else if (idade < 50) {

                //adulto
                img.setAttribute('src', 'homem-maduro.jpg' )
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.jpg' )
            }


        } else if (fsex[1].checked) {

            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {

                //criança
                img.setAttribute('src', 'mulher-crianca.jpg' )

            } else if (idade < 21) {

                //jovem
                img.setAttribute('src', 'mulher-jovem.jpg' )

            } else if (idade < 50) {

                //adulto
                img.setAttribute('src', 'mulher-madura.jpg' )
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idosa.jpg' )
            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //setando imagem no res
    }
}