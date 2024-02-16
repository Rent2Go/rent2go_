import React from 'react'
import './overlayLoader.css';
import { useSelector } from 'react-redux';

type Props = {}

const OverlayLoaderLoad = (props: Props) => {
    const loadingState = useSelector((state:any)=> state.loading) 
   
    
    return (
       <>
              <div className="overlay">
                <div className="overlay__inner">
                    <div className="overlay__content"><span className="spinner"></span></div>
                </div>
            </div>
        </>
    )
}

export default OverlayLoaderLoad