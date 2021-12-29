import React, { useState } from 'react';
import Link from 'next/link';
import { IoCloseSharp } from "react-icons/io5";


const Header = () => {

    const [selected, setSeleted] = useState(false);
    const [navbar,setNavbar] = useState(false)

    const changeBackground = () =>{
       if(window.scrollY >= 75){
           setNavbar(true)
       }else{
           setNavbar(false)
       }
    }

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll',changeBackground)
    }

   

    return (
        <div className="sticky top-0 z-50"> 



            <div className={navbar ? "navbar active" : "navbar"}>
                <nav className='w-screen'>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn"><button onClick={() => setSeleted(!selected)}> {!selected ? <p style={{color : navbar ? "black" : "white"}}> &#9776; </p> : <IoCloseSharp  style={{color:navbar ? "black" : "white"}}/>}  </button>   </label>
                    <div className="logo">
                        <Link href="/" ><p className='cursor-pointer' style={{color: navbar ? "black" : "white"}}>Suites</p></Link>
                    </div>
                    <ul style={{color: navbar ?"black" : "white"}} className='font-semibold tracking-widest font-sans'> 
                        <Link href="/" ><li><a href="#">HOME</a> </li></Link>
                        <Link href="/rooms" ><li><a href="#"> ROOMS </a> </li></Link>
                        <Link href="/about" ><li><a href="#">ABOUT </a> </li></Link>
                        <Link href="/contact" ><li><a href="#">CONTACT </a> </li></Link>
                    </ul>
                </nav>

            </div>

            <div className='clear-both'></div>





        </div>
    );
};

export default Header;