import './CheckOrderNumber.css'
const CheckOrderNumber = ({ CloseCheck }) => {
    return (
        <div className="CheckOrderNumber">
            <div className="CheckOrderNumberhead">
                <button className='BackBtn' onClick={CloseCheck}>Back</button>

            </div>
            <div className="CheckOrderNumberMain">
                <input type="text" className='CheckOrderNumberInput' placeholder='Type the order number' />

            </div>
        </div>
    )
}
export default CheckOrderNumber;
