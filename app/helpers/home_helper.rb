# Helper methods defined here can be accessed in any controller or view in the application

Multiselect.helpers do
  def countries optgroup = false
    array = [
      ['France', "fr"],
      ['United Kingdom', "uk"],
      ['United States', "us"],
      ['China', "ch"],
      ['Australia', "au"],
      ['India', "in"],
      ['Argentina', "ar"],
      ['Brazil', "br"],
      ['Tibet', "tb"],
      ['Columbia', "co"],
      ['Croatia', "cr"],
      ['Italia', "it"],
      ['Espana', "es"],
      ['Indonesia', "id"],
      ['Germany', "du"],
      ['Norway', "no"]
    ]
    array.map{ |a| ['europe', a]} if optgroup
    array
  end
end
