
// texto animado da pagina main 

const textToType = "Complete o cadastro e nos de seu feedback!";
const typingEffectElement = document.getElementById("cadastroAnimado");
let index = 0;

function typeText() {
    if (index < textToType.length) {
        typingEffectElement.textContent += textToType[index];
        index++;
        setTimeout(typeText, 75); 
    }
}

typeText();