require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RentersRightsApp
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.exception_handler = { 
      dev: true,
      layouts: {
        404 => "errors",
        422 => "errors",
        500 => "errors",
        501 => "errors",
        502 => "errors",
        503 => "errors",
        504 => "errors",
        505 => "errors",
        507 => "errors",
        510 => "errors"
      }
    }

    
    I18n.enforce_available_locales = false    
  end
end
