"use client";
import Image from "next/image";
import {
  useExchangePlaidTokenMutation,
  useGetPlaidTokenMutation,
  useGetUserQuery,
} from "@nkeji-web/redux/features/apiSlice";
import { useEffect, useState } from "react";
import { GetPlaidTokenResponse } from "@nkeji-web/lib/global-types";
import { PlaidLink, PlaidLinkOnSuccessMetadata } from "react-plaid-link";
import Modal, { ModalProps } from "./modal";
import { updateUser } from "@nkeji-web/redux/features/authSlice";
import { useToast } from "./use-toast";

interface AddAccountDialogProps extends Omit<ModalProps, "children"> {}
const AddAccountDialog = (props: AddAccountDialogProps) => {
  const [plaidData, setPlaidData] = useState<GetPlaidTokenResponse | null>(
    null
  );
  const { toast } = useToast();
  const [getPlaidToken] = useGetPlaidTokenMutation();
  const [exchangePlaidToken] = useExchangePlaidTokenMutation();
  const { refetch } = useGetUserQuery(null);

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await getPlaidToken(null).unwrap();
        setPlaidData(response);
      } catch (error) {
        console.error(error);
      }
    };
    getToken();
  }, []);

  const refetchUser = async () => {
    try {
      const resp = await refetch();
      if (resp && resp.data) {
        updateUser({ user: resp.data?.data });
        toast({
          title: "Bank Verification Successful!",
          description:
            "Your bank has been successfully verified! We will now analyse your account and give you a credit limit once that is done. Please note, the process of analyzing and scoring you might take a while. You can continue searching for flights while we do that. Once we are done, we will send you an email notification. Happy booking!",
        });
        props.onClose && props.onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSuccess = async ({
    public_token,
    metadata,
  }: {
    public_token: string;
    metadata: PlaidLinkOnSuccessMetadata;
  }) => {
    try {
      const response = await exchangePlaidToken({
        token: public_token,
        metadata,
      }).unwrap();
      response && refetchUser();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal {...props}>
      <div className="max-w-md bg-white p-10 rounded-lg">
        <div className="flex flex-col items-center">
          <Image
            width={134}
            height={36}
            layout="intrinsic"
            src="/assets/bank-group.svg"
            alt=""
            className=""
          />
          <h2 className="mt-4 inter-semibold text-lg text-black">
            Link a bank account
          </h2>
        </div>
        <div className="text-center text-black mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="flex justify-center">
          {plaidData && (
            <PlaidLink
              className="text-white inter-semibold text-sm bg-[#7F56D9] rounded-full px-12 py-4"
              style={{
                background: "#7f56d9",
                padding: "1rem 3rem",
                borderRadius: "9999px",
              }}
              token={plaidData.data.link_token}
              onSuccess={(public_token, metadata) =>
                onSuccess({ public_token, metadata })
              }
            >
              Add Account
            </PlaidLink>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default AddAccountDialog;
