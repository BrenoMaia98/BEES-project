/* eslint-disable no-useless-escape */
import React, { ChangeEvent, RefObject, useEffect, useState } from 'react';
import { StylesInputText } from './styles.InputText';

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  mask?: 'onlyNumbers' | 'onlyText';
  customMaxWidth?: string;
  customMargin?: string;
  customOnChangeMask?: RegExp;
  inputRef?: RefObject<HTMLInputElement>;
  autoFocus?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  mask,
  customOnChangeMask,
  onChange,
  autoFocus,
  inputRef,
  customMargin,
  customMaxWidth,
  ...rest
}) => {
  // const inputRef: React.RefObject<HTMLInputElement> = useRef(null);
  const [charCount, setCharCount] = useState(0);
  useEffect(() => {
    if (autoFocus && inputRef) {
      inputRef.current?.focus();
      setCharCount(inputRef.current?.value.length || 0);
    }
  }, [inputRef]);

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let newValue = e.target.value;
    if (mask) {
      // eslint-disable-next-line no-debugger
      debugger;
      switch (mask) {
        case 'onlyNumbers': {
          // prevent user to type non-alphabetical values
          newValue = newValue.replace(/[^0-9\,\.]/g, '');
          break;
        }
        case 'onlyText': {
          // prevent user to type non-numerical values
          newValue = newValue.replace(/[^A-Za-z\s]/g, '');
          break;
        }
        default:
          break;
      }
    }
    if (customOnChangeMask) {
      newValue = newValue.replace(customOnChangeMask, '');
    }

    e.target.value = newValue;
    setCharCount(newValue.length);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <StylesInputText
      data-testid="input-text"
      type="text"
      onChange={handleChangeInput}
      // ref={inputRef}
      ref={inputRef}
      charCount={charCount}
      customMaxWidth={customMaxWidth}
      customMargin={customMargin}
      {...rest}
    />
  );
};

export default InputText;
