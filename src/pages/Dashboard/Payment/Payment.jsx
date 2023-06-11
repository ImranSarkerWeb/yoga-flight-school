import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";
import { loadStripe } from "@stripe/stripe-js";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <h2 className="text-3xl "> Please Pay Now</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
