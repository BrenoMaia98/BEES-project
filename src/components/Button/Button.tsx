import React from 'react';

import { Container, Title } from './styles.Button';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, type, ...rest }) => {
  return (
    <Container
      title={title}
      onClick={onClick}
      type={type || 'button'}
      {...rest}
    >
      <Title>{title || ''}</Title>
    </Container>
  );
};

export default Button;
