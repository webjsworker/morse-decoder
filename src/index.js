const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = expr.split()
    let code = []
    for (let i = 0; i < expr.length / 10; i++) {
        code.push(expr.substring((i * 10), 10 + (i * 10)))
    }
    code = code.map((elem) => {
        if (elem === '**********') {
            return ' '
        }
        return elem = +elem
    })
    code = code.map(elem => {
        elem = String(elem).replace(/10/g, '.');
        elem = String(elem).replace(/11/g, '-');
        return elem
    })
    code = code.map(elem => {
        for (key in MORSE_TABLE) {
            if (key == elem) {
                return elem = MORSE_TABLE[key]
            }
        }
        return elem
    })
    return code = code.join('')
}

module.exports = {
    decode
}