import React from 'react';
import Button from '../Button/Button';
import styles from './modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
          <Button onClick={onClose} label="&times;" variant="icon" />
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
        <div className={styles.modalFooter}>
          <Button onClick={onClose} label="Закрыть" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
