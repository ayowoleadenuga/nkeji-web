import Image from "next/image"
import { useEffect, useState } from "react"

interface ContactDetailsProps {
  showDetails?:boolean
  setCurrentTab?:any
  index?:number
}

const ContactDetails:React.FC<ContactDetailsProps> = ({showDetails, setCurrentTab, index})=>{
  const [contactDetails, setContactDetails] = useState({
    email:'',
    phoneNumber:'',
  })

  useEffect(()=>{
    if(showDetails){
      setContactDetails(prev=>({
        ...prev,
        email:'aduntobi7@gmail.com',
        phoneNumber:'0808289383'
      }))
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[showDetails])
    return (
        <div className="bg-white w-full pt-4 pb-10 px-5">
            <h3 className="text-lg inter-bold">Contact details</h3>
            <p className="text-sm ">We&apos;ll send your flight confirmation to the information provide.</p>
        
        <div className={`flex  mt-5
        ${showDetails ? 'justify-between' : 'space-x-5'}
        `}>
        <div className={`grid  max-w-sm items-center gap-1.5
        ${showDetails ? 'w-[36%]' : 'w-[40%]'}
        `}>
      <label htmlFor="email">Email Address<span className="text-red-500">*</span></label>
      <input type="email" id="email" placeholder="lagbaja@gmail.com" 
      value={contactDetails.email}
      readOnly={showDetails}
      className={`${!showDetails ? 'border border-[#D0D5DD] rounded-lg bg-white p-3' : 'outline-none'} 
      
      `}
      />
    </div>

    <div className={`grid max-w-sm items-center gap-1.5
    ${showDetails ? 'w-[36%]' : 'w-[40%]'}
    `}>
      <label htmlFor="phoneNumber">Phone number</label>
      <input type="number" id="email" placeholder="+44 (555) 000-000" 
      value={contactDetails.phoneNumber}
      readOnly={showDetails}
      className={`${!showDetails ? 'border border-[#D0D5DD] rounded-lg bg-white p-3' : 'outline-none'} `}

      />
    </div>
    {
showDetails &&
    <div
    onClick={()=> index && setCurrentTab(index - 1)}
    className="cursor-pointer flex space-x-2 items-center w-[fit-content]"
    >
    <Image
        height={15}
        width={15}
        src="/assets/edit.svg"
        alt=""
        className="cursor-pointer"
      />
      <p className="text-sm text-[#7F56D9] inter-semibold underline">Edit contact details</p>
    </div>
    }
        </div>
        </div>
    )
}

export default ContactDetails