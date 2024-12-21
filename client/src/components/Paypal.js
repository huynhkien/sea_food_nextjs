"use client";
import React, { useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { apiCreateOrder, apiRemoveAllCart } from '../api';
import Swal from 'sweetalert2';

const style = { "layout": "vertical" };

function createOrder(data, actions) {
    return actions.order.create({
        purchase_units: [{ amount: { currency_code: currency } }]
    });
}

function onApprove(data, actions) {
    return fetch("/my-server/capture-paypal-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID
        })
      })
      .then((response) => response.json())
      .then((orderData) => {
            const name = orderData.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
      });
}

const ButtonWrapper = ({ showSpinner, currency, amount, payload, setIsSuccess }) => {
    const [{ isPending, options }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: 'resetOptions',
            value: {
                ...options,
                currency: currency
            }
        });
    }, [currency, showSpinner]);
    const handleSaveOrder = async() =>{
        const response = await apiCreateOrder({...payload});
        if(response.success){
            const remove = await apiRemoveAllCart();
            setIsSuccess(true);
            setTimeout(() => {
                Swal.fire('You have placed your order successfully', 'Orders will be shipped soon', 'success');
            }, 500)
        }
    }

    return (
        <>
            {(showSpinner && isPending) && <div className="spinner"></div>}
            <PayPalButtons
                createOrder={(data, actions) => actions.order.create({
                    purchase_units: [
                        {amount: {currency_code: currency, value: amount}}
                    ]
                }).then(orderId =>orderId)}
                onApprove={(data, actions) => actions.order.capture().then(async(response) => {
                    if(response.status === 'COMPLETED'){
                        handleSaveOrder()
                    }
                })}
                forceReRender={[style, currency, amount]}
                fundingSource={undefined}
                style={style}
                disabled={false}
            />
        </>
    );
};

export default function Paypal({ amount, payload, setIsSuccess}) {
    return (
        <div style={{ maxBlockSize: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD" }}>
                <ButtonWrapper  setIsSuccess={setIsSuccess} payload ={payload} currency={'USD'} amount={amount} showSpinner={false} />
            </PayPalScriptProvider>
        </div>
    );
}
