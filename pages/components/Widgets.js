import React from 'react';
import {SearchIcon} from '@heroicons/react/outline'
import {DotsHorizontalIcon, VideoCameraIcon} from '@heroicons/react/solid'
import Contact from './Contact';


const Widgets = () => {
    const contacts = [
        {src: 'https://i.ibb.co/vmRzGy5/linkdin.jpg', name: 'Naeem Uddin'},
        {src: 'https://i.ibb.co/Ytd4wcq/download.jpg', name: 'Elon Musk'},
        {src: 'https://i.ibb.co/9hBMRkf/jeff-bezos-andrew-harrer-bloomberg-via-getty-images.jpg', name: 'Jeff Bezos'},
        {src: 'https://i.ibb.co/YtsN1r6/download-1.jpg', name: 'Bill Gates'},
        {src: 'https://i.ibb.co/gTQSFH4/images.jpg', name: 'Mark Zuckerberg'}
    ]
    return (
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex justify-between items-center text-gray-500 mb-5'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6'/>
                    <SearchIcon className='h-6'/>
                    <DotsHorizontalIcon className='h-6'/>
                </div>
            </div>
            { 
                 contacts.map((contact)=> <Contact name={contact.name} src={contact.src} key={contact.name} />)
            }
        </div>
    );
};

export default Widgets;