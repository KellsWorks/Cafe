import { Link, NavLink } from 'react-router-dom'
import User from '../assets/images/testimonial.jpg'

export default function Document() {
  return (
    <div>
        <div className="flex">
            <div className="w-16 max-h-screen h-screen bg-gray-50 p-4 border-r flex flex-col items-center space-y-4">
                <img src={User} alt="user-icon" className="rounded-full object-cover w-8 h-8" />

                <NavLink to={'#'} className='hover:bg-blue-300 hover:text-blue-500 p-3 rounded transition duration-150'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </NavLink>

                <NavLink to={'#'} className='hover:bg-blue-300 hover:text-blue-500 p-3 rounded transition duration-150'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <   path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </NavLink>

                <NavLink to={'#'} className='hover:bg-blue-300 hover:text-blue-500 p-3 rounded transition duration-150'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </NavLink>

                <NavLink to={'#'} className='hover:bg-blue-300 hover:text-blue-500 p-3 rounded transition duration-150'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </NavLink>

                <NavLink to={'#'} className='hover:bg-blue-300 hover:text-blue-500 p-3 rounded transition duration-150'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                </NavLink>
            </div>

            <div className='w-full sm:flex sm:flex-col'>
                <div className="justify-between flex p-3">
                    <div className="flex">

                        <div className="ml-10 flex">

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z" fill="#6E7C87"/>
                            <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#6E7C87"/>
                            <path d="M16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z" fill="#6E7C87"/>
                            </svg>

                            <button className="ml-2">
                                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 3.5L8.5 8L4 12.5" stroke="#B0BABF"/>
                                </svg>
                            </button>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C7.46957 4 6.96086 4.21071 6.58579 4.58579C6.21071 4.96086 6 5.46957 6 6V18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V9.414C17.9999 8.88361 17.7891 8.37499 17.414 8L14 4.586C13.625 4.2109 13.1164 4.00011 12.586 4H8ZM10 14C10 13.7348 9.89464 13.4804 9.70711 13.2929C9.51957 13.1054 9.26522 13 9 13C8.73478 13 8.48043 13.1054 8.29289 13.2929C8.10536 13.4804 8 13.7348 8 14V17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18C9.26522 18 9.51957 17.8946 9.70711 17.7071C9.89464 17.5196 10 17.2652 10 17V14ZM12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12V17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17V12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11ZM16 10C16 9.73478 15.8946 9.48043 15.7071 9.29289C15.5196 9.10536 15.2652 9 15 9C14.7348 9 14.4804 9.10536 14.2929 9.29289C14.1054 9.48043 14 9.73478 14 10V17C14 17.2652 14.1054 17.5196 14.2929 17.7071C14.4804 17.8946 14.7348 18 15 18C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V10Z" fill="#B0BABF"/>
                            </svg>

                            <p className='font-medium'>My Reports</p>

                            <button className="ml-2">
                                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 3.5L8.5 8L4 12.5" stroke="#B0BABF"/>
                                </svg>
                            </button>

                            <div className="pt-0.5 w-5 h-5 ml-2 mr-2 rounded-full bg-blue-600 text-white text-center text-sm font-medium">
                                P
                            </div>

                            <p className='font-medium'>Top Product Hunt 2022</p>

                        </div>
                    </div>

                    <div className="flex space-x-4 justify-end">
                        <Link to={'#'} className="hover:text-blue-400 transition duration-150">
                            Share
                        </Link>
                        <Link to={'#'} className="hover:text-blue-400 transition duration-150">
                            Update
                        </Link>
                        <Link to={'#'} className="hover:text-blue-400 transition duration-150">
                            Favourites
                        </Link>
                    </div>
                </div>

                <div className="p-20">
                    <div className="bg-blue-600 text-center text-3xl text-white font-bold w-10 h-10 rounded-full">
                        P
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
