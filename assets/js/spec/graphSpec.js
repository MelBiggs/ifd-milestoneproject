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
            expect(transformKey(3)).toBe("D♯/E♭");
            expect(transformKey(4)).toBe("E");
            expect(transformKey(5)).toBe("F");
            expect(transformKey(6)).toBe("F♯/G♭");
            expect(transformKey(7)).toBe("G");
            expect(transformKey(8)).toBe("G♯/A♭");
            expect(transformKey(9)).toBe("A");
            expect(transformKey(10)).toBe("A♯/B♭");
            expect(transformKey(11)).toBe("B");
        });
    });
    describe("transformMode", function() {
        it("converts number scale for mode to Minor and Major", function() {
            expect(transformMode(0)).toBe("Minor");
            expect(transformMode(1)).toBe("Major");
        });
    });
});
