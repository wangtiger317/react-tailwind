import logo from './images/gtr-logo.png';
import banner from './images/banner-pic.jpeg';
import gray from './images/gtr-gray.png';
import tester from './videos/tester.mkv';
import ScrollToTop from './scroll-to-top';
import Cars from './cars.json';
import React, { useState, useRef } from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import { Row, Col, Form, Button, Space } from 'antd';
import 'antd/dist/antd.css';

function Navbar(props){
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const {setMenu} = props;
  function handleSelect() {
    setMenu(true);
  }

return(
<nav className="flex justify-between md:justify-between p-4 font-medium bg-slate-400">


  <div className="flex items-center cursor-pointer">
<Link to='/'><img src={gray} className="h-10 md:h-14"/></Link>
</div>


{
  !isOpen ? (<div class="space-y-2 md:hidden mt-1.5" onClick={handleSelect}>
  <span class="block w-6 h-0.5 bg-white"></span>
  <span class="block w-6 h-0.5 bg-white"></span>
  <span class="block w-6 h-0.5 bg-white"></span>
</div>) : (
<div><span className='text-gray-600 text-4xl'>X</span></div>
  )
}

<ul className="hidden md:flex text-white space-x-8 p-4 text-xl">
  <Link to="/"><li className="cursor-pointer hover:opacity-300 hover:duration-300 text-white">Car Hire</li></Link>
  <Link to="/about"><li className="cursor-pointer hover:opacity-300 hover:duration-300 text-white">About</li></Link>
</ul>


</nav>
)
}

