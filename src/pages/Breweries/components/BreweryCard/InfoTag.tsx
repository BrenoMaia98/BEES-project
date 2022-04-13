import React, { RefObject, useRef, useState } from 'react';
import { IconName, renderIcon } from 'assets/icons';
import InputText from 'components/InputText/InputText';
import { RemoveableTagDiv, TagDiv } from './styles.BreweryCard';

export type InfoTagProps =
  | {
      type?: 'default';
      icon: IconName;
      text: string;
      action?: (_: string) => void;
      'data-testid'?: string;
    }
  | {
      type: 'addInfo';
      icon?: IconName;
      text: string;
      action: (info: string) => void;
      'data-testid'?: string;
    }
  | {
      type: 'removeable';
      icon?: IconName;
      text: string;
      action: (_: string) => void;
      'data-testid'?: string;
    };

export const InfoTag = ({
  type = 'default',
  text,
  action,
  icon,
  ...rest
}: InfoTagProps) => {
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const [showInput, setShowInput] = useState(false);

  const onClickAddMore = () => {
    if (!showInput) {
      setShowInput((state) => !state);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 500);
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
        <TagDiv
          onClick={onClickAddMore}
          data-testid={rest['data-testid'] || 'add-info-tag'}
        >
          <div className={action ? 'hover' : ''}>
            {renderIcon('PlusOutlineIcon')}
            {showInput ? (
              <InputText
                onBlur={submitInfo}
                onSubmit={() => {
                  submitInfo();
                }}
                inputRef={inputRef}
                onKeyDown={handleKeyDown}
                type="text"
                autoFocus
                customMargin="0px 0px 0px .25rem"
                customMaxWidth="15rem"
                id="new-info"
              />
            ) : (
              <span data-testid="text-tag-info">{text || 'no info'}</span>
            )}
          </div>
        </TagDiv>
      );
    case 'removeable':
      return (
        <RemoveableTagDiv
          onClick={() => (action ? action('') : undefined)}
          data-testid={rest['data-testid'] || 'removeable-info-tag'}
        >
          {renderIcon('TrashIcon')}
          <span data-testid="text-tag-info">{text || 'no info'}</span>
        </RemoveableTagDiv>
      );
    case 'default':
    default:
      return (
        <TagDiv data-testid={rest['data-testid'] || 'info-tag'}>
          <div className={action ? 'hover' : ''}>
            {(icon && renderIcon(icon)) || null}
            <span data-testid="text-tag-info">{text || 'no info'}</span>
          </div>
        </TagDiv>
      );
  }
};
