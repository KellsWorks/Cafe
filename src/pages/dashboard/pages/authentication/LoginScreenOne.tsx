import { Link } from 'react-router-dom'
import Icon from '../../../../assets/images/icon.png'

export default function LoginScreenOne() {
  return (
    <div className='bg-white w-full px-72 py-20'>
        <div className="shadow-md rounded hover:shadow-lg flex justify-center items-center">
            <div className="w-1/2 border-r p-5">
                <div className="flex items-center space-x-2">
                    <img src={Icon} alt="app-icon" className="h-6 w-6 object-cover" />
                    <h3 className="text-xl font-semibold text-gray-900">
                        Cafe
                    </h3>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-semibold text-gray-900">Get Started with Care</p>
                    <p className="font-medium mt-2">Start your free 30 days trial period. No credit card required</p>
                    
                    <button type="button" className="w-full mt-2 justify-center text-white bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-300 font-medium rounded text-base px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Sign in with Google
                    </button>

                    <p className="m-3 text-center">Or sign up with email</p>

                    <div>
                        <label htmlFor="email-adress-icon" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">Email address</label>
                        <div className="relative mt-1">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </div>
                        <input type="text" id="email-adress-icon" className="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a valid email address"/>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <label htmlFor="email-adress-icon" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">Password</label>
                        <div className="relative mt-1">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input type="password" id="email-adress-icon" className="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a valid email address"/>
                        </div>
                    </div>

                    <div className="mt-5">
                        <button className="w-full rounded bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 text-white transition duration-150 text-center px-3 py-2 text-base">
                            Continue to login
                        </button>

                        <p className="mt-2">Do not have an account? <span className='hover:underline text-blue-500 hover:text-blue-600 transition duration-150'><Link to={'#'}>create an account</Link></span></p>

                        <p className="mt-2 text-xs">&copy; 2022. All rights reserved.</p>
                    </div>
                </div>
            </div>

            <div className="w-1/2 bg-blue-500">
                
            <div id="default-carousel" data-carousel="slide" className="relative">

            <div className="overflow-hidden relative rounded-lg h-screen-1/2">

            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0" data-carousel-item="active">
            <img src="/docs/images/carousel/carousel-1.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
            </div>

            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full" data-carousel-item="">
            <img src="/docs/images/carousel/carousel-2.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
            </div>

            <div className="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
            <img src="/docs/images/carousel/carousel-3.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
            </div>

            <div className="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
            <img src="/docs/images/carousel/carousel-4.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
            </div>

            <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full" data-carousel-item="">
            <img src="/docs/images/carousel/carousel-5.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
            </div>
            </div>

            <div className="flex absolute bottom-5 left-1/2 space-x-3 -translate-x-1/2">
            <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>

            <button type="button" className="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev="">
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="hidden">Previous</span>
            </span>
            </button>
            <button type="button" className="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next="">
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="hidden">Next</span>
            </span>
            </button>
            </div>

            </div>
        </div>
    </div>
  )
}
