describe("NoteForm", function() {

  beforeEach(function() {
    var Note = Backbone.Model.extend({name: 'note', url: '/foo'});
    this.note = new Note();
    this.view = new NoteForm({model: this.note});
  });

  it("should have a tag name of div", function() {
    expect(this.view.el.nodeName).toEqual('DIV');
  });

  it("should have a class of note_form", function() {
    expect($(this.view.el)).toHaveClass('note_form');
  });

  describe("saveEdit", function() {

    it("should disable all form controls on submit", function() {
      var disableSpy = sinon.spy(this.view, 'disableForm');
      this.view.saveEdit();
      expect(disableSpy).toHaveBeenCalled();
    });

  });

  describe("disableForm", function() {

    it("sets disabled state on form tags", function() {
      $(this.view.el).html('<textarea></textarea><input type="submit">');
      this.view.disableForm();
      expect(this.view.$('textarea').attr('disabled')).toBeTruthy();
      expect(this.view.$('input').attr('disabled')).toBeTruthy();
    });

    it("sets saving class on the submit button", function() {
      $(this.view.el).html('<input type="button">');
      this.view.disableForm();
      expect(this.view.$('input[type="button"]')).toHaveClass('saving');
    });

  });
});
