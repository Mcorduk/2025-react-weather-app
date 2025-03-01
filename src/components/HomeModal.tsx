export interface IHomeModalProps {}

export default function HomeModal(props: IHomeModalProps) {
  return (
    <div className="home-modal w-full h-1/3 absolute z-3 bg-gray-50 ">
      <div className="tab-container flex justify-around w-full px-6 ">
        <div className="tab active text-center mr-20 ">Hourly Forecast</div>
        <div className="tab">Weekly Forecast</div>
        <div className="notch"></div>
      </div>
      <div></div>
    </div>
  );
}
