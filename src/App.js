import './App.css';
import React,{useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navimage from './asset/Group 220.png'
import Flower from './asset/Group 195.png'
import Card from './asset/Group 207.png'
import CardActive from './asset/Group 205.png'
import About1 from './asset/Group 39.png'
import About2 from './asset/Group 55.png'
import About3 from './asset/Group 64.png'
import Quote from './asset/Group 86.png'
import FooterLogo from './asset/Group 225.png'
import logo1 from './asset/Group 99.png'
import logo2 from './asset/Group 100.png'
import logo3 from './asset/Group 105.png'
import Plant from './asset/Group 134.png'
import Leaf from './asset/Group 114.png'
import Woman from './asset/woman2.webp'
import Soap from './asset/soap.webp'
import HandWash1 from './asset/handwash2.webp'
import HandWash2 from './asset/handwash.webp'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {



  return (
    <div className="App">

          {/*  navigation section start */}

      <div className="wrapper">
        <div className="navigation max-width">
        <div className="first-half"> <div className="logo"> <img src={Navimage} /> </div> <h4 className="organic">Organic</h4> </div>
        <div className="second-half">
          <a href="">home</a>
          <a href="">products</a>
          <a href="">Blog</a>
          <a href="">About us</a>
          <a href="">Contact</a>
        </div>
        </div>
      </div>
        
          {/*  navigation section end */}



          {/*  conatainer 2 start */}
      <div className="wrapper-2">
        <div className="container-2 max-width">
          <div className="first-box">
            <h4 className="healthy">Healthy life with</h4>
            <h2 className="nature">Nature Organic</h2>
            <p className="demo">vegetables are the edible parts of plant vegetables are the edible part of the plant</p>
             <button className="explore-now">explore now</button>
            </div>
          <div className="second-box">
               
          <div className="rectangle-image-box">
              <img src={Flower} alt="" />
          </div>
          </div>
        </div>
      </div>

      
          {/*  container 2 end */}



          {/*  container 3 start */}


      <div className="wrapper-3">
        <div className="container-3 max-width">
          <div className="first-box">
          <h6 className="welcome">Welcome to nature</h6>
          <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos facere sit temporibus debitis magnam.</p>
         
          </div>
          <div className="second-box cards">
            <div className="card"> <div className="image">  <img src={Card} alt="" /> </div> </div>
            <div className="card">  <div className="image"> <img src={Card} alt="" /></div>  </div>
            <div className="card">  <div className="image"> <img src={CardActive} alt="" /></div>  </div>
            <div className="card">  <div className="image"> <img src={Card} alt="" /></div> </div>
          </div>
        </div>
      </div>

           {/*  container 3 end*/}




           {/*  container 4 start */}


     <div className="wrapper-4">
       <div className="container-4 max-width">
         <div className="first-box">
         <h6 className="welcome">Welcome to nature</h6>
         <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos facere sit temporibus debitis magnam.</p>
        </div>
         <div className="second-box">
        
         <OwlCarousel  className="owl-theme" items={6} slideBy={1} loop margin={80} nav >
             <div className='item'>
                 <img src={About1} />
             </div>
             <div className='item'>
    
             <img src={About2} />
             </div>
             <div className='item'>
       
             <img src={About3} />
             </div>
             <div className='item'>
                 <img src={About1} />
             </div>
             <div className='item'>
    
             <img src={About2} />
             </div>
             <div className='item'>
       
             <img src={About3} />
             </div>
             <div className='item'>
                 <img src={About1} />
             </div>
             <div className='item'>
    
             <img src={About2} />
             </div>
             <div className='item'>
       
             <img src={About3} />
             </div>
             <div className='item'>
                 <img src={About1} />
             </div>
             <div className='item'>
    
             <img src={About2} />
             </div>
             <div className='item'>
       
             <img src={About3} />
             </div>
         </OwlCarousel> 
         </div>
       </div>
     </div>


          {/*  container 4 end */}





          {/*  plant wrapper testimonial and subscribe section */}

     <section className="plant-wrapper">

     <div className="plant-image">
          <img src={Plant} />
     </div>

     {/* testimonail section start */}
    
     
     <div className="testimonial-wrapper">
     <div className="testimonial-section max-width">
        <div className="quote">
           <img src={Quote} />
        </div>
     <OwlCarousel  className="owl-theme" items={1} slideBy={1} loop margin={80}  >
             <div className="item">
                 <div className="image">
                    
                  </div>
             <h4 className="name">Jane Doe</h4>
             <p className="lorem1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dicta blanditiis voluptatem in modi saepe laudantium iusto id cupiditate quasi earum sed iste cumque! Saepe?</p>
             </div>
             <div className="item">
                 <div className="image">
               
                  </div>
             <h4 className="name">john </h4>
             <p className="lorem1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dicta blanditiis voluptatem in modi saepe laudantium iusto id cupiditate quasi earum sed iste cumque! Saepe?</p>
             </div>
             <div className="item">
                 <div className="image">
               
                  </div>
             <h4 className="name">smith</h4>
             <p className="lorem1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dicta blanditiis voluptatem in modi saepe laudantium iusto id cupiditate quasi earum sed iste cumque! Saepe?</p>
             </div>
             </OwlCarousel>          
     </div>
   </div>


        {/* testimonial section end */}




        {/* subscribe  section start */}

   <div className="subscribe-wrapper">
     <div className="subscribe-section text-center max-width">
       <div className="box">
       <h6 className="welcome"> Subscribe to Our Newsletter </h6>
       <p className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem delectus impedit ducimus quos pariatur.</p>
       
       <div class="input-group mb-3">
       <input type="text" class="form-control" placeholder="Enter your email address" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
       <div class="input-group-append">
         <span class="" id="basic-addon2"> subscribe</span>
       </div>
     </div>
       </div>
     </div>
   </div>

     </section>

       {/* subscribe  section end */}

 
          {/*  plant wrapper testimonial and subscribe section end */}


              {/* blog section start */}


      <div className="blog-wrapper">
        <div className="blog-section max-width">
          <div className="first-section text-center">
             <div className="blog-head-image">
                    <img  src={Leaf}  alt="leaf"/>
             </div>
             <h6 className="welcome">  Blog Post One </h6>
             <p className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem delectus impedit ducimus quos pariatur.</p>
          </div>
          <div className="second-section">
          <div className="box text-center">
          <div className="image"> <img src={Soap} /> </div>
            <h5 className="blog-post"> Blog Post One</h5>
            <p className="lorem3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cupiditate dolorum laudantium quos qui ipsum eum libero voluptas ratione tempore!</p>
             <a className="read-more">read more</a>
             <hr className="border-bottom-card" />
             </div>
          <div className="box text-center">
          <div className="image"> <img src={HandWash1} /></div>
          <h5 className="blog-post"> Blog Post One </h5>
          <p className="lorem3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cupiditate dolorum laudantium quos qui ipsum eum libero voluptas ratione tempore!</p>
           <a className="read-more">read more</a>
           <hr className="border-bottom-card"/>
          </div>
          <div className="box text-center">
          <div className="image"> <img src={HandWash2} /></div>
          <h5 className="blog-post">Blog Post One </h5>
          <p className="lorem3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cupiditate dolorum laudantium quos qui ipsum eum libero voluptas ratione tempore!</p>
           <a className="read-more">read more</a>
             <hr className="border-bottom-card" />
          </div>
          </div>
        </div>
      </div>

                {/* blog section end */}


                {/* footer section start */}


      <div className="footer-wrapper">
          <div className="footer max-width">
                 <div className="row">
                      <div className="col-lg-4"> <div className="box-1">  <div className="organic-logo"><img src={FooterLogo} alt="" /></div> <p className="lorem5">Lorem ipsum dolor sit amet consectetur.</p> <div className="footer-bottom-border-2"> ''</div> <h6 className="copyright">copyright 2020 Nature</h6> </div> </div>
                      <div className="col-lg-4"> <div className="box-2"> <h6 className="sub-footer">information</h6><hr className="footer-bottom-border" />  <div className="footer-links">  <a href="">About us</a><a href="">Products</a><a href="">Contacts</a><a href="">Terms of Service</a> </div> </div> </div>
                      <div className="col-lg-4"> <div className="box-3"> <h6 className="sub-footer">Follow Us</h6> <hr className="footer-bottom-border" />   <div className="footer-logos">  <div className="footer-logo">  <img src={logo1} alt="" /> </div>  <div className="footer-logo">  <img src={logo2} alt="" /> </div> <div className="footer-logo">  <img src={logo3} alt="" /> </div> </div> </div> </div>
                 </div>
         
                </div>
      </div>

             {/* footer section end */}

    </div>
  );
}

export default App;
