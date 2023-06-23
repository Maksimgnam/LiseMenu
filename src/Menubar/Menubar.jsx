import './Menubar.css'
const Menubar = ({ OpenDishes, CartOpen, OpenDrinks, OpenSnacks, OpenDesserts, OpenSoups, OpenSushiAndRolls }) => {
    return (
        <div className="Menubar">
            <a data-aos='fade-left' className='MenubarA' onClick={OpenDishes}><span>D</span>ishes</a>

            <a data-aos='fade-left' className='MenubarA' onClick={OpenDrinks}><span>D</span>rinks</a>
            <a data-aos='fade-right' className='MenubarA' onClick={OpenSnacks}><span>S</span>nacks</a>
            <a data-aos='fade-left' className='MenubarA' onClick={OpenDesserts}><span>D</span>esserts</a>
            <a data-aos='fade-right' className='MenubarA' onClick={OpenSoups}><span>S</span>oups</a>
            <a data-aos='fade-left' className='MenubarA' onClick={OpenSushiAndRolls}><span>S</span>ushi and Rolls</a>



        </div>
    )
}
export default Menubar;