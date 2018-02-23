export class Haiku {
    constructor(line1, line2, line3) {
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;

        this.hipsum = "Bacon ipsum dolor amet esse ad leberkas ipsum cow. Drumstick duis buffalo est, pork chop minim adipisicing. In meatball jerky dolore alcatra dolor, chicken dolore incididunt sausage cillum kielbasa voluptate ullamco. Andouille biltong pork loin enim venison in pig. Alcatra qui cupim, ut jerky adipisicing shoulder salami drumstick incididunt kevin. Ut corned beef dolore id rump hamburger burgdoggen velit ribeye shoulder tail commodo fugiat. Mollit andouille flank, reprehenderit alcatra tongue do ex aliquip porchetta. Reprehenderit esse nisi, cow kielbasa porchetta est lorem veniam anim beef ribs consectetur. Jowl boudin burgdoggen, bacon exercitation ea proident tail. Pariatur spare ribs chicken pig tempor excepteur. Shank swine buffalo ham quis do alcatra spare ribs deserunt incididunt exercitation est doner. Ullamco bresaola short ribs meatball tenderloin. Pariatur landjaeger velit, pork loin leberkas ground round pancetta veniam est. Ut labore magna doner tongue est. Beef ribs jerky est shoulder kielbasa, ham hock voluptate nisi ipsum enim hamburger bacon ut ea nulla. Sausage ea qui laboris anim tri-tip fatback kevin in pork belly. Pork t-bone short ribs tempor in pig. Elit burgdoggen excepteur pork chop, ribeye aliquip pork belly shoulder bacon kielbasa jerky picanha commodo. Tri-tip beef in jowl biltong sunt ham hock exercitation buffalo aute. Landjaeger filet mignon do, enim meatloaf drumstick est laboris bacon voluptate anim pastrami ullamco. Occaecat ut dolore drumstick, spare ribs beef picanha doner chicken sausage tongue exercitation. Pariatur strip steak sint beef ribs pastrami voluptate tri-tip ut sirloin tongue shank turducken shoulder. Brisket in reprehenderit salami sed prosciutto ea ad fugiat consequat do hamburger short loin tenderloin t-bone. Eu excepteur elit frankfurter ribeye enim tri-tip irure duis filet mignon fatback aliquip corned beef brisket in. Eu ut bacon fatback aliqua chuck. Ea spare ribs kielbasa leberkas. Rump ground round cow jerky sausage, hamburger esse. Boudin occaecat kevin sausage tempor brisket et filet mignon laboris ham hock anim adipisicing short loin est. Cupidatat nostrud dolor ribeye non. Pork loin labore strip steak excepteur tongue alcatra pastrami burgdoggen spare ribs est pancetta. Tail esse deserunt shoulder ipsum t-bone pork chop. Burgdoggen filet mignon turducken adipisicing dolore in. Bacon ipsum dolor amet sausage shank enim reprehenderit. Nisi pork loin ut minim duis eu officia andouille do venison. Fatback doner pork meatball consequat mollit tongue kielbasa shankle eiusmod sunt aliqua chuck sausage. Eiusmod incididunt aute drumstick consectetur kevin hamburger salami. Photo booth meh cray, ethical gentrify everyday carry health goth irony pabst squid subway tile knausgaard occupy craft beer. Try-hard bespoke tote bag, twee venmo succulents kale chips single-origin coffee gluten-free knausgaard shabby chic scenester you probably haven't heard of them pickled. Banjo deep v meggings stumptown. Retro gluten-free fixie, 90's meggings air plant messenger bag plaid fanny pack kombucha. Raclette dreamcatcher tote bag tbh slow-carb put a bird on it actually shabby chic pour-over affogato shoreditch.".split(' ');
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

    getRandomWord() {
        //pull random word from hipsum word bank

        let index = Math.floor(Math.random() * this.hipsum.length);
        let word = this.hipsum[index]

        return word;
    }

    generateLine(numberOfSyllables) {
        let line = '';
        let p = this;
        while (this.countSyllables(line) < numberOfSyllables) {
            let word = p.getRandomWord();
            let wordSyllables = p.countSyllables(word);
            let syllablesLeft = numberOfSyllables - p.countSyllables(line);
            if (wordSyllables <= syllablesLeft) {
                if (wordSyllables === syllablesLeft) {
                    line += word;
                } else {
                    line += (word + ' ');
                }
            }
        }
        return line;
    }

    generate() {
        let line1 = this.generateLine(5);
        let line2 = this.generateLine(7);
        let line3 = this.generateLine(5);
        console.log(`${line1}\n${line2}\n${line3}`);
        return new Haiku(line1, line2, line3);
    }

}

