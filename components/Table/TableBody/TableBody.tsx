import React from 'react';
import Button from '../../UI/Button/Button';
import { Column } from '../../../interfaces/tableInterfaces';

interface TableBodyProps {
  rows: string[][]; 
  columns: Column[]; 
  onCellClick: (rowIndex: number, colIndex: number) => void; 
  onRemoveRow: (rowIndex: number) => void;
}

const TableBody: React.FC<TableBodyProps> = ({ rows, columns, onCellClick, onRemoveRow }) => {
  return (
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((col, colIndex) => (
            <td key={colIndex}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>{row[colIndex]}</span>
                <Button onClick={() => onCellClick(rowIndex, colIndex)} label="Редактировать" variant="secondary" />
              </div>
            </td>
          ))}
          <td>
            <Button onClick={() => onRemoveRow(rowIndex)} label="Удалить строку" variant="secondary" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
