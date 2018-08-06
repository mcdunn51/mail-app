import React from 'react';
import Radium, { Style } from 'radium';

const LogInContainer =  (props) => {

    const style = {
        formWrapper:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100%',
        },
        form: {
            width: '30%',
            border: '10px solid green',
            padding: '10px',
            display: 'flex',
            justifyContent: 'centre',
            flexDirection: 'column',
            borderRadius: '5px',
            '@media screen and (max-width: 600px)': {
                width: '85%',
            },
            '@media screen and (max-height: 400px) and (max-width: 700px)': {
                width: '85%',
            }
        },
        envelopeImg: {
            maxWidth: '100%',
            height: 'auto',
            margin: 'auto',
        },
        formLabel: {
            marginTop: '20px', 
        },
        input: {
            marginTop: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '12px 20px',
        },
        loginButton: {
            marginTop: '20px',
            border: '0px',
            borderRadius: '4px',
            padding: '14px 20px',
        },
        forgotPwdRememberMeContainer: {
            marginTop: '20px',
            marginBottom: '20px',
        },
        rememberMe: {
            float: 'right',
            clear: 'both',
        }
    };

    return (
        <div style={style.formWrapper}>
            <form style={style.form} action="#">
                
                    <img style={style.envelopeImg} src={require("../images/email-icon.png")} alt="mail-img"/>

                    <label style={style.formLabel} for="email"><b>Email</b></label>
                    <input style={style.input} type="email" placeholder="Enter Email Address" name="email" required/>

                    <label style={style.formLabel} for="psw"><b>Password</b></label>
                    <input style={style.input} type="password" placeholder="Enter Password" name="password" required/>

                    <button onClick={props.click} style={style.loginButton} type="submit">Login</button>

                    <div style={style.forgotPwdRememberMeContainer}>
                        <label style={style.rememberMe}>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                        <span class="psw">Forgot <a href="#">password?</a></span>
                    </div>
            </form>
            <Style rules={{
        body: {
          padding: '0%',
        },
        mediaQueries: {
          '(max-height: 400px) and (max-width: 700px)': {
            body: {
              height: '200%',
            }
        }
      }
}}
    />
        </div>
    );
};

export default Radium(LogInContainer);