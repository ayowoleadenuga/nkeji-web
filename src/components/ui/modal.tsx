import { useEffect, useRef } from "react";
import { cn } from "@nkeji-web/lib/utils";

interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  closeOnClickOut?: boolean;
  children: React.ReactNode;
  className?: string;
  zIndex?: string;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  children,
  onClose,
  closeOnClickOut = true,
  className,
  zIndex,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === modalRef.current && closeOnClickOut) {
      if (onClose) {
        onClose();
      }
    }
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={modalRef}
      onClick={handleCloseModal}
      className={cn(
        "fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black backdrop-blur-sm flex justify-center items-center ease-in ml-0 overflow-y-auto",
        className
      )}
      style={{ zIndex }}
    >
      <div className="max-h-full overflow-y-auto">{children}</div>
    </div>
  );
};

export default Modal;
