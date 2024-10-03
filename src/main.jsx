
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { fbq } from './fqb.js'; // Import fbq from the fbq.js file

// Initialize the Meta Pixel globally
if (window.fbq === undefined) {
  !function(f,b,e,v,n,t,s) {
    if(f.fbq) return; n=f.fbq=function() {
      n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments);
    };
    if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
    n.queue=[]; t=b.createElement(e); t.async=!0;
    t.src=v; s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s);
  }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', 'YOUR_PIXEL_ID'); // Replace 'YOUR_PIXEL_ID' with your actual Meta Pixel ID
  fbq('track', 'PageView'); // Track page views globally
  console.log('pageView event fired');
  
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
