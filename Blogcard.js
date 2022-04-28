import React from 'react';
import './Blogcard.css'

export default function Blogcard()
{
    return(
            <>
                  <div className='card'>
                    <div className="image">
                        <img src="https://images.pexels.com/photos/5732693/pexels-photo-5732693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="300x"/>
                    </div>
                    <div className="text">
                        <h1>Blog Heading</h1>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, suscipit enim dicta cumque aliquam deleniti at. Quis, obcaecati tempora! Nisi!
                        </p>
                    </div>
                    </div>
            </>

    )
};

