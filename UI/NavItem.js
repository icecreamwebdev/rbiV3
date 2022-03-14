import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import URLFormatter, { fileNameFormatter } from '../utils/UrlFormatter';

const NavItem = ({title, index, activePage, closeBurger}) => {

    const page = activePage == '/' ? 'home' : fileNameFormatter(activePage)
    const pageLink = title == 'home' ? '/' : URLFormatter(title)
    const activeitem = 'text-alt'
    return (
        <li key={index} onClick={closeBurger} className={`${page == (title) ? activeitem : 'text-auto'} hover:text-alt`}>
            <Link className='cursor-pointer' href={pageLink}>
                {title}
            </Link>
        </li>
    );
};

export default NavItem;