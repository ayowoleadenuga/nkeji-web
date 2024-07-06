import { closeModal } from "@nkeji-web/redux/features/authModalReducer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@nkeji-web/redux/store";

interface ModalProps {
  onClose?: () => void;
  children: React.ReactNode;
}

const AuthModalContainer: React.FC<ModalProps> = ({ onClose, children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.authModal.isOpen);
  const handleClose = () => {
    dispatch(closeModal()); // Dispatch action to close modal
    onClose && onClose(); // Optional callback for additional logic
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto px-4 md:inset-auto md:px-8 bg-opacity-75 backdrop-blur-sm transition ease-in-out duration-300 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="relative mx-auto w-full max-w-md rounded-lg shadow-md bg-white py-4 px-5">
        {children}
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleClose}
        >
          <span className="sr-only">Close</span>
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l5.707-5.707a1 1 0 011.414 1.414L11.414 10l5.707 5.707a1 1 0 01-1.414 1.414L10 11.414l-5.707 5.707a1 1 0 01-1.414-1.414L8.586 10L2.879 4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AuthModalContainer;
