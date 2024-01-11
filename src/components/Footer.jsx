// import React from 'react'

// const Footer = () => {
//   return (
//     <div>This WebSite was developed by Jaahanava Joshi</div>
//   )
// }

// export default Footer

import React from 'react';

const Footer = () => {
  const footerStyle = {
    // position: 'sticky',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    padding: '10px',
    fontSize: '18px',
  };

  return (
    <div style={footerStyle}>
      This website is made by Jaahanava Joshi.
    </div>
  );
};

export default Footer;
