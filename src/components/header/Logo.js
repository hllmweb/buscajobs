import React from 'react';

export default class Logo extends React.Component{
    
    render(){
        return(
            <div className="logo">
                <a href="/">
                    <img src={process.env.PUBLIC_URL+"/img/logo.png"} alt="logo" />
                </a>
            </div>
        );
    }
}