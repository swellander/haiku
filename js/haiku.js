export class Haiku {
    constructor(line1, line2, line3) {
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
    }

    hasThreeLines() {
        if (this.line1 && this.line2 && this.line3) {
            return true;
        } else {
            return false;
        }
    }

    countSyllables(str) {
        function countVowels(word) {
            let vowels = ['a', 'e', 'i', 'o', 'u'];
            let vowelCount = 0;
            for (let k = 0; k < word.length; k ++) {
                if (vowels.indexOf(word[k]) !== -1) {
                    vowelCount ++;
                }
            }
            return vowelCount;
        }

        str = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
        let words = str.split(' ');
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let count = 0;

        //iterate over each letter in each word

        words.forEach(function(word) {
            if (countVowels(word) === 1) {
                count ++;
            } else {
                for (let i = 0; i < word.length; i ++) {
                    let letter = word[i];
                    let nextLetter = word[i + 1];
                    let isVowel = vowels.indexOf(letter) !== -1;
                    let single = word.length === 1;
                    let dipthong = isVowel && vowels.indexOf(nextLetter) !== -1;
                    let lastLetter = i === word.length -1; 
                    let silent = (lastLetter && (letter === 'e'));
                    if(letter === 'e') {
                    }
                    if (single) {
                        count ++;
                    } else if (isVowel && (!dipthong && !silent)) {
                        count ++;
                    }
                }
            }
        })

        return count;
    }

    isValid() {
        let l1 = this.countSyllables(this.line1) === 5;
        let l2 = this.countSyllables(this.line2) === 7;
        let l3 = this.countSyllables(this.line3) === 5;

        return l1 && l2 && l3;
    }

}

