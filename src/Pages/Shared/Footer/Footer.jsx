import React from "react";
import Container from "../../../components/Container/Container";
import "./Footer.css"

const Footer = () => {
  return (
    <div id="footer-part">
      <Container>
      <footer className="footer p-10 ">
        <div>
          <h1 className=" text-white font-bold text-2xl">Music Hunt Academy</h1>
          <p className="font-semibold text-white font-1xl font-popins mt-3">You want to learn strike any king of instrument? <br /> Admit in our academy.</p>
          <a className="link link-hover font-popins font-bold">Maracas</a>
          <a className="link link-hover font-popins font-bold">Tambourine</a>
          <a className="link link-hover font-popins font-bold">Ukulele</a>
          <a className="link link-hover font-popins font-bold">	French horn</a>
        </div>
        <div>
          <span className=" text-white font-bold text-2xl">Address</span>
          <a className="link link-hover font-popins font-bold  mt-4">Music Hunt Academy</a>
          <a className="link link-hover font-popins font-bold">Contact: 0159*******</a>
          <a className="link link-hover font-popins font-bold">Email: music@gmail.com</a>
          <a className="link link-hover font-popins font-bold">Yahoo: music@yahoo.com</a>
        </div>
        <div>
          <span className=" text-white font-bold text-2xl">Social Link</span>
          <div className="mt-4">
            <h1 className="font-popins font-bold text-white">  Facebook</h1> 
            <h1  className="font-popins font-bold py-2 text-white">Twitter</h1>
            <h1  className="font-popins font-bold text-white">LinedIn</h1>
            <h1  className="font-popins font-bold py-2 text-white">Pintarest</h1> 

          </div>
        </div>
      </footer>
      </Container>

    </div>
  );
};

export default Footer;
