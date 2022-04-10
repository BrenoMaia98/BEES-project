import React, { useEffect, useState } from 'react';
import { SwitchDiv } from './styles.Switch';

type SwitchProps = {
  onToggle: (value: boolean) => void;
  initialValue?: boolean;
};

export const Switch: React.FC<SwitchProps> = ({
  initialValue = false,
  onToggle,
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
    <SwitchDiv className="switch" onClick={toggleCheckBox}>
      <input type="checkbox" checked={selected} />
      <span className="slider round" />
    </SwitchDiv>
  );
};
