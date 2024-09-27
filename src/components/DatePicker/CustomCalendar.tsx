import React from 'react';

interface CustomCalendarProps {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date | null) => void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Select Dates</h3>
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date: </label>
          <input
            type="date"
            className="mt-1 block w-full p-2 border rounded"
            value={startDate ? startDate.toISOString().split('T')[0] : ''}
            onChange={(e) => onStartDateChange(new Date(e.target.value))}
          /><br /><br /><br />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">End Date: (Optional)</label>
          <input
            type="date"
            className="mt-1 block w-full p-2 border rounded"
            value={endDate ? endDate.toISOString().split('T')[0] : ''}
            onChange={(e) => onEndDateChange(e.target.value ? new Date(e.target.value) : null)}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;