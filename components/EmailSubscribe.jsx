import React, { useRef } from 'react'

const EmailSubscribe = () => {
    const emailref = useRef('');

    const submitform = (event) => {
        event.preventDefault()
        const emailtext = emailref.current.value;

        const res = fetch("https://battlesaga-2fdc7-default-rtdb.firebaseio.com/email-from.json", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: emailtext,
            }),
        })

        if(res){
            emailref.current.value = '';
        }
    }

    return (
        <div className="email_subscribe_wrap">
            <form action="" onSubmit={submitform}>
                <input type="email" name="email"  ref={emailref}/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default EmailSubscribe
