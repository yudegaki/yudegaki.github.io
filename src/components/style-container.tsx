import React, { useEffect, useState } from 'react';

const StyleContainer = ({ children }: React.ComponentProps<'div'>) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <main className="flex flex-col items-center justify-center p-5 md:p-24">
      <div className="w-full max-w-3xl">{children}</div>
    </main>
  );
};

export default StyleContainer;
