"use client";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle submit clicked");

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("please fill all the field");
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS with public key first
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          message: message,
          to_name: "Mohit", // Add recipient name if needed
        },
      );

      console.log("EmailJS result:", result);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-lg flex-col gap-5 py-10"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-300"
        >
          Full name
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Mohit Thapa"
          required
          className="shadow-input focus-ring-primary rounded bg-white px-2 py-2 text-sm text-neutral-900 focus:ring-2 focus:outline-none dark:border dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-300"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="mohit@gmail.com"
          required
          className="shadow-input focus-ring-primary rounded bg-white px-2 py-2 text-sm text-neutral-900 focus:ring-2 focus:outline-none dark:border dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-300"
        >
          Message
        </label>
        <textarea
          rows={5}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="You are amazing"
          required
          className="shadow-input focus-ring-primary resize-none rounded bg-white px-2 py-2 text-sm text-neutral-900 focus:ring-2 focus:outline-none dark:border dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary cursor-pointer rounded px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-300 dark:text-neutral-950"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
