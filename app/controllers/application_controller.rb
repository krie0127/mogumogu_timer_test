class ApplicationController < ActionController::Base
    def not_authenticated
        flash[:warning] = t('defaults.message.require_login')
        redirect_to login_path
      end
end
