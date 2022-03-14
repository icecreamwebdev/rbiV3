import { useRouter } from 'next/router';
import React from 'react';
import NavItem from './NavItem';

const MobileNav = ({isOpen, closeBurger}) => {

    const route = useRouter()
    const pathname = route.pathname


    const navItems = ['home', 'about', 'brands', 'influencers', 'case studies', 'blog', 'contact']

    const show = isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'

    return (
        <ul className={`${show} transition-opacity duration-500  h-full ease-in-out flex-col flex text-white text-lg lg:flex uppercase justify-center md:flex items-center`} >


                {navItems.map((item,index)=> {

                    return <NavItem title={item} index={index} activePage={pathname} closeBurger={closeBurger}/>
                })}

                


            </ul>
    );
};

export default MobileNav;