describe("Spotify Data", function() {
    describe("millisToMinutesAndSeconds", function() {
        it("converts miliseconds to minutes and seconds", function() {
            expect(millisToMinutesAndSeconds(205206.78)).toBe(3.25);
        });
    });

    describe("transformKey", function() {
        it("converts number scale to musical scale", function() {
            expect(transformKey(0)).toBe("C");
            expect(transformKey(1)).toBe("C♯/D♭");
            expect(transformKey(2)).toBe("D");
        });
    });
});
