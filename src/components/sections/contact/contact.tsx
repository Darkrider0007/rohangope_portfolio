'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import MotionWrap from '@/components/motion-wrap';
import {
  GithubIcon,
  LinkedinIcon,
  X
} from 'lucide-react';
import ContactForm from './contact-form';

import { contact } from '@/components/sections/contact/config';

interface ValidationErrors {
  success: boolean;
  message: string;
  errors?: {
    name?: string[] | undefined;
  };
}

const initialState: ValidationErrors = {
  success: false,
  errors: {},
  message: ''
};

function Contact() {

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="contact">
      {/* TODO: Redesign for horizontal */}
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Me
            </h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or want to work together? Send me a message using
              the form.
            </p>
            <p className="text-muted-foreground">
              Email:{' '}
              <a className="hover:underline" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
            <div className="flex space-x-1">
              {contact.socials?.X && (
                <Button variant="outline" size="icon" asChild>
                  <a target="_blank" href={contact.socials.X}>
                    <X className="h-4 w-4" />{' '}
                    {/* good 'ol twitter icon */}
                  </a>
                </Button>
              )}
              {contact.socials?.github && (
                <Button variant="outline" size="icon" asChild>
                  <a target="_blank" href={contact.socials.github}>
                    <GithubIcon className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {contact.socials?.linkedin && (
                <Button variant="outline" size="icon" asChild>
                  <a target="_blank" href={contact.socials.linkedin}>
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {contact.socials?.hashnode && (
                <Button variant="outline" size="icon" asChild>
                  <a target="_blank" href={contact.socials.hashnode}>
                    <svg width="150" height="150" viewBox="0 0 337 337" fill="none">
                      <rect x="113" y="113" width="111" height="111" rx="55.5" fill="white" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z" fill="#2962FF" />
                    </svg>
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div className="grid gap-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Contact;
