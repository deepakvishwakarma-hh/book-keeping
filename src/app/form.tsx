"use client";
import { useState, useRef } from "react";
import type React from "react";

import { AlertCircle, CheckCircle } from "lucide-react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    business_name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Business name validation
    if (!formData.business_name.trim()) {
      newErrors.business_name = "Business name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone number is required";
    } else if (!/^[0-9()\-\s+]+$/.test(formData.phone_number)) {
      newErrors.phone_number = "Please enter a valid phone number";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      // Focus the first field with an error
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.getElementById(firstErrorField);
      if (errorElement) errorElement.focus();

      setSubmitStatus({
        type: "error",
        message: "Please correct the errors in the form",
      });
      return;
    }

    setLoading(true);
    setSubmitStatus({ type: null, message: "" });

    // API request
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setSubmitStatus({
          type: "success",
          message: "Form submitted successfully!",
        });

        setFormData({
          name: "",
          business_name: "",
          email: "",
          phone_number: "",
          message: "",
        });

        // Focus on status message for screen readers
        if (statusRef.current) {
          statusRef.current.focus();
        }
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong!",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to submit form. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-10">
      <h2 id="form-heading" className="text-2xl font-bold mb-4">
        Contact Us
      </h2>

      {/* Status message with aria-live for screen readers */}
      {submitStatus.type && (
        <div
          ref={statusRef}
          className={`mb-4 p-4 rounded-md ${
            submitStatus.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
          role="status"
          aria-live="polite"
          tabIndex={-1}
        >
          <div className="flex items-center gap-2">
            {submitStatus.type === "success" ? (
              <CheckCircle className="h-5 w-5" aria-hidden="true" />
            ) : (
              <AlertCircle className="h-5 w-5" aria-hidden="true" />
            )}
            <span>{submitStatus.message}</span>
          </div>
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid gap-4 font-semibold"
        aria-labelledby="form-heading"
        noValidate
      >
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm font-medium">
            Name{" "}
            <span aria-hidden="true" className="text-red-500">
              *
            </span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="name"
            className={`w-full rounded-md py-2 px-5 bg-[#c5d8d5] border ${
              errors.name ? "border-red-500" : "border-transparent"
            } focus:outline-none focus:ring-2 focus:ring-[#2f5653]`}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && (
            <div
              id="name-error"
              className="text-red-500 text-sm flex items-center gap-1"
              role="alert"
            >
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              <span>{errors.name}</span>
            </div>
          )}
        </div>

        <div className="grid gap-1">
          <label htmlFor="business_name" className="text-sm font-medium">
            Business Name{" "}
            <span aria-hidden="true" className="text-red-500">
              *
            </span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="business_name"
            className={`w-full rounded-md py-2 px-5 bg-[#c5d8d5] border ${
              errors.business_name ? "border-red-500" : "border-transparent"
            } focus:outline-none focus:ring-2 focus:ring-[#2f5653]`}
            type="text"
            name="business_name"
            value={formData.business_name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.business_name}
            aria-describedby={
              errors.business_name ? "business-name-error" : undefined
            }
            required
          />
          {errors.business_name && (
            <div
              id="business-name-error"
              className="text-red-500 text-sm flex items-center gap-1"
              role="alert"
            >
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              <span>{errors.business_name}</span>
            </div>
          )}
        </div>

        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email{" "}
            <span aria-hidden="true" className="text-red-500">
              *
            </span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="email"
            className={`w-full rounded-md py-2 px-5 bg-[#c5d8d5] border ${
              errors.email ? "border-red-500" : "border-transparent"
            } focus:outline-none focus:ring-2 focus:ring-[#2f5653]`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <div
              id="email-error"
              className="text-red-500 text-sm flex items-center gap-1"
              role="alert"
            >
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        <div className="grid gap-1">
          <label htmlFor="phone_number" className="text-sm font-medium">
            Phone Number{" "}
            <span aria-hidden="true" className="text-red-500">
              *
            </span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="phone_number"
            className={`w-full rounded-md py-2 px-5 bg-[#c5d8d5] border ${
              errors.phone_number ? "border-red-500" : "border-transparent"
            } focus:outline-none focus:ring-2 focus:ring-[#2f5653]`}
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.phone_number}
            aria-describedby={errors.phone_number ? "phone-error" : undefined}
            required
          />
          {errors.phone_number && (
            <div
              id="phone-error"
              className="text-red-500 text-sm flex items-center gap-1"
              role="alert"
            >
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              <span>{errors.phone_number}</span>
            </div>
          )}
        </div>

        <div className="grid gap-1">
          <label htmlFor="message" className="text-sm font-medium">
            Message{" "}
            <span aria-hidden="true" className="text-red-500">
              *
            </span>
            <span className="sr-only">(required)</span>
          </label>
          <textarea
            id="message"
            className={`w-full rounded-md py-2 px-5 bg-[#c5d8d5] border ${
              errors.message ? "border-red-500" : "border-transparent"
            } focus:outline-none focus:ring-2 focus:ring-[#2f5653] min-h-[100px]`}
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            required
          />
          {errors.message && (
            <div
              id="message-error"
              className="text-red-500 text-sm flex items-center gap-1"
              role="alert"
            >
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              <span>{errors.message}</span>
            </div>
          )}
        </div>

        <button
          disabled={loading}
          className="bg-[#2f5653] text-white py-2 rounded-md hover:bg-[#24403f] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2f5653] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          type="submit"
          aria-busy={loading}
        >
          {loading ? (
            <>
              <span className="sr-only">Loading, please wait</span>
              <span
                aria-hidden="true"
                className="flex items-center justify-center"
              >
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </span>
            </>
          ) : (
            "Submit"
          )}
        </button>

        <div className="text-sm text-gray-600 mt-2">
          <p>
            Fields marked with{" "}
            <span aria-hidden="true" className="text-red-500">
              *
            </span>{" "}
            are required
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
