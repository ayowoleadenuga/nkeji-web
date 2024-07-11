import ReusablePaymentModalContainer from "../FlightSearch/components/reusablePaymentModalHead";
import GoCardlessDropinButon from "./GoCardlessDropinButon";
import { extractParamValue } from "@nkeji-web/lib/utils";

const GoCardlessPaymentMandateDialog = ({
  authorisation_url,
  onSuccess,
}: {
  authorisation_url: string;
  onSuccess: () => void;
}) => {
  const flow_id = extractParamValue(authorisation_url, "id");
  return (
    <ReusablePaymentModalContainer title="Direct Debit Setup">
      <span className="mt-3 text-center text-black">
        Click the button below to launch a payment session to make payment via
        your bank
      </span>
      <span className="mt-10 flex justify-center">
        <GoCardlessDropinButon
          options={{
            billingRequestFlowID: flow_id || "",
            environment: process.env.NEXT_PUBLIC_GOCARDLESS_ENV || "sandbox",
            onSuccess: onSuccess,
            onExit: () => {},
          }}
          title="Make Payment Via Bank"
        />
      </span>
    </ReusablePaymentModalContainer>
  );
};

export default GoCardlessPaymentMandateDialog;
