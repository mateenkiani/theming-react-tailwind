import React, { ReactNode, useEffect } from 'react';
import Navbar from 'components/Navbar';
import { useTheme } from 'hooks/useTheme';

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (window) {
      const storedTheme = localStorage.getItem('theme');
      if (theme !== storedTheme) toggleTheme();
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [typeof window]);

  return (
    <div className={theme}>
      <div className=" text-primary-text dark:text-dark-primary-text bg-background-secondary dark:bg-dark-background-secondary">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
