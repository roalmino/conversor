function Calcular() {
  var pesoElemento = document.getElementById('number')
  var peso = pesoElemento.value
  var pesoNum = parseFloat(peso)

  var valorXicara = pesoNum / 120

  var elementoConvertido = document.getElementById('pesoConvertido')
  var xicara = 'Isso equivale à ' + valorXicara + ' xícaras'
  elementoConvertido.innerHTML = xicara

  console.log(valorXicara)
}
