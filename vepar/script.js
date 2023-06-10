function parimpar(n){
    if(n%2==0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

console.log(parimpar(15))

function soma(n1 = 0, n2=0){
    return n1 + n2
}
console.log(soma(4, 7))

let t = function(x){
    return x*2
}
console.log(t(3))