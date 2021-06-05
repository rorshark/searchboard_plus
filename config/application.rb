require_relative 'boot'

require 'rails'
require 'active_model/railtie'
require 'active_record/railtie'
require 'action_controller/railtie'
require 'action_view/railtie'
require 'sprockets/railtie'

Bundler.require(*Rails.groups)

module SearchboardPlus
  class Application < Rails::Application
    config.load_defaults 6.1
    config.generators.system_tests = nil
    config.react.server_renderer_extensions = %w[jsx js tsx ts]
    config.autoload_paths += Dir[Rails.root.join('app', 'utils')]
  end
end
