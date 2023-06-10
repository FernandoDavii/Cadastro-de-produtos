function vemca(){
    var txt = window.document.getElementById('txtano')
    var ano = Number(txt.value)
    var tempo = new Date()
    var ano1 = tempo.getFullYear()
    var idade = ano1 -= ano
    var msg = window.document.getElementById('msg')
    msg.innerText = `A idade do usuário é ${idade}`
}