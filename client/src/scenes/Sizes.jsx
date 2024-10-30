import React from 'react'

import image from "../assets/sizes.png";

const Sizes = () => {
return (
    <div style={{ textAlign: 'center', margin: '80px auto 0' }}>
            <img 
                    src={image} 
                    alt="Sizes" 
                    style={{ 
                        display: 'block', 
                        margin: '0 auto', 
                        maxWidth: '80%',
                        height: 'auto' 
                    }} 
            />
    </div>
)
}

export default Sizes;