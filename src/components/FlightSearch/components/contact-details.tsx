
const ContactDetails = ()=>{
    return (
        <div className="bg-white w-full pt-4 pb-10 px-5">
            <h3 className="text-lg inter-bold">Contact details</h3>
            <p className="text-sm ">We&apos;ll send your flight confirmation to the information provide.</p>
        
        <div className="flex space-x-5 mt-5">
        <div className="grid w-[40%] max-w-sm items-center gap-1.5">
      <label htmlFor="email">Email Address<span className="text-red-500">*</span></label>
      <input type="email" id="email" placeholder="lagbaja@gmail.com" 
      className="border border-[#D0D5DD] rounded-lg bg-white p-3"
      />
    </div>

    <div className="grid  w-[40%] max-w-sm items-center gap-1.5">
      <label htmlFor="phoneNumber">Phone number<span className="text-red-500">*</span></label>
      <input type="number" id="email" placeholder="+44 (555) 000-000" className="border border-[#D0D5DD] rounded-lg bg-white p-3" />
    </div>
        </div>
        </div>
    )
}

export default ContactDetails