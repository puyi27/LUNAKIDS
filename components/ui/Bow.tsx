import React from 'react';

export default function Bow({ className = "" }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <svg width="40" height="30" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.2))' }}>
        <path d="M50 35C45 25 30 10 10 15C-10 20 5 45 25 50C35 52 45 45 50 35Z" fill="#8C9A86" />
        <path d="M50 35C55 25 70 10 90 15C110 20 95 45 75 50C65 52 55 45 50 35Z" fill="#8C9A86" />
        <path d="M50 35C45 45 35 60 25 75L40 70C45 60 50 45 50 35Z" fill="#75826F" />
        <path d="M50 35C55 45 65 60 75 75L60 70C55 60 50 45 50 35Z" fill="#75826F" />
        <ellipse cx="50" cy="35" rx="8" ry="10" fill="#6A7863" />
        <path d="M15 18C25 15 35 25 45 30" stroke="#75826F" strokeWidth="1.5" fill="none" />
        <path d="M85 18C75 15 65 25 55 30" stroke="#75826F" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}
