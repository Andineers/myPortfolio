import React from 'react'
// import aboutImg from


const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-au\ my-12' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>

        <div className='mt-4 md:mt-0 text-left flex'>
          <div className='my-auto mx-6'>
            <h2 className='text-3xl font-bold mb-4 primary-color'>About Me</h2>
            <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi incidunt recusandae veniam quibusdam nostrum sint debitis a animi, ex eius? Perspiciatis modi a eaque! Mollitia eius labore facilis illum?</p>
          </div>
        </div>

        {/* <img className='mx-auto rounded-3xl py-8 md:py-0' src={} width={300} height={300} /> */}

      </div>

    </div>
  )
}

export default About