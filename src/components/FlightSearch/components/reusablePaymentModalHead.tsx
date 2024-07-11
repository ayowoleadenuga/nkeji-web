import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@nkeji-web/components/ui/dialog";
import Image from "next/image";
import React, { ReactNode } from "react";

const ReusablePaymentModalContainer = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
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
        <DialogTitle className="text-center mt-3">{title}</DialogTitle>
        <DialogDescription>{children}</DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default ReusablePaymentModalContainer;
