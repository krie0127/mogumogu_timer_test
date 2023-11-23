class StopwatchesController < ApplicationController

    def create
      @time = Stopwatch.new(time_params)
  
      if @time.save
        redirect_to stopwathes_path, notice: 'Time record was successfully created.'
      else
        render :new
      end
    end
  
    def index
      @times = Stopwatch.all
      respond_to do |format|
        format.html
        format.json { render json: @times }
      end
    end
  
    def update
      @time = Stopwatch.find(params[:id]) # 特定のタイムレコードを取得
  
    if @time.update(time_params)
      redirect_to stopwatches_path, notice: 'Time record was successfully updated.'
    else
      render :edit
    end
    end
  end
   