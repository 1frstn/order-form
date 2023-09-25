import React, { useState } from 'react'

const FoodOrderForm = () => {
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('');
    const [order,setOrder] = useState('');
  return (
    <form action="order">
        <label htmlFor="name">
            Name: <input 
                    type="text" 
                    id='name' 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
        </label>
        <label htmlFor="phone">
            Phone: <input 
                    type="text" 
                    id='phone' 
                    value={[phone]}
                    onChange={(e)=>setPhone(e.target.value)}
                    />
        </label>
        <label htmlFor="address">
            Address: <input 
                    type="text" 
                    id='address' 
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    />
        </label>
        <label htmlFor="order">
            Order: <input 
                    type="text" 
                    id='order' 
                    value={order}
                    onChange={(e)=>setOrder(e.target.value)}
                    />
        </label>
        <button type='submit' >Submit order.</button>
    </form>
  )
}

export default FoodOrderForm