import React from 'react';
import Image from 'next/image';
import { 
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    UserGroupIcon,
    ViewGridIcon
 } from '@heroicons/react/solid';
import { 
    FlagIcon,
    PlayIcon,
    HomeIcon,
    SearchIcon,
    ShoppingCartIcon
 } from '@heroicons/react/outline';
 import HeaderIcon from './HeaderIcon';
import { useSession, signOut } from 'next-auth/client';

const Header = () => {
    const [session ] = useSession();
    return (
        <div className='sticky top-0 z-50 bg-white flex  items-center p-2 lg:px-5 shadow-md'>
            <div className='flex items-center'>
               <Image src='https://www.pngarts.com/files/10/Facebook-Logo-PNG-Image-Background.png'
                width={40} height={40} layout="fixed" alt="picture" />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <SearchIcon className='h-6 text-gray-600' />
                <input className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' type="text" placeholder="Search Facebook"/>
            </div>
            </div>
            
            <div className='flex justify-center flex-graw'>
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />

                </div>
            </div>
            <div className='flex justify-end items-center  sm:space-x-2'>

                <Image onClick={signOut} src={session.user.image}
                width={40} height={40} layout="fixed"
                className="rounded-full cursor-pointer" alt="picture" />
                <p className='whitespace-nowrap font-semibold pr-3'>{session.user.name}</p>
                <ViewGridIcon className='icon'/>
                <ChatIcon className='icon'/>
                <BellIcon className='icon'/>
                <ChevronDownIcon className='icon'/>
            </div>
        </div>
    );
};

export default Header;