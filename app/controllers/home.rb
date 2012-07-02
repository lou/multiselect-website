Multiselect.controllers :home do

  get :index, :map => '/' do
    begin
      @repo = HTTParty.get('https://api.github.com/repos/lou/multi-select').parsed_response
      @contributors = HTTParty.get('https://api.github.com/repos/lou/multi-select/contributors').parsed_response
    rescue
    end
    render 'home/index'
  end

end
