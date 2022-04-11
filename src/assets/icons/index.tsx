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

type OtherProps = {
  onClick: () => void;
  className: string;
};
export const renderIcon = (
  iconName: IconName,
  otherProps?: OtherProps
): JSX.Element | null => {
  switch (iconName) {
    case 'WebIcon': {
      return <WebIcon {...otherProps} />;
    }
    case 'ArrowBackIcon': {
      return <ArrowBackIcon {...otherProps} />;
    }
    case 'GraphIcon': {
      return <GraphIcon {...otherProps} />;
    }
    case 'LocationMarkerIcon': {
      return <LocationMarkerIcon {...otherProps} />;
    }
    case 'PhoneIcon': {
      return <PhoneIcon {...otherProps} />;
    }
    case 'PlusOutlineIcon': {
      return <PlusOutlineIcon {...otherProps} />;
    }
    case 'TrashIcon': {
      return <TrashIcon {...otherProps} />;
    }
    default:
      return null;
  }
};
