(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Haiku = exports.Haiku = function () {
    function Haiku(line1, line2, line3) {
        _classCallCheck(this, Haiku);

        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;

        this.hipsum = "Bacon ipsum dolor amet esse ad leberkas ipsum cow. Drumstick duis buffalo est, pork chop minim adipisicing. In meatball jerky dolore alcatra dolor, chicken dolore incididunt sausage cillum kielbasa voluptate ullamco. Andouille biltong pork loin enim venison in pig. Alcatra qui cupim, ut jerky adipisicing shoulder salami drumstick incididunt kevin. Ut corned beef dolore id rump hamburger burgdoggen velit ribeye shoulder tail commodo fugiat. Mollit andouille flank, reprehenderit alcatra tongue do ex aliquip porchetta. Reprehenderit esse nisi, cow kielbasa porchetta est lorem veniam anim beef ribs consectetur. Jowl boudin burgdoggen, bacon exercitation ea proident tail. Pariatur spare ribs chicken pig tempor excepteur. Shank swine buffalo ham quis do alcatra spare ribs deserunt incididunt exercitation est doner. Ullamco bresaola short ribs meatball tenderloin. Pariatur landjaeger velit, pork loin leberkas ground round pancetta veniam est. Ut labore magna doner tongue est. Beef ribs jerky est shoulder kielbasa, ham hock voluptate nisi ipsum enim hamburger bacon ut ea nulla. Sausage ea qui laboris anim tri-tip fatback kevin in pork belly. Pork t-bone short ribs tempor in pig. Elit burgdoggen excepteur pork chop, ribeye aliquip pork belly shoulder bacon kielbasa jerky picanha commodo. Tri-tip beef in jowl biltong sunt ham hock exercitation buffalo aute. Landjaeger filet mignon do, enim meatloaf drumstick est laboris bacon voluptate anim pastrami ullamco. Occaecat ut dolore drumstick, spare ribs beef picanha doner chicken sausage tongue exercitation. Pariatur strip steak sint beef ribs pastrami voluptate tri-tip ut sirloin tongue shank turducken shoulder. Brisket in reprehenderit salami sed prosciutto ea ad fugiat consequat do hamburger short loin tenderloin t-bone. Eu excepteur elit frankfurter ribeye enim tri-tip irure duis filet mignon fatback aliquip corned beef brisket in. Eu ut bacon fatback aliqua chuck. Ea spare ribs kielbasa leberkas. Rump ground round cow jerky sausage, hamburger esse. Boudin occaecat kevin sausage tempor brisket et filet mignon laboris ham hock anim adipisicing short loin est. Cupidatat nostrud dolor ribeye non. Pork loin labore strip steak excepteur tongue alcatra pastrami burgdoggen spare ribs est pancetta. Tail esse deserunt shoulder ipsum t-bone pork chop. Burgdoggen filet mignon turducken adipisicing dolore in. Bacon ipsum dolor amet sausage shank enim reprehenderit. Nisi pork loin ut minim duis eu officia andouille do venison. Fatback doner pork meatball consequat mollit tongue kielbasa shankle eiusmod sunt aliqua chuck sausage. Eiusmod incididunt aute drumstick consectetur kevin hamburger salami. Photo booth meh cray, ethical gentrify everyday carry health goth irony pabst squid subway tile knausgaard occupy craft beer. Try-hard bespoke tote bag, twee venmo succulents kale chips single-origin coffee gluten-free knausgaard shabby chic scenester you probably haven't heard of them pickled. Banjo deep v meggings stumptown. Retro gluten-free fixie, 90's meggings air plant messenger bag plaid fanny pack kombucha. Raclette dreamcatcher tote bag tbh slow-carb put a bird on it actually shabby chic pour-over affogato shoreditch.".split(' ');
    }

    _createClass(Haiku, [{
        key: 'hasThreeLines',
        value: function hasThreeLines() {
            if (this.line1 && this.line2 && this.line3) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'countSyllables',
        value: function countSyllables(str) {
            function countVowels(word) {
                var vowels = ['a', 'e', 'i', 'o', 'u'];
                var vowelCount = 0;
                for (var k = 0; k < word.length; k++) {
                    if (vowels.indexOf(word[k]) !== -1) {
                        vowelCount++;
                    }
                }
                return vowelCount;
            }

            str = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
            var words = str.split(' ');
            var vowels = ['a', 'e', 'i', 'o', 'u'];
            var count = 0;

            //iterate over each letter in each word

            words.forEach(function (word) {
                if (countVowels(word) === 1) {
                    count++;
                } else {
                    for (var i = 0; i < word.length; i++) {
                        var letter = word[i];
                        var nextLetter = word[i + 1];
                        var isVowel = vowels.indexOf(letter) !== -1;
                        var single = word.length === 1;
                        var dipthong = isVowel && vowels.indexOf(nextLetter) !== -1;
                        var lastLetter = i === word.length - 1;
                        var silent = lastLetter && letter === 'e';
                        if (letter === 'e') {}
                        if (single) {
                            count++;
                        } else if (isVowel && !dipthong && !silent) {
                            count++;
                        }
                    }
                }
            });

            return count;
        }
    }, {
        key: 'isValid',
        value: function isValid() {
            var l1 = this.countSyllables(this.line1) === 5;
            var l2 = this.countSyllables(this.line2) === 7;
            var l3 = this.countSyllables(this.line3) === 5;

            return l1 && l2 && l3;
        }
    }, {
        key: 'getRandomWord',
        value: function getRandomWord() {
            //pull random word from hipsum word bank

            var index = Math.floor(Math.random() * this.hipsum.length);
            var word = this.hipsum[index];

            return word;
        }
    }, {
        key: 'generateLine',
        value: function generateLine(numberOfSyllables) {
            var line = '';
            var p = this;
            while (this.countSyllables(line) < numberOfSyllables) {
                var word = p.getRandomWord();
                var wordSyllables = p.countSyllables(word);
                var syllablesLeft = numberOfSyllables - p.countSyllables(line);
                if (wordSyllables <= syllablesLeft) {
                    if (wordSyllables === syllablesLeft) {
                        line += word;
                    } else {
                        line += word + ' ';
                    }
                }
            }
            return line;
        }
    }, {
        key: 'generate',
        value: function generate() {
            var line1 = this.generateLine(5);
            var line2 = this.generateLine(7);
            var line3 = this.generateLine(5);
            console.log(line1 + '\n' + line2 + '\n' + line3);
            return new Haiku(line1, line2, line3);
        }
    }, {
        key: 'getFullPoem',
        value: function getFullPoem() {
            return this.line1 + '<br>' + this.line2 + '<br>' + this.line3;
        }
    }]);

    return Haiku;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _haiku = require('./../js/haiku.js');

$(document).ready(function () {
    $('#generate').click(function () {
        var haiku = new _haiku.Haiku();

        $('#haiku').text(haiku.generate().getFullPoem());
    });
});

},{"./../js/haiku.js":1}]},{},[2]);
