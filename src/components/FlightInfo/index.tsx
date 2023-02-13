export type FlightInfoProps = {
  flightNumber: string;
  flightDate: string;
  departure: {
    city: string;
    country: string;
    airport: string;
    time: string;
  };
  arrival: {
    city: string;
    country: string;
    time: string;
    airport: string;
    daysAfter: number;
  };
};

const FlightInfo = ({
  arrival,
  departure,
  flightDate,
  flightNumber,
}: FlightInfoProps) => {
  console.log(arrival);
  console.log(departure);
  console.log(flightDate);
  console.log(flightNumber);

  return (
    <div className="min-w-[327px] max-w-full rounded-3xl bg-white py-6 px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <span className="text-sm font-thin text-black/60">Voo</span>
          <p className="font-medium text-black/90">{flightNumber}</p>
        </div>
        <div className="text-right">
          <span className=" text-sm font-thin text-black/60">Data</span>
          <p className="font-medium text-black/90">{flightDate}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-sm font-thin text-black/60">
            {departure.city}, {departure.country}
          </span>
          <p className="text-4xl font-medium text-black/90">
            {departure.airport}
          </p>
          <span className="text-base font-thin text-black/80">
            {departure.time}
          </span>
        </div>
        <div className="text-right">
          <span className="text-sm font-thin text-black/60">
            {arrival.city}, {arrival.country}
          </span>
          <p className="text-4xl font-medium text-black/90">
            {arrival.airport}
          </p>
          <span className=" text-base font-thin text-black/80">
            {arrival.time}
            <sup>{`+${arrival.daysAfter}`}</sup>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlightInfo;
