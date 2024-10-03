// fbq.js
export const fbq = (...args) => {
    if (window.fbq) {
      window.fbq(...args);
    }
  };