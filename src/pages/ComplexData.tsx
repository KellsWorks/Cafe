import {
    BellIcon, ChevronDownIcon, UserIcon, MenuIcon
} from '@heroicons/react/solid'

export default function ComplexData() {
  return (
    <div>
        <div className="bg-gray-50 flex w-full justify-between p-3 border-b">
            <div className="flex items-center">
                <MenuIcon className='w-5 h-5'/>
                <h3 className="text-xl font-semibold ml-2">
                    Cafe
                </h3>
            </div>
            <div className="flex items-center">

                <div className="border rounded-sm flex mr-3">
                    <div className="border-r p-2 ">
                        <p className="mr-3 font-medium">
                            All Catalogs
                        </p>
                    </div>
                    <div className="flex items-center bg-white">
                        <div className="ml-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.00077C8.93913 6.00077 7.92172 6.42219 7.17157 7.17234C6.42143 7.92248 6 8.9399 6 10.0008C6 11.0616 6.42143 12.079 7.17157 12.8292C7.92172 13.5793 8.93913 14.0008 10 14.0008C11.0609 14.0008 12.0783 13.5793 12.8284 12.8292C13.5786 12.079 14 11.0616 14 10.0008C14 8.9399 13.5786 7.92248 12.8284 7.17234C12.0783 6.42219 11.0609 6.00077 10 6.00077ZM4 10.0008C3.99988 9.05647 4.22264 8.12548 4.65017 7.28351C5.0777 6.44154 5.69792 5.71236 6.4604 5.15529C7.22287 4.59822 8.10606 4.22898 9.03815 4.0776C9.97023 3.92622 10.9249 3.99698 11.8245 4.28412C12.724 4.57126 13.5432 5.06667 14.2152 5.73006C14.8872 6.39346 15.3931 7.2061 15.6919 8.1019C15.9906 8.9977 16.0737 9.95136 15.9343 10.8853C15.795 11.8193 15.4372 12.7072 14.89 13.4768L19.707 18.2938C19.8892 18.4824 19.99 18.735 19.9877 18.9972C19.9854 19.2594 19.8802 19.5102 19.6948 19.6956C19.5094 19.881 19.2586 19.9862 18.9964 19.9884C18.7342 19.9907 18.4816 19.8899 18.293 19.7078L13.477 14.8918C12.5794 15.53 11.5233 15.9089 10.4247 15.9869C9.326 16.0648 8.22707 15.8389 7.2483 15.3337C6.26953 14.8286 5.44869 14.0638 4.87572 13.1231C4.30276 12.1824 3.99979 11.1022 4 10.0008Z" fill="#B0BABF"/>
                            </svg>
                        </div>
                        <input placeholder='Search Catalogs' type="text" className="outline-none px-3 py-2 border-0" />
                    </div>
                </div>

                <div className="flex space-x-2">
                    <p className="font-medium">
                        IBM
                    </p>
                    <ChevronDownIcon className='w-5 h-5'/>
                </div>

                <button className="ml-2">
                    <BellIcon className='w-5 h-5'/>
                </button>

                <button className='ml-2'>
                    <UserIcon className='w-5 h-5'/>
                </button>
            </div>
        </div>
        <div className="bg-white">
        
            <nav className="flex  pl-5 pr-5 pt-3 pb-3 text-gray-700 border-b" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        Projects
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <a href="#" className="ml-1 font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">AA_DA1</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="ml-1 font-medium text-gray-400 md:ml-2 dark:text-gray-500">Bank Customers</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="w-full flex">
                <div className="w-72 p-5 border-r h-full">
                    <p>Data Quality Score</p>

                    <div className="flex mt-3 items-baseline">
                        <h3 className="font-semibold text-2xl mr-4">75%</h3>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 14.293C16.8946 14.4805 16.9999 14.7348 16.9999 15C16.9999 15.2652 16.8946 15.5195 16.7071 15.707L12.7071 19.707C12.5196 19.8945 12.2652 19.9998 12.0001 19.9998C11.7349 19.9998 11.4806 19.8945 11.2931 19.707L7.29308 15.707C7.19757 15.6148 7.12139 15.5044 7.06898 15.3824C7.01657 15.2604 6.98898 15.1292 6.98783 14.9964C6.98668 14.8636 7.01198 14.7319 7.06226 14.609C7.11254 14.4861 7.18679 14.3745 7.28069 14.2806C7.37458 14.1867 7.48623 14.1125 7.60913 14.0622C7.73202 14.0119 7.8637 13.9866 7.99648 13.9877C8.12926 13.9889 8.26048 14.0165 8.38249 14.0689C8.50449 14.1213 8.61483 14.1975 8.70708 14.293L11.0001 16.586V5C11.0001 4.73478 11.1054 4.48043 11.293 4.29289C11.4805 4.10536 11.7349 4 12.0001 4C12.2653 4 12.5197 4.10536 12.7072 4.29289C12.8947 4.48043 13.0001 4.73478 13.0001 5V16.586L15.2931 14.293C15.4806 14.1055 15.7349 14.0002 16.0001 14.0002C16.2652 14.0002 16.5196 14.1055 16.7071 14.293Z" fill="#F76659"/>
                        </svg>
                        <p>3</p>
                    </div>

                    <div className="w-full bg-blue-300 h-1 rounded-sm mt-2">
                        <div className="h-1 bg-blue-500 w-16 rounded-r"></div>
                    </div>

                    <div className='mt-5'>
                        <p>Selected data class</p>

                        <div className="flex mt-3 items-baseline">
                            <h3 className="font-semibold text-lg mr-4">257</h3>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 14.293C16.8946 14.4805 16.9999 14.7348 16.9999 15C16.9999 15.2652 16.8946 15.5195 16.7071 15.707L12.7071 19.707C12.5196 19.8945 12.2652 19.9998 12.0001 19.9998C11.7349 19.9998 11.4806 19.8945 11.2931 19.707L7.29308 15.707C7.19757 15.6148 7.12139 15.5044 7.06898 15.3824C7.01657 15.2604 6.98898 15.1292 6.98783 14.9964C6.98668 14.8636 7.01198 14.7319 7.06226 14.609C7.11254 14.4861 7.18679 14.3745 7.28069 14.2806C7.37458 14.1867 7.48623 14.1125 7.60913 14.0622C7.73202 14.0119 7.8637 13.9866 7.99648 13.9877C8.12926 13.9889 8.26048 14.0165 8.38249 14.0689C8.50449 14.1213 8.61483 14.1975 8.70708 14.293L11.0001 16.586V5C11.0001 4.73478 11.1054 4.48043 11.293 4.29289C11.4805 4.10536 11.7349 4 12.0001 4C12.2653 4 12.5197 4.10536 12.7072 4.29289C12.8947 4.48043 13.0001 4.73478 13.0001 5V16.586L15.2931 14.293C15.4806 14.1055 15.7349 14.0002 16.0001 14.0002C16.2652 14.0002 16.5196 14.1055 16.7071 14.293Z" fill="#F76659"/>
                            </svg>
                            <p>3</p>
                        </div>

                        <div className="w-full bg-blue-300 h-1 rounded-sm mt-2">
                            <div className="h-1 bg-blue-500 w-32 rounded-r"></div>
                        </div>

                        <div className="mt-5 border-b pb-3">
                            <p>Analysis Status <span className="ml-10 font-semibold">Completed</span></p>
                            <p>Last colomn analysis <span className="ml-10 font-semibold mt-2">Confirmed</span></p>
                            <p>Last DQ analysis <span className="ml-10 font-semibold mt-2">22 February 2022</span></p>
                        </div>

                        <div className="mt-2 pt-1">
                            <div className="border p-2 rounded-sm flex items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.00077C8.93913 6.00077 7.92172 6.42219 7.17157 7.17234C6.42143 7.92248 6 8.9399 6 10.0008C6 11.0616 6.42143 12.079 7.17157 12.8292C7.92172 13.5793 8.93913 14.0008 10 14.0008C11.0609 14.0008 12.0783 13.5793 12.8284 12.8292C13.5786 12.079 14 11.0616 14 10.0008C14 8.9399 13.5786 7.92248 12.8284 7.17234C12.0783 6.42219 11.0609 6.00077 10 6.00077ZM4 10.0008C3.99988 9.05647 4.22264 8.12548 4.65017 7.28351C5.0777 6.44154 5.69792 5.71236 6.4604 5.15529C7.22287 4.59822 8.10606 4.22898 9.03815 4.0776C9.97023 3.92622 10.9249 3.99698 11.8245 4.28412C12.724 4.57126 13.5432 5.06667 14.2152 5.73006C14.8872 6.39346 15.3931 7.2061 15.6919 8.1019C15.9906 8.9977 16.0737 9.95136 15.9343 10.8853C15.795 11.8193 15.4372 12.7072 14.89 13.4768L19.707 18.2938C19.8892 18.4824 19.99 18.735 19.9877 18.9972C19.9854 19.2594 19.8802 19.5102 19.6948 19.6956C19.5094 19.881 19.2586 19.9862 18.9964 19.9884C18.7342 19.9907 18.4816 19.8899 18.293 19.7078L13.477 14.8918C12.5794 15.53 11.5233 15.9089 10.4247 15.9869C9.326 16.0648 8.22707 15.8389 7.2483 15.3337C6.26953 14.8286 5.44869 14.0638 4.87572 13.1231C4.30276 12.1824 3.99979 11.1022 4 10.0008Z" fill="#B0BABF"/>
                                </svg>
                                <input placeholder='Find a column' type="text" className="w-full outline-none border-none" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-3/4 h-72 bg-gray-50">
                    <div className="border-b pl-5 pt-5 pr-5 bg-white">
                        <div className="flex justify-between items-center">
                            <p className='text-lg font-semibold'>Data asset</p>
                            <div className="flex">
                                <button className="border text-base py-2 px-3 rounded-sm flex items-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.586 5.58598C15.7705 5.39496 15.9912 5.24259 16.2352 5.13778C16.4792 5.03296 16.7416 4.97779 17.0072 4.97548C17.2728 4.97317 17.5361 5.02377 17.7819 5.12434C18.0277 5.2249 18.251 5.3734 18.4388 5.56119C18.6266 5.74897 18.7751 5.97228 18.8756 6.21807C18.9762 6.46386 19.0268 6.72722 19.0245 6.99278C19.0222 7.25834 18.967 7.52078 18.8622 7.76479C18.7574 8.0088 18.605 8.22949 18.414 8.41398L17.621 9.20698L14.793 6.37898L15.586 5.58598ZM13.379 7.79298L5 16.172V19H7.828L16.208 10.621L13.378 7.79298H13.379Z" fill="#252C32"/>
                                    </svg>
                                    <p className='ml-2'>Edit</p>
                                </button>
                                <button className="bg-blue-500 text-white ml-2 text-base py-2 px-3 rounded-sm flex items-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9999 9C13.7347 9 13.4803 8.89464 13.2928 8.70711C13.1053 8.51957 12.9999 8.26522 12.9999 8C12.9999 7.73478 13.1053 7.48043 13.2928 7.29289C13.4803 7.10536 13.7347 7 13.9999 7H18.9999C19.2651 7 19.5195 7.10536 19.707 7.29289C19.8946 7.48043 19.9999 7.73478 19.9999 8V13C19.9999 13.2652 19.8946 13.5196 19.707 13.7071C19.5195 13.8946 19.2651 14 18.9999 14C18.7347 14 18.4803 13.8946 18.2928 13.7071C18.1053 13.5196 17.9999 13.2652 17.9999 13V10.414L13.7069 14.707C13.5194 14.8945 13.2651 14.9998 12.9999 14.9998C12.7348 14.9998 12.4804 14.8945 12.2929 14.707L9.99992 12.414L5.70692 16.707C5.51832 16.8892 5.26571 16.99 5.00352 16.9877C4.74132 16.9854 4.49051 16.8802 4.3051 16.6948C4.11969 16.5094 4.01452 16.2586 4.01224 15.9964C4.00997 15.7342 4.11076 15.4816 4.29292 15.293L9.29292 10.293C9.48045 10.1055 9.73475 10.0002 9.99992 10.0002C10.2651 10.0002 10.5194 10.1055 10.7069 10.293L12.9999 12.586L16.5859 9H13.9999Z" fill="white"/>
                                    </svg>
                                    <p className="ml-2">Analyse</p>
                                </button>
                            </div>
                        </div>

                        <div className='mt-2'>
                            <h3 className="text-3xl font-semibold">Bank Customers</h3>
                            <div className="flex">
                                <div className="border-r flex">
                                    <p className="mr-3">Add rule set</p>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H13V16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V13H8C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11H11V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" fill="#252C32"/>
                                    </svg>
                                </div>
                                <div className="flex ml-2">
                                    <p className="mr-3">Add rule</p>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H13V16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V13H8C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11H11V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" fill="#252C32"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="flex space-x-6">
                                <p className="border-b-2 font-semibold border-black pb-2">Data rules</p>
                                <p className='pb-2'>Columns</p>
                                <p className='pb-2'>Data Quality</p>
                                <p className='pb-2'>Data Classes</p>
                                <p className='pb-2'>Governance</p>
                                <p className='pb-2'>Data types</p>
                                <p className='pb-2'>Key</p>
                            </div>
                        </div>
                    </div>


                    <div className="m-5 bg-white rounded-sm border p-3">
                        <div className="w-full flex justify-between">
                            <div className="flex">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.293 13.293C11.4806 13.1055 11.7349 13.0002 12 13.0002C12.2652 13.0002 12.5195 13.1055 12.707 13.293L16 16.586L19.293 13.293C19.3853 13.1975 19.4956 13.1213 19.6176 13.0689C19.7396 13.0165 19.8709 12.9889 20.0036 12.9878C20.1364 12.9866 20.2681 13.0119 20.391 13.0622C20.5139 13.1125 20.6255 13.1867 20.7194 13.2806C20.8133 13.3745 20.8876 13.4862 20.9379 13.6091C20.9881 13.732 21.0134 13.8636 21.0123 13.9964C21.0111 14.1292 20.9835 14.2604 20.9311 14.3824C20.8787 14.5044 20.8025 14.6148 20.707 14.707L16.707 18.707C16.5195 18.8945 16.2652 18.9998 16 18.9998C15.7349 18.9998 15.4806 18.8945 15.293 18.707L11.293 14.707C11.1056 14.5195 11.0002 14.2652 11.0002 14C11.0002 13.7349 11.1056 13.4805 11.293 13.293Z" fill="#252C32"/>
                                </svg>  
                                <h3 className="2xl font-semibold">Quality Score Change</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
