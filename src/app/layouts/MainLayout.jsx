import { Navbar } from "../../components/Navbar";

export const MainLayout = ({ Children }) => {
  return (
    <>
      <Navbar />
      {Children}
    </>
  );
};
