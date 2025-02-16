import React from 'react';

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Plants', href: '#' },
  { name: 'Others', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#a6f8ca', padding: '1rem' }}>
      <div className="flex items-center space-x-4">
        <div className="pl-2 pr-4">
          <img src="/images/darplantslogo.png" alt="darplantslogo" className="h-8 w-6" />
        </div>
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-green-900 font-semibold px-2"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
