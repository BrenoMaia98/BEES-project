import React from 'react';
import { ReactComponent as WebIcon } from './web.svg';
import { ReactComponent as ArrowBackIcon } from './arrow-back.svg';
import { ReactComponent as GraphIcon } from './graph.svg';
import { ReactComponent as LocationMarkerIcon } from './location-marker.svg';
import { ReactComponent as PhoneIcon } from './phone.svg';
import { ReactComponent as PlusOutlineIcon } from './plus-outline.svg';
import { ReactComponent as TrashIcon } from './trash.svg';

export type IconName =
  | 'WebIcon'
  | 'ArrowBackIcon'
  | 'GraphIcon'
  | 'LocationMarkerIcon'
  | 'PhoneIcon'
  | 'PlusOutlineIcon'
  | 'TrashIcon';

export const renderIcon = (iconName: IconName): JSX.Element | null => {
  switch (iconName) {
    case 'WebIcon': {
      return <WebIcon />;
    }
    case 'ArrowBackIcon': {
      return <ArrowBackIcon />;
    }
    case 'GraphIcon': {
      return <GraphIcon />;
    }
    case 'LocationMarkerIcon': {
      return <LocationMarkerIcon />;
    }
    case 'PhoneIcon': {
      return <PhoneIcon />;
    }
    case 'PlusOutlineIcon': {
      return <PlusOutlineIcon />;
    }
    case 'TrashIcon': {
      return <TrashIcon />;
    }
    default:
      return null;
  }
};

export {
  WebIcon,
  ArrowBackIcon,
  GraphIcon,
  LocationMarkerIcon,
  PhoneIcon,
  PlusOutlineIcon,
  TrashIcon,
};
