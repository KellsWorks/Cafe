import { BellIcon, ChatAlt2Icon, FireIcon, MenuAlt1Icon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="bg-white border-b p-3 fixed w-full flex justify-between">

        <div className='flex items-center'>
            <button>
                <MenuAlt1Icon className='h-5 w-auto text-gray-500'/>
            </button>
            <h3 className="ml-3 text-xl text-gray-600">
                Cafe
            </h3>
        </div>

        <div className="flex items-center space-x-3">

            <NavLink to={'#'}>
                <BellIcon className='h-5 w-auto text-gray-500'/>
            </NavLink>

            <ChatAlt2Icon className='h-5 w-auto text-gray-500'/>
            <FireIcon className='h-5 w-auto text-red-500'/>

            <img className ="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
      
        </div>
    </div>
  )
}
