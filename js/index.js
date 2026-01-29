//Anteiormente se declaraban de la siguiente forma las funciones
function cambiar(){
    const nombre= 'Ximena'
    alert (`Ahora desde archivo ${nombre}`)
}

//La nueva forma es esta
const ecma = () => {
    alert('Ahora con ECma6', j)
}

var i = 4
let j = 10
//var i = '4'

console.log('@@@ variable => ', i, j)
//Lo siguiente es un prompt
//Ventana emergente que guarda la respuesta en una variable
//let isInLove = prompt('¿Estas enamoradill@?')
//console.log('@@@ isInLove =>', isInLove, typeof isInLove)

const suma = () => {
    let valor1= prompt('Introduce el primer valor')
    let valor2= prompt('Introduce el segundo valor')
    let suma = Number(valor1) + Number(valor2)
    const label= document.getElementById('suma')
    label.textContent = `El resultado es: ${suma}`
    console.log('@@@ suma => ', suma)
    if(suma>100 && suma < 199){
        console.log('@@@ mayor que 100 => ', suma)
    }
    else if(suma<30){
        suma()
    } //Compara valor y tipo de variable
    else if(suma=== 200){
        console.log('@@@ comparando igual a 200 con tipo de variable', suma)
    }
}