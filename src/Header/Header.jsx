import './Header.css';
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import cart from './MainPageImage/cart.png'




const Header = ({ OpenDishes, CartOpen, OpenDrinks, OpenSnacks, OpenDesserts, OpenSoups, OpenSushiAndRolls, OpenMainPage, OpenCheck }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div className='Header'>
            <div className="Logo" data-aos='fade-right' onClick={OpenMainPage}><span>L</span>iseMenu</div>
            <nav className="navbar">
                <a data-aos='fade-left' onClick={OpenDishes}><span>D</span>ishes</a>

                <a data-aos='fade-left' onClick={OpenDrinks}><span>D</span>rinks</a>
                <a data-aos='fade-right' onClick={OpenSnacks}><span>S</span>nacks</a>
                <a data-aos='fade-left' onClick={OpenDesserts}><span>D</span>esserts</a>
                <a data-aos='fade-right' onClick={OpenSoups}><span>S</span>oups</a>
                <a data-aos='fade-left' onClick={OpenSushiAndRolls}><span>S</span>ushi and Rolls</a>

            </nav>

            <div className="CartBtn" onClick={CartOpen} data-aos='fade-left'>
                <img className='CartImage' src={cart} alt="" />
            </div>
            <button className='Check' onClick={OpenCheck}>Check</button>




        </div>
    )
}
export default Header