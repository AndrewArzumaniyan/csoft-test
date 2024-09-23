"use client";

import React, { useState } from 'react';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';
import styles from './table.module.scss';
import { Column, ColumnType } from '../../interfaces/tableInterfaces';

const initialColumns: Column[] = [
  { title: 'Column 1', type: 'text' },
  { title: 'Column 2', type: 'percentage' },
];

const Table: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [rows, setRows] = useState<string[][]>([['', '']]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColumnIndex, setSelectedColumnIndex] = useState<number | null>(null);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [newColumnType, setNewColumnType] = useState<ColumnType>('text');
  const [isModalForRow, setIsModalForRow] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);
  const [selectedColumnForRowIndex, setSelectedColumnForRowIndex] = useState<number | null>(null);
  const [newCellValue, setNewCellValue] = useState('');

  const addRow = () => {
    const newRow = new Array(columns.length).fill('');
    setRows([...rows, newRow]);
  };

  const removeRow = (rowIndex: number) => {
    const updatedRows = rows.filter((_, index) => index !== rowIndex);
    setRows(updatedRows);
  };

  const addColumn = () => {
    const newColumn: Column = {
      title: `Column ${columns.length + 1}`,
      type: 'text',
    };
    setColumns([...columns, newColumn]);
    const updatedRows = rows.map(row => [...row, '']);
    setRows(updatedRows);
  };

  const removeColumn = (index: number) => {
    const updatedColumns = columns.filter((_, colIndex) => colIndex !== index);
    const updatedRows = rows.map(row => row.filter((_, colIndex) => colIndex !== index));
    setColumns(updatedColumns);
    setRows(updatedRows);
  };

  const openModalForColumn = (index: number) => {
    setSelectedColumnIndex(index);
    setNewColumnTitle(columns[index].title);
    setNewColumnType(columns[index].type);
    setIsModalOpen(true);
    setIsModalForRow(false);
  };

  const openModalForCell = (rowIndex: number, colIndex: number) => {
    setSelectedRowIndex(rowIndex);
    setSelectedColumnForRowIndex(colIndex);
    setNewCellValue(rows[rowIndex][colIndex]);
    setIsModalOpen(true);
    setIsModalForRow(true);
  };

  const saveColumnChanges = () => {
    if (selectedColumnIndex !== null) {
      const updatedColumns = [...columns];
      updatedColumns[selectedColumnIndex].title = newColumnTitle;
      updatedColumns[selectedColumnIndex].type = newColumnType;
      const updatedRows = rows.map(row => {
        const newRow = [...row];
        newRow[selectedColumnIndex] = '';
        return newRow;
      });
      setColumns(updatedColumns);
      setRows(updatedRows);
    }
    closeModal();
  };

  const saveCellChanges = () => {
    if (selectedRowIndex !== null && selectedColumnForRowIndex !== null) {
      const updatedRows = [...rows];
      updatedRows[selectedRowIndex][selectedColumnForRowIndex] = newCellValue;
      setRows(updatedRows);
    }
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleGenerateJSON = () => {
    const data = { columns, rows };
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'table-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className={styles.tableSection}>
      <div className="container">
        <table className={styles.table}>
          <TableHeader 
            columns={columns} 
            onColumnClick={openModalForColumn} 
            onRemoveColumn={removeColumn} 
          />
          <TableBody 
            rows={rows} 
            columns={columns} 
            onCellClick={openModalForCell} 
            onRemoveRow={removeRow}
          />
        </table>
        <div className={styles.buttons}>
          <Button onClick={addRow} label="Добавить строку" />
          <Button onClick={addColumn} label="Добавить столбец" />
          <Button onClick={handleGenerateJSON} label="Сгенерировать JSON" variant="secondary" />
        </div>
      </div>

      <Modal isOpen={isModalOpen && !isModalForRow} onClose={closeModal} title="Редактировать столбец">
        <div>
          <input
            className={styles.modalInput}
            type="text"
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
            placeholder="Введите название столбца"
          />
          <select value={newColumnType} onChange={(e) => setNewColumnType(e.target.value as ColumnType)}>
            <option value="text">Text</option>
            <option value="percentage">Percentage</option>
          </select>
          <Button onClick={saveColumnChanges} label="Сохранить" />
        </div>
      </Modal>

      <Modal isOpen={isModalOpen && isModalForRow} onClose={closeModal} title="Редактировать ячейку">
        <div>
          <input
            className={styles.modalInput}
            type={columns[selectedColumnForRowIndex ?? 0]?.type === 'percentage' ? 'number' : 'text'}
            value={newCellValue}
            onChange={(e) => setNewCellValue(e.target.value)}
            placeholder={columns[selectedColumnForRowIndex ?? 0]?.type === 'percentage' ? '0-100' : ''}
            max={columns[selectedColumnForRowIndex ?? 0]?.type === 'percentage' ? 100 : undefined}
          />
          <Button onClick={saveCellChanges} label="Сохранить" />
        </div>
      </Modal>
    </main>
  );
};

export default Table;
