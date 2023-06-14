import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect } from "react";
import Swal from "sweetalert2";

const CheckOutForm = ({ singleClass}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = UseAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const price=singleClass?.price;
  // console.log(singleClass)

  useEffect(() => {
    if (singleClass?.price > 0) {
      axiosSecure.post("/create-payment-intent", {price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }

        // axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        //   setClientSecret(res.data.clientSecret);
        // });

  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        image: singleClass?.image,
        transactionId: paymentIntent?.id,
        price:singleClass?.price,
        date: new Date(),
        selectedClass: singleClass?._id,
        enrolledClass: singleClass?.classId,
      };

      axiosSecure.post("/payments", payment).then((res) => {
        axiosSecure
          .patch(`/totalStudent/${singleClass?.classId}`)
          .then((res) => {
            console.log(res.data);
          });
        if (res.data.insertResult.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Payment successful..',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
    }
  };
  return (
    <div>
      <form className="m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary text-white font-bold font-popins mt-3"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-600">{cardError}</p>
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;
