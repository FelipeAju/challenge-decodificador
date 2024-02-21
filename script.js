const text = document.querySelector('.text');
const finalText = document.querySelector('.final-text');

function buttonEncrypt() {
    const textEncrypt = encrypt(text.value);
    finalText.value = textEncrypt;
    text.value = '';
}

function encrypt(stringEncrypt) {
    let key = [['a' , 'ai'] , ['e' , 'enter'] , ['i' , 'imes'] , ['o', '0ber'] , ['u' , 'ufat']];
    stringEncrypt = stringEncrypt.toLowerCase();

    for(let i = 0; i < key.length; i++) {
        if(stringEncrypt.includes(key[i][0])) {
            stringEncrypt=stringEncrypt.replaceAll(key[i][0], key[i][1]);
        }
    }
    return stringEncrypt;
}

