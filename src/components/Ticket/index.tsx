
import FlightInfo,{FlightInfoProps} from '../FlightInfo';
import PassagerInfo,{PassagerInfoProps} from '../PassagertInfo';

type Boardingpass = {
  flightInfo: FlightInfoProps;
  passagerInfo: PassagerInfoProps
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
  passagerInfo:{
    name:'Rodrigo Terron',
    seat:'28A'
  }
};

const Ticket = () => {
  return (
    <section className="drop-shadow-2xl shadow-black/25">
      <div className="mb-5">
        <h1 className="text-center text-xl font-medium text-white">
          Cartão de embarque
        </h1>
      </div>

      <FlightInfo {...data.flightInfo} />
      <PassagerInfo{...data.passagerInfo}/>


    </section>
  );
};

export default Ticket;
