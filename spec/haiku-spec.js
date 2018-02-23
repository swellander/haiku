import { Haiku } from './../js/haiku.js'

describe('Haiku', function() {
    const haiku = new Haiku('An old silent pond', 'A frog jumps into the pond', 'splash! Silence again');
    const badHaiku = new Haiku('Autumn moonlight—', 'a worm digs silently bro', 'into the chestnut.')


    it ('should verify that the poem has three lines.', function() {
        expect(haiku.hasThreeLines()).toBe(true);
    });

    it ('should count the number of vowels in a line', function() {
        expect(haiku.countSyllables(haiku.line1)).toEqual(5);
        expect(haiku.countSyllables(haiku.line2)).toEqual(7);
        expect(haiku.countSyllables(haiku.line3)).toEqual(5);
    });

    it ('should determine whether or not something is a valid haiku.', function() {
        expect(haiku.isValid()).toBe(true);
        expect(badHaiku.isValid()).toBe(false);
    }); 

    it ('should generate a new 5 syllable line for a haiku', function() {
        expect(haiku.countSyllables(haiku.generate())).toEqual(5);
    })

    it ('should be able to generate random words', function() {
        expect(typeof haiku.getRandomWord()).toEqual('string');
    })

})