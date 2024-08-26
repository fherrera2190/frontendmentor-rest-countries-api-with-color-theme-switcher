export const Region = ({ region, changeRegion }) => {


  const handleClick = () => {
    console.log(region)
    changeRegion(region);
  };

  return (
    <button onClick={handleClick}>
      {region}
    </button>
  );
};
