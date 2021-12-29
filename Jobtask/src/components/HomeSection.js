import React from 'react'
import Form from './Form'
import './HomeSection.css'

function HomeSection({heading,
    subheading
  }) {
    return (
        <>
            <div className="mai_menu">
                <div className="mai_menu_content">
                    <div className="results" id="change-class1">
                        <div className="success_img">
                            <img src="images/ic_success.svg" alt="success"/>
                        </div>
                        <div className="success_content">
                            <h1 className="success_header">Thanks for subscribing!</h1>
                            <h3 className="success_subheader">You have successfully subscribed to our email listing. Check your email for the discount code.</h3>
                        </div>
                    </div>
                <div  className="change" id="change-class" >
            <div className="mai_heading">
            <h1 className="heading">{heading}</h1>
            </div>
            <div className="mai_subheading">
            <h3 className="subheading">{subheading}</h3>
            </div>
            <div className="mai_form">
            <Form />
            </div>
            </div>
            <div className="line" id="change-class2"></div>
            <div className="labels">
            <div className="labels_wrapper">
            <ul className="labels-list">
                <li className="labels-item"><a href='/#'><div className="facebook"></div></a></li>
                <li className="labels-item"><a href='/#'><div className="instagram"></div></a></li>
                <li className="labels-item"><a href='/#'><div className="twitter"></div></a></li>
                <li className="labels-item"><a href='/#'><div className="youtube"></div></a></li>
            </ul>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default HomeSection
