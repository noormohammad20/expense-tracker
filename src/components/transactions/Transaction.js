import React from 'react'
import editImage from '../../assets/images/edit.svg'
import deleteImage from '../../assets/images/delete.svg'

const Transaction = ({ transaction }) => {
    const { name, amount, type } = transaction || {}
    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button className="link">
                    <img
                        className="icon"
                        alt='icon-img' src={editImage}
                    />
                </button>
                <button className="link">
                    <img
                        className="icon"
                        alt='icon-img' src={deleteImage}
                    />
                </button>
            </div>
        </li>
    )
}

export default Transaction