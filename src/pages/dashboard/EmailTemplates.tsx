import React from 'react'
import Icon from '../../assets/images/icon.png'
import IllustrationOne from '../../assets/images/Amigos Design Jam.png'

export default function EmailTemplates() {
  return (
    <div className='px-24 py-10 bg-gray-100 w-full'>
        <div className="flex">
            <div className="w-1/3 bg-white rounded-sm p-3 flex px-20 py-10 flex-col items-center justify-center">
                <img src={Icon} alt="app-icon" className="w-8 h-8" />
                <p className="text-center text-2xl font-medium">Email template</p>
                <img src={IllustrationOne} alt="illustration-one" className="mt-3 h-40 w-auto bg-blue-400 p-2" />
                <p className="mt-2">Boost your emails with Blush! Create dope emails easy and fast!  Install the Blush plugin to customize all the illustrations!</p>
                <button className="border rounded-sm px-3 py-2 uppercase text-sm">Try now</button>
            </div>
        </div>
    </div>
  )
}
