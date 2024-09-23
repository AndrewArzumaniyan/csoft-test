import React from 'react';
import styles from './button.module.scss'; // Импортируем стили кнопки

interface ButtonProps {
  onClick: () => void;
  label: string;
  variant?: 'primary' | 'secondary' | 'icon'; // Добавляем вариант 'icon'
}

const Button: React.FC<ButtonProps> = ({ onClick, label, variant = 'primary' }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
