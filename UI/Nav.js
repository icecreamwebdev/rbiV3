import Link from 'next/link';
import React, { useState } from 'react';
import NavItem from './NavItem';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

const Nav = ({activePage, handleClick, isOpen}) => {

    const route = useRouter()
    const pathname = route.pathname

    const navItems = ['home', 'about', 'influencers' , 'case studies', 'blog', 'contact']

    const icon =  <FontAwesomeIcon icon={faInstagram}  />
    const burgerIcon = isOpen? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />





    return (

        <>
        <div className='flex items-center'>
            <ul className='flex space-x-8 hidden lg:flex uppercase text-xs hidden md:flex items-center font-semibold' >


                {navItems.map((item,index)=> {

                    return <NavItem title={item} index={index} activePage={pathname}/>
                })}
                <li className='text-xl text-gray-400 hover:text-black hover:cursor-pointer'><Link href='https://www.instagram.com/weare_rbi/ '>{icon}</Link></li>

                


            </ul>

            <button onClick={handleClick} className='items-center flex md:hidden text-2xl'>
                {burgerIcon}
            </button>


        </div>

        

</>


    );
};

export default Nav;