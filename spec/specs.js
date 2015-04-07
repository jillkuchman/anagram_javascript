describe("anagram", function() {
    it("returns an exact match of one word", function() {
        expect(anagram("a", "a")).to.equal("a");
    });
    it("returns nothing on one letter that does not match", function() {
        expect(anagram("a", "b")).to.equal("no matches");
    });

    it("recieves a two letter word and sorts through a two word array with words that match, returns both matches", function() {
        expect(anagram("to", "it, to")).to.equal("to");
    });

    it("returns multiple letter words that are perfect anagrams of the input word", function() {
        expect(anagram("to", "to, ot")).to.equal("to, ot");
    });
});
