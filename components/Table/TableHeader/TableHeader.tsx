import React from 'react';
import Button from '../../UI/Button/Button';
import { Column } from '../../../interfaces/tableInterfaces';

interface TableHeaderProps {
  columns: Column[];
  onColumnClick: (index: number) => void;
  onRemoveColumn: (index: number) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns, onColumnClick, onRemoveColumn }) => {
  return (
    <thead>
      <tr>
        {columns.map((col, index) => (
          <th key={index}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span onClick={() => onColumnClick(index)} style={{ cursor: 'pointer' }}>
                {col.title} ({col.type})
              </span>
              <Button onClick={() => onRemoveColumn(index)} label="Удалить" variant="secondary" />
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
