describe("Popover: ", function(){
  beforeEach(function(){
    loadFixtures('popover_fixture.html');
    locastyle.popover.init();
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
    locastyle.popover.destroyPopover();
  });


  describe("Popover creation", function(){

    it("Should create a popover on click event", function(){
      $('[data-toggle="popover"]').trigger("click");
      jasmine.clock().tick(1000);
      expect($(".ls-popover")).toBeVisible();
    });

    it("Should create a popover on hover event", function(){
      $('[data-toggle="popover"]').trigger("mouseenter");
      jasmine.clock().tick(1000);
      expect($(".ls-popover")).toBeVisible();
    });

  });

});