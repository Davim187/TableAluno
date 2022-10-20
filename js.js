function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var nome = window.document.getElementById('nome')
var parcial = window.document.getElementById('parcial')
var bimestral = window.document.getElementById('bimestral')

document.addEventListener('submit', function (event) {
  event.preventDefault()
  criarTable()
})
var lAluno = []

function Etd(numeroAleatorio) {
  var excluir = document.getElementById(numeroAleatorio.id)

  if (excluir) {
    excluir.parentNode.removeChild(excluir);
  }

}


function criarTable() {
  var numeroAleatorio = getRandomIntInclusive(0, 10000000)
  var nome = window.document.getElementById('nome').value
  var parcial = window.document.getElementById('parcial').value
  var bimestral = window.document.getElementById('bimestral').value
  var soma = Number(parcial) + Number(bimestral)
  var media = soma / Number(2)
  var resultado = media >= 6

  if (nome != '' && parcial != '' && parcial <= 10 && bimestral != '' && bimestral <= 10) {

    var tbody = window.document.getElementById('tbody')

    const text = {
      nome, parcial, bimestral, media, resultado, numeroAleatorio
    }

    lAluno.push(text)

    tbody.innerHTML += lAluno.map((item) =>
      `
              <tr id='_${item.nome}_${item.numeroAleatorio}'>
              <td> ${item.nome} </td>
                <td> ${item.parcial} </td>
                <td> ${item.bimestral} </td>
                <td id='${item.resultado}_' > ${item.media} </td>
                <td><button onclick="Etd(_${item.nome}_${item.numeroAleatorio})">Excluir</button></td>
               
                </tr>
               `
    ).join('')

  } else {
    alert('Verifique se todos os campos estao preenchido ou se os numeros estao menores que 10')
  }
  Etd(nome)
}
