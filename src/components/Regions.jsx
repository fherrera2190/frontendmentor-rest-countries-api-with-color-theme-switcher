import { Region } from "./Region";

const regions = ["africa", "america", "asia", "europe", "oceania"];

export const Regions = ({ filterStatus }) => {
  return (
    <div className="regions">
      {regions.map((region) => (
        <Region key={region} region={region} />
      ))}
    </div>
  );
};
