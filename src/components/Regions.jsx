import { Region } from "./Region";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export const Regions = ({ filterStatus, changeRegion }) => {
  return (
    <div className="regions">
      {regions.map((region) => (
        <Region key={region} region={region} changeRegion={changeRegion} />
      ))}
    </div>
  );
};
