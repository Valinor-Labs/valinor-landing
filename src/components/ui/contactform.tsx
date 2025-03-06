import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_USER_ID,
        }
      )
      .then(
        () => {
          setFormSubmitted(true);
        },
        () => {
          setIsSubmitting(false);
        }
      );
  };

  if (formSubmitted) {
    return (
      <div className="text-center py-8 bg-primary-teal">
        <div className="w-16 h-16 bg-primary-forest rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary-bone"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3 className="text-xl text-primary-bone font-semibold mb-2">Message Sent!</h3>
        <p className="text-primary-bone mb-9">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <Button
          className="bg-primary-forest text-primary-bone border-primary-bone hover:bg-primary-beige hover:text-black"
          variant="outline"
          onClick={() => {
            setIsSubmitting(false);
            setFormSubmitted(false);
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }
  return (
    <form onSubmit={sendEmail} ref={form} className="space-y-6 ">
      <div className="bg-primary-teal">
        <label
          htmlFor="name"
          className="block text-sm text-primary-bone font-medium mb-2"
        >
          Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className="bg-primary-teal border-primary-bone text-primary-bone"
          required
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium mb-2 text-primary-bone"
          htmlFor="email"
        >
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          className="bg-primary-teal border-primary-bone text-primary-bone"
          placeholder="Your email"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm text-primary-bone font-medium mb-2"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          className="bg-primary-teal border-primary-bone text-primary-bone"
          placeholder="Your message"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-primary-forest hover:bg-primary-beige hover:text-black"
        disabled={isSubmitting}
      >
        Submit
      </Button>
    </form>
  );
}
