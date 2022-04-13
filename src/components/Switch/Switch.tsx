/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import { SwitchDiv } from './styles.Switch';

type SwitchProps = {
  onToggle: (value: boolean) => void;
  initialValue?: boolean;
  dataTestId?: string;
};

export const Switch: React.FC<SwitchProps> = ({
  initialValue = false,
  onToggle,
  dataTestId,
}) => {
  const [selected, setSelected] = useState(initialValue);

  useEffect(() => {
    if (initialValue !== selected) {
      onToggle(initialValue);
    }
    setSelected(initialValue);
  }, [initialValue]);

  const toggleCheckBox = () => {
    onToggle(!selected);
    setSelected((value) => !value);
  };

  return (
    <SwitchDiv
      className="switch"
      onClick={toggleCheckBox}
      data-testid={dataTestId || 'switch-test-id'}
    >
      {/* To remove error on console for a "read-only" input, added empty onChange */}
      <input type="checkbox" checked={selected} onChange={() => {}} />
      <span className="slider round" />
    </SwitchDiv>
  );
};
