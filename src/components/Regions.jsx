import { Region } from "./Region";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export const Regions = ({  changeRegion }) => {
  return (
    <div className="regions">
      {regions.map((region) => (
        <Region key={region} region={region} changeRegion={changeRegion} />
      ))}
    </div>
  );
};
