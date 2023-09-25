import React from 'react'
import './index.css'
const Contact = () => {
    return (
            <div className="container contact-us">
                <div>
                    <h1 className='contact titlePages'>Contact</h1>
                    <p className='txts'>
                        Have any questions or concerns about the site? Use the form below or email me directly - my email address is info@deu.com
                    </p>
                    <div className='formula'>
                        <p className='txt'>
                            This form is broken right now. I don't know why sending email is so hard. Who ever knew Email could be so complicated? I'm working on getting it fixed, but I have to travel at the moment. Please just email me directly at info@deu.com
                        </p>
                    </div>
                </div>
                <div className='contact-form'>
                    <form>
                        <input type='text' placeholder='Name' />
                        <input type='text' placeholder='example@domain.com' />
                        <input type='text' placeholder='Subject'/>
                        <textarea rows="12" cols="50" placeholder='Message...'>
                            
                        </textarea>
                        <input type='submit' value={'Send'} />
                    </form>
                </div>
            </div>
    );
}

export default Contact;