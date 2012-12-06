# Helper methods defined here can be accessed in any controller or view in the application

Multiselect.helpers do

  def select_options number = 100
    array = []
    (1..number).to_a.each do |num|
      array << ["elem #{num}", "elem_#{num}"]
    end
    array
  end
end
