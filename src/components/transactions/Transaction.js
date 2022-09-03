import React from 'react'
import editImage from '../../assets/images/edit.svg'
import deleteImage from '../../assets/images/delete.svg'
const Transaction = () => {
    return (
        <li className="transaction income">
            <p>Earned this month</p>
            <div className="right">
                <p>৳ 100</p>
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