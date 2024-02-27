import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className=" p-4">
        <div>
            <h3 className='text-center font-bold text-2xl'>Contact Us</h3>
            <p className='text-center mt-5 text-gray-600'>First Floor, Minnal Plaza <br />
KFC Rd, Multiverse <br />
South Kurukkamoola
Desham, BasilUniverse <br />
Kerala 681234</p>
<p className='text-center text-gray-600 mt-5'>General Inquiries
    <br />
    info@ebinbenny.com
</p>
<div className='flex gap-4 justify-center items-center p-5 text-3xl'>
<FaFacebook />
<FaSquareInstagram />
<FaYoutube />
<FaSquareWhatsapp />
</div>
        </div>
      </div>
        
      <div className="p-4 flex justify-center items-center text-center">
        <iframe 
          title="Map of Agency Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.1371721060787!2d76.91707357450507!3d9.669318878638482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07b49b0700000b%3A0x61d80b330ac65d85!2sVagamon%20Meadows!5e0!3m2!1sen!2sin!4v1709019466965!5m2!1sen!2sin" 
          width="300" 
          height="300" 
          style={{ border: '0' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
