import PromptSync from "prompt-sync";
const input=PromptSync();

const concatenaParole=(a,b,c)=>{
    return a+b+c;
}

function main(){
    let parola1=input("Inserisci la prima parola: ");
    let parola2=input("Inserisci la seconfa parola: ");
    let parola3=input("Inserisci la terza parola: ");

    let parolaConcatenata=concatenaParole(parola1,parola2,parola3);
    console.log("La parola concatenata e': "+parolaConcatenata);
}

main();