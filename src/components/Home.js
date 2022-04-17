import React from 'react'

function Home() {
  return (
    <section>
        <Navbar/>
        <div className='container'>
            <div className='row'>
                <div className=' col s12 m4 l3'>
                  <Profile/>
                </div>

                <div className='col s12 m8 l9'>
                  <About/>
                  <Skills/>
                  <Experience/>
                  <Education/>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Home