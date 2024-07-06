import MoonLoader from "react-spinners/MoonLoader";

interface AlternateLoaderProps {
  departureAirportCode?: string;
  arrivalAirportCode?: string;
  departureAirportCity?: string;
  arrivalAirportCity?: string;
  departureDate?: string;
  returnDate?: string;
}

function formatDate(dateStr: string | undefined) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getFullYear();

  return `${day}th ${month}, ${year}`;
}

const AlternateLoader = ({
  departureAirportCode,
  arrivalAirportCode,
  departureAirportCity,
  arrivalAirportCity,
  departureDate,
  returnDate,
}: AlternateLoaderProps) => {
  return (
    <div className="bg-white flex flex-col items-center justify-center h-screen">
      <div>
        <MoonLoader color="#7F56D9" size={120} />
      </div>
      <div className="text-center mt-6">
        <div>
          <h1 className="text-xl inter-semibold">
            {`${departureAirportCode} - ${arrivalAirportCode}`}
          </h1>
          <h2 className="text-md inter-semibold">{`${departureAirportCity} - ${arrivalAirportCity}`}</h2>
          <h3 className="text-sm inter-normal">{`${formatDate(departureDate)}${
            returnDate ? `- ${formatDate(returnDate)}` : ""
          }`}</h3>
        </div>
        <div className="mt-6">
          <h4 className="text-md inter-semibold">
            Searching for the best tickets for you
          </h4>
          <h5 className="text-sm inter-normal">
            Please do not close this page
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AlternateLoader;
