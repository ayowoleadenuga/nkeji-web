import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "@nkeji-web/redux/features/authApi";
import { clearError } from "@nkeji-web/redux/features/authSlice";
import { RootState } from "@nkeji-web/redux/store";
import { useToast } from "../ui/use-toast";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const LoginForm = ({ closeModal }: { closeModal: () => void }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [login, { isLoading }] = useLoginMutation();

  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = values;
    dispatch(clearError());
    try {
      await login({ email, password }).unwrap();
      // Handle successful login here (e.g., store token, redirect)
      toast({
        title: "Success!",
        description: "Your login was successful",
      });
      closeModal();
    } catch (err) {
      // Handle error here
      toast({
        title: "Oops! an error has occurred",
        variant: "destructive",
        description: `Please try again later`,
      });
    }
  };
  return (
    <div className="mt-8 mb-14">
      <h3 className="text-2xl inter-bold text-[#1B1E21]">
        Login to your account
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
      <form onSubmit={handleSubmit}>
        <div className="mt-5">
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
              placeholder="lagbaja@gmail.com"
              value={values.email}
              onChange={e => setValues({ ...values, email: e.target.value })}
              className="border border-[#F0F0F1] shadow rounded-lg bg-white p-3"
            />
          </div>
          <div className={`grid items-center gap-1.5 w-full mt-4`}>
            <label
              htmlFor="email"
              className="text-[#1B1E21] inter-bold text-base"
            >
              Password
            </label>
            <div className=" relative border border-[#F0F0F1] shadow rounded-lg bg-white p-3">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                id="password"
                value={values.password}
                onChange={e =>
                  setValues({ ...values, password: e.target.value })
                }
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
        </div>

        <button
          disabled={isLoading}
          className={`text-white inter-semibold text-sm ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#7F56D9]"
          } rounded-full w-full mt-10 py-5`}
        >
          {isLoading ? "logging in" : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
