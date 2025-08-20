'use client';

import { useState, useEffect } from 'react';
import { useHookFormAction } from '@next-safe-action/adapter-react-hook-form/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleAlert } from 'lucide-react';

import { sendEmail } from '@/app/actions';
import { schema } from '@/app/schema';
import { toast } from 'sonner';

export default function Contact() {
  const [time, setTime] = useState(new Date());
  const {
    handleSubmitWithAction,
    action: { isExecuting },
    form: {
      register,
      formState: { errors }
    }
  } = useHookFormAction(sendEmail, zodResolver(schema), {
    formProps: {
      mode: 'onChange',
      defaultValues: {
        email: '',
        message: ''
      }
    },
    actionProps: {
      onSuccess: () => {
        toast.success('Email sent successfully');
      },
      onError: ({ error }) => {
        if (error?.serverError) {
          toast.error(error.serverError);
        }
      }
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-8 sm:flex-row sm:gap-4">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700 dark:text-gray-200">Time:</span>
          {time.toLocaleTimeString('en-US', {
            timeZone: 'Asia/Ho_Chi_Minh',
            hour: '2-digit',
            minute: '2-digit'
          })}{' '}
          <span className="text-gray-500 dark:text-gray-400">(UTC +07:00)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700 dark:text-gray-200">Email:</span>
          <span className="text-gray-500 dark:text-gray-400">daonham95@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700 dark:text-gray-200">LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/nh%C3%A2m-%C4%91%C3%A0o-03a561136/"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            @NhamDao
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700 dark:text-gray-200">X:</span>
          <a
            href="https://x.com/Nhamkin"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            @Nhamkin
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700 dark:text-gray-200">Facebook:</span>
          <a
            href="https://www.facebook.com/daovan.nham"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            daovan.nham
          </a>
        </div>
      </div>
      <form className="flex w-full max-w-[400px] flex-col gap-4" onSubmit={handleSubmitWithAction}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="w-full rounded-md border-none bg-white p-2 text-gray-800 ring-1 ring-gray-300 focus:ring-[1.5px] focus:ring-blue-500 focus:outline-none dark:bg-gray-600 dark:text-gray-200 dark:ring-gray-500"
          />
          {errors.email && (
            <span className="flex items-center gap-1 text-sm text-red-500">
              <CircleAlert className="h-4 w-4" />
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            rows={2}
            id="message"
            {...register('message')}
            className="w-full rounded-md border-none bg-white p-2 text-gray-800 ring-1 ring-gray-300 focus:ring-[1.5px] focus:ring-blue-500 focus:outline-none dark:bg-gray-600 dark:text-gray-200 dark:ring-gray-500"
          />
          {errors.message && (
            <span className="flex items-center gap-1 text-sm text-red-500">
              <CircleAlert className="h-4 w-4" />
              {errors.message.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="cursor-pointer rounded-md bg-black p-2 text-white dark:bg-gray-300 dark:text-black"
          disabled={isExecuting}
        >
          {isExecuting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
