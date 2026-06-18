import React, { useState } from 'react'

const ProductQuantity = () => {
    const [quantity, setQuantity] = useState(1)

    const product = "Laptop"
    const Price = 50000
    const totalAMT = Price * quantity
  return (
    <>
    <div>Product Quantity</div>
    <div className="container">
        <p>Product : {product}</p>
        <p>Price : {Price}</p>

        <button>-</button>
        {quantity}
        <button>+</button>
        <p>Total AMount  : {totalAMT}</p>
    </div>
    </>
  )
}

export default ProductQuantity