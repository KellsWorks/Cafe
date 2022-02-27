import React from 'react'
import Icon from '../../../../components/core/Icon'


import {HomeIcon} from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'


export default function MusicPlayer() {
    return (
        <div className='w-full flex'>
            <div className="bg-gray-900 p-3 border-r border-gray-700 w-48 h-screen">
                <Icon/>

                <div className="mt-5 space-y-3">
                    <NavLink to="#" className="flex items-center p-2 text-base bg-blue-300 text-blue-500 rounded-sm dark:text-white hover:bg-blue-200 hover:text-blue-500 dark:hover:bg-gray-700 hover:font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                    </svg><span className="ml-3">Backlog</span>
                    </NavLink>
                </div>

            </div>
            <div className="w-full p-3 bg-gray-900">
                
            </div>
        </div>
    )
}
