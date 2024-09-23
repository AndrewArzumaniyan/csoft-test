import React from 'react';
import { Column } from '../../../interfaces/tableInterfaces';

interface TableHeaderProps {
  columns: Column[];
  onColumnClick: (index: number) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns, onColumnClick }) => {
  return (
    <thead>
      <tr>
        {columns.map((col, index) => (
          <th key={index} onClick={() => onColumnClick(index)}>
            {col.title} ({col.type})
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
