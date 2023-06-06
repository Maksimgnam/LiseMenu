import './Soups.css';
import { useState } from 'react';
import { useEffect } from 'react';
import choosen from '../Dishes/DishesImage/choosen.png';
import AOS from 'aos'
import 'aos/dist/aos.css'
const Soups = () => {
    const Cards = [
        { id: 1, name: 'Chicken Enchilada', price: 17, img: 'https://www.eatingwell.com/thmb/QiiPNpbhdZUieiex5RXCx9Q2ils=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6886647-b58f1db1fd94454fa2033d95df8446fe.jpg' },
        { id: 2, name: 'Beer-Cheese', price: 25, img: 'https://www.eatingwell.com/thmb/71sqN3n1GzFvRA7_FCZ4UXUYrF0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/beer-cheese-soup-1x1-80-1-782d15e872084da3b8255ce75086449e.jpg' },
        { id: 3, name: 'Zuppa Toscana', price: 26, img: 'https://www.eatingwell.com/thmb/FFxN3v6iE6Mjo6JnP4rTrFG-UDc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5746901-1ecb5e8ba7414017804f4dc327b902ea.jpg' },
        { id: 4, name: 'Minestra Maritata', price: 23, img: 'https://www.eatingwell.com/thmb/x_qoQvxI60SNBSOIYWb8y-9dq6U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-italian-wedding-soup-960x960-1-c1e27e98b4bb409e9a6e6564bbd0e2c7.jpg' },
        { id: 5, name: 'Honeynut Squash', price: 24, img: 'https://www.eatingwell.com/thmb/gMY4IRXCykLAr3NgRSpwtS0Xaew=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/honey-nut-squash-soup-0b59a83295604d80b400932d333d7c2b.jpg' },
        { id: 6, name: 'Hearty Minestrone', price: 15, img: 'https://www.eatingwell.com/thmb/IGpBxvgxKvNwJU2Fad7pbKXiZio=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7557438-877dc500f3b74ba2812c4fba34aec122.jpg' },
        { id: 7, name: 'Tomato Florentine', price: 20, img: 'https://www.eatingwell.com/thmb/VCNdWg7szsdh58lh0O91GEVQmWU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tomato-Florentine-Soup-Beauty-1x1-BG-3558-721115e9691a4b9cb21d82a6df6ebd63.jpg' },
        { id: 8, name: 'Stuffed Pepper', price: 29, img: 'https://www.eatingwell.com/thmb/3gsUN2vaRZpH6e2fMwLcgurYB38=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/stuffed-pepper-soup-98fcaabf25a3401c9d00536cf5843895.jpg' },
        { id: 9, name: 'Veggistrone', price: 25, img: 'https://www.eatingwell.com/thmb/vGdNrtjHNzUn__zsEw8NR16kESM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3935697-9bb3888fe18e405993baa25664b1db6a.jpg' },


    ];

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])



    const [value, setValue] = useState(Array(Cards.length).fill(0));
    const [choose, setChoose] = useState(Array(Cards.length).fill(false));
    const [selectedButtons, setSelectedButtons] = useState(Array(Cards.length).fill(-1));


    const BtnClick = (index, cardIndex) => {
        setSelectedButtons((prevSelectedButtons) => {
            const updatedSelectedButtons = [...prevSelectedButtons];
            updatedSelectedButtons[cardIndex] = index;
            return updatedSelectedButtons;
        });

    };

    const Add = (index) => {
        setValue((prevValues) => {
            const updatedValues = [...prevValues];
            updatedValues[index] = updatedValues[index] + 1;
            return updatedValues;
        });

    };

    const Minus = (index) => {
        setValue((prevValues) => {
            const updatedValues = [...prevValues];
            updatedValues[index] = updatedValues[index] - 1;
            return updatedValues;
        });

    };
    const ShowChoosen = (cardIndex) => {
        setChoose((prevChoose) => {
            const updatedChoose = [...prevChoose];
            updatedChoose[cardIndex] = true;
            return updatedChoose;
        });
    };




    return (
        <div className="Soups">
            <h3 className='Main__text'><span>S</span>oups</h3>
            <div className="CardsContainer">
                {Cards.map((dishcard, cardIndex) => (
                    <div key={dishcard.id} className='Card' onClick={() => ShowChoosen(cardIndex)} data-aos='fade-right'>
                        <div className="CardImage">

                            <img src={dishcard.img} alt="" className='CardImg' />
                        </div>
                        <div className="CardText">
                            <h3 className='CardName' data-aos='fade-down-left'>{dishcard.name}</h3>


                            <p className='Price'>Price: <span>{dishcard.price}$</span></p>



                            <div className="CardPortion">

                                <button
                                    className={selectedButtons[cardIndex] === 0 ? 'PortionBtnRed' : 'PortionBtn'}
                                    onClick={() => BtnClick(0, cardIndex)}
                                >
                                    Small
                                </button>
                                <button
                                    className={selectedButtons[cardIndex] === 1 ? 'PortionBtnRed' : 'PortionBtn'}
                                    onClick={() => BtnClick(1, cardIndex)}
                                >
                                    Standart
                                </button>
                            </div>
                            <div className="CardCount">
                                <div className="CardCountBtn plus" onClick={() => Add(cardIndex)}><span>+</span></div>
                                <div className="CardCountText">{value[cardIndex]}</div>
                                <div className="CardCountBtn" onClick={() => Minus(cardIndex)}><span>-</span></div>
                            </div>
                            {
                                choose[cardIndex] && (
                                    <button className='Choosen  ChoosenDrinks'>
                                        <img className='choose' src={choosen} alt="" />

                                    </button>

                                )
                            }

                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Soups;
