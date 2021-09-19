import { Fotter } from "../atoms/layouts/Fotter";
import { Header } from "../atoms/layouts/Header"

export const DefaultLayout = (props) => {
  const {children} = props;
  return (
    <>
      <Header />
       {children}
      <Fotter />
    </>
  );
}