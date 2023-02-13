import qrCode from '../../assets/QRCode.svg';

export type BoardingInfoProps = {
  time: string;
  terminal: number;
  gate: number;
  boardingGroup: number;
  gateClosesTime: string;
};

const BoardingInfo = ({
  time,
  terminal,
  gate,
  boardingGroup,
  gateClosesTime,
}: BoardingInfoProps) => {
  return (
    <div className='min-w-[327px] max-w-full rounded-3xl bg-white py-6 px-8'>
      <div className='mb-6 flex justify-between'>
        <div className='flex flex-col'>
          <div>
            <span className='text-sm text-black/60'>Embarque</span>
            <p className='font-medium text-black/90'>{time}</p>
          </div>
          <div>
            <span className=' text-sm text-black/60'>Terminal</span>
            <p className='font-medium text-black/90'>{terminal}</p>
          </div>
          <div>
            <span className=' text-sm text-black/60'>Portão</span>
            <p className='font-medium text-black/90'>{gate}</p>
          </div>
        </div>
        <div>
          <div className='w-[160px] flex justify-center mb-2'>
            <img className='block max-w-[140px]' src={qrCode} alt='Código QR' />
          </div>
          <p className='text-black/65 text-sm'>
            Grupo de embarque: {boardingGroup}
          </p>
        </div>
      </div>
      <div>
        <p>
          <span className='font-medium'>Atenção:</span> o portão fecha às{' '}
          {gateClosesTime}
        </p>
      </div>
    </div>
  );
};

export default BoardingInfo;
