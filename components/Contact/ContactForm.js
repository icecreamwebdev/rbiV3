import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faInfoCircle, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {


    const info = <FontAwesomeIcon icon={faInfoCircle} />
    const clock = <FontAwesomeIcon icon={faClock} />
    const submittedIcon = <FontAwesomeIcon icon={faCircleCheck} />
    const errorIcon = <FontAwesomeIcon icon={faCircleExclamation} />


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [hasError, setHasError] = useState(false)

    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')

      let data = {
          name,
          email,
          message
        }
        
      fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          console.log('Response received')
          console.log(res.status)
          if (res.status === 200) {
            console.log('Response succeeded!')
            setEmail(()=> '')
            setMessage(()=> '')
            setName(()=> '')
            setSubmitted(()=> true)
            setHasError(()=> false)
            
          } else{
              setHasError(()=> true)
              setSubmitted(()=> true)
              setEmail(()=> '')
            setMessage(()=> '')
            setName(()=> '')
          }
        })

       
      }
    

    return (



<div className='flex flex-wrap md:flex-nowrap w-full p-12 mt-7 mb-7 bg-white justify-center items-middle max-'>
    


        <div className='flex-col flex  w-full md:mr-10 relative'>

          {submitted && !hasError &&
        <div className='w-full h-full absolute  bg-white flex justify-center items-center bg-green'>
            <p className='items-center flex'><span className='text-2xl pr-3 items-center text-gray-800'>{submittedIcon}</span>Message Sent</p>
        </div>}

        {submitted && hasError &&
        <div className='w-full h-full absolute  bg-white flex justify-center items-center bg-green'>
            <p className='items-center flex'><span className='text-2xl pr-3 items-center text-gray-800'>{errorIcon}</span>Error, please email directly!</p>
        </div>}
        
            <form className='flex-col w-full' onSubmit={handleSubmit}>

                <div className='flex w-full'>
                <input name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder="Your name"  required className='w-1/2 border border-gray-200 rounded mr-4 text-sm text-gray-700 p-2'/>
                <input name="email" value={email}  onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Your email"  required className='w-1/2 border border-gray-200 rounded text-sm text-gray-700 p-2'/>
        </div>

<div className='flex w-full h-[120px] mt-4'>
     <textarea  id="message" value={message} onChange={(e)=>{setMessage(e.target.value)}}  name="message" placeholder="Enter Message" required className='w-full h-full p-2 text-sm text-gray-700 border border-gray-200 rounded'></textarea>
     </div>

     <input type="submit" name="submit" value="Send your message" className='bg-alt w-full mt-4 rounded text-white p-2' />

</form>

            </div>

            <div className='flex-col-reverse flex text-left items-between text-primary justify-around w-full md:w-[250px] shrink-0'>

                <div className='flex-col-reverse jusmd:flex-col w-full mt-7 md:mt-2'>
                <div className='flex w-full text-center uppercase text-tiny font-semibold'>
                    <h2 className=' w-full text-center  mb-4 md:mb-0 mt-2 md:mt-0'><span className='text-gray-500 pr-2'>{info}</span>contact information</h2>

                    </div>
                    <div className='flex w-full items-center justify-center mt-2 '>
                            {/* <div className='flex items-center text-gray-500 w-5 h-5 mr-4 rounded-full'>{info}</div> */}

                            <div className='flex-col items-center text-center p-0 m-0 text-xs font-light'>
                            <p><span className='font-semibold'>Phone:</span> (+44) 2074382009</p>
                            <p><span className='font-semibold'>Email:</span> hello@runbyinfluencers.com</p>
                            </div>
                        </div>
                    
</div>

<div className='flex-col w-full '>
                <div className='flex w-full text-left uppercase text-tiny font-semibold text-primary'>
                    <h2 className=' w-full text-center md:text-center mb-4 md:mb-0 mt-10 md:mt-0'><span className='text-gray-500 pr-2'>{clock}</span>business hours</h2>

                    </div>
                    <div className='flex w-full items-center mt-2 justify-center '>
                            {/* <div className='flex items-center w-5 h-5 text-gray-500 mr-4 rounded-full'>{clock}</div> */}

                            <div className='flex-col items-center text-center p-0 m-0 text-xs font-light'>
                            <p><span className='font-semibold'>Monday</span> - Friday: 9am to 6pm GMT </p>
                            <p><span className='font-semibold'>Saturday:</span> Urgent enquiries only</p>
                            <p><span className='font-semibold'>Sunday:</span> Urgent enquiries only</p>
                            </div>
                        </div>
                    
</div>
                </div>



    </div>

    )
}

export default ContactForm;