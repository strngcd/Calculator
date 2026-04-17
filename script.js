const buttons = document.querySelectorAll('.btn button')

buttons.forEach(button => {
  
  button.addEventListener('click', calcBrain)
})
buttons.forEach(button => {
  
  button.addEventListener('click', calMonitor)
})


const equal = document.querySelector('#equal')
equal.addEventListener('click' , () =>{
    document.querySelector('.result').textContent = bucket
    document.querySelector('.input').textContent = bucket
    cBucket = bucket
    bucket = null
    operator = ''
})
const clear = document.querySelector('#clear')
clear.addEventListener('click' , () => {
    document.querySelector('.result').textContent = ''
    document.querySelector('.input').textContent = ''
    cBucket = ''
    bucket = null
    operator = ''

})







let cBucket = ''
let bucket = null
let operator = ''
let 
function calcBrain (e){
    if (e.target.classList.contains('number')) {
        cBucket += e.target.textContent
    }
    else{
        if (cBucket=== '')return
        if (bucket === null){
            bucket= Number(cBucket)
                                console.log('im here')

            operator = e.target.id
            cBucket = ''
        }
        else{
            switch (operator){
            case 'addition' :
                bucket += Number(cBucket)
                break
            case 'substraction':
                bucket -= Number(cBucket)
                break
            case 'divsion' :
                bucket /= Number(cBucket)                
                break
            case 'multiplication' :
                bucket *= Number(cBucket)

                break
            
            


        }
        cBucket = ''
        operator = e.target.id

        }
    }
    console.log(bucket)
}



function calMonitor (e){
    if (e.target.id !== 'equal' && )
    document.querySelector('.input').append(e.target.textContent)
}