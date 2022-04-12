import React from 'react';
import {
  ArrowBackIcon,
  GraphIcon,
  LocationMarkerIcon,
  OtherProps,
  PhoneIcon,
  PlusOutlineIcon,
  TrashIcon,
  WebIcon,
} from './svgsExport';

export type IconName =
  | 'ArrowBackIcon'
  | 'GraphIcon'
  | 'LocationMarkerIcon'
  | 'PhoneIcon'
  | 'PlusOutlineIcon'
  | 'TrashIcon'
  | 'WebIcon';

export enum IconsDataTestIdEnum {
  'ArrowBackIcon' = 'arrow-back-icon',
  'GraphIcon' = 'graph-icon',
  'LocationMarkerIcon' = 'location-marker-icon',
  'PhoneIcon' = 'phone-icon',
  'PlusOutlineIcon' = 'plus-outline-icon',
  'TrashIcon' = 'trash-icon',
  'WebIcon' = 'web-icon',
}
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
      return <ArrowBackIcon data-testid={IconsDataTestIdEnum.ArrowBackIcon} />;
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
