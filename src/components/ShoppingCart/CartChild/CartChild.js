import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { CountContext } from '../../../App';

const CartChild = (props) => {
    
    const[count, setCount] = useContext(CountContext)
    const { name, imageURL, price, _id } = props.pd;
    const [items, setItems] = useState(1)

    const newPrice = price * items
    
    const handleProductDecrease = () => {
        if(items > 1){
            const newItems = items - 1
            setItems(newItems)
        }
    }

    const handleProductIncrease = () => {
        const newItems = items + 1
        setItems(newItems);
    }

    return (
        <div className="d-flex align-items-center justify-content-between p-2 pe-4 mb-3" style={{boxShadow: '1px 1px 5px gray' }}>
            <img className="img-fluid" style={{ width: "100px" }} src={imageURL} alt="" />
            <h6>{name}</h6>
            <h6>${newPrice}</h6>
            <div className="d-flex align-items-center">
                <h4 onClick={handleProductDecrease} className="text-danger"><FontAwesomeIcon icon={faMinusSquare} /></h4>
                <h6 className="ms-2 me-2"><span>{items}</span></h6>
                <h4 onClick={handleProductIncrease} className="text-success"><FontAwesomeIcon icon={faPlusSquare} /></h4>
            </div>
        </div>
    );
};

export default CartChild;