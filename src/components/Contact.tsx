import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for your message. I'll get back to you soon!"
    });
  };
  return <section id="contact" className="py-32 backdrop-blur-md bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden mb-16">
            <h2 className="reveal text-4xl md:text-5xl font-light tracking-tighter">
              Get In Touch
            </h2>
            <p className="text-neutral-400 mt-4 max-w-lg">
              Have a project in mind or want to discuss collaboration opportunities? 
              Feel free to reach out using the form below.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" className="bg-black/20 border-neutral-700" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="bg-black/20 border-neutral-700" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Project inquiry" className="bg-black/20 border-neutral-700" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea id="message" rows={5} placeholder="Tell me about your project..." className="w-full rounded-md border border-neutral-700 bg-black/20 px-3 py-2 text-base placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600 focus-visible:ring-offset-2" required />
            </div>
            <Button type="submit" className="px-8 py-6 h-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>;
};
export default Contact;