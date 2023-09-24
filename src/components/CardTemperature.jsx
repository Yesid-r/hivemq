import React from 'react'
import { WiThermometer } from 'react-icons/wi';

const CardTemperature = ({temperature}) => {
    return (
        <div className="bg-blue-200 p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Temperatura (Sensor 1)</h2>
              <p className="text-2xl">
                {temperature !== null ? `${temperature} °C` : 'N/A'}
              </p>
            </div>
            {temperature !== null && temperature > 30 && (
              <p className="text-red-600">¡Cuidado! La temperatura es muy alta</p>
            )}
            <WiThermometer className="text-6xl text-blue-500" />
          </div>
        </div>
      );
}

export default CardTemperature