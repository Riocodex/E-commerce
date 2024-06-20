import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            An e-commerce website serves as a digital marketplace where businesses and consumers engage in the exchange of goods and services through online transactions. This virtual platform eliminates geographical constraints, enabling businesses to present their products or services to a diverse and widespread audience. Customers, in turn, gain the convenience of browsing through a comprehensive catalog, selecting desired items, and completing transactions without the need for physical presence.
            </p>
            <p>
            In essence, an e-commerce website provides a dynamic and interactive interface for buyers and sellers, fostering a seamless online shopping experience. The website typically features detailed product or service listings, accompanied by images, descriptions, and pricing information. Users can navigate through various categories and explore a wide array of offerings from the comfort of their own devices, ranging from traditional computers to mobile devices like smartphones and tablets.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox