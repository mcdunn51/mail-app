import React from 'react';
import Radium, { Style } from 'radium';

const NoMail =  (props) => { 

        const style = {
            noMailWrapper: {
                width:'100%',
                height: '100%',
                border: '10px solid #4d8cf2',
                borderRadius: '5px',
                backgroundColor: '#4d8cf2',
                padding: '10%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            h1: {
                color: 'white',
                textAlign: 'centre',
            },
        };
    
        return (
            <div style={style.noMailWrapper}>
                <h1 style={style.h1}>You currently have no mail to collect</h1>
                      
                <Style rules={{
                    body: {
                        padding: '10%',
                        boxSizing: 'border-box',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    },
                }}
                />
            </div>
        );
    };
    
export default Radium(NoMail);