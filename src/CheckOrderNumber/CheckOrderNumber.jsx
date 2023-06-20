import { useState } from 'react';
import './CheckOrderNumber.css'
const CheckOrderNumber = ({ CloseCheck, orderNumber, cartItems }) => {
    const [orderDetails, setOrderDetails] = useState(null);
    const [error, setError] = useState(null);
    const [orderNumberInput, setOrderNumberInput] = useState(orderNumber);

    const handleOrderNumberChange = (event) => {
        setOrderNumberInput(event.target.value);
    };

    const handleCheckOrder = () => {


        if (orderNumberInput === orderNumber) {

            const order = {
                orderNumber: orderNumberInput,
                customerName: 'John Doe',
                items: cartItems,
            };
            setOrderDetails(order);
            setError(null);
        } else {
            setOrderDetails(null);
            setError('Invalid order number');
        }

    };

    return (
        <div className="CheckOrderNumber">
            <div className="CheckOrderHead">
                <button className="BackBtn" onClick={CloseCheck}>
                    Close
                </button>
            </div>
            <div className="CheckOrderMain">


                <div className="InputContainer">
                    <input
                        type="text"
                        className="CheckOrderNumberInput"
                        placeholder="Type the order number"
                        value={orderNumberInput}
                        onChange={handleOrderNumberChange}
                    />
                    <button className="CheckOrderButton" onClick={handleCheckOrder}>
                        Check
                    </button>

                </div>


                {orderDetails && (
                    <div className="OrderCardContainer">




                        {orderDetails.items.map((item, index) => (


                            <div key={index} className='OrderCard'>

                                <div className="OrderText">
                                    <div className="PaymentNumCont">
                                        <p>{index}</p>
                                    </div>
                                    <div className="PaymentTextCont">
                                        <div className="PaymentText">{item.dish.name}</div>
                                        <div className="PaymentText">
                                            Price: <span>{item.dish.price}$</span>
                                        </div>
                                        <div className="PaymentText">
                                            Size: <span>{item.dish.size}</span>
                                        </div>
                                        <div className="PaymentText">
                                            Number: <span>{item.count}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                )}
                {error && <p className="Error">{error}</p>}
            </div>
        </div>

    );
};

export default CheckOrderNumber;

