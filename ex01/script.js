let lista = window.document.querySelector('input#fnum')
let num = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else  {
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar(){
    if(isNumero(lista.value) && !inLista(lista.value, valores)){
        valores.push(Number(lista.value))
        let item = document.createElement('option')
        item.text = `O valor ${lista.value} foi adicionado`
        num.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    } 
    lista.value = ''
    lista.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Nenhum número foi inserido, adicione um número para finalizar')
    }else{
        res.innerHTML = ''
        let soma = 0
        let divis = 0
        let maior = valores[0]
        let menor = valores [0]
        
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        divis = soma / valores.length
        res.innerHTML += `<p>A quantidade de número adicionados foi ${valores.length}</p>`
        res.innerHTML += `<p>O maior número é ${maior} e o menor número é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos números é ${divis}</p>`
        
    }

   
    
}