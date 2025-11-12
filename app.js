function excuse(){

    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    let indexWho = Math.floor(Math.random()*who.length)
    let indexAction = Math.floor(Math.random()*action.length)
    let indexWhat = Math.floor(Math.random()*what.length)
    let indexWhen = Math.floor(Math.random()*when.length)

    let phrase = "" 
    phrase = who[indexWho] + " " + action[indexAction] + " " + what[indexWhat] + " " + when[indexWhen]
    return phrase
    
}

//Obtener la frase:
const fraseAleatoria = excuse();

//Obtener el elemento HTML por su ID:
const contenedor = document.getElementById("excuseText");

//Inyectar la frase:
contenedor.textContent = fraseAleatoria;