import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Ningqian Jia. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, AWS hosting. <a className="font-semibold underline hover:text-gray-950" href="https://github.com/RickyJia2018/portfolio.git">Source Code</a>
      </p>
    </footer>
  );
}