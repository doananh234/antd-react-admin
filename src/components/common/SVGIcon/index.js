import React from 'react';
import PropTypes from 'prop-types';
import { SVGIconWrapper } from './styles';
import { ReactComponent as ICCustomer } from '../../../assets/icons/ic-customer.svg';
import { ReactComponent as Dashboard } from '../../../assets/icons/ic-dashboard.svg';
import { ReactComponent as Settings } from '../../../assets/icons/ic-setting.svg';
import { ReactComponent as Reservations } from '../../../assets/icons/ic-severvations.svg';
import { ReactComponent as Transactions } from '../../../assets/icons/ic-trasactions.svg';
import { ReactComponent as Users } from '../../../assets/icons/ic-user.svg';
import { ReactComponent as Bookings } from '../../../assets/icons/group-3.svg';
import { ReactComponent as Chekins } from '../../../assets/icons/ic-user-checkin.svg';
import { ReactComponent as Delivery } from '../../../assets/icons/delivery.svg';
import { ReactComponent as Pharmacy } from '../../../assets/icons/pharmacy.svg';
import { ReactComponent as Preparing } from '../../../assets/icons/preparing.svg';
import { ReactComponent as Sending } from '../../../assets/icons/sending.svg';

const SVG_ICONS = {
  team: ICCustomer,
  'ic-home': Dashboard,
  'ic-setting': Settings,
  'ic-date': Reservations,
  'ic-payment': Transactions,
  user: Users,
  'ic-seat': Bookings,
  check: Chekins,
  'ic-delivery': Delivery,
  'ic-pharmacy': Pharmacy,
  'ic-prepare': Preparing,
  'ic-send': Sending,
};

function SVGIcon({ type, className, ...props }) {
  const Icon = SVG_ICONS[type] || Dashboard;
  return (
    <SVGIconWrapper {...props} className={`svgIcon ${className || ''}`}>
      <Icon />
    </SVGIconWrapper>
  );
}

SVGIcon.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
};

SVGIcon.defaultProps = {
  type: 'logo',
  size: 20,
};

export default SVGIcon;
