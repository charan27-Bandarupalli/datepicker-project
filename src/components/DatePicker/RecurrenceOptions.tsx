import React from 'react';

interface RecurrenceOptionsProps {
  recurrenceType: string;
  onRecurrenceTypeChange: (type: string) => void;
  recurrenceOptions: any;
  onRecurrenceOptionsChange: (options: any) => void;
}

const RecurrenceOptions: React.FC<RecurrenceOptionsProps> = ({
  recurrenceType,
  onRecurrenceTypeChange,
  recurrenceOptions,
  onRecurrenceOptionsChange,
}) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Recurrence Options</h3>
      <select
        className="w-full p-2 border rounded"
        value={recurrenceType}
        onChange={(e) => onRecurrenceTypeChange(e.target.value)}
      >
        <option value="none">No Recurrence</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      {/* Add more options based on the selected recurrence type */}
    </div>
  );
};

export default RecurrenceOptions;