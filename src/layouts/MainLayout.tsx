import { Navbar } from "../components";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <>{children}</>
    </>
  );
};
