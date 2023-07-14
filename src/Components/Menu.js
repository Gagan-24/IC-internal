import React from 'react'

const Menu = () => {
  return (
    <>
    <h1>Menu</h1>
    <div className='container'>
    <div className="row">
            <div className="col">
            <img src="https://static.toiimg.com/thumb/58895943.cms?imgsize=122037&width=800&height=800" 
                                alt="" height="110px" width="150px">
            </img>
            <h3>Greek salad</h3>
            <p>₹150.00</p>
            </div>
            <div className="col">
            <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZXNlJTIwYnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80" 
                                alt="" height="110px" width="150px">
            </img>
            <h3>Cheese Burger</h3>
            <p>₹200.00</p>
            </div>
            <div className="col">
            <img src="https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/w_1000,h_684,c_limit/the-ultimate-hamburger.jpg" 
                                alt="" height="110px" width="150px">
            </img>
            <h3>Ham Burger</h3>
            <p>₹379.00</p>
            </div>
            <div className="col">
            <img src="https://th.bing.com/th/id/OIP.STDLBK_BpBD-_29gxKA5cQHaLG?pid=ImgDet&rs=1" 
                                alt="" height="110px" width="150px">
            </img>
            <h3>Veg Burger</h3>
            <p>₹129.00</p>
            </div>
    </div>
    </div>
    
    </>
  );
};

export default Menu;
