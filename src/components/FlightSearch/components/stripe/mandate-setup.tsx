"use client";
import {useEffect} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {useSetPaymentMandateMutation} from "@nkeji-web/redux/features/apiSlice";

export default function MandateSetup() {
    const router = useRouter();
    const [setPaymentMandate] = useSetPaymentMandateMutation();
    const urlParams = useSearchParams();
    const flight = urlParams.get('flight');

    useEffect(() => {
        const fetchMandateSetupUrl = async () => {
            try {
                const response =  await setPaymentMandate({
                    flightId: flight || "",
                }).unwrap();

                if (response && response.data && response.data.redirectURL) {
                    window.location.href = response.data.redirectURL;
                }
            } catch (error) {
                console.error('Failed to fetch mandate setup URL:', error);
            }
        };

        fetchMandateSetupUrl();
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-12 space-y-4 md:py-24">
            <div className="flex flex-col items-center justify-center space-y-2">
                <h1>Setup Mandate for Recurring Payment</h1>
                <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed dark:text-gray-400">Redirecting to setup mandate....</p>
            </div>
        </div>
    );
}