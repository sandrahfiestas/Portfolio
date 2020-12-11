import React  from 'react';

function Footer(){
  let copyright = new Date().getFullYear();
  return(
    <footer className="footer">
      <p className="p-footer">Portfolio designed by @shfiestas, © {copyright}</p>
    </footer>
  )
}

export default Footer;
