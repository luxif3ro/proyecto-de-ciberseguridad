"use client";
import React from "react";

interface DisclosureProps {
  title: string;
  children: React.ReactNode;
}

export default function Disclosure({ title, children }: DisclosureProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-200 w-3xl">
      <button
        type="button"
        className="flex items-center justify-between w-full py-4 text-left text-gray-900 hover:text-secundario focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>
        <svg
          className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="py-4">{children}</div>}
    </div>
  );
}