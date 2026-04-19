"use client";

import { useState } from "react";

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl font-bold text-primary mb-2">🎉 You&apos;re registered!</p>
        <p className="text-muted">We&apos;ll be in touch with event details.</p>
      </div>
    );
  }

  return (
    <form
      name="registration"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="registration" />

      <div>
        <label htmlFor="parent-name" className="block text-sm font-medium mb-1">
          Parent/Guardian Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="parent-name"
          name="parent-name"
          required
          placeholder="Enter your full name"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="your.email@example.com"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="(123) 456-7890"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="child-name" className="block text-sm font-medium mb-1">
          Child&apos;s Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="child-name"
          name="child-name"
          required
          placeholder="Enter child's name"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="child-age" className="block text-sm font-medium mb-1">
          Child&apos;s Age
        </label>
        <input
          type="number"
          id="child-age"
          name="child-age"
          min="1"
          max="18"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-light text-white py-3 px-6 rounded-md font-semibold transition-colors cursor-pointer"
      >
        Register Now! 🎯
      </button>
    </form>
  );
}
