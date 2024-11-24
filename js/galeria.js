
// texto animado da pagina galeria 

const textToType = "Aqui temos os times que estão competindo na premier league em 2024!";
const typingEffectElement = document.getElementById("galeriaAnimado");
let index = 0;

function typeText() {
    if (index < textToType.length) {
        typingEffectElement.textContent += textToType[index];
        index++;
        setTimeout(typeText, 50); 
    }
}

typeText();