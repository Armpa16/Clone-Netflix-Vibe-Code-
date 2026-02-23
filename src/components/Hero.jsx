import React from 'react';
import { heroMovie } from '../data/mockData';

const Hero = () => {
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='relative w-full h-screen text-white'>
      <div className='absolute inset-0'>
        <img
          className='w-full h-full object-cover'
          src={heroMovie.backdrop_path}
          alt={heroMovie.title}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
      </div>
      
      <div className='relative h-full flex items-center'>
        <div className='max-w-4xl px-4 md:px-8 lg:px-16'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight'>
            {heroMovie.title}
          </h1>
          
          <div className='flex items-center space-x-4 mb-6'>
            <div className='flex items-center space-x-2'>
              <div className='flex text-yellow-400'>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className='text-white font-semibold'>8.8</span>
            </div>
            <span className='text-gray-300'>•</span>
            <span className='text-gray-300'>{heroMovie.release_date}</span>
            <span className='text-gray-300'>•</span>
            <span className='text-gray-300 border border-gray-400 px-2 py-1 text-xs rounded'>HD</span>
          </div>
          
          <div className='flex flex-wrap gap-4 mb-6'>
            <button className='flex items-center space-x-2 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all transform hover:scale-105'>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>Play</span>
            </button>
            
            <button className='flex items-center space-x-2 bg-gray-700/80 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all transform hover:scale-105 backdrop-blur-sm'>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>My List</span>
            </button>
            
            <button className='flex items-center space-x-2 bg-gray-700/80 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all transform hover:scale-105 backdrop-blur-sm'>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>More Info</span>
            </button>
          </div>
          
          <div className='max-w-2xl'>
            <p className='text-lg text-gray-200 leading-relaxed'>
              {truncateString(heroMovie.overview, 200)}
            </p>
          </div>
          
          <div className='mt-8 flex flex-wrap gap-2'>
            <span className='px-3 py-1 bg-gray-700/60 rounded-full text-sm backdrop-blur-sm'>Action</span>
            <span className='px-3 py-1 bg-gray-700/60 rounded-full text-sm backdrop-blur-sm'>Sci-Fi</span>
            <span className='px-3 py-1 bg-gray-700/60 rounded-full text-sm backdrop-blur-sm'>Thriller</span>
          </div>
        </div>
      </div>
      
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
