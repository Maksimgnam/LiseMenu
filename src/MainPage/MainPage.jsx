import './MainPage.css';
import Header from '../Header/Header';

import { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Dishes from '../Dishes/Dishes';
import Drinks from '../Drinks/Drinks';
import Snacks from '../Snacks/Snacks';




const MainPage = () => {
    const [openCart, setOpenCart] = useState(false)
    const [openDish, setOpenDish] = useState(false)
    const [openDrinks, setOpenDrinks] = useState(false)
    const [openMain, setOpenMain] = useState(true)
    const [openSnacks, setOpenSnacks] = useState(false)
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

    }
    const OpenDrinks = () => {
        setOpenDrinks(true)
        setOpenDish(false)
        setOpenMain(false)
        setOpenSnacks(false)

    }
    const OpenSnacks = () => {
        setOpenSnacks(true)

        setOpenDrinks(false)
        setOpenDish(false)
        setOpenMain(false)
    }

    return (
        <div className='MainPage'>
            <Header OpenDishes={OpenDishes} CartOpen={CartOpen} OpenDrinks={OpenDrinks} OpenSnacks={OpenSnacks} />

            <div className="MainPageContainer">
                {
                    openDish && (


                        < Dishes />
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
                    </div>


                )
            }

        </div>
    )
}
export default MainPage