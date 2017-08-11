import RentersReasonsForm from '../components/RentersReasonsForm';
import TenantRelocationMessage from '../components/TenantRelocationMessage';
import EvictionResourcesMessage from '../components/EvictionResourcesMessage';
import HelpTypeForm from '../components/HelpTypeForm';
import NotApplicableMessage from '../components/NotApplicableMessage';
import ReactOnRails from 'react-on-rails';
import Renters from '../components/Renters';
import Home from '../components/Home';
import FAQ from '../components/FAQ';
import TPOMessage from '../components/TPOMessage';
import Resources from '../components/Resources';

// This is how react_on_rails can see the components in the browser.
ReactOnRails.register({
  Home,
  FAQ,
  Resources,
  EvictionResourcesMessage,
  HelpTypeForm,
  NotApplicableMessage,
  TPOMessage,
  Renters,
  RentersReasonsForm,
  TenantRelocationMessage,
});
