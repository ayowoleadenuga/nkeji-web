import CheckoutForm from "@nkeji-web/components/FlightSearch/components/stripe/checkout-form";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";

interface StripePaymentProps {
    clientSecret: string;
    successURL?: string;
}

export default function StripePayment({ clientSecret, successURL = 'payment-success'}: StripePaymentProps) {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

    if (!publishableKey) {
        throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
    }

    const stripePromise: Promise<Stripe | null> = loadStripe(publishableKey);

    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm successURL={successURL}/>
        </Elements>
    );
}
