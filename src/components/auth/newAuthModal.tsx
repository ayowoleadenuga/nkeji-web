import { useDispatch } from "react-redux";
import { clearError, resetState } from "@nkeji-web/redux/features/authSlice";
import { DialogContent } from "../ui/dialog";
import { AuthTabType } from ".";
import Login from "@nkeji-web/components/auth/login";
import SignUp from "@nkeji-web/components/auth/signUp";

const NewAuthModal = ({
  currentTab,
  setCurrentTab,
}: {
  currentTab: AuthTabType;
  setCurrentTab: (val: AuthTabType) => void;
}) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(clearError());
    dispatch(resetState());
  };

  return (
    <DialogContent className="lg:max-w-[55%]  md:max-w-[70%] max-w-[100%] h-[80vh] p-0 overflow-auto ">
      <div className="overflow-hidden rounded-lg h-full ">
        <div className="bg-white w-full h-full  ">
          <div className="">
            {currentTab === "login" && (
              <Login closeModal={handleClose} setCurrentTab={setCurrentTab} />
            )}
            {currentTab === "register" && (
              <SignUp closeModal={handleClose} setCurrentTab={setCurrentTab} />
            )}
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default NewAuthModal;
