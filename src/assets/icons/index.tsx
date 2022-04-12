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

export enum IconsDataTestIdEnum {
  'WebIcon' = 'web-icon',
  'ArrowBackIcon' = 'arrow-back-icon',
  'GraphIcon' = 'graph-icon',
  'LocationMarkerIcon' = 'location-marker-icon',
  'PhoneIcon' = 'phone-icon',
  'PlusOutlineIcon' = 'plus-outline-icon',
  'TrashIcon' = 'trash-icon',
}
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
      return (
        <WebIcon {...otherProps} data-testid={IconsDataTestIdEnum.WebIcon} />
      );
    }
    case 'ArrowBackIcon': {
      return (
        <ArrowBackIcon
          {...otherProps}
          data-testid={IconsDataTestIdEnum.ArrowBackIcon}
        />
      );
    }
    case 'GraphIcon': {
      return (
        <GraphIcon
          {...otherProps}
          data-testid={IconsDataTestIdEnum.GraphIcon}
        />
      );
    }
    case 'LocationMarkerIcon': {
      return (
        <LocationMarkerIcon
          {...otherProps}
          data-testid={IconsDataTestIdEnum.LocationMarkerIcon}
        />
      );
    }
    case 'PhoneIcon': {
      return (
        <PhoneIcon
          {...otherProps}
          data-testid={IconsDataTestIdEnum.PhoneIcon}
        />
      );
    }
    case 'PlusOutlineIcon': {
      return (
        <PlusOutlineIcon
          {...otherProps}
          data-testid={IconsDataTestIdEnum.PlusOutlineIcon}
        />
      );
    }
    case 'TrashIcon': {
      return (
        <TrashIcon
          {...otherProps}
          data-testid={IconsDataTestIdEnum.TrashIcon}
        />
      );
    }
    default:
      return null;
  }
};
