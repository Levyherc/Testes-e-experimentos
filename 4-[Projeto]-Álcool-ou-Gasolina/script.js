function calcular() {
    let precoAlcool = document.getElementById('alcool').value
    let precoGasolina = document.getElementById('gasolina').value

    // Caso usuário deixe algum campo em branco
    if (precoAlcool === "") {
        alert("Preencher o preço do Álcool")
        document.getElementById('resultado').style.backgroundColor = '#f8d7da'
        return
    }

    if (precoGasolina === "") {
        alert("Preencher o preço do Gasolina")
        document.getElementById('resultado').style.backgroundColor = '#f8d7da'
        return
    }

    // Substitui vírgula por ponto para evitar erro de divisão
    precoAlcool = parseFloat(precoAlcool.replace(",", "."))
    precoGasolina = parseFloat(precoGasolina.replace(",", "."))

    let resultado = precoAlcool / precoGasolina

    if (resultado >= 0.7) {
        document.getElementById('resultado').innerHTML = "Mehor Utilizar Gasolina"
        document.getElementById('resultado').style.backgroundColor = '#f8d7da'
    } else {
        document.getElementById('resultado').innerHTML = "Melhor Ultizar Álcool"
        document.getElementById('resultado').style.backgroundColor = '#d1ecf1'
    }
}
