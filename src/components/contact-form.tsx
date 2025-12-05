"use client";
import { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle submit clicked");

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("please fill all the field");
      return;
    }

    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("APi call successful");
      }, 1000);
    });

    if (response) {
      toast.success("APi call successful");
    } else {
      toast.error("something went wrong");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
          onChange={handleChange}
          type="text"
          placeholder="Mohit Thapa"
          className="shadow-input focus-ring-primary rounded-md bg-white px-2 py-1 text-sm text-neutral-900 focus:ring-2 focus:outline-none dark:border dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-none"
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
          onChange={handleChange}
          type="text"
          placeholder="mohit@gmail.com"
          className="shadow-input focus-ring-primary rounded-md bg-white px-2 py-1 text-sm text-neutral-900 focus:ring-2 focus:outline-none dark:border dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-none"
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
          onChange={handleChange}
          placeholder="You are amazing"
          className="shadow-input focus-ring-primary resize-none rounded-md bg-white px-2 py-1 text-sm text-neutral-900 focus:ring-2 focus:outline-none dark:border dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-none"
        />
      </div>

      <button
        type="submit"
        className="bg-primary dark:bg-primary/80 rounded-md px-4 py-2 text-white"
      >
        Send Message
      </button>
    </form>
  );
};
