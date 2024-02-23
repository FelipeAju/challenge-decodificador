const inputText = document.querySelector('.input-text');
const finalText = document.querySelector('.final-text');

function buttonEncrypt() {
    const textEncrypt = encrypt(inputText.value);
    finalText.value = textEncrypt;
    inputText.value = '';
}

function encrypt(stringEncrypt) {
    let key = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o', '0ber'] , ['u' , 'ufat']];
    stringEncrypt = stringEncrypt.toLowerCase();

    for(let i = 0; i < key.length; i++) {
        if(stringEncrypt.includes(key[i][0])) {
            stringEncrypt = stringEncrypt.replaceAll(key[i][0], key[i][1]);
        }
    }
    return stringEncrypt;
}

function buttonDecrypt () {
    const textDecrypt = decrypt(inputText.value);
    finalText.value = textDecrypt;
    inputText.value = '';
}

function decrypt(stringDecrypt) {
    let key = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "0ber"], ["u" , "ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase();

    for (let i = 0; i < key.length; i++) {
        if(stringDecrypt.includes(key[i][1])) {
            stringDecrypt = stringDecrypt.replaceAll(key[i][1], key[i][0]);
        }   
    }
    return stringDecrypt
}

function copyText() {
    const finalText = document.querySelector('.final-text')
    let standBy = finalText.value;

    navigator.clipboard.writeText(standBy);    
}

const buttonCopy = document.querySelector('.button__copy');
buttonCopy.onclick = copyText;

function outputText() {
    const buttonCopy = document.querySelector('.button__copy');
    buttonCopy.style.display = 'block';
    const finalText = document.querySelector('.final-text')[0];
    finalText.style.display = 'block';
}
