/* eslint-disable react/prop-types */
export const Region = ({ region, changeRegion }) => {
  const handleClick = () => {
    changeRegion(region);
  };

  return <button onClick={handleClick}>{region}</button>;
};
