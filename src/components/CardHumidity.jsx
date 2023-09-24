import React from 'react'
import { WiHumidity } from 'react-icons/wi';

const CardHumidity = ({humidity}) => {
    return (
        <div className="bg-green-200 p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Humedad (Sensor 2)</h2>
              <p className="text-2xl">
                {humidity !== null ? `${humidity} %` : 'N/A'}
              </p>
            </div>
            <WiHumidity className="text-6xl text-green-500" />
          </div>
        </div>
      );
}

export default CardHumidity