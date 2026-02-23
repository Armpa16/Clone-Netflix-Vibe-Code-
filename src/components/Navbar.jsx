import React, { useState } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-gradient-to-b from-black/70 to-transparent'
    }`}>
      <div className='flex justify-between items-center p-4 lg:px-8'>
        <div className='flex items-center space-x-8'>
          <h1 className='text-red-600 text-3xl md:text-4xl font-bold cursor-pointer hover:text-red-500 transition-colors'>
            NETFLIX
          </h1>
          <nav className='hidden md:flex space-x-6'>
            <a href='#' className='text-white hover:text-gray-300 transition-colors font-medium'>Home</a>
            <a href='#' className='text-gray-300 hover:text-white transition-colors'>TV Shows</a>
            <a href='#' className='text-gray-300 hover:text-white transition-colors'>Movies</a>
            <a href='#' className='text-gray-300 hover:text-white transition-colors'>New & Popular</a>
            <a href='#' className='text-gray-300 hover:text-white transition-colors'>My List</a>
          </nav>
        </div>
        
        <div className='flex items-center space-x-4'>
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className='text-white hover:text-gray-300 transition-colors'
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <button className='hidden md:block text-white hover:text-gray-300 transition-colors'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          
          <div className='relative'>
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className='flex items-center space-x-2 text-white hover:text-gray-300 transition-colors'
            >
              <div className='w-8 h-8 bg-gray-600 rounded flex items-center justify-center'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showMenu && (
              <div className='absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700'>
                <a href='#' className='block px-4 py-2 text-white hover:bg-gray-800 transition-colors'>Manage Profiles</a>
                <a href='#' className='block px-4 py-2 text-white hover:bg-gray-800 transition-colors'>Account</a>
                <a href='#' className='block px-4 py-2 text-white hover:bg-gray-800 transition-colors'>Help Center</a>
                <hr className='border-gray-700 my-1' />
                <a href='#' className='block px-4 py-2 text-white hover:bg-gray-800 transition-colors'>Signout of Netflix</a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {showSearch && (
        <div className='px-4 pb-4 lg:px-8'>
          <input 
            type='text' 
            placeholder='Search movies, TV shows...'
            className='w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600'
            autoFocus
          />
        </div>
      )}
    </div>
  )
}

export default Navbar