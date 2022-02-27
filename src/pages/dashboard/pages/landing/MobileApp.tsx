import React from 'react'

import Background from '../../../../../assets/images/mobile-app.bg.png'
import GooglePlay from '../../../../../assets/images/google-play.png'
import AppleStore from '../../../../../assets/images/apple-store.png'
import Mobile from '../../../../../assets/images/mobile-app.png'
import MockUpOne from '../../../../../assets/images/android-smartphone-free-mockup.png'


import {MailIcon, PhoneIcon, CheckCircleIcon, MenuIcon} from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'

export default function MobileApp() {
  return (
    <div>
        <div className="pr-5 pl-5 pt-3 pb-10" style={{ backgroundImage:  `url(${Background})` }}>
            <div className="sm:flex justify-between mt-2">
                <div className="sm:flex items-center">
                    <div className="mr-10 flex items-center">
                      <MailIcon className='w-5 h-5 text-white'/>
                      <p className="ml-3 text-white text-sm">Info@youremail.com</p>
                    </div>
                    <div className="mr-10 flex items-center mt-3 md:mt-0">
                      <PhoneIcon className='w-5 h-5 text-white'/>
                      <p className="ml-3 text-white text-sm">(265) 555-0103</p>
                    </div>

                </div>
                <div className="flex space-x-4 mt-3 md:mt-0">

                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 10.125H12.375L13.125 7.125H10.5V5.625C10.5 4.8525 10.5 4.125 12 4.125H13.125V1.605C12.8805 1.57275 11.9572 1.5 10.9822 1.5C8.946 1.5 7.5 2.74275 7.5 5.025V7.125H5.25V10.125H7.5V16.5H10.5V10.125Z" fill="white"/>
                  </svg>

                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1.5C11.0378 1.5 11.292 1.5075 12.0915 1.545C12.8903 1.5825 13.434 1.70775 13.9125 1.89375C14.4075 2.08425 14.8245 2.34225 15.2415 2.7585C15.6229 3.13342 15.918 3.58694 16.1063 4.0875C16.2915 4.56525 16.4175 5.10975 16.455 5.9085C16.4903 6.708 16.5 6.96225 16.5 9C16.5 11.0378 16.4925 11.292 16.455 12.0915C16.4175 12.8903 16.2915 13.434 16.1063 13.9125C15.9185 14.4133 15.6233 14.867 15.2415 15.2415C14.8665 15.6227 14.413 15.9178 13.9125 16.1063C13.4347 16.2915 12.8903 16.4175 12.0915 16.455C11.292 16.4903 11.0378 16.5 9 16.5C6.96225 16.5 6.708 16.4925 5.9085 16.455C5.10975 16.4175 4.566 16.2915 4.0875 16.1063C3.58674 15.9184 3.13315 15.6232 2.7585 15.2415C2.37705 14.8666 2.08195 14.4131 1.89375 13.9125C1.70775 13.4347 1.5825 12.8903 1.545 12.0915C1.50975 11.292 1.5 11.0378 1.5 9C1.5 6.96225 1.5075 6.708 1.545 5.9085C1.5825 5.109 1.70775 4.566 1.89375 4.0875C2.08143 3.58663 2.3766 3.13299 2.7585 2.7585C3.13325 2.37692 3.58682 2.0818 4.0875 1.89375C4.566 1.70775 5.109 1.5825 5.9085 1.545C6.708 1.50975 6.96225 1.5 9 1.5ZM9 5.25C8.00544 5.25 7.05161 5.64509 6.34835 6.34835C5.64509 7.05161 5.25 8.00544 5.25 9C5.25 9.99456 5.64509 10.9484 6.34835 11.6517C7.05161 12.3549 8.00544 12.75 9 12.75C9.99456 12.75 10.9484 12.3549 11.6517 11.6517C12.3549 10.9484 12.75 9.99456 12.75 9C12.75 8.00544 12.3549 7.05161 11.6517 6.34835C10.9484 5.64509 9.99456 5.25 9 5.25ZM13.875 5.0625C13.875 4.81386 13.7762 4.5754 13.6004 4.39959C13.4246 4.22377 13.1861 4.125 12.9375 4.125C12.6889 4.125 12.4504 4.22377 12.2746 4.39959C12.0988 4.5754 12 4.81386 12 5.0625C12 5.31114 12.0988 5.5496 12.2746 5.72541C12.4504 5.90123 12.6889 6 12.9375 6C13.1861 6 13.4246 5.90123 13.6004 5.72541C13.7762 5.5496 13.875 5.31114 13.875 5.0625ZM9 6.75C9.59674 6.75 10.169 6.98705 10.591 7.40901C11.0129 7.83097 11.25 8.40326 11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25C8.40326 11.25 7.83097 11.0129 7.40901 10.591C6.98705 10.169 6.75 9.59674 6.75 9C6.75 8.40326 6.98705 7.83097 7.40901 7.40901C7.83097 6.98705 8.40326 6.75 9 6.75Z" fill="white"/>
                  </svg>

                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6215 4.24201C16.0489 4.49528 15.4417 4.66161 14.82 4.73551C15.4753 4.34358 15.9658 3.72677 16.2 3.00001C15.585 3.36601 14.9107 3.62251 14.208 3.76126C13.7359 3.25619 13.1102 2.92123 12.4282 2.80844C11.7461 2.69566 11.0459 2.81137 10.4364 3.1376C9.82692 3.46382 9.34227 3.98227 9.05781 4.61235C8.77336 5.24243 8.70504 5.94884 8.86348 6.62176C7.61631 6.55925 6.39623 6.23515 5.28244 5.6705C4.16866 5.10586 3.18607 4.31329 2.39848 3.34426C2.1197 3.82309 1.97319 4.36743 1.97398 4.92151C1.97398 6.00901 2.52748 6.96976 3.36898 7.53226C2.87099 7.51658 2.38395 7.38209 1.94848 7.14001V7.17901C1.94863 7.90328 2.19926 8.60522 2.65786 9.1658C3.11647 9.72638 3.75484 10.1111 4.46473 10.2548C4.00244 10.38 3.51771 10.3985 3.04723 10.3088C3.24738 10.9322 3.63748 11.4774 4.16292 11.8681C4.68836 12.2588 5.32282 12.4754 5.97748 12.4875C5.32684 12.9985 4.58186 13.3762 3.78514 13.5991C2.98842 13.822 2.15557 13.8857 1.33423 13.7865C2.768 14.7086 4.43705 15.1981 6.14173 15.1965C11.9115 15.1965 15.0667 10.4168 15.0667 6.27151C15.0667 6.13651 15.063 6.00001 15.057 5.86651C15.6711 5.42263 16.2012 4.87277 16.6222 4.24276L16.6215 4.24201Z" fill="white"/>
                  </svg>

                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1572 4.8735C16.5 6.21 16.5 9 16.5 9C16.5 9 16.5 11.79 16.1572 13.1265C15.9667 13.8653 15.4095 14.4465 14.7037 14.643C13.422 15 9 15 9 15C9 15 4.58025 15 3.29625 14.643C2.5875 14.4435 2.031 13.863 1.84275 13.1265C1.5 11.79 1.5 9 1.5 9C1.5 9 1.5 6.21 1.84275 4.8735C2.03325 4.13475 2.5905 3.5535 3.29625 3.357C4.58025 3 9 3 9 3C9 3 13.422 3 14.7037 3.357C15.4125 3.5565 15.969 4.137 16.1572 4.8735ZM7.5 11.625L12 9L7.5 6.375V11.625Z" fill="white"/>
                  </svg>

                </div>
            </div>


            <div className="mt-3 bg-white rounded shadow-sm p-3 flex justify-between items-center">
              <MenuIcon className='visible md:hidden h-5 w-5'/>
              <div className="sm:flex items-center hidden md:visible">
                <NavLink to='#' className="font-medium text-base hover:text-indigo-500 uppercase hover:font-medium border-b-2 border-indigo-500 mr-20 transition duration-150">
                  Home
                </NavLink>
                <NavLink to='#' className="font-medium text-base hover:text-indigo-500 uppercase hover:font-medium border-indigo-500 mr-20 transition duration-150">
                  About
                </NavLink>
                <NavLink to='#' className="font-medium text-base hover:text-indigo-500 uppercase hover:font-medium border-indigo-500 mr-20 transition duration-150">
                  Features
                </NavLink>
              </div>
              <div className="sm:flex items-center ">
                <NavLink to='#' className="hidden md:visible font-medium text-base hover:text-indigo-500 uppercase hover:font-medium border-indigo-500 mr-20 transition duration-150">
                  Screenshot
                </NavLink>
                <NavLink to='#' className="hidden md:visible font-medium text-base hover:text-indigo-500 uppercase hover:font-medium border-indigo-500 mr-20 transition duration-150">
                  Blog
                </NavLink>
                <button className="bg-indigo-500 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300 rounded text-white py-1 px-3 uppercase">
                  download
                </button>
              </div>
            </div>

            <div className="mt-10 px-10 flex">
              <div className="w-1/2 border-8 rounded border-indigo-500 p-10">
                <div className="bg-white -ml-20 -mb-10 p-5 rounded">
                  <h3 className="text-3xl text-indigo-500 font-bold uppercase">
                  A Great App Makes Your Life Better
                  </h3>
                  <p className="mt-3">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                  <h3 className="mt-10 font-xl uppercase font-bold">
                  Download Cafe App Now
                  </h3>

                  <div className="flex items-center space-x-3 mt-2">
                    <img src={GooglePlay} alt="google-play" />
                    <img src={AppleStore} alt="google-play" />
                  </div>
                </div>
              </div>

              <div className='w-1/2 flex items-center justify-center'>
                <img src={Mobile} alt="mobile-with-app" className='h-96' />
              </div>
            </div>
        </div>


        <div className="py-20 px-20">
          <h3 className="text-3xl text-center font-bold uppercase">
          About Our App
          </h3>
          <p className="mt-5 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>

          <div className="w-full flex items-center mt-10">
            <div className="w-1/2">
              <img src={MockUpOne} alt="smartphone-with-apsp" className='' />
            </div>
            <div className="w-1/2 space-y-3">
              <div className="shadow hover:shadow-md transition duration-150 rounded p-3">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className='w-5 h-5 text-green-500'/>
                  <h3 className="text-lg uppercase font-medium">
                  Creative design
                  </h3>
                </div>
                
                <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                  </p>
              </div>
              <div className="shadow hover:shadow-md transition duration-150 rounded p-3">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className='w-5 h-5 text-green-500'/>
                  <h3 className="text-lg uppercase font-medium">
                  Creative design
                  </h3>
                </div>
                
                <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                  </p>
              </div>
              <div className="shadow hover:shadow-md transition duration-150 rounded p-3">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className='w-5 h-5 text-green-500'/>
                  <h3 className="text-lg uppercase font-medium">
                  Creative design
                  </h3>
                </div>
                
                <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                  </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
