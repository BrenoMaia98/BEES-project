import React, { useRef, useState } from 'react';
import { IconName, renderIcon } from 'assets/icons';
import { RemoveableTagDiv, TagDiv } from './styles.BrewerieCard';

type TagProps =
  | {
      type?: 'default';
      icon: IconName;
      text: string;
      action?: (_: string) => void;
    }
  | {
      type: 'addInfo';
      icon?: IconName;
      text: string;
      action: (info: string) => void;
    }
  | {
      type: 'removeable';
      icon?: IconName;
      text: string;
      action: (_: string) => void;
    };

export const InfoTag = ({ type = 'default', text, action, icon }: TagProps) => {
  const inputRef = useRef<HTMLInputElement>();
  const [showInput, setShowInput] = useState(false);

  const onClickAddMore = () => {
    if (!showInput) {
      setShowInput((state) => !state);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const submitInfo = () => {
    if (action && inputRef && inputRef.current) {
      action(inputRef.current.value);
      setShowInput((state) => !state);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === 'Enter') {
      submitInfo();
      event.preventDefault();
    }
  };

  switch (type) {
    case 'addInfo':
      return (
        <TagDiv onClick={onClickAddMore}>
          <div className={action ? 'hover' : ''}>
            {renderIcon('PlusOutlineIcon')}
            {showInput ? (
              <input
                onBlur={submitInfo}
                onSubmit={(e) => {
                  submitInfo();
                }}
                onKeyDown={handleKeyDown}
                type="text"
                ref={inputRef as React.LegacyRef<HTMLInputElement>}
                id="new-info"
              />
            ) : (
              <span>{text || 'no info'}</span>
            )}
          </div>
        </TagDiv>
      );
    case 'removeable':
      return (
        <RemoveableTagDiv onClick={() => (action ? action('') : undefined)}>
          {renderIcon('TrashIcon')}
          <span>{text || 'no info'}</span>
        </RemoveableTagDiv>
      );
    // eslint-disable-next-line default-case-last
    default:
    case 'default':
      return (
        <TagDiv onClick={() => (action ? action('') : undefined)}>
          <div className={action ? 'hover' : ''}>
            {(icon && renderIcon(icon)) || null}
            <span>{text || 'no info'}</span>
          </div>
        </TagDiv>
      );
  }
};
