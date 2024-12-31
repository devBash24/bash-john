import React, { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import LoadingOverlay from "../loading";

const DesktopHeader = React.lazy(() => import("./desktop_header"));
const MobileHeader = React.lazy(() => import("./mobile_nav"));

const Header = () => {
  const isMobile =  useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Suspense fallback={<LoadingOverlay />}>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </Suspense>
  ); 

};

export default Header;

