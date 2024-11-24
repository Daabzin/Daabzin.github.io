
// texto animado da pagina main 

const textToType = "Bem-Vindo! Aqui estaremos falando um pouco sobre nós!";
const typingEffectElement = document.getElementById("mainAnimado");
let index = 0;

function typeText() {
    if (index < textToType.length) {
        typingEffectElement.textContent += textToType[index];
        index++;
        setTimeout(typeText, 75); 
    }
}

typeText();