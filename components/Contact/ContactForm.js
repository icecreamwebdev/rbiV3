import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const ContactForm = () => {


    const info = <FontAwesomeIcon icon={faInfoCircle} />
    const clock = <FontAwesomeIcon icon={faClock} />

    const sendMessage = (e) => {
        e.preventDefault()
        console.log(e.target.value)


    }


    return (



<div className='flex flex-wrap md:flex-nowrap w-full p-12 mt-7 mb-7 bg-white justify-center items-middle max-'>


        <div className='flex-col flex  w-full md:mr-10'>

            <form className='flex-col w-full' onSubmit={sendMessage}>

                <div className='flex w-full'>
                <input name="name" placeholder="Your name"  className='w-1/2 border border-gray-200 rounded mr-4 text-sm text-gray-700 p-2'/>
                <input name="email" placeholder="Your email"  className='w-1/2 border border-gray-200 rounded text-sm text-gray-700 p-2'/>
        </div>

<div className='flex w-full h-[120px] mt-4'>
     <textarea  id="message" name="message" placeholder="Enter Message" required className='w-full h-full p-2 text-sm text-gray-700 border border-gray-200 rounded'></textarea>
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
                            <p>point 1 text bla bla bla</p>
                            <p>point 2 slightly longer line bla</p>
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
                            <p>Monday - Friday: 9am to 6pm GMT </p>
                            <p>Saturday: Urgent enquiries only</p>
                            <p>Sunday: Urgent enquiries only</p>
                            </div>
                        </div>
                    
</div>
                </div>



    </div>

    )
}

export default ContactForm;