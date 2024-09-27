import React from 'react';

interface PreviewCalendarProps {
  dates: Date[];
}

const PreviewCalendar: React.FC<PreviewCalendarProps> = ({ dates }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Preview</h3>
      <div className="border rounded p-2">
        {dates.length > 0 ? (
          dates.map((date, index) => (
            <div key={index} className="text-sm">
              {date.toLocaleDateString()}
            </div>
          ))
        ) : (
          <div className="text-sm text-gray-500">Dates selected</div>
        )}
      </div>
    </div>
  );
};

export default PreviewCalendar;