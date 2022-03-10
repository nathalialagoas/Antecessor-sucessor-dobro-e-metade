let bt = document.querySelector('input#bt')

bt.addEventListener('click',clicar)

function clicar (){
    let n = Number (prompt ('Digite um número inteiro'))
    let antecessor = n - 1 
    let sucessor = n + 1 
    let dobro = n * 2
    let metade = n / 2 
    
    let answer = alert (`Antes de ${n}, temos o número ${antecessor}
    Depois de ${n}, temos ${sucessor}
    Já o dobro de ${n} é igual a ${dobro}, e a metade ${metade}`)
}