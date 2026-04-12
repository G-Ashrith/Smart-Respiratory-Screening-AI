import { Link, Outlet, useLocation } from 'react-router-dom';
import { Activity } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Predict', path: '/predict' },
    { name: 'Diseases Info', path: '/diseases' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <Link to="/" className="nav-brand">
            <Activity size={24} />
            <span>Respiratory AI</span>
          </Link>
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      
      <main className="page-wrapper container">
        <Outlet />
      </main>
    </>
  );
}
