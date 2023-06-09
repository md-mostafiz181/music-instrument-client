import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-slate-200 text-base-content">
        <div>
          <span className="footer-title font-bold text-2xl">Music Hunt Academy</span>
          <p className="font-semibold text-black font-1xl font-popins mt-3">You want to learn strike any king of instrument? <br /> Admit in our academy.</p>
          <a className="link link-hover font-popins font-bold">Maracas</a>
          <a className="link link-hover font-popins font-bold">Tambourine</a>
          <a className="link link-hover font-popins font-bold">Ukulele</a>
          <a className="link link-hover font-popins font-bold">	French horn</a>
        </div>
        <div>
          <span className="footer-title font-bold text-2xl">Address</span>
          <a className="link link-hover font-popins font-bold  mt-4">Music Hunt Academy</a>
          <a className="link link-hover font-popins font-bold">Contact: 0159*******</a>
          <a className="link link-hover font-popins font-bold">Email: music@gmail.com</a>
          <a className="link link-hover font-popins font-bold">Yahoo: music@yahoo.com</a>
        </div>
        <div>
          <span className="footer-title font-bold text-2xl">Social Link</span>
          <div className="mt-4">
            <h1 className="font-popins font-bold ">  Facebook</h1> 
            <h1  className="font-popins font-bold py-2">Twitter</h1>
            <h1  className="font-popins font-bold">LinedIn</h1>
            <h1  className="font-popins font-bold py-2">Pintarest</h1> 

          </div>
        </div>
      </footer>

      <div  className="footer footer-center p-4 bg-base-300 text-base-content">
        <p className="font-bold font-popins">Copyright © 2023 - All right reserved by Music Hunt Academy.</p>
      </div>
    </div>
  );
};

export default Footer;
