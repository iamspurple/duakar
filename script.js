const isPalindrom = (string) => {
    const array = string.toLowerCase().split(' ').join('').split('');
    for (let i = 0; i <= Math.floor(array.length / 2); i++) {
        if (array[i] === array[array.length - 1 - i]) {
            return true
        } else return false
    }
    
};

const isPalindrom2 = (string) => {
    const str =  string.toLowerCase().split(' ').join('');
    const reversed = string.toLowerCase().split(' ').join('').split('').reverse().join('');
    console.log(str === reversed)
}

console.log(isPalindrom2('Hannah'));
console.log(isPalindrom2('А роза упала на лапу Азора'))