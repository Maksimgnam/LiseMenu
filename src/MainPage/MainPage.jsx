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



const MainPage = ({ }) => {
    const [openCart, setOpenCart] = useState(false)
    const [choose, setChoose] = useState(false);

    const [openDish, setOpenDish] = useState(false)
    const [openDrinks, setOpenDrinks] = useState(false)
    const [openMain, setOpenMain] = useState(true)
    const [openSnacks, setOpenSnacks] = useState(false)
    const [openDesserts, setOpenDesserts] = useState(false)
    const [openSoups, setOpenSoups] = useState(false)
    const [openSushiAndRolls, setOpenSushiAndRolls] = useState(false)

    const CartOpen = () => {
        setOpenCart(true)
    }
    const CartClose = () => {
        setOpenCart(false)
    }
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const OpenDishes = () => {
        setOpenDish(true)
        setOpenMain(false)
        setOpenDrinks(false)
        setOpenSnacks(false)
        setOpenDesserts(false)
        setOpenSoups(false)
        setOpenSushiAndRolls(false)


    }
    const OpenDrinks = () => {
        setOpenDrinks(true)
        setOpenDish(false)
        setOpenMain(false)
        setOpenSnacks(false)
        setOpenDesserts(false)
        setOpenSoups(false)
        setOpenSushiAndRolls(false)


    }
    const OpenSnacks = () => {
        setOpenSnacks(true)

        setOpenDrinks(false)
        setOpenDish(false)
        setOpenMain(false)
        setOpenDesserts(false)
        setOpenSoups(false)
        setOpenSushiAndRolls(false)

    }
    const OpenDesserts = () => {
        setOpenDesserts(true)
        setOpenSnacks(false)

        setOpenDrinks(false)
        setOpenDish(false)
        setOpenMain(false)
        setOpenSoups(false)
        setOpenSushiAndRolls(false)

    }
    const OpenSoups = () => {
        setOpenSoups(true)
        setOpenDesserts(false)
        setOpenSnacks(false)

        setOpenDrinks(false)
        setOpenDish(false)
        setOpenMain(false)
        setOpenSushiAndRolls(false)
    }
    const OpenSushiAndRolls = () => {
        setOpenSushiAndRolls(true)
        setOpenSoups(false)
        setOpenDesserts(false)
        setOpenSnacks(false)

        setOpenDrinks(false)
        setOpenDish(false)
        setOpenMain(false)
    }
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (dish, options, count) => {
        setCartItems((prevCartItems) => [
            ...prevCartItems,
            { dish: { ...dish, ...options }, count: parseInt(count) }
        ]);
        setChoose(true);
    };


    const removeFromCart = (index) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = [...prevCartItems];
            updatedCartItems.splice(index, 1);
            return updatedCartItems;
        });

    };

    return (
        <div className='MainPage'>
            <Header OpenDishes={OpenDishes} CartOpen={CartOpen} OpenDrinks={OpenDrinks} OpenSnacks={OpenSnacks} OpenDesserts={OpenDesserts} OpenSoups={OpenSoups} OpenSushiAndRolls={OpenSushiAndRolls} />

            <div className="MainPageContainer">
                {
                    openDish && (


                        < Dishes addToCart={addToCart} />
                    )


                }

                {
                    openDrinks && (
                        <Drinks />
                    )
                }
                {
                    openSnacks && (
                        <Snacks />

                    )
                }
                {
                    openDesserts && (
                        <Desserts />
                    )
                }
                {
                    openSoups && (
                        <Soups />
                    )
                }
                {
                    openSushiAndRolls && (
                        <SushiAndRolls />
                    )
                }



                {
                    openMain && (
                        <div className='MainPageText'>
                            <h3 className='MainPageH3' data-aos='fade-left'><span>L</span>iseMenu</h3>
                            <h4 className='MainPageH4' data-aos='fade-right'><span>M</span>enu for those who like delicious food</h4>
                            <button className='OrderBtn' data-aos='fade-up'>Order now</button>



                        </div>

                    )
                }







            </div>

            {
                openCart && (
                    <div className="Cart">
                        <button className='Close' onClick={CartClose}>-</button>
                        <div className="CardCartContainer">


                            {cartItems.map((item, index) => (
                                <div key={index} className="CartCard">
                                    <img src={item.dish.img} alt="" className="Image" />
                                    <div className="CartTexts">
                                        <div className="CartName">{item.dish.name}</div>
                                        <div className="CartPrice">Price: {item.dish.price}$</div>
                                        <div className="CartSize">Size: <span>{item.dish.size} </span> </div>
                                        <div className="CartSize">Size: <span>{item.count} </span> </div>




                                    </div>
                                    <button className="Remove" onClick={() => removeFromCart(index)}>
                                        Remove
                                    </button>

                                </div>
                            ))}

                        </div>
                    </div>


                )
            }

        </div>
    )
}
export default MainPage