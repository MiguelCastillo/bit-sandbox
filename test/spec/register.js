System.register("register", ["test/js/sayhi", "test/js/6import-sayhi", "test/js/sayhi-define"], function(sayhi, sayhi6, sayhidefine) {

  console.log(sayhi, sayhi6, sayhidefine);

  describe("System.register - Say Hi Test suite", function() {
    it("System sayhi-6", function() {
      expect(sayhi6).to.equal("Say Hi 6");
    });

    it("System sayhi-cjs", function() {
      expect(sayhi).to.equal("Say Hi");
    });

    it("System sayhi-define", function() {
      expect(sayhidefine).to.equal("Say Hi Define");
    });
  });
});


System.import("register");
