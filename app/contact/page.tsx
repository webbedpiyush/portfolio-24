"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // i will do something with the data 
    console.log("Form submitted:", { name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="max-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8  p-10 rounded-xl shadow-lg"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold ">
            Wanted
          </h2>
          <p className="mt-2 text-center text-sm ">
          Impart your Devil Fruit Ability Knowledge Here
          </p>
        </div>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-600"
          >
            Thank you for your message! I'll get back to you soon.
          </motion.div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <Label htmlFor="name" className="sr-only">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500  t rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email-address" className="sr-only">
                  Email address
                </Label>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 focus:outline-none focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 rounded-b-md focus:z-10 sm:text-sm"
                  placeholder="Your Glorious Purpose"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></Textarea>
              </div>
            </div>

            <div>
              <Button
              variant="ghost"
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border-transparent text-sm font-medium rounded-md border border-gray-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <Send
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Give it to Valhala
              </Button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}
