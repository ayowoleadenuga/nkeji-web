import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"

const AddAccountDialog = ()=>{
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
      <DialogTitle>
        <h3 className="text-center mt-3">
        Link a bank account
        </h3>
        </DialogTitle>
      <DialogDescription>
        <div className="mt-3 text-center text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="mt-10 flex justify-center">
        <button className="text-white  inter-semibold text-sm bg-[#7F56D9] rounded-full px-12 py-4">Add account</button>

        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>

    )
}

export default AddAccountDialog