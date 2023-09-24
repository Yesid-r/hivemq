import React, { useEffect, useState } from 'react';
import CardTemperature from './components/CardTemperature';
import CardHumidity from './components/CardHumidity';



function App() {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8081');

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.topic === 'sensor1') {
        setTemperature(data.message);
      } else if (data.topic === 'sensor2') {
        setHumidity(data.message);
      }
    };

    ws.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Sensor Data</h1>
      <div className="grid grid-cols-2 gap-4">
        <CardTemperature temperature={temperature} />
        <CardHumidity humidity={humidity} />
      </div>
    </div>
  );
}

export default App;
