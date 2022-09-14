import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Music List
      </Link>
      <Link href="/translate" className="item">
        Local Translate
      </Link>
      <Link href="/list" className="item">
        Wikipedia Search
      </Link>
      <Link href="/calculate" className="item">
        Calculator
      </Link>

    
    </div>
  );
};

export default Header;
