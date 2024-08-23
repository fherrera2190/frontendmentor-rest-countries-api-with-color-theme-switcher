import { useEffect, useMemo, useState } from "react";
import { getRegions } from "../helpers/getRegions";
import { Region } from "./Region";

export const Regions = ({ filterStatus }) => {
  const regions = useMemo(() => getRegions(), []);
  return (
    <div className="regions">
      {regions.map((region) => (
        <Region key={region} region={region} />
      ))}
    </div>
  );
};
