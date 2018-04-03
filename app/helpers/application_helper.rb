module ApplicationHelper
#  def read_only_component(name)
#    react_component(name, props: { locale: I18n.locale })
#  end

 def form_component(name)
   react_component(name, props: { token: form_authenticity_token})
 end
end
