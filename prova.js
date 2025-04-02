import PromptSync from "prompt-sync";
const input=PromptSync();

const concatenaParole=(a,b)=>{
    return a+b;
}

function main(){
    let parola1=input("Inserisci la prima parola: ");
    let parola2=input("Inserisci la seconfa parola: ");

    let parolaConcatenata=concatenaParole(parola1,parola2);
    console.log("La parola concatenata e': "+parolaConcatenata);
}

main();