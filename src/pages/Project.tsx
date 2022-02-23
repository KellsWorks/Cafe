import { Transition, Dialog } from '@headlessui/react'
import React, {useState, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import User from '../assets/images/testimonial.jpg'
import { ArrowRightIcon, CalculatorIcon, ChevronDoubleDownIcon } from '@heroicons/react/outline'


export default function Project() {

    const [open, setOpen] = useState(false)

  return (
    <div>

        <div className="bg-white p-3 border-b flex justify-between">
            
            <div className='flex'>
                <button onClick={() => {setOpen(true)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                </button>

                <button className='ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                </button>

                <div className="flex space-x-4 ml-10 items-center">
                    <Link to={'#'} className='hover:text-blue-500 hover:font-medium transition duration-200 mr-2'>
                        Your work
                    </Link>
                    <Link to={'#'} className='hover:text-blue-500 hover:font-medium transition duration-200 mr-2'>
                        Projects
                    </Link>
                    <Link to={'#'} className='hover:text-blue-500 hover:font-medium transition duration-200 mr-2'>
                        Filters
                    </Link>
                    <Link to={'#'} className='hover:text-blue-500 hover:font-medium transition duration-200 mr-2'>
                        Dashboards
                    </Link>
                    <Link to={'#'} className='hover:text-blue-500 hover:font-medium transition duration-200 mr-2'>
                        People
                    </Link>
                    <Link to={'#'} className='hover:text-blue-500 hover:font-medium transition duration-200 mr-2'>
                        Apps
                    </Link>
                    <button type="button" data-modal-toggle="authentication-modal" className="px-3 py-1 border text-base rounded-sm hover:bg-blue-500 hover:text-white transition duration-150">Create</button>
 

                    <div id="authentication-modal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                        <div className="relative px-4 w-full max-w-md h-full md:h-auto">

                            <div className="relative bg-white rounded-sm shadow dark:bg-gray-700">

                                <div className="flex justify-end p-2">
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-sm text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>

                            </div>

                            <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create a new project</h3>
                                
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"/>
                                </div>
                                
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                                </div>
                                
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"/>
                                </div>

                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                
                                </div>
                                <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-500">Lost Password?</a>
                                </div>
                                    <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">Login to your account</button>
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Not registered? <a href="#" className="text-blue-500 hover:underline dark:text-blue-500">Create project</a>
                                    </div>
                            </form>
                        </div>
                    </div>
                    </div>

                </div>

            </div>

            <div className="flex items-center">
                <div className="flex border items-center rounded-sm pl-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.00077C8.93913 6.00077 7.92172 6.42219 7.17157 7.17234C6.42143 7.92248 6 8.9399 6 10.0008C6 11.0616 6.42143 12.079 7.17157 12.8292C7.92172 13.5793 8.93913 14.0008 10 14.0008C11.0609 14.0008 12.0783 13.5793 12.8284 12.8292C13.5786 12.079 14 11.0616 14 10.0008C14 8.9399 13.5786 7.92248 12.8284 7.17234C12.0783 6.42219 11.0609 6.00077 10 6.00077ZM4 10.0008C3.99988 9.05647 4.22264 8.12548 4.65017 7.28351C5.0777 6.44154 5.69792 5.71236 6.4604 5.15529C7.22287 4.59822 8.10606 4.22898 9.03815 4.0776C9.97023 3.92622 10.9249 3.99698 11.8245 4.28412C12.724 4.57126 13.5432 5.06667 14.2152 5.73006C14.8872 6.39346 15.3931 7.2061 15.6919 8.1019C15.9906 8.9977 16.0737 9.95136 15.9343 10.8853C15.795 11.8193 15.4372 12.7072 14.89 13.4768L19.707 18.2938C19.8892 18.4824 19.99 18.735 19.9877 18.9972C19.9854 19.2594 19.8802 19.5102 19.6948 19.6956C19.5094 19.881 19.2586 19.9862 18.9964 19.9884C18.7342 19.9907 18.4816 19.8899 18.293 19.7078L13.477 14.8918C12.5794 15.53 11.5233 15.9089 10.4247 15.9869C9.326 16.0648 8.22707 15.8389 7.2483 15.3337C6.26953 14.8286 5.44869 14.0638 4.87572 13.1231C4.30276 12.1824 3.99979 11.1022 4 10.0008Z" fill="#B0BABF"/>
                    </svg>
                    <input placeholder='Search' type="text" className="w-72 outline-none focus:ring-1 border-0" />
                </div>

                <div className="ml-2 items-center">
                    <button className='mr-2'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4C10.4087 4 8.88261 4.63214 7.75739 5.75736C6.63217 6.88258 6.00003 8.4087 6.00003 10V13.586L5.29303 14.293C5.15322 14.4329 5.05802 14.611 5.01945 14.805C4.98088 14.9989 5.00068 15.2 5.07635 15.3827C5.15202 15.5654 5.28016 15.7215 5.44457 15.8314C5.60898 15.9413 5.80228 16 6.00003 16H18C18.1978 16 18.3911 15.9413 18.5555 15.8314C18.7199 15.7215 18.848 15.5654 18.9237 15.3827C18.9994 15.2 19.0192 14.9989 18.9806 14.805C18.942 14.611 18.8468 14.4329 18.707 14.293L18 13.586V10C18 8.4087 17.3679 6.88258 16.2427 5.75736C15.1175 4.63214 13.5913 4 12 4ZM12 20C11.2044 20 10.4413 19.6839 9.87871 19.1213C9.3161 18.5587 9.00003 17.7956 9.00003 17H15C15 17.7956 14.684 18.5587 14.1214 19.1213C13.5587 19.6839 12.7957 20 12 20Z" fill="#5B6871"/>
                        </svg>
                    </button>
                    <button className='mr-2'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12ZM12 9C11.8243 8.99983 11.6517 9.04595 11.4994 9.13373C11.3472 9.22151 11.2209 9.34784 11.133 9.5C11.0696 9.61788 10.9831 9.72182 10.8788 9.80566C10.7744 9.8895 10.6543 9.95154 10.5255 9.9881C10.3967 10.0247 10.2619 10.035 10.1291 10.0185C9.99627 10.002 9.86809 9.95897 9.75218 9.89201C9.63628 9.82505 9.53499 9.7355 9.45433 9.62867C9.37367 9.52184 9.31529 9.3999 9.28263 9.27008C9.24997 9.14027 9.24371 9.00522 9.26421 8.87294C9.28472 8.74065 9.33157 8.61384 9.402 8.5C9.73222 7.92811 10.2419 7.48116 10.852 7.22846C11.4621 6.97576 12.1386 6.93144 12.7765 7.10236C13.4143 7.27328 13.978 7.64989 14.38 8.1738C14.782 8.6977 15 9.33962 15 10C15.0002 10.6206 14.8079 11.226 14.4498 11.7329C14.0916 12.2397 13.5851 12.623 13 12.83V13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13V12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 10.8946 12.7071 10.7071C12.8946 10.5196 13 10.2652 13 10C13 9.73478 12.8946 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9ZM12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17Z" fill="#5B6871"/>
                        </svg>
                    </button>
                    <button className='mr-2'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4897 5.17C13.1097 3.61 10.8898 3.61 10.5098 5.17C10.453 5.40442 10.3417 5.62213 10.185 5.80541C10.0282 5.9887 9.83038 6.13238 9.60759 6.22477C9.38481 6.31716 9.14336 6.35564 8.90289 6.33709C8.66242 6.31854 8.42973 6.24347 8.22375 6.118C6.85175 5.282 5.28175 6.852 6.11775 8.224C6.65775 9.11 6.17875 10.266 5.17075 10.511C3.60975 10.89 3.60975 13.111 5.17075 13.489C5.40523 13.5458 5.62298 13.6572 5.80626 13.8141C5.98955 13.971 6.13319 14.1689 6.22549 14.3918C6.31779 14.6147 6.35614 14.8563 6.33742 15.0968C6.3187 15.3373 6.24343 15.5701 6.11775 15.776C5.28175 17.148 6.85175 18.718 8.22375 17.882C8.42969 17.7563 8.6624 17.6811 8.90293 17.6623C9.14347 17.6436 9.38502 17.682 9.60793 17.7743C9.83084 17.8666 10.0288 18.0102 10.1857 18.1935C10.3426 18.3768 10.4539 18.5945 10.5107 18.829C10.8898 20.39 13.1108 20.39 13.4888 18.829C13.5457 18.5946 13.6572 18.377 13.8142 18.1939C13.9711 18.0107 14.169 17.8672 14.3918 17.7749C14.6147 17.6826 14.8561 17.6442 15.0966 17.6628C15.3371 17.6815 15.5698 17.7565 15.7758 17.882C17.1477 18.718 18.7178 17.148 17.8818 15.776C17.7563 15.57 17.6812 15.3373 17.6626 15.0969C17.644 14.8564 17.6824 14.6149 17.7747 14.3921C17.8669 14.1692 18.0105 13.9713 18.1936 13.8144C18.3768 13.6575 18.5944 13.546 18.8288 13.489C20.3898 13.11 20.3898 10.889 18.8288 10.511C18.5943 10.4542 18.3765 10.3428 18.1932 10.1859C18.01 10.029 17.8663 9.83109 17.774 9.60818C17.6817 9.38527 17.6434 9.14372 17.6621 8.90318C17.6808 8.66265 17.7561 8.42994 17.8818 8.224C18.7178 6.852 17.1477 5.282 15.7758 6.118C15.5698 6.24368 15.3371 6.31895 15.0966 6.33767C14.856 6.35639 14.6145 6.31804 14.3916 6.22574C14.1687 6.13344 13.9707 5.9898 13.8138 5.80651C13.6569 5.62323 13.5456 5.40548 13.4888 5.171L13.4897 5.17ZM11.9998 15C12.7954 15 13.5585 14.6839 14.1211 14.1213C14.6837 13.5587 14.9998 12.7956 14.9998 12C14.9998 11.2044 14.6837 10.4413 14.1211 9.87868C13.5585 9.31607 12.7954 9 11.9998 9C11.2041 9 10.441 9.31607 9.87843 9.87868C9.31582 10.4413 8.99975 11.2044 8.99975 12C8.99975 12.7956 9.31582 13.5587 9.87843 14.1213C10.441 14.6839 11.2041 15 11.9998 15Z" fill="#5B6871"/>
                        </svg>
                    </button>
                </div>

                <img src={User} alt="user-icon" className="rounded-full object-cover w-8 h-8" />

            </div>

        </div>

        <div className="w-full flex">
            <div className='w-1/5 bg-gray-50 border-r p-3 max-h-screen h-screen'>
                <div className="flex items-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6573 10.3427C20.5893 9.27523 19.2409 8.53188 17.7681 8.19855C16.2953 7.86522 14.7583 7.95552 13.3347 8.45902C11.9111 8.96251 10.659 9.85864 9.7233 11.0438C8.78757 12.229 8.20638 13.6547 8.0469 15.1563C7.88743 16.6579 8.15619 18.174 8.82211 19.5292C9.48804 20.8845 10.5239 22.0236 11.81 22.8149C13.0961 23.6061 14.5799 24.0173 16.0899 24.0007C17.5998 23.9842 19.0742 23.5406 20.3427 22.7213C20.4895 22.6206 20.655 22.5504 20.8294 22.5147C21.0039 22.479 21.1837 22.4786 21.3582 22.5136C21.5328 22.5485 21.6986 22.618 21.8459 22.7181C21.9932 22.8181 22.1189 22.9467 22.2157 23.0961C22.3125 23.2455 22.3784 23.4128 22.4095 23.5881C22.4406 23.7634 22.4363 23.9432 22.3968 24.1168C22.3573 24.2904 22.2834 24.4543 22.1795 24.5989C22.0757 24.7435 21.9439 24.8658 21.792 24.9587C19.8009 26.2461 17.4377 26.8335 15.0755 26.628C12.7134 26.4226 10.4871 25.4359 8.74827 23.8239C7.00945 22.212 5.85728 20.0666 5.47378 17.7268C5.09028 15.3869 5.4973 12.986 6.63056 10.9033C7.76381 8.82064 9.55869 7.17489 11.7316 6.22609C13.9046 5.27729 16.3317 5.07953 18.6296 5.66405C20.9274 6.24857 22.9651 7.58205 24.4205 9.45382C25.876 11.3256 26.6663 13.6289 26.6667 16C26.6669 16.743 26.4602 17.4713 26.0698 18.1034C25.6793 18.7355 25.1206 19.2464 24.4561 19.5787C23.7916 19.9111 23.0477 20.0519 22.3078 19.9852C21.5678 19.9185 20.861 19.6471 20.2667 19.2013C19.5069 20.2144 18.4114 20.9241 17.1762 21.2033C15.941 21.4826 14.6468 21.3133 13.5251 20.7256C12.4033 20.138 11.5273 19.1704 11.0537 17.9959C10.5801 16.8215 10.5398 15.5168 10.9401 14.3154C11.3404 13.114 12.1552 12.0942 13.2386 11.4386C14.3219 10.7829 15.6033 10.5341 16.8533 10.7367C18.1033 10.9393 19.2405 11.5801 20.0613 12.5444C20.8821 13.5087 21.333 14.7336 21.3333 16C21.3333 16.3536 21.4738 16.6928 21.7239 16.9428C21.9739 17.1929 22.313 17.3333 22.6667 17.3333C23.0203 17.3333 23.3594 17.1929 23.6095 16.9428C23.8595 16.6928 24 16.3536 24 16C24 13.9507 23.2187 11.9067 21.6573 10.3427ZM18.6667 16C18.6667 15.2928 18.3857 14.6145 17.8856 14.1144C17.3855 13.6143 16.7072 13.3333 16 13.3333C15.2928 13.3333 14.6145 13.6143 14.1144 14.1144C13.6143 14.6145 13.3333 15.2928 13.3333 16C13.3333 16.7072 13.6143 17.3855 14.1144 17.8856C14.6145 18.3857 15.2928 18.6667 16 18.6667C16.7072 18.6667 17.3855 18.3857 17.8856 17.8856C18.3857 17.3855 18.6667 16.7072 18.6667 16Z" fill="#F8C51B"/>
                    </svg>
                    <div className='ml-2'>
                        <h3 className="text-lg font-semibold">
                            Product Web
                        </h3>
                        <p className="text-gray-500">
                            Classic software project
                        </p>
                        
                    </div>
                </div>

                <div className='mt-2'>
                    
                <aside className="w-64" aria-label="Sidebar">
                <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2">

                <NavLink to="#" className="flex items-center p-2 text-base bg-blue-300 text-blue-500 rounded-sm dark:text-white hover:bg-blue-200 hover:text-blue-500 dark:hover:bg-gray-700 hover:font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                </svg><span className="ml-3">Backlog</span>
                </NavLink>

                <NavLink to="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-sm dark:text-white hover:bg-blue-200 hover:text-blue-500 dark:hover:bg-gray-700 hover:font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
                </svg><span className="ml-3">Active Sprints</span>
                </NavLink>

                <NavLink to="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-sm dark:text-white hover:bg-blue-200 hover:text-blue-500 dark:hover:bg-gray-700 hover:font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg><span className="ml-3">Reports</span>
                </NavLink>
                
                <div className="mt-3 mb-3 border-t">
                <NavLink to="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-sm dark:text-white hover:bg-blue-200 hover:text-blue-500 dark:hover:bg-gray-700 hover:font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg><span className="ml-3">Issues</span>
                </NavLink>
                <NavLink to="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-sm dark:text-white hover:bg-blue-200 hover:text-blue-500 dark:hover:bg-gray-700 hover:font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg><span className="ml-3">Components</span>
                </NavLink>
                <NavLink to="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-sm dark:text-white hover:bg-blue-200 hover:text-blue-500 dark:hover:bg-gray-700 hover:font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg><span className="ml-3">Code</span>
                </NavLink>
                <NavLink to="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-sm dark:text-white hover:bg-blue-200 hover:text-blue-500 dark:hover:bg-gray-700 hover:font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg><span className="ml-3">Releases</span>
                </NavLink>
                <NavLink to="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-sm dark:text-white hover:bg-blue-200 hover:text-blue-500 dark:hover:bg-gray-700 hover:font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg><span className="ml-3">Project Pages</span>
                </NavLink>
                </div>
                </ul>
                </div>
                </aside>

                </div>
            </div>
            <div className="w-full p-5">
                <nav className="flex  pr-5 pt-3 pb-3 text-gray-700" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <a href="#" className="inline-flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
                            <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Projects
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <a href="#" className="ml-1 text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-500 dark:hover:text-white">International</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <span className="ml-1 text-gray-500 md:ml-2 dark:text-gray-500">Product Web</span>
                            </div>
                        </li>
                    </ol>
                </nav>


                <div className="w-full flex justify-between">
                    <h3 className="text-2xl font-semibold justify-start">
                        All sprints
                    </h3>

                    <div className="items-center flex flex-row justify-end">
                        <button className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </button>
                        <button className="bg-blue-500 text-white py-1 px-3 text-base rounded-sm">
                            Complete sprint
                        </button>
                        <button className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                            </svg>
                        </button>
                        <button className="border py-1 px-1 ml-2 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex items-center mt-4">
                    <div className="border px-3 flex items-center rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input placeholder='Search' type="text" className="w-32 text-sm outline-none border-none ml-2 h-6" />
                    </div>

                    <div className="flex ml-10">
                        <img src={User} alt="user" className='w-8 h-8 rounded-full object-cover border-2 border-white'/>
                        <img src={User} alt="user" className='w-8 h-8 rounded-full object-cover border-2 border-white -ml-2'/>
                        <img src={User} alt="user" className='w-8 h-8 rounded-full object-cover border-2 border-white -ml-2'/>
                        <img src={User} alt="user" className='w-8 h-8 rounded-full object-cover border-2 border-white -ml-2'/>
                        <img src={User} alt="user" className='w-8 h-8 rounded-full object-cover border-2 border-white -ml-2'/>
                    </div>

                    <div className="flex ml-10">
                        <p>
                            Only My Issues
                        </p>
                        <p className='ml-4'>
                            Recently Updated
                        </p>
                        <p className='ml-4'>
                            All Sprints
                        </p>
                    </div>
                </div>

                <div className="flex rounded-sm p-3">
                    <div className="w-1/3 bg-gray-50 mr-5 p-3">
                        <h3 className="uppercase text-base font-semibold text-gray-900">To do</h3>
                        <div className="mt-2 space-y-3">
                            <div className="shadow rounded-md border sm p-4">
                                <p className="text-base text-gray-800">
                                    As a translator, I want integrate Crowdin webhook to notify translators about changed strings
                                </p>
                                <p className="bg-yellow-200 rounded text-center text-sm text-yellow-500 w-24 font-semibold mt-2">
                                Refactoring
                                </p>

                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                                            </svg>
                                        </button>
                                        <div className="ml-2 bg-gray-500 text-center rounded-full w-6 h-6 text-sm">
                                            2
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <p>FC-7</p>
                                        <div className="text-blue-500 bg-blue-300 rounded-full text-center pt-1 ml-2 text-xs w-6 h-6">
                                            PG
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow rounded-md border sm p-4">
                                <p className="text-base text-gray-800">
                                    As a translator, I want integrate Crowdin webhook to notify translators about changed strings
                                </p>
                                <p className="bg-yellow-200 rounded text-center text-sm text-yellow-500 w-24 font-semibold mt-2">
                                Refactoring
                                </p>

                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                                            </svg>
                                        </button>
                                        <div className="ml-2 bg-gray-500 text-center rounded-full w-6 h-6 text-sm">
                                            2
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <p>FC-7</p>
                                        <div className="text-blue-500 bg-blue-300 rounded-full text-center pt-1 ml-2 text-xs w-6 h-6">
                                            PG
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow rounded-md border sm p-4">
                                <p className="text-base text-gray-800">
                                    As a translator, I want integrate Crowdin webhook to notify translators about changed strings
                                </p>
                                <p className="bg-yellow-200 rounded text-center text-sm text-yellow-500 w-24 font-semibold mt-2">
                                Refactoring
                                </p>

                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                                            </svg>
                                        </button>
                                        <div className="ml-2 bg-gray-500 text-center rounded-full w-6 h-6 text-sm">
                                            2
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <p>FC-7</p>
                                        <div className="text-blue-500 bg-blue-300 rounded-full text-center pt-1 ml-2 text-xs w-6 h-6">
                                            PG
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow rounded-md border sm p-4">
                                <p className="text-base text-gray-800">
                                    As a translator, I want integrate Crowdin webhook to notify translators about changed strings
                                </p>
                                <p className="bg-yellow-200 rounded text-center text-sm text-yellow-500 w-24 font-semibold mt-2">
                                Refactoring
                                </p>

                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                                            </svg>
                                        </button>
                                        <div className="ml-2 bg-gray-500 text-center rounded-full w-6 h-6 text-sm">
                                            2
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <p>FC-7</p>
                                        <div className="text-blue-500 bg-blue-300 rounded-full text-center pt-1 ml-2 text-xs w-6 h-6">
                                            PG
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 bg-gray-50 mr-5 p-3">
                        <h3 className="uppercase text-base font-semibold text-gray-900">In progress</h3>
                        <div className='mt-3 space-y-4'>
                            <div className="bg-white shadow rounded-md border sm p-4">
                                <p className="text-base text-gray-800">
                                    As an external contributor, I want to be able to see status of uploaded materials
                                </p>

                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button className="ml-2">
                                            <ChevronDoubleDownIcon className='w-5 h-5 text-emerald-500'/>
                                        </button>
                                        <div className="ml-2 bg-gray-300 pt-0.5 text-center rounded-full w-6 h-6 text-sm">
                                            3
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <p>MAR-14</p>
                                        <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268" alt="afro-woman" className="rounded-full ml-2 h-8 w-8 border-gray-300 border-2 object-cover" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white shadow rounded-md border sm p-4">
                                <p className="text-base">
                                    Replace JustComments with something
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="w-1/3 bg-gray-50 mr-5 p-3">
                        <h3 className="uppercase text-base font-semibold text-gray-900">Done</h3>
                    </div>
                </div>
            </div>
        </div>

        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
                <div className="absolute inset-0 overflow-hidden">
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="pointer-events-none overflow-hidden fixed inset-y-0 left-0 flex max-w-full">
                    <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="-translate-x-full"
                    enterTo="-translate-x-100"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="-translate-x-0"
                    leaveTo="-translate-x-full"
                    >
                    <div className="pointer-events-auto relative w-screen max-w-md">
                        <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <div className="absolute top-0 right-0 mr-2 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                            <button
                            type="button"
                            className="text-gray-300 outline-none"
                            onClick={() => setOpen(false)}
                            >
                            <span className="sr-only">Close panel</span>
                            <ArrowRightIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        </Transition.Child>
                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                        <div className="px-4 sm:px-6">
                            <Dialog.Title className="text-lg font-medium text-gray-900"> Projects </Dialog.Title>
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                            <div className="w-full flex items-center">
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-blue-500 text-white hover:bg-sky-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Commerce</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-emerald-500 text-white hover:bg-green-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Health</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-red-500 text-white hover:bg-red-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Commerce</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-indigo-500 text-white hover:bg-indigo-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Commerce</p>
                                </div>
                            </div>
                            <div className="w-full flex items-center">
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-blue-500 text-white hover:bg-sky-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Commerce</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-emerald-500 text-white hover:bg-green-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Health</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-red-500 text-white hover:bg-red-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Commerce</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-indigo-500 text-white hover:bg-indigo-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Commerce</p>
                                </div>
                            </div>
                            <div className="w-full flex items-center">
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-rose-500 text-white hover:bg-rose-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Commerce</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-lime-500 text-white hover:bg-lime-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Health</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-orange-500 text-white hover:bg-orange-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Commerce</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-slate-500 text-white hover:bg-slate-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Commerce</p>
                                </div>
                            </div>
                            <div className="w-full flex items-center">
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-cyan-500 text-white hover:bg-sky-cyan rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Commerce</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-teal-500 text-white hover:bg-teal-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Health</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-pink-500 text-white hover:bg-pink-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Commerce</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center py-2">
                                    <div className="flex items-center bg-purple-500 text-white hover:bg-purple-500 rounded w-12 h-12">
                                        <CalculatorIcon className='w-6 h-6 ml-3'/>
                                    </div>
                                    <p className="text-base">Commerce</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Transition.Child>
                </div>
                </div>
            </Dialog>
            </Transition.Root>
    </div>
  )
}
