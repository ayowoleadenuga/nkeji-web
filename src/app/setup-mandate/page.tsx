import MandateSetup from "@nkeji-web/components/FlightSearch/components/stripe/mandate-setup";
import {Suspense} from "react";

const SetupMandatePage = () => {
  return (
      <Suspense>
        <MandateSetup />
      </Suspense>
  );
};

export default SetupMandatePage;
