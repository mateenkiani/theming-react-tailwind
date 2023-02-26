import { useTheme } from 'hooks/useTheme';

function Navbar() {
  const { toggleTheme } = useTheme();

  return (
    <div className="relative shadow bg-white dark:bg-dark-background">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"></div>

      <div className="w-full backdrop-blur-sm ">
        <div className="relative z-1 h-16 mx-auto px-5 max-w-7xl flex items-center justify-between">
          <a className="text-2xl hover:text-cyan-400 transition-colors"  href="">
            Logo
          </a>

          <ul className="flex items-center gap-5 ">
            <li>
              <a className="hover:text-cyan-400 transition-colors" href="">
                Link 1
              </a>
            </li>
            <li>
              <a className="hover:text-cyan-400 transition-colors" href="">
                Link 2
              </a>
            </li>
            <li>
              <a className="hover:text-cyan-400 transition-colors" href="">
                Link 3
              </a>
            </li>
            <li>
              <a className="hover:text-cyan-400 transition-colors" href="">
                Link 4
              </a>
            </li>
            <li>
              <button
                className="hover:text-cyan-400 transition-colors"
                onClick={() => toggleTheme()}
              >
                Toggle Theme
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
