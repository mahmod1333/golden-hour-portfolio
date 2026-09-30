'use client';

import { useEffect } from 'react';

export default function PortfolioShell({ markup, scripts }) {
  useEffect(() => {
    if (window.__avoPortfolioInitialized) return;
    window.__avoPortfolioInitialized = true;

    scripts.forEach((source) => {
      const script = document.createElement('script');
      script.textContent = source;
      document.body.appendChild(script);
    });
  }, [scripts]);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
