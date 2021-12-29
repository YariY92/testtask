import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'


function Form() {

    const [email, setEmail] = useState ('')
    const [emailDirty, setEmailDirty] = useState (false)
    const [emailError, setEmailError] = useState ('Email address is required')
    const [checkbox, setCheckbox] = useState (true)
    const [checkboxError, setCheckboxError] = useState ( '')
    const [formValid, setFormValid] = useState (false)
    const [isSubmit, setIsSubmit] = useState(false)

    useEffect( () => {
        if(emailError || checkbox === false || email === '' ) {
            setFormValid (false)
        } 
        else {
            setFormValid (true)
        }

        if(Object.keys(emailError).length === 0 && Object.keys(checkboxError).length === 0 && isSubmit){
            setIsSubmit(true) }
    }, [emailError, checkboxError, checkbox, email, isSubmit])

    const emailHandler = e => {
        setEmail(e.target.value)
       const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
       if(!re.test(String(e.target.value).toLowerCase())) {
           setEmailError('Please provide a valid e-mail address')
        } else if(e.target.value.endsWith('.co')){
            setEmailError('We are not accepting subscriptions from Colombia emails')
        } else {
            setEmailError('')
        }
    }

    const checkboxHandler = e => {
        setCheckbox(e.target.checked)
        console.log (e.target.value)
        if(!e.target.checked){
            setCheckboxError('You must accept the terms and conditions')
        } else { setCheckboxError('')}

    }

    const blurHandler = e =>{
        switch(e.target.name) {
            case 'email':
                setEmailDirty (true)
                break  
        }
    }

    const addclass=()=>{
        document.querySelector("#change-class").classList.replace('change', 'fff');
        document.querySelector("#change-class1").classList.replace('results', 'results_changes');
        document.querySelector("#change-class2").classList.replace('line', 'success_line');
    }  

    const onSubmit = e => {
        if(emailError || checkbox === false || email === '' ) {
            setFormValid (false)
        } 
        else {
            setFormValid (true)
            e.preventDefault()
            handleSubmit()
        }
    }

    const handleSubmit = e => {
     addclass();
        const obj = {
            email: email
        };
        console.log(obj);
    axios.defaults.baseURL = 'http://jobtask/';
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.post('insert.php', obj)
     .then(function (response) {
           console.log(response)
          alert('New User Successfully Added.');  
       })
       .catch(function (response) {
    
            console.log(response)
      });
    }


    return (
        <>
            <form   >
            <div className="imput_wrap">
                {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
            <input className="email_input" type="text" placeholder='Type your email address here…' name="email" value={email} onBlur={e => blurHandler(e)} onChange={e => emailHandler(e)} />
            <img onClick={onSubmit}  disabled={!formValid}  src="images/ic_arrow.svg" alt="arrow" className="email_arrow"></img>
            </div>
            <div className="mai_checkbox">
            <input type="checkbox" id="cb1" checked={checkbox} className="checkbox" name="checkbox" onChange={e => checkboxHandler(e)} value={checkbox} /> <label htmlFor="cb1" className="checkbox_label">I agree to <a className="link" href="/#">terms of service</a></label>
            </div>
            {(checkboxError) && <div style={{color:'red'}}>{checkboxError}</div>}
            
            </form>
        </>
    )
}

export default Form
