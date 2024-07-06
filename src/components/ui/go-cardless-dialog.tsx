import Image from "next/image";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import {
  useGoCardlessDropin,
  GoCardlessDropinOptions,
} from "@gocardless/react-dropin";

function extractParamValue(url: string, param: string) {
  const urlObj = new URL(url);
  return urlObj.searchParams.get(param);
}

const DropinButton = (options: GoCardlessDropinOptions) => {
  const { open } = useGoCardlessDropin({ ...options });

  return (
    <button
      type="button"
      onClick={() => open()}
      className="text-white  inter-semibold text-sm bg-[#7F56D9] rounded-full px-12 py-4"
    >
      Make Payment Via Bank
    </button>
  );
};

const GoCardlessDialog = ({
  authorisation_url,
}: {
  authorisation_url: string;
}) => {
  const flow_id = extractParamValue(authorisation_url, "id");
  return (
    <DialogContent className="max-w-md">
      <DialogHeader className="flex flex-col items-center">
        <Image
          width={134}
          height={36}
          layout="intrinsic"
          src="/assets/bank-group.svg"
          alt=""
          className=""
        />
        <DialogTitle className="text-center mt-3">Instant Payment</DialogTitle>
        <DialogDescription>
          <span className="mt-3 text-center text-black">
            Click the button below to launch a payment session to make payment
            via your bank
          </span>
          <span className="mt-10 flex justify-center">
            <DropinButton
              billingRequestFlowID={flow_id || ""}
              environment={process.env.NEXT_PUBLIC_GOCARDLESS_ENV || "sandbox"}
              onSuccess={() => {
                console.log("Payment was successful");
              }}
              onExit={() => {
                console.log("Now exiting");
              }}
            />
          </span>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default GoCardlessDialog;
