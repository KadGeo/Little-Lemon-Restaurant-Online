import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="muted">
        © {new Date().getFullYear()} Little Lemon. All rights reserved.
      </p>
    </footer>
  );
}
