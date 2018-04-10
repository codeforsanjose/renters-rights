import ReactOnRails from 'react-on-rails';
import Home from '../components/Home';
import Eviction from '../components/Eviction';
import About from '../components/About';
import RentCalculator from '../components/RentCalculator';
// import Shelter from '../components/Shelter';
// import LegalAid from '../components/LegalAid';
import Resources from '../components/resources/Resources';
import ReportIssue from '../components/ReportIssue';
import FindJurisdiction from '../components/FindJurisdiction';
import RentIncrease from '../components/RentIncrease';
import AddressCheck from '../components/AddressCheck';
import ResourceIndexItem from '../components/resources/ResourceIndexItem';
import RentersPolicies_TPOARO from '../components/RentersPoliciesTPOARO';
import RentersPolicies_General from '../components/RentersPoliciesGeneral';
import RentersPolicies_TPO from '../components/RentersPoliciesTPO';
import RentersPolicies_MHO from '../components/RentersPoliciesMHO';
import RentersPolicies_EAOTPOARO from '../components/RentersPoliciesEAOTPOARO';
import AddressType from '../components/AddressType';
import HousingDiscrimination from '../components/HousingDiscrimination';
import MobileHomeOrdinance from '../components/MobileHomeOrdinance';
import EllisActOrdinance from '../components/EllisActOrdinance';
import TenantProtectionOrdinance from '../components/TenantProtectionOrdinance';
import ApartmentRentOrdinance from '../components/ApartmentRentOrdinance';


//import { addLocaleData } from 'react-intl';
//import esLocaleData from 'react-intl/locale-data/es';

//addLocaleData(esLocaleData);

// This is how react_on_rails can see the components in the browser.
ReactOnRails.register({
  Home,
  About,
  AddressCheck,
  AddressType,
  ReportIssue,
  RentersPolicies_General,
  RentersPolicies_TPO,
  RentersPolicies_MHO,
  RentersPolicies_TPOARO,
  RentersPolicies_EAOTPOARO,
  Eviction,
  RentCalculator,
  RentIncrease,
  Resources,
  FindJurisdiction,
  ResourceIndexItem,
  HousingDiscrimination,
  MobileHomeOrdinance,
  EllisActOrdinance,
  TenantProtectionOrdinance,
  ApartmentRentOrdinance
});
