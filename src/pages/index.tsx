import React from 'react';
import { DatePicker } from '../components';

const Home: React.FC = () => {
  const handleDateSelect = (dates: Date[]) => {
    console.log('Selected dates:', dates);
  };

  return (
    <div className="container mx-auto p-4" style={{backgroundImage: "url('https://cdn.wallpapersafari.com/67/76/qtpSIw.jpg')", textAlign:"center", borderRadius:"5%"}}>
      <h1 className="text-3xl font-bold mb-4 border" style={{fontStyle:"oblique"}}>Recurring Date Picker</h1>
      <DatePicker onDateSelect={handleDateSelect} />
    </div>
  );
};

export default Home;