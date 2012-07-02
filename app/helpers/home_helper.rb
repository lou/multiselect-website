# Helper methods defined here can be accessed in any controller or view in the application

Multiselect.helpers do
  def countries optgroup = false
    array = [
      ['France', "fr"],
      ['United Kingdom', "uk"],
      ['United States', "us"],
      ['China', "ch"]
    ]
    array.map{ |a| ['europe', a]} if optgroup
    array
  end
end
