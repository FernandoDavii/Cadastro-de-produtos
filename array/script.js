let num = [5, 8, 2, 9, 3]
/*
num.sort()
num.push(1, 2)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro número do vetor é ${num[0]}`)


for(let c = 0; c < num.length;c++){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
for(let c in num){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}*/
let teste = num.indexOf(3)
if(teste == -1){
    window.alert('Número não encontrado')
}else{
    window.alert(`Achei a posição ${teste}`)
}