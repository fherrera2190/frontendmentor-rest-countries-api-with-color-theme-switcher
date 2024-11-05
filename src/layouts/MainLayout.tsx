import { Navbar } from "../components";

export const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      <>{children}</>
    </>
  );
};
