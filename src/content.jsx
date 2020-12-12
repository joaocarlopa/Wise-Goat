import React from 'react';
import Img from './img/bode.jpg'
import './content.css';


export default props => {
    return (
        <div className='content'>
            <div className='container'>
                <a href='./' className='wise'>Wise</a><br/><a href='./' className='goat'>Goat</a>
                <form method="">
                    <button className='btn'>Pedir conselho</button>
                </form>
                <img src={Img} className='img' alt=''/>
                
            </div>
        
            

        </div>
    )
}