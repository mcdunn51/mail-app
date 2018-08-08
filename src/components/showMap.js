import React from 'react';
import Popup from 'reactjs-popup';
import Radium from 'radium';

const ShowMap = () => {

    const style = {
        button:{
            backgroundColor: '#4CAF50',
            border: '1px solid #4CAF50',
            borderRadius: '4px',
            color: 'white',
            padding: '15px 32px',
            fontSize: '20px',
            cursor: 'pointer',
            transitionDuration: '0.4s',
            marginTop: '20px',
            ':hover': {
                boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)',
            }
        }
    }

    return(
        <Popup trigger={<button style={style.button} className="button"> Open Modal </button>}
            modal
            closeOnDocumentClick
        >
            <span>
                <img style={style.envelopeImg} src={require("../images/map.png")} alt="map-img" />
            </span>
        </Popup>
    );
}
   
export default Radium(ShowMap);