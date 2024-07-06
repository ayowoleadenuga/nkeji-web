import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@nkeji-web/redux/store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nkeji-web/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@nkeji-web/components/ui/calendar";
import {
  useEmailVerificationMutation,
  useVerifyEmailMutation,
  usePhoneNumberVerificationMutation,
  useVerifyPhoneNumberMutation,
  useRegisterUserMutation,
} from "@nkeji-web/redux/features/authApi";
import {
  setEmail,
  setPhoneNumber,
  setOtp,
  setFirstName,
  setLastName,
  setDateOfBirth,
  setPassword,
  setCurrentStage,
  setError,
  clearError,
} from "@nkeji-web/redux/features/authSlice";
import { closeModal } from "@nkeji-web/redux/features/authModalReducer";
import { useToast } from "../ui/use-toast";
import { format } from "date-fns";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Image from "next/image";

const SignupForm = ({ closeModal }: { closeModal: () => void }) => {
  const dispatch = useDispatch();
  const {
    email,
    phoneNumber,
    otp,
    firstName,
    lastName,
    dateOfBirth,
    password,
    currentStage,
    error,
  } = useSelector((state: RootState) => state.auth);
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  console.log({ firstName, lastName, password });
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [emailVerification, { isLoading: isEmailVerifying }] =
    useEmailVerificationMutation();
  const [verifyEmail, { isLoading: isEmailVerified }] =
    useVerifyEmailMutation();
  const [phoneNumberVerification, { isLoading: isPhoneNumberVerifying }] =
    usePhoneNumberVerificationMutation();
  const [verifyPhoneNumber, { isLoading: isPhoneNumberVerified }] =
    useVerifyPhoneNumberMutation();
  const [registerUser, { isLoading: isRegistering }] =
    useRegisterUserMutation();

  React.useEffect(() => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      dispatch(setDateOfBirth(formattedDate));
    }
  }, [date]);

  const handleEmailVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailVerification({ email }).unwrap();
      dispatch(setCurrentStage("verifyEmail"));
    } catch (err) {
      dispatch(setError("Email verification failed"));
      toast({
        title: "Oops! Email verification failed",
        variant: "destructive",
        description: `Please try again later`,
      });
    }
  };

  const handleVerifyEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await verifyEmail({ email, otp }).unwrap();
      dispatch(setCurrentStage("phoneNumberVerification"));
      dispatch(setOtp(""));
    } catch (err) {
      dispatch(setError("Email OTP verification failed"));
      toast({
        title: "Oops! Email OTP verification failed",
        variant: "destructive",
        description: `Please try again later`,
      });
    }
  };

  const handlePhoneNumberVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await phoneNumberVerification({ phone_number: phoneNumber }).unwrap();
      dispatch(setCurrentStage("verifyPhoneNumber"));
    } catch (err) {
      dispatch(setError("Phone number verification failed"));
      toast({
        title: "Oops! Phone number verification failed",
        variant: "destructive",
        description: `Please try again later`,
      });
    }
  };

  const handleVerifyPhoneNumber = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await verifyPhoneNumber({ phone_number: phoneNumber, otp }).unwrap();
      dispatch(setCurrentStage("registerDetails"));
    } catch (err) {
      dispatch(setError("Phone number verification failed"));
      toast({
        title: "Oops! Phone number OTP verification failed",
        variant: "destructive",
        description: `Please try again later`,
      });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser({
        first_name: firstName,
        last_name: lastName,
        date_of_birth: "1992-07-27",
        phone_number: phoneNumber,
        email,
        password,
      }).unwrap();
      // Registration successful, handle success (e.g., navigate to login)
      closeModal();
      toast({
        title: "Success!",
        description: "Your registration was successful",
      });
    } catch (err) {
      dispatch(setError("Registration failed"));
      toast({
        title: "Oops! Failed to register user",
        variant: "destructive",
        description: `Please try again later`,
      });
    }
  };

  return (
    <div>
      <div className="mt-8">
        <h3 className="text-2xl inter-bold text-[#1B1E21]">
          Create your account
        </h3>
        <div className="mt-5 flex space-x-8">
          <div>
            <Image
              height={30}
              width={30}
              layout="intrinsic"
              src={`/assets/google.svg`}
              alt=""
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              height={30}
              width={30}
              layout="intrinsic"
              src={`/assets/facebook-blue.svg`}
              alt=""
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              height={30}
              width={30}
              layout="intrinsic"
              src={`/assets/apple.svg`}
              alt=""
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="flex space-x-1 items-center mt-5">
          <span className="border w-60"></span>
          <span className="text-[#A3A7AB] inter-semibold text-base">or</span>
          <span className="border w-60"></span>
        </div>
        <div className="mt-5 flex flex-col space-y-4 mb-10">
          {currentStage === "emailVerification" && (
            <form onSubmit={handleEmailVerification}>
              <h2 className="text-xl inter-bold text-[#1B1E21] mb-4">
                Email Verification
              </h2>
              <div className={`grid items-center gap-1.5 w-full `}>
                <label
                  htmlFor="email"
                  className="text-[#1B1E21] inter-bold text-base"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="lagbaja@gmail.com"
                  value={email}
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                  className="border border-[#F0F0F1] shadow rounded-lg bg-white p-3"
                />
              </div>
              <button
                disabled={isEmailVerifying}
                onClick={handleEmailVerification}
                className={`text-white inter-semibold text-sm ${
                  isEmailVerifying
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#7F56D9]"
                } rounded-full w-full mt-10 py-5`}
              >
                {isEmailVerifying ? "sending otp" : "Send OTP"}
              </button>
            </form>
          )}

          {currentStage === "verifyEmail" && (
            <form onSubmit={handleVerifyEmail}>
              <h2 className="text-xl inter-bold text-[#1B1E21] mb-4">
                Verify Email
              </h2>
              <div className={`grid items-center gap-1.5 w-full `}>
                <label
                  htmlFor="otp"
                  className="text-[#1B1E21] inter-bold text-base"
                >
                  Enter OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  placeholder="Your name"
                  value={otp}
                  onChange={(e) => dispatch(setOtp(e.target.value))}
                  className="border border-[#F0F0F1] shadow rounded-lg bg-white p-3"
                />
              </div>
              <button
                disabled={isEmailVerified}
                className={`text-white inter-semibold text-sm ${
                  isEmailVerified
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#7F56D9]"
                } rounded-full w-full mt-10 py-5`}
              >
                {isEmailVerified ? "submitting" : "Submit OTP"}
              </button>
            </form>
          )}

          {currentStage === "phoneNumberVerification" && (
            <form onSubmit={handlePhoneNumberVerification}>
              <h2 className="text-xl inter-bold text-[#1B1E21] mb-4">
                Phone Number Verification
              </h2>
              <div className={`grid items-center gap-1.5 w-full `}>
                <label
                  htmlFor="phoneNumber"
                  className="text-[#1B1E21] inter-bold text-base"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="+44 730 000 0000"
                  autoComplete="tel"
                  max="10"
                  min="10"
                  pattern="[0-9]{10}"
                  required
                  value={phoneNumber}
                  onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
                  className="border border-[#F0F0F1] shadow rounded-lg bg-white p-3"
                />
              </div>
              <button
                disabled={isPhoneNumberVerifying}
                className={`text-white inter-semibold text-sm ${
                  isPhoneNumberVerifying
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#7F56D9]"
                } rounded-full w-full mt-10 py-5`}
              >
                {isPhoneNumberVerifying ? "verifying" : "Verify Phone Number"}
              </button>
            </form>
          )}

          {currentStage === "verifyPhoneNumber" && (
            <form onSubmit={handleVerifyPhoneNumber}>
              <h2 className="text-xl inter-bold text-[#1B1E21] mb-4">
                Verify Phone number OTP
              </h2>
              <div className={`grid items-center gap-1.5 w-full `}>
                <label
                  htmlFor="otp"
                  className="text-[#1B1E21] inter-bold text-base"
                >
                  Enter OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  placeholder="Phone OTP"
                  value={otp}
                  onChange={(e) => dispatch(setOtp(e.target.value))}
                  className="border border-[#F0F0F1] shadow rounded-lg bg-white p-3"
                />
              </div>
              <button
                disabled={isPhoneNumberVerified}
                className={`text-white inter-semibold text-sm ${
                  isPhoneNumberVerified
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#7F56D9]"
                } rounded-full w-full mt-10 py-5`}
              >
                {isPhoneNumberVerified ? "submitting" : "Submit OTP"}
              </button>
            </form>
          )}

          {currentStage === "registerDetails" && (
            <form onSubmit={handleRegister}>
              <h2 className="text-xl inter-bold text-[#1B1E21] mb-6">
                Register your details
              </h2>
              <div className={`grid items-center gap-1.5 w-full mb-6 `}>
                <label
                  htmlFor="firstName"
                  className="text-[#1B1E21] inter-bold text-base"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => dispatch(setFirstName(e.target.value))}
                  placeholder="Enter first name"
                  className="border border-[#F0F0F1] shadow rounded-lg bg-white p-3"
                />
              </div>

              <div className={`grid items-center gap-1.5 w-full mb-6 `}>
                <label
                  htmlFor="lastName"
                  className="text-[#1B1E21] inter-bold text-base"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => dispatch(setLastName(e.target.value))}
                  placeholder="Enter last name"
                  className="border border-[#F0F0F1] shadow rounded-lg bg-white p-3"
                />
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <div
                    className={`grid items-center gap-1.5 w-full text-left font-normal relative mb-6`}
                  >
                    <label
                      htmlFor="date"
                      className="text-[#1B1E21] inter-bold text-base"
                    >
                      Date of birth
                    </label>
                    <div className="border border-[#F0F0F1] shadow rounded-lg bg-white p-3 flex justify-between items-center">
                      <input
                        type="text"
                        placeholder="MM/DD/YYYY"
                        onChange={() => {}}
                        value={date ? format(date, "PPP") : ""}
                        className="border-0 outline-none"
                      />
                      <CalendarIcon className="mr-2 h-4 w-4" color="#8A3FFC" />
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <div className={`grid items-center gap-1.5 w-full`}>
                <label
                  htmlFor="password"
                  className="text-[#1B1E21] inter-bold text-base"
                >
                  Password
                </label>
                <div className="relative border border-[#F0F0F1] shadow rounded-lg bg-white p-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                    placeholder="Password"
                    className="border-0 outline-none"
                  />
                  <span
                    className="absolute top-1 right-3 cursor-pointer translate-y-[50%]"
                    onClick={handlePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOffIcon color="#8A3FFC" />
                    ) : (
                      <EyeIcon color="#8A3FFC" />
                    )}
                  </span>
                </div>
              </div>
              <button
                disabled={isRegistering}
                className={`text-white inter-semibold text-sm ${
                  isRegistering
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#7F56D9]"
                } rounded-full w-full mt-10 py-5`}
              >
                {isRegistering ? "registering" : "Register"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
