import React, {Fragment } from 'react';
import Radium, { Style } from 'radium';
import ShowMap from './showMap';

const NoMail =  () => { 

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
            <Fragment>
                <div style={style.noMailWrapper}>
                    <h1 style={style.h1}>You currently have no mail to collect</h1>

                    <Style rules={{
                        body: {
                            paddingTop: '10%',
                            paddingLeft: '10%',
                            paddingRight: '10%',
                            boxSizing: 'border-box',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            textAlign: 'center',
                            height:'auto',
                        },
                    }}
                    />
                </div>
                <ShowMap />
            </Fragment>
        );
    };
    
export default Radium(NoMail);