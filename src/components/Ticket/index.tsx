import BoardingInfo, { BoardingInfoProps } from '../BoardingInfo';
import FlightInfo, { FlightInfoProps } from '../FlightInfo';
import PassagerInfo, { PassagerInfoProps } from '../PassagertInfo';

type Boardingpass = {
  flightInfo: FlightInfoProps;
  passagerInfo: PassagerInfoProps;
  boardingInfo: BoardingInfoProps;
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
  passagerInfo: {
    name: 'Rodrigo Terron',
    seat: '28A',
  },
  boardingInfo: {
    time: '16:15',
    terminal: 2,
    gate: 15,
    boardingGroup: 3,
    gateClosesTime: '16:45',
  },
};

const Ticket = () => {
  return (
    <section className='drop-shadow-2xl shadow-black/25'>
      <div className='mb-5'>
        <h1 className='text-center text-xl font-medium text-white'>
          Cartão de embarque
        </h1>
      </div>

      <FlightInfo {...data.flightInfo} />
      <PassagerInfo {...data.passagerInfo} />
      <BoardingInfo {...data.boardingInfo} />
    </section>
  );
};

export default Ticket;
