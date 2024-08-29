import { Navbar } from "../../components/Navbar";

// eslint-disable-next-line react/prop-types
export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <>{children}</>
    </>
  );
};
