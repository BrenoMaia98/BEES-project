import React from 'react';
import { IconName, renderIcon } from 'assets/icons';
import { RemoveableTagDiv, TagDiv } from './styles.BrewerieCard';

type TagProps =
  | {
      type?: 'default';
      icon: IconName;
      text: string;
      action?: () => void;
    }
  | {
      type: 'addInfo';
      icon?: IconName;
      text: string;
      action?: () => void;
    }
  | {
      type: 'removeable';
      icon?: IconName;
      text: string;
      action?: () => void;
    };

export const InfoTag = ({ type = 'default', text, action, icon }: TagProps) => {
  switch (type) {
    case 'addInfo':
      return (
        <TagDiv onClick={() => (action ? action() : undefined)}>
          <div className={action ? 'hover' : ''}>
            {renderIcon('PlusOutlineIcon')}
            <span>{text || 'no info'}</span>
          </div>
        </TagDiv>
      );
    case 'removeable':
      return (
        <RemoveableTagDiv onClick={() => (action ? action() : undefined)}>
          {renderIcon('TrashIcon')}
          <span>{text || 'no info'}</span>
        </RemoveableTagDiv>
      );
    // eslint-disable-next-line default-case-last
    default:
    case 'default':
      return (
        <TagDiv onClick={() => (action ? action() : undefined)}>
          <div className={action ? 'hover' : ''}>
            {(icon && renderIcon(icon)) || null}
            <span>{text || 'no info'}</span>
          </div>
        </TagDiv>
      );
  }
};
