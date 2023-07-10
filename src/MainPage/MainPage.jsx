import './MainPage.css';
import Header from '../Header/Header';

import { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Dishes from '../Dishes/Dishes';
import Drinks from '../Drinks/Drinks';
import Snacks from '../Snacks/Snacks';
import Desserts from '../Desserts/Desserts';
import Soups from '../Soups/Soups';
import SushiAndRolls from '../SushiAndRolls/SushiAndRolls';
import CheckOrderNumber from '../CheckOrderNumber/CheckOrderNumber';

import emailjs from 'emailjs-com';
import Menubar from '../Menubar/Menubar';




const MainPage = () => {
    const [openCart, setOpenCart] = useState(false)


    const [openDish, setOpenDish] = useState(false)
    const [openDrinks, setOpenDrinks] = useState(false)
    const [openMain, setOpenMain] = useState(true)
    const [openSnacks, setOpenSnacks] = useState(false)
    const [openDesserts, setOpenDesserts] = useState(false)
    const [openSoups, setOpenSoups] = useState(false)
    const [openSushiAndRolls, setOpenSushiAndRolls] = useState(false)
    const [openPayment, setOpenPayment] = useState(false)
    const [openHeader, setOpenHeader] = useState(true)
    const [OrderNumber, setOrderNumber] = useState('');
    const [openCheckOrder, setOpenCheckOrder] = useState(false);
    const [orderNumberInput, setOrderNumberInput] = useState('');
    const [openMenuBar, setOpenMenuBar] = useState(false)






    const CartOpen = () => {
        setOpenCart(true)

    }
    const CartClose = () => {
        setOpenCart(false)

    }
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const OpenMainPage = () => {
        setOpenMain(true)
        setOpenSushiAndRolls(false)
        setOpenSoups(false)
        setOpenDesserts(false)
        setOpenSnacks(false)

        setOpenDrinks(false)
        setOpenDish(false)
        setOpenMenuBar(false)



    }
    const OpenDishes = () => {
        setOpenDish(true)
        setOpenMain(false)
        setOpenDrinks(false)
        setOpenSnacks(false)
        setOpenDesserts(false)
        setOpenSoups(false)
        setOpenSushiAndRolls(false)
        setOpenMenuBar(false)


    }
    const OpenDrinks = () => {
        setOpenDrinks(true)
        setOpenDish(false)
        setOpenMain(false)
        setOpenSnacks(false)
        setOpenDesserts(false)
        setOpenSoups(false)
        setOpenSushiAndRolls(false)
        setOpenMenuBar(false)


    }
    const OpenSnacks = () => {
        setOpenSnacks(true)

        setOpenDrinks(false)
        setOpenDish(false)
        setOpenMain(false)
        setOpenDesserts(false)
        setOpenSoups(false)
        setOpenSushiAndRolls(false)
        setOpenMenuBar(false)

    }
    const OpenDesserts = () => {
        setOpenDesserts(true)
        setOpenSnacks(false)

        setOpenDrinks(false)
        setOpenDish(false)
        setOpenMain(false)
        setOpenSoups(false)
        setOpenSushiAndRolls(false)
        setOpenMenuBar(false)

    }
    const OpenSoups = () => {
        setOpenSoups(true)
        setOpenDesserts(false)
        setOpenSnacks(false)

        setOpenDrinks(false)
        setOpenDish(false)
        setOpenMain(false)
        setOpenSushiAndRolls(false)
        setOpenMenuBar(false)
    }
    const OpenSushiAndRolls = () => {
        setOpenSushiAndRolls(true)
        setOpenSoups(false)
        setOpenDesserts(false)
        setOpenSnacks(false)

        setOpenDrinks(false)
        setOpenDish(false)
        setOpenMain(false)
        setOpenMenuBar(false)
    }
    const OpenPayment = () => {
        const OrderNumber = Array.from({ length: 1 }, () => Math.floor(Math.random() * 10000000));

        setOrderNumber(OrderNumber)

        setOpenPayment(true)
        setOpenDish(false)
        setOpenMain(false)
        setOpenDrinks(false)
        setOpenSnacks(false)
        setOpenDesserts(false)
        setOpenSoups(false)
        setOpenSushiAndRolls(false)
        setOpenCart(false)
        setOpenHeader(false)
        setOpenMenuBar(false)

    }
    const ClosePayment = () => {
        setOpenPayment(false)
        setOpenHeader(true)
        setOpenMain(true)
        setOpenMenuBar(false)
    }
    const OpenCheck = () => {
        setOpenCheckOrder(true)
        setOpenHeader(false)
        setOpenSushiAndRolls(false)
        setOpenSoups(false)
        setOpenDesserts(false)
        setOpenSnacks(false)

        setOpenDrinks(false)
        setOpenDish(false)
        setOpenMain(false)
        setOpenMenuBar(false)
    }
    const CloseCheck = () => {
        setOpenCheckOrder(false)
        setOpenMain(true)
        setOpenHeader(true)
        setOpenMenuBar(false)

    }
    const OpenMenubar = () => {
        setOpenMenuBar(true)
        setOpenMain(false)

        setOpenPayment(false)
        setOpenDish(false)

        setOpenDrinks(false)
        setOpenSnacks(false)
        setOpenDesserts(false)
        setOpenSoups(false)
        setOpenSushiAndRolls(false)
        setOpenCart(false)


    }
    const handleOrderNumberChange = (event) => {
        setOrderNumberInput(event.target.value);
    };

    const SendNumber = () => {
        const items = cartItems.map((item, index) => ({
            index: index + 1,
            name: item.dish.name,
            price: item.dish.price,
            size: item.dish.size,
            count: item.count,
        }));
        const itemsName = items
            .map((item) => `${item.index}. ${item.name} - $${item.price} - Size: ${item.size} - Count: ${item.count}`)
            .join('\n');
        const templateParams = {
            OrderNumber,
            items: itemsName,
            TotalPrice
        };

        emailjs.send('service_ik8ujp7', 'template_e1mg31t', templateParams, 'XIKKVFGQTwbBsdkZH')
            .then((response) => {
                console.log('Email sent successfully!', response.text);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

    const [cartItems, setCartItems] = useState([]);
    const addToCart = (dish, options, count) => {
        const modifiedPrice = (dish.price + options.priceModifier) * count;
        setCartItems((prevCartItems) => [
            ...prevCartItems,
            { dish: { ...dish, price: modifiedPrice, ...options }, count: parseInt(count) }
        ]);
    };





    const removeFromCart = (index) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = [...prevCartItems];
            updatedCartItems.splice(index, 1);
            return updatedCartItems;
        });

    };
    let TotalPrice = cartItems.reduce((acc, current) => acc + current.dish.price, 0);





    return (

        <div className='MainPage'>
            {
                openHeader && (
                    <Header OpenDishes={OpenDishes} CartOpen={CartOpen} OpenDrinks={OpenDrinks} OpenSnacks={OpenSnacks} OpenDesserts={OpenDesserts} OpenSoups={OpenSoups} OpenSushiAndRolls={OpenSushiAndRolls} OpenMainPage={OpenMainPage} OpenCheck={OpenCheck} OpenMenubar={OpenMenubar} />


                )
            }


            <div className="MainPageContainer">
                {
                    openDish && (


                        < Dishes addToCart={addToCart} />
                    )


                }

                {
                    openDrinks && (
                        <Drinks addToCart={addToCart} />
                    )
                }
                {
                    openSnacks && (
                        <Snacks addToCart={addToCart} />

                    )
                }
                {
                    openDesserts && (
                        <Desserts addToCart={addToCart} />
                    )
                }
                {
                    openSoups && (
                        <Soups addToCart={addToCart} />
                    )
                }
                {
                    openSushiAndRolls && (
                        <SushiAndRolls addToCart={addToCart} />
                    )
                }



                {
                    openMain && (
                        <div className='MainPageText'>
                            <h3 className='MainPageH3' data-aos='fade-left'><span>L</span>iseMenu</h3>
                            <h4 className='MainPageH4' data-aos='fade-right'><span>M</span>enu for those who like delicious food</h4>
                            <button className='OrderBtn' onClick={OpenDishes}>Order now</button>



                        </div>

                    )
                }
                {
                    openCheckOrder && (
                        <CheckOrderNumber CloseCheck={CloseCheck} orderNumber={OrderNumber} cartItems={cartItems} />

                    )
                }
                {
                    openPayment && (
                        <div className="PaymentContainer">
                            <div className="PaymentHead">
                                <button className="ClosePayment" onClick={ClosePayment}>-</button>

                            </div>

                            <div className='OrderNumber'> <p className='OrderNumberP'>Order number</p> <span>{OrderNumber}</span></div>
                            <div className='OrderTextContainer' >
                                {cartItems.map((item, index) => (
                                    <div key={index}  >


                                        <div className="OrderText">
                                            <div className="PaymentNumCont">
                                                <p >{index}</p>
                                            </div>
                                            <div className="PaymentTextCont">

                                                <div className="PaymentText">{item.dish.name}</div>
                                                <div className="PaymentText">Price: <span>{item.dish.price}$</span></div>
                                                <div className="PaymentText">Size: <span>{item.dish.size} </span> </div>
                                                <div className="PaymentText">Number: <span>{item.count} </span> </div>

                                            </div>


                                        </div>


                                    </div>
                                ))}
                            </div>
                            <div className="PaymentDownContainer">
                                <p className='PaymentTotalPrice'> Total price: <span>{TotalPrice}$</span></p>
                                <button className='PayBtn' onClick={SendNumber}>Pay</button>
                            </div>
                        </div>
                    )
                }
                {
                    openMenuBar && (
                        <Menubar OpenDishes={OpenDishes} CartOpen={CartOpen} OpenDrinks={OpenDrinks} OpenSnacks={OpenSnacks} OpenDesserts={OpenDesserts} OpenSoups={OpenSoups} OpenSushiAndRolls={OpenSushiAndRolls} />

                    )
                }









            </div>

            {
                openCart && (
                    <div className="Cart">
                        <button className='Close' onClick={CartClose} >-</button>
                        <div className="CardCartContainer">


                            {cartItems.map((item, index) => (
                                <div key={index} className="CartCard">
                                    <img src={item.dish.img} alt="" className="Image" />
                                    <div className="CartTexts">
                                        <div className="CartName">{item.dish.name}</div>
                                        <div className="CartPrice">Price: <span>{item.dish.price}$</span></div>
                                        <div className="CartSize">Size: <span>{item.dish.size} </span> </div>
                                        <div className="CartSize">Amount: <span>{item.count} </span> </div>




                                    </div>
                                    <button className="Remove" onClick={() => removeFromCart(index)}>
                                        Remove
                                    </button>

                                </div>
                            ))}

                        </div>
                        <div className="CartDownContainer">



                            <p className='TotalSum' data-aos='fade-left' >Total: <span >{TotalPrice}$</span></p>
                            <button className='Order' onClick={OpenPayment}>Order</button>
                        </div>
                    </div>


                )
            }



        </div >
    )
}
export default MainPage