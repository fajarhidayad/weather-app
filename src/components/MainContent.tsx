import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";

const MainContent = () => {
  return (
    <div className="text-gray-150 p-10 flex-grow">
      <div className="space-x-3 text-right">
        <button className="bg-gray-150 rounded-full w-10 h-10 text-darkblue font-bold text-xl">
          &deg;C
        </button>
        <button className="bg-[#585676] rounded-full w-10 h-10 text-gray-150 font-bold text-xl">
          &deg;F
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-5 gap-10 justify-center">
        <SmallCard
          dayTitle="Tomorrow"
          img="Shower"
          max={20}
          min={12}
          temp="C"
        />
        <SmallCard
          dayTitle="Sun, 7 Jun"
          img="Clear"
          max={27}
          min={18}
          temp="C"
        />
      </div>

      <div className="my-10">
        <h3 className="text-2xl font-bold mb-5">Today's Highlights</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center">
          <LargeCard title="Wind Status" num={7} desc="mph">
            <div className="flex justify-between space-x-5 items-center">
              <div className="bg-gray-500 rounded-full w-[30px] h-[30px] flex justify-center items-center">
                <i className="fas fa-location-arrow"></i>
              </div>
              <p className="text-gray-150 text-sm">WSW</p>
            </div>
          </LargeCard>

          <LargeCard title="Humidity" num={84} desc="%">
            <div className="self-stretch text-gray-250 text-xs space-y-1">
              <div className="flex justify-between space-x-5 items-center px-1">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div className="w-full h-2 bg-gray-150 rounded-full overflow-hidden">
                <div
                  className="bg-[#FFEC65] h-2"
                  style={{ width: "84%" }}
                ></div>
              </div>
              <p className="text-right">%</p>
            </div>
          </LargeCard>

          <LargeCard title="Visibility" num={6.4} desc=" miles" />

          <LargeCard title="Air Pressure" num={998} desc=" mb" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
