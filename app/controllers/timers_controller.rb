class TimersController < ApplicationController

    def create
      @time = Timer.new(time_params)
  
      if @time.save
        redirect_to times_path, notice: 'Time record was successfully created.'
      else
        render :new
      end
    end
  
    def index
      @times = Timer.all
    end
  
    def update
      @time = Timer.find(params[:id]) # 特定のタイムレコードを取得
  
    if @time.update(time_params)
      redirect_to times_path, notice: 'Time record was successfully updated.'
    else
      render :edit
    end
    end
  end
   