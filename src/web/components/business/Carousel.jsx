import { useState } from "react"
import clsx from "clsx";

/*slideImages = []*/

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function goToPrevSlide() {
    setCurrentSlide(currentSlide === 0 ? 4 : currentSlide - 1);
  }

  function goToNextSlide() {
    setCurrentSlide(currentSlide === 4 ? 0 : currentSlide + 1);
  }



  return (

    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {
          [0, 1, 2, 3, 4].map(function (e, index) {
            return (
              <div className={clsx(
                "duration-700 ease-in-out",
                index === currentSlide ? "" : "hidden"
              )} data-carousel-item key={index}>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp" className="absolute block w-full h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
            )
          })
        }

      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {
          [0, 1, 2, 3, 4].map(function (e, index) {
            return (
              <button key={index} type="button" className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "border-black bg-black"
                }`} aria-current={index === currentSlide ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
                onClick={() => setCurrentSlide(index)}
              >

              </button>

            )
          })
        }
      </div>
      <button onClick={goToPrevSlide} type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button onClick={goToNextSlide} type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>

  )
}
export default Carousel
