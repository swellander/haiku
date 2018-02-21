

describe('Haiku', function() {
    it ('should verify that the poem has three lines.', function() {
        const haiku = new haiku();

        expect(haiku.hasThreeLines()).toBe(true)
    })
    ////questions: how can I intentionally structure specs?

})