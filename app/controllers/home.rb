Multiselect.controllers :home do

  get :index, :map => '/' do
      res = HTTParty.get('https://api.github.com/repos/lou/multi-select')
      @repo = res.parsed_response if res.code == 200
      res = HTTParty.get('https://api.github.com/repos/lou/multi-select/contributors')
      @contributors = res.parsed_response if res.code == 200
    render 'home/index'
  end

end
