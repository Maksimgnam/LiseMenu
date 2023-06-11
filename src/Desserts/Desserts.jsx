import './Desserts.css';
import { useState } from 'react';
import { useEffect } from 'react';
import choosen from '../Dishes/DishesImage/choosen.png';
import AOS from 'aos'
import 'aos/dist/aos.css'
const Desserts = ({ addToCart }) => {
    const Cards = [
        { id: 1, name: 'Crème Brûlée', price: 24, img: 'https://www.recipetineats.com/wp-content/uploads/2016/09/Creme-Brulee_8-SQ.jpg' },
        { id: 2, name: 'Raspberry Clafoutis', price: 27, img: 'https://www.thespruceeats.com/thmb/0qACteGGBuxO6XYCYeG06Ts8tnc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-171298664-5847229e3df78c0230c0648d.jpg' },
        { id: 3, name: 'Crêpes Suzette', price: 23, img: 'https://cheapandcheerfulcooking.com/wp-content/uploads/2022/05/vegan-crepes-suzette-1.jpg' },
        { id: 4, name: 'Spring Millefeuille', price: 29, img: 'https://ohmydish.com/wp-content/uploads/2016/09/Strawberry-mille-feuille.jpg' },
        { id: 5, name: 'Strawberry fool', price: 32, img: 'data:image/jpeg;base64,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' },
        { id: 6, name: 'Syllabub', price: 17, img: 'https://images.notquitenigella.com/images/passionfruit-syllabub/__passionfruit-syllabub-recipe-4.jpg' },
        { id: 7, name: 'Junior cheesecake', price: 20, img: 'data:image/jpeg;base64,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' },
        { id: 8, name: 'Pican pie', price: 27, img: 'https://assets.epicurious.com/photos/59bc16e71782591a4bc6659a/4:3/w_4592,h_3444,c_limit/OLD-FASHIONED-PECAN-PIE-07092017.jpg' },
        { id: 9, name: 'Christmas pudding', price: 22, img: 'https://www.thespruceeats.com/thmb/chzEuddPDEG1BCKcKFM0DnndNGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/traditional-christmas-pudding-recipe-435070-hero-01-2589947344294cd0981142bebe320ef7.jpg' },



    ];

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])



    const [value, setValue] = useState(Array(Cards.length).fill(1));
    const [selectedOptions, setSelectedOptions] = useState(Array(Cards.length).fill({ size: '', priceModifier: 0, countModifier: 0 }));


    const BtnClick = (size, cardIndex) => {
        setSelectedOptions((prevSelectedOptions) => {
            const updatedSelectedOptions = [...prevSelectedOptions];
            let priceModifier = 0;
            if (size === 'small') {
                priceModifier = -7;
            } else if (size === 'bigger') {
                priceModifier = 20;
            }
            updatedSelectedOptions[cardIndex] = { ...updatedSelectedOptions[cardIndex], size, priceModifier };
            return updatedSelectedOptions;
        });
    };




    const Add = (index) => {
        setValue((prevValue) => {
            const updatedValue = [...prevValue];
            updatedValue[index] += 1;
            return updatedValue;
        });
    };

    const Minus = (index) => {
        setValue((prevValue) => {
            const updatedValue = [...prevValue];
            updatedValue[index] = Math.max(updatedValue[index] - 1, 0);
            return updatedValue;
        });
    };


    return (
        <div className='Desserts'>
            <h3 className='Main__text'><span>D</span>esserts</h3>
            <div className="CardsContainer">
                {Cards.map((dishcard, cardIndex) => (
                    <div key={dishcard.id} className='Card' data-aos='fade-right'>
                        <div className="CardImage">

                            <img src={dishcard.img} alt="" className='CardImg' />
                        </div>
                        <div className="CardText">
                            <h3 className='CardName' data-aos='fade-down-left'>{dishcard.name}</h3>


                            <p className='Price'>Price: <span>{dishcard.price}$</span></p>


                            <div className="CardPortion PortionDrinks">
                                <button
                                    className={selectedOptions[cardIndex]?.size === 'small' ? 'PortionBtnRed' : 'PortionBtn'}
                                    onClick={() => BtnClick('small', cardIndex)}
                                >
                                    Small
                                </button>
                                <button
                                    className={selectedOptions[cardIndex]?.size === 'standard' ? 'PortionBtnRed' : 'PortionBtn'}
                                    onClick={() => BtnClick('standard', cardIndex)}
                                >
                                    Standard
                                </button>
                                <button
                                    className={selectedOptions[cardIndex]?.size === 'bigger' ? 'PortionBtnRed' : 'PortionBtn'}
                                    onClick={() => BtnClick('bigger', cardIndex)}
                                >
                                    Bigger
                                </button>
                            </div>


                            <div className="CardCount">
                                <div
                                    className='CardCountBtn'
                                    onClick={() => Minus(cardIndex)}
                                >
                                    -
                                </div>
                                <input
                                    type="text"
                                    className="CardCountText"
                                    value={value[cardIndex]}
                                    onChange={(e) => setValue((prevValue) => {
                                        const updatedValue = [...prevValue];
                                        updatedValue[cardIndex] = parseInt(e.target.value) || 0;
                                        return updatedValue;
                                    })}
                                />
                                <div
                                    className='CardCountBtn plus'
                                    onClick={() => Add(cardIndex)}
                                >
                                    +
                                </div>
                            </div>



                        </div>
                        <button
                            className='add'
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart(dishcard, selectedOptions[cardIndex], value[cardIndex]);
                            }}
                        >
                            <span>A</span>dd
                        </button>



                    </div>
                ))}
            </div>

        </div >
    )
}
export default Desserts;
