"use client";

import React, { useEffect, useRef, useState } from "react";
import AuthModal from "./authModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@nkeji-web/redux/store";
import { UserNav } from "./user-nav";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { clearError, resetState } from "@nkeji-web/redux/features/authSlice";
import { closeModal } from "@nkeji-web/redux/features/authModalReducer";
import NewAuthModal from "@nkeji-web/components/auth/newAuthModal";

export type AuthTabType = "login" | "register";
export const AuthButtons = () => {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState<AuthTabType>("login");
  const user = useSelector((state: RootState) => state.auth.user);
  const modalState = useSelector((state: RootState) => state.authModal);
  const loginButtonRef = useRef<HTMLButtonElement | null>(null);
  const handleClose = () => {
    dispatch(clearError());
    dispatch(resetState());
    dispatch(closeModal());
  };

  useEffect(() => {
    if (modalState.isOpen) {
      if (loginButtonRef && loginButtonRef.current) {
        loginButtonRef.current.click();
      }
    }
  }, [modalState.isOpen]);

  return (
    <>
      {user ? (
        <div className="ml-6">
          <UserNav user={user} />
        </div>
      ) : (
        <Dialog onOpenChange={handleClose}>
          <DialogTrigger>
            <button
              onClick={() => setCurrentTab("login")}
              ref={loginButtonRef}
              className="border border-white text-white text-base px-8 py-2 inter-medium rounded-[100px] mr-4"
            >
              Login
            </button>
          </DialogTrigger>
          <DialogTrigger>
            <button
              onClick={() => setCurrentTab("register")}
              className="bg-white text-[#1B1E21] text-base px-8 py-2 inter-medium rounded-[100px]"
            >
              Signup
            </button>
          </DialogTrigger>
          <AuthModal currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </Dialog>
      )}
    </>
  );
};
