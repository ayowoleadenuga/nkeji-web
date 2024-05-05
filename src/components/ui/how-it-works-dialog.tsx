import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"

const HowItWorksDialog = ()=>{
    return (
        <Dialog>
  <DialogTrigger>
  <Image
            height={18}
            width={18}
            layout="intrinsic"
            src="/assets/circle-info-purple.svg"
            alt=""
            className=""
          />
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>
        <h3 className="text-center">
        How it works
        </h3>
        </DialogTitle>
      <DialogDescription>
        <div className="mt-3 pt-3 text-center border-t">

      Lorem ipsum dolor sit 25%, consectetur adipiscing elit, sed do APR tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur credit check elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    )
}

export default HowItWorksDialog