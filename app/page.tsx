"use client"

import { useRef } from 'react';
import { createClient } from "@supabase/supabase-js";
import Navbar from "@/components/ui/navbar"
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"

export default function Index() {
  const inputRef = useRef<HTMLInputElement>(null);

  // Ensure environment variables are defined and provide default values if not
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const handleSubmit = async () => {
    const inputValue = inputRef.current?.value;

    try {
      if (!inputValue) return; // Prevent submitting empty input

      // Insert data into the "users" table
      const { data, error } = await supabase.from('users').insert([{ email: inputValue }]);

      if (error) {
        console.error('Error inserting data:', error.message);
      } else {
        console.log('Data inserted successfully:', data);
        // Clear input after successful submission
        inputRef.current!.value = '';
      }
    } catch (error) {
      console.error('Error inserting data:');
    }
  };

  return (
    <div>

      <div className='pt-8 pb-20'>
        <Navbar />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col justify-center items-center sm:items-start sm:py-8">

        <div className="pt-8 w-full max-w-sm mx-auto">
          <div className="font-semibold text-3xl text-center sm:text-left">Revise the right way.</div>
          <div className="text-2xl text-center sm:text-left">Sign up to KyroMark's waitlist</div>
        </div>
        
        <div className="pt-8 w-full max-w-sm mx-auto space-y-4">
          <Input ref={inputRef} type="email" placeholder="Email" />

          <Dialog>
            <DialogTrigger asChild>
              <Button onClick={handleSubmit} type="submit" >Join Waitlist</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Thank you for joining!</DialogTitle>
                <DialogDescription>
                  You'll receive regular updates via email until we launch. For now, be sure to follow us on Instagram (<strong>@kyromark.ai</strong>)!
                </DialogDescription>
              </DialogHeader>
              <DialogClose asChild>
                <Button type="submit">I will!</Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
          <Separator />
          <div className="text-center sm:text-left">
            <h1><strong>94%</strong> accurate</h1>
            <h1><strong>5</strong> second responses</h1>
          </div>
          <Separator />
          <div className="text-center sm:text-left">
            <h1>The <strong>most affordable</strong> pricing model</h1>
            <h1>Built by students, for students</h1>
          </div>
          <Separator />
          <div className="text-center sm:text-left">
            <h1>Revise A Level and GCSE subjects on one platform</h1>
            <h1 className="font-bold pb-8">Join the waiting list today</h1>
          </div>
        </div>
      </div>

        <img src="/splash.svg" alt="Kyromark Page" className="pb-8 bg-gray-100 rounded-md border-2 border-slate-200 drop-shadow-sm sm:rounded-xl sm:border-2 sm:shadow-sm" />
      </div>




    </div>
  );
}
