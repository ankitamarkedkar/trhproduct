import React from 'react'

export default function Home() {
  return (
    <div>
      <section className="banner-content-block">
                <div className="container">
                    <div className='row'>
                      <div className='col-md-9'>
                      <div class="banner-text">
                                <h1>Get max profit & become successful</h1>
                                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. </p>
                                <a href="/" className='buttonprimary'>Get started</a>
                             </div>
                      </div>
                      <div className='col-md-3'>
                      <div className="banner-img"><img src="images/stock.png" alt="stock"/></div>
                      </div>
                    </div>
                </div>
            </section>
            <section className='aboutsection pt-25 pb-25'>
               <div className='container'>
                <div className='row'>
                  <div className='col-md-6'>
                     <h3>Fast Execution , Low Latency <span><i class='bx bxs-right-arrow-alt'></i></span></h3>
                  </div>
                </div>
               </div>
              
            </section>

    </div>
  )
}
