// src/reportWebVitals.js
import { getCLS, getFCP, getLCP } from 'web-vitals';

const reportWebVitals = () => {
  // Track CLS (Cumulative Layout Shift)
  getCLS((metric) => {
    console.log('CLS: ', metric);
  });

  // Track FCP (First Contentful Paint)
  getFCP((metric) => {
    console.log('FCP: ', metric);
  });

  // Track LCP (Largest Contentful Paint)
  getLCP((metric) => {
    console.log('LCP: ', metric);
  });
};

export default reportWebVitals;
