import React, { useState, useRef } from 'react';

const Row = ({ title, movies }) => {
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      if (direction === 'left') {
        // เลื่อนซ้ายลงหน่อยพร้อม transition
        const targetPosition = Math.max(0, container.scrollLeft - scrollAmount);
        container.scrollTo({
          left: targetPosition,
          behavior: 'smooth'
        });
      } else {
        // เลื่อนขวาปกติ
        const targetPosition = Math.min(container.scrollWidth - container.clientWidth, container.scrollLeft + scrollAmount);
        container.scrollTo({
          left: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className='mb-8'>
      <h2 className='text-white font-bold text-xl md:text-2xl p-4 lg:px-8'>{title}</h2>
      <div className='relative group'>
        <button 
          onClick={() => scroll('left')}
          className='absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/70 rounded-full p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 cursor-pointer hover:scale-110'
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className='absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/70 rounded-full p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 cursor-pointer hover:scale-110'
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <div ref={scrollContainerRef} className='overflow-x-auto scrollbar-hide'>
          <div className='flex space-x-2 p-4 lg:px-8'>
            {movies.map((movie) => (
              <div
                key={movie.id}
                className='relative shrink-0 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] group/movie cursor-pointer'
                onMouseEnter={() => setHoveredMovie(movie.id)}
                onMouseLeave={() => setHoveredMovie(null)}
              >
                <div className='movie-card relative overflow-hidden rounded-lg'>
                  <img
                    className='w-full h-[90px] sm:h-[112px] md:h-[135px] lg:h-[157px] object-cover'
                    src={movie.poster_path}
                    alt='Movie Poster'
                    loading='lazy'
                  />
                  
                  {hoveredMovie === movie.id && (
                    <div className='absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent backdrop-blur-md flex flex-col justify-end p-4 transition-all duration-300 ease-out'>
                      <div className='space-y-3 transform translate-y-4 group-hover/movie:translate-y-0 transition-all duration-300 ease-out'>
                        <div className='flex space-x-3'>
                          <button className='bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg border border-transparent hover:border-gray-300 hover:shadow-xl'>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            <span>เล่น</span>
                          </button>
                          <button className='bg-gray-700/90 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-600 transition-all duration-200 transform hover:scale-105 backdrop-blur-sm shadow-lg border border-gray-600 hover:border-gray-500 hover:shadow-xl'>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                        <div className='flex items-center space-x-2 text-xs opacity-0 group-hover/movie:opacity-100 transition-all duration-300 delay-100'>
                          <span className='text-green-400 font-semibold'>{movie.rating ? `${movie.rating * 10}% Match` : '98% Match'}</span>
                          <span className='text-gray-300'>•</span>
                          <span className='text-gray-300'>{movie.year || '2024'}</span>
                          <span className='text-gray-300'>•</span>
                          <span className='text-gray-300 border border-gray-400 px-1 rounded text-xs'>HD</span>
                        </div>
                        <div className='text-white text-sm opacity-0 group-hover/movie:opacity-100 transition-all duration-300 delay-200'>
                          <p className='font-medium truncate'>{movie.title}</p>
                          <p className='text-gray-300 text-xs'>{movie.genre}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className={`mt-2 transition-all duration-300 ${
                  hoveredMovie === movie.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <p className='text-white text-sm font-medium truncate'>
                    {movie.title || `Movie ${movie.id}`}
                  </p>
                  <p className='text-gray-400 text-xs'>
                    {movie.genre || 'Action • Thriller'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
