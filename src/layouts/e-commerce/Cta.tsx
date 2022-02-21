import React from 'react'

export default function Cta() {
  return (
    <div className='p-3 w-full flex justify-between'>
        <div className="w-1/5 flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.05002 6.04999C8.36284 4.73717 10.1434 3.99963 12 3.99963C13.8566 3.99963 15.6372 4.73717 16.95 6.04999C18.2628 7.36281 19.0004 9.14338 19.0004 11C19.0004 12.8566 18.2628 14.6372 16.95 15.95L12 20.9L7.05002 15.95C6.39993 15.3 5.88425 14.5283 5.53242 13.6789C5.1806 12.8296 4.99951 11.9193 4.99951 11C4.99951 10.0807 5.1806 9.17037 5.53242 8.32104C5.88425 7.47172 6.39993 6.70001 7.05002 6.04999ZM12 13C12.5304 13 13.0392 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96085 13.4142 9.58578C13.0392 9.2107 12.5304 8.99999 12 8.99999C11.4696 8.99999 10.9609 9.2107 10.5858 9.58578C10.2107 9.96085 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13Z" fill="#B0BABF"/>
            </svg>

            <p className='ml-2'>
                Blantyre, Malawi
            </p>
        </div>

        <div className='w-3/5 flex items-center'>
            <p className="mr-4">
                Best Sellers
            </p>
            <p className="mr-4">
                Books
            </p>
            <p className="mr-4">
                Computers
            </p>
            <p className="mr-4">
                Fashion
            </p>
            <p className="mr-4">
                Health
            </p>
            <p className="mr-4">
                Best Sellers
            </p>
            <p className="mr-4">
                Pharmacy
            </p>
            <p className="mr-4">
                Toys & Games
            </p>
        </div>

        <div className='w-1/5 justify-end'>
            <p className="mr-4 justify-end">
                Become a seller
            </p>
        </div>
    </div>
  )
}
