import React from "react";
import AuthModal from "./authModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@nkeji-web/redux/store";
import { openModal } from "@nkeji-web/redux/features/authModalReducer";
import { UserNav } from "./user-nav";
export const AuthButtons = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const handleOpen = () => {
    dispatch(openModal());
  };
  return (
    <>
      {user ? (
        <div className="ml-6">
          <UserNav user={user} />
        </div>
      ) : (
        <>
          <div>
            <button
              onClick={handleOpen}
              className="border border-white text-white text-base px-8 py-2 inter-medium rounded-[100px] mr-4"
            >
              Login
            </button>
            <button
              onClick={handleOpen}
              className="bg-white text-[#1B1E21] text-base px-8 py-2 inter-medium rounded-[100px]"
            >
              Signup
            </button>
          </div>
          <AuthModal />
        </>
      )}
    </>
  );
};
