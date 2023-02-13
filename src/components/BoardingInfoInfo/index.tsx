export type PassagerInfoProps = {
  name: string;
  seat: string;


};

const PassagerInfo = ({
 name,seat
}: PassagerInfoProps) => {


  return (
    <div className="min-w-[327px] max-w-full rounded-3xl bg-white py-6 px-8 border-t-2  border-b-2 border-dashed border-t-black/35">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-sm font-thin text-black/60">Passageiro</span>
          <p className="font-medium text-black/90">{name}</p>
        </div>
        <div className="text-right">
          <span className=" text-sm font-thin text-black/60">Assento</span>
          <p className="font-medium text-black/90">{seat}</p>
        </div>
      </div>
      </div>

  );
};

export default PassagerInfo;
