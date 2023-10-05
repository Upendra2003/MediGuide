import React from 'react'
const Home = () => {
  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div class="">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Empowering Your Health Journey with Precision and Care</h2>
                <p class="mt-4 text-base leading-relaxed text-gray-600">Guiding Your Health Choices with Data-Driven Precision and Compassion</p>
                <div className='mt-4' >
                  <button className='rounded-md bg-slate-800 px-7 py-2.5  text-white '>Get Started</button>
                  <button className='ml-4 font-medium'> How it Work</button>
                </div>
            </div>

            <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
                <div class="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                    <img class="ml-auto scale-150 " src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQU9IewO12C_F3rj5gjbA97OswkaokgaOJDHhiw1Pad1s7y3Il' />

                    <img class="absolute -top-4 -left-12" src="" alt="" />
                </div>
            </div>
        </div>
    </div>
    <div>
      
    </div>
</section>

  )
}

export default Home