function First(){
  const [show, setShow] = useState(false);

  return(
    <div className="">
    {/* Code block starts */}
    <>
            <div className="lg:px-6 xl:px-0 bg-gradient-to-l from-gray-500">
                <div className="container mx-auto relative z-20">
                  
                
                </div>
                <div className="mx-auto container relative z-0 px-4 xl:px-0">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
                            <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color font-neon">GTR HIRE</h1>
                            <div className="w-full flex justify-center md:block">
                            <Link to='/about'><button className="hover:opacity-90 bg-blue-600 py-3 px-10 lg:py-4 lg:px-15 rounded-full text-white text-sm md:text-lg f-f-p">Learn More</button></Link>
                            </div>
                        </div>
                        <div className="w-auto md:w-1/2 sm:w-4/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
                            {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"> */}
                            <img className="md:absolute md:w-3/4 md:-ml-28" src="https://i.ibb.co/8cpCZMd/GTR-Banner-4-removebg-preview.png" alt />
                        </div>
                    </div>
                </div>
            </div>
        </>

    {/* Code block ends */}
</div>

  )
}

function Fleet(){

  const handleClick = event => {
console.log(event.currentTarget.parentNode.parentNode.querySelector('span').textContent)
localStorage.setItem('myCar', event.currentTarget.parentNode.parentNode.querySelector('span').textContent)

Cars.map(car => {
  if(event.currentTarget.parentNode.parentNode.querySelector('span').textContent == car.Name){
    localStorage.setItem('carThumbnail', event.currentTarget.parentNode.parentNode.parentNode.querySelector('img').src)
  }
})

  };


  return(
    <main className="px16 py-6 bg-gray-100">

      <h2 className="text-center font-medium text-2xl text-black">Fleet Cars</h2>

<div className="mt-8 grid lg:grid-cols-3 gap-10 p-4">
  
    <div className="bg-indigo-200 rounded overflow-hidden shadow-md">
 <img src="https://i.ibb.co/X4KK0Xb/Front-Right.jpg" alt='rs3' className='w-full sm:h-48 object-cover lg:h-auto'/>
<div className='m-4'>
<span className='font-bold block text-center text-lg text-black'>Golf-R</span>
<span className='block text-black text-lg font-medium text-center'>1 Day Hire: <span className="text-2xl text-green-500">£350</span></span>
<span className='block text-black text-lg font-medium text-center'>Weekend Hire: <span className="text-2xl text-green-500">£750</span></span>

<div className='flex justify-around mt-4'>
<a href='tel:07412765891'><button className='text-white font-bold bg-green-500 px-8 py-4 rounded-full md:rounded-md text-md md:px-12 md:py-5'>Call</button></a>
<button className='text-white font-bold bg-blue-500 px-8 py-4  rounded-full md:rounded-md text-md md:px-12 md:py-5' onClick={handleClick}><Link to="/book" className='text-white'>Book</Link></button>
</div>
</div>



</div>

<div className="bg-indigo-200 rounded overflow-hidden shadow-md">
 <img src="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/309620443_111982041682706_1689555098498838449_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=iHQx8q8153YAX8qSFgc&_nc_ht=scontent-lcy1-1.xx&oh=00_AT-0c8F18TVEoaEEIJb10RC9sDxsuDWYABY_b6kitehmqg&oe=63550C98" alt='rs3' className='w-full sm:h-48 object-cover lg:h-auto'/>
<div className='m-4'>
<span className='font-bold block text-center text-lg text-black'>Mercedes A45</span>
<span className='block text-black text-lg font-medium text-center'>1 Day Hire: <span className="text-2xl text-green-500">£350</span></span>
<span className='block text-black text-lg font-medium text-center'>Weekend Hire: <span className="text-2xl text-green-500">£750</span></span>
<div className='flex justify-around mt-4'>
<a href='tel:07412765891'><button className='text-white font-bold bg-green-500 px-8 py-4  rounded-full md:rounded-md text-md md:px-12 md:py-5'>Call</button></a>
<button className='text-white font-bold bg-blue-500 px-8 py-4  rounded-full md:rounded-md text-md md:px-12 md:py-5' onClick={handleClick}><Link to="/book" className='text-white'>Book</Link></button>
</div>
</div>



</div>


<div className="bg-indigo-200 rounded overflow-hidden shadow-md">
 <img src="https://i.ibb.co/cNcH267/Front-Right-Day.jpg" alt='rs3' className='w-full sm:h-48 object-cover lg:h-auto'/>
<div className='m-4'>
<span className='font-bold block text-center text-lg text-black'>Audi S3</span>
<span className='block text-black text-lg font-medium text-center'>1 Day Hire: <span className="text-2xl text-green-500">£300</span></span>
<span className='block text-black text-lg font-medium text-center'>Weekend Hire: <span className="text-2xl text-green-500">£700</span></span>
<div className='flex justify-around mt-4'>
<a href='tel:07412765891'><button className='text-white font-bold bg-green-500 px-8 py-4  rounded-full md:rounded-md text-md md:px-12 md:py-5'>Call</button></a>
<button className='text-white font-bold bg-blue-500 px-8 py-4  rounded-full md:rounded-md text-md md:px-12 md:py-5' onClick={handleClick}><Link to="/book" className='text-white'>Book</Link></button>
</div>
</div>





</div>

<div className="bg-indigo-200 rounded overflow-hidden shadow-md">
 <img src="https://i.ibb.co/44QM8RN/Front-Right.jpg" alt='rs3' className='w-full sm:h-48 object-cover lg:h-auto'/>
<div className='m-4'>
<span className='font-bold block text-center text-lg text-black'>Audi RS3</span>
<span className='block text-black text-lg font-medium text-center'>1 Day Hire: <span className="text-2xl text-green-500">£300</span></span>
<span className='block text-black text-lg font-medium text-center'>Weekend Hire: <span className="text-2xl text-green-500">£700</span></span>
<div className='flex justify-around mt-4'>
<a href='tel:07412765891'><button className='text-white font-bold bg-green-500 px-8 py-4  rounded-full md:rounded-md text-md md:px-12 md:py-5'>Call</button></a>
<button className='text-white font-bold bg-blue-500 px-8 py-4  rounded-full md:rounded-md text-md md:px-12 md:py-5' onClick={handleClick}><Link to="/book" className='text-white'>Book</Link></button>
</div>
</div>





</div>


<div className="bg-indigo-200 rounded overflow-hidden shadow-md">
 <img src="https://i.ibb.co/XXtD02f/Front-Right.jpg" alt='rs3' className='w-full sm:h-48 object-cover lg:h-auto'/>
<div className='m-4'>
<span className='font-bold block text-center text-lg text-black'>Audi RS3</span>
<span className='block text-black text-lg font-medium text-center'>1 Day Hire: <span className="text-2xl text-green-500">£350</span></span>
<span className='block text-black text-lg font-medium text-center'>Weekend Hire: <span className="text-2xl text-green-500">£750</span></span>
<div className='flex justify-around mt-4'>
<a href='tel:07412765891'><button className='text-white font-bold bg-green-500 px-8 py-4  rounded-full md:rounded-md text-md md:px-12 md:py-5'>Call</button></a>
<button className='text-white font-bold bg-blue-500 px-8 py-4  rounded-full md:rounded-md text-md md:px-12 md:py-5' onClick={handleClick}><Link to="/book" className='text-white'>Book</Link></button>
</div>
</div>



</div>

<div className="bg-indigo-200 rounded overflow-hidden shadow-md">
 <img src="https://i.ibb.co/w4DJ4Zk/Front-Wacey.jpg" alt='rs3' className='w-full sm:h-48 object-cover lg:h-auto'/>
<div className='m-4'>
<span className='font-bold block text-center text-lg text-black'>BMW M4</span>
<span className='block text-black text-lg font-medium text-center'>1 Day Hire: <span className="text-2xl text-green-500">£400</span></span>
<span className='block text-black text-lg font-medium text-center'>Weekend Hire: <span className="text-2xl text-green-500">£900</span></span>
<div className='flex justify-around mt-4'>
<a href='tel:07412765891'><button className='text-white font-bold bg-green-500 px-8 py-4  rounded-full md:rounded-md text-md md:px-12 md:py-5'>Call</button></a>
<button className='text-white font-bold bg-blue-500 px-8 py-4  rounded-full md:rounded-md text-md md:px-12 md:py-5' onClick={handleClick}><Link to="/book" className='text-white'>Book</Link></button>
</div>
</div>



</div>




</div>

</main>
  )
}

function Page(){
  return(
    <div className="py-16 bg-white">  
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src="https://i.ibb.co/G5THqz3/Front-Left.jpg" alt="image" loading="lazy" width="" height=""/>
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">About GTR Hire</h2>
            <p className="mt-6 text-gray-600">Do you want to experience the excitement of the ride with your next car hire? At affordable prices, you can drive the most beautiful and engaging cars available. With our vast fleet of cars for hire, you can choose from a wide range of desirable models.</p>
            <p className="mt-4 text-gray-600">   GTR Hire is a premier luxury car hire firm based in Yorkshire. Our fleet of cars includes Audi RS3, Audi S3, Mercedes A45 AMG, BMW M4 Convertible, Range Rover Sport SVR . We offer a reliable and efficient delivery and collection service across the UK.</p>
          </div>
        </div>
    </div>


    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>


<section className="relative pt-16 bg-blueGray-50">
<div className="container mx-auto">
  <div className="flex flex-wrap items-center">
    <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-yellow-500">
      <iframe id="player" frameborder="0" allowfullscreen="true" allow="autoplay" title="Dailymotion video player" width="100%" height="100%" src="https://www.dailymotion.com/embed/video/x8eccle"></iframe>
        <blockquote className="relative p-8 mb-4">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
            <polygon points="-30,95 583,95 583,65" className="text-yellow-500 fill-current"></polygon>
          </svg>
          <h4 className="text-xl font-bold text-white">
            S Dog rapper loves GTR Hire!
          </h4>
          <p className="text-md font-light mt-2 text-white">
            
GTR Hire gets a shoutout from S Dog rapper
          </p>
        </blockquote>
      </div>
    </div>

    
  </div>
</div>
<footer className="relative bg-blueGray-50 pt-8 pb-6 mt-2">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
       
      </div>
    </div>
  </div>
</footer>
</section>
  </div>
  )
}

function Showcase(){
  const myRef = useRef(null);
  const Ref = useRef(null);
  

  const form = Form.useForm();
  
  const executeScroll = () => myRef.current.scrollIntoView()  ;
  const [name, setName ]= useState("");
  const [phone, setPhone ]= useState("");
  const [mail, setMail ]= useState("");
  const [startdate, setStartDate ]= useState("");
  const [endDate, setEndDate ]= useState("");
  const [tme, setTime ]= useState("");
  const [message, setMessage]= useState("");

  function handleMail(){
    console.log(Ref.current.innerText )
    console.log('button clicked');
    const subject ="Here book now!";
    const body ={
      car_name:Ref.current.innerText,
      name: name,
      phone: phone,
      mail:mail,
      startdate:startdate,
      endDate:endDate,
      time: tme,
      message: message
    }
    window.open(`mailto:rental@gtrhire.co.uk?subject=${subject}&body=${JSON.stringify(body)}`);
  }

  return(
    <div className='md:flex md:flex-col bg-gray-100'>
         <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

<h2 className='text-center font-bold text-4xl p-2 text-black cartname' ref={Ref}>{localStorage.getItem('myCar')}</h2>
<h2 className='text-center font-medium text-lg text-black'>Drive this car today</h2>
<img src={localStorage.getItem('carThumbnail')} className="w-[500px] md:w-[750px] p-4 mx-auto"/>
<h2 className='text-center font-bold my-4 text-2xl text-black'>Specification</h2>

<div className='grid grid-cols-2 p-4 gap-14 mx-auto md:flex'>
  
  <div className='flex space-x-4 opacity-70'>
<i class="fas fa-flag fa-2x"></i>
<p className='text-xl font-bold'>{Cars.map(car => {
   if(localStorage.getItem('myCar') == car.Name){
    return car.TopSpeed;
  }
})}</p>
</div>

<div className='flex space-x-4 opacity-70'>
<i class="fas fa-clock fa-2x"></i>
<p className='text-xl font-bold'>{Cars.map(car => {
   if(localStorage.getItem('myCar') == car.Name){
    return car.ZeroSixty;
  }
})}</p>
</div>

<div className='flex space-x-4 opacity-70'>
<i class="fas fa-bolt fa-2x"></i>
<p className='text-xl font-bold'>{Cars.map(car => {
   if(localStorage.getItem('myCar') == car.Name){
    return car.BHP;
  }
})} BHP</p>
</div>

<div className='flex space-x-4 opacity-70'>
<i class="fas fa-car fa-2x"></i>
<p className='text-xl font-bold'>{Cars.map(car => {
   if(localStorage.getItem('myCar') == car.Name){
    return car.Mileage;
  }
})} Mileage</p>
</div>

</div>

<h2 className='text-center font-bold my-4 text-2xl mb-8 text-black'>Hire Now</h2>
<div class="rounded overflow-hidden border shadow-md mx-auto font-bold bg-white text-black w-[80%] md:w-[25%]">
  <div class="md:px-6 px-3 py-4">
    <div class="font-bold text-xl mb-2 text-center">1 Day Hire</div>
    <ul class='md:p-5 p-2 mx-auto max-w-max space-y-2'>
    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="text-green-600 h-4 inline"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Tank of fuel</li>
    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="text-green-600 h-4 inline"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Insurance</li>
    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="text-green-600 h-4 inline"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Cover Note</li>
    </ul>
    <p class="text-black text-3xl text-center opacity-80">
      £
     {
      Cars.map(car => {
        if(localStorage.getItem('myCar') == car.Name){
          return car.Price;
        }
      })
     }
    </p>
  </div>
  <div class="flex justify-center md:px-12 px-18 pt-4 pb-2 ml-2">
    <span class="inline-block bg-green-600 rounded-full cursor-pointer p-1 md:text-lg font-semibold text-white mr-2 mb-2" onClick={executeScroll}>Hire this Car</span>
  </div>
</div>

<h2 className='text-center font-bold my-12 text-2xl text-black'>Booking Details for {Cars.map(car => {
  if(localStorage.getItem('myCar') == car.Name){
    return car.Name
  }
})}</h2>




<div className="flex items-center justify-center p-12" ref={myRef}>
 
<div className="mx-auto w-full max-w-[550px]">
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="fName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="Full Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="lName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Telephone
            </label>
            <input
              type="tel"
              name="lName"
              id="lName"
              placeholder="07426 156721"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="mb-5">
        <label
          for="guest"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email
        </label>
        <input
          type="email"
          name="guest"
          id="guest"
          placeholder="address@email.com"
          value={mail}
              onChange={(e)=>setMail(e.target.value)}
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="date"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Hire Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={startdate}
              onChange={(e)=>setStartDate(e.target.value)}
              onfocus="(this.type='date')"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="date"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              End Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={endDate}
              onChange={(e)=>setEndDate(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="time"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              value={tme}
              onChange={(e)=>setTime(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-5">
        <label
          for="message"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          value={message}
              onChange={(e)=>setMessage(e.target.value)}
          class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>

          
        </div>
      </div>

      

      <div className='flex justify-center'>
        <button
          className="hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={()=>handleMail()}
        >
          Book
        </button>
      </div>
  </div>
  
</div>


    </div>
  )
}

function Footer(){
  return(
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
    <div className="items-center grid-flow-col">
     
      <p>Copyright © 2022 GTR Hire - All right reserved</p>
    </div> 
    <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
     
      <a href='https://www.facebook.com/gtrhireuk' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </footer>
  )
}

function Modal({ closeOpen }) {
  return (
    <div className="absolute top-0 bg-black w-screen h-screen text-center z-50">
    <ul className='text-white grid-cols-3 items-center justify-center text-3xl gap-2 space-y-8 font-medium font-mono mt-72'>
<Link to="/"><li className='cursor-pointer hover:text-red-500 duration-300 mb-4' onClick={() => closeOpen()}>Car Hire</li></Link>
<Link to="/about"><li className='cursor-pointer hover:text-red-500 duration-300 mb-4' onClick={() => closeOpen()}>About</li></Link>
    </ul>
    <span className=' text-white absolute right-2 top-2 text-3xl' onClick={() => closeOpen()}>X</span>
    </div>
  );
}

function Home(props){
  const {menu, setMenu} = props;
  
    return(
      <div>
        <Navbar setMenu={setMenu}/>
        <First/>
        <Fleet/>
        <Footer/>
      </div>
    )
  }

  function About(props){
    const {menu, setMenu} = props;

    return(
      <div>
        <Navbar setMenu={setMenu}/>
        <Page/>
        <Footer/>
      </div>
    )
  }

  function Book(props){
    const {menu,setMenu} = props;

    return(
      <div>
    <Navbar setMenu={setMenu}/>
    <Showcase/>
    <Footer/>
      </div>
    ) 
  }

function App() {
  const [menu, setMenu] = useState(false);

  return (
<BrowserRouter>
<ScrollToTop>
<Routes>
  <Route path='/' element={<Home menu={menu} setMenu={setMenu}/>}/>
  <Route path='/about' element={<About menu={menu} setMenu={setMenu}/>}/>
  <Route path='/book' element={<Book menu={menu} setMenu={setMenu}/>}/>
</Routes>
{menu && <Modal closeOpen={() => setMenu(false)} />}
</ScrollToTop>
</BrowserRouter>
  );
}

export default App