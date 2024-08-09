"use client";
import { CircleCheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { useEffect } from "react";

const FlightConfirmationPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleConfetti = () => {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const interval = window.setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);
    };
    handleConfetti();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen pt-12 space-y-4 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-2">
          <CircleCheckIcon className="h-12 w-12 text-green-500" />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Booking successful
          </h1>
          <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Your payment has been confirmed and your booking has been processed.
            You will receive an email confirming your flight reservation from
            the airline. Thank you for booking with us.
          </p>
        </div>
        <div className="m-auto w-1/4">
          <button
            className="text-white inter-semibold text-sm bg-[#7F56D9]
             rounded-full w-full mt-10 py-5"
            onClick={() => router.push("/")}
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightConfirmationPage;
