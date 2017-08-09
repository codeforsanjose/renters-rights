import RentersReasonsForm from '../components/RentersReasonsForm';
import TenantReallocationMessage from '../components/TenantReallocationMessage';
import EvictionResourcesMessage from '../components/EvictionResourcesMessage';
import HelpTypeForm from '../components/HelpTypeForm';
import NotApplicableMessage from '../components/NotApplicableMessage';
import ReactOnRails from 'react-on-rails';
import Renters from '../components/Renters';

// This is how react_on_rails can see the components in the browser.
ReactOnRails.register({
  EvictionResourcesMessage,
  HelpTypeForm,
  NotApplicableMessage,
  Renters,
  RentersReasonsForm,
  TenantReallocationMessage,
});
