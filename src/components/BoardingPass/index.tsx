import type { FlightInfoProps } from '../FlightInfo';
import FlightInfo from '../FlightInfo';

type Boardingpass = {
  flightInfo: FlightInfoProps;
};

const data: Boardingpass = {
  flightInfo: {
    flightNumber: 'RS995',
    flightDate: '23/05/2023',
    departure: {
      city: 'São Paulo',
      country: 'Brasil',
      airport: 'GRU',
      time: '17:00',
    },
    arrival: {
      city: 'São Francisco',
      country: 'EUA',
      airport: 'SFO',
      time: '04:48',
      daysAfter: 1,
    },
  },
};

const Card = () => {
  return (
    <section>
      <div className="mb-5">
        <h1 className="text-center text-xl font-medium text-white">
          Cartão de embarque
        </h1>
      </div>

      <FlightInfo {...data.flightInfo} />
    </section>
  );
};

export default Card;
