"use client";

import { useState, useEffect } from "react";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleAlert } from "lucide-react";

import { sendEmail } from "@/app/actions";
import { schema } from "@/app/schema";
import { toast } from "sonner";

export default function Contact() {
  const [time, setTime] = useState(new Date());
  const {
    handleSubmitWithAction,
    action: { isExecuting },
    form: {
      register,
      formState: { errors },
    },
  } = useHookFormAction(sendEmail, zodResolver(schema), {
    formProps: {
      mode: "onChange",
      defaultValues: {
        email: "",
        message: "",
      },
    },
    actionProps: {
      onSuccess: () => {
        toast.success("Email sent successfully");
      },
      onError: ({ error }) => {
        if (error?.serverError) {
          toast.error(error.serverError);
        }
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex sm:flex-row flex-col sm:gap-4 gap-8">
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            Time:
          </span>
          {time.toLocaleTimeString("en-US", {
            timeZone: "Asia/Ho_Chi_Minh",
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          <span className="text-gray-500 dark:text-gray-400">(UTC +07:00)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            Email:
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            daonham95@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            LinkedIn:
          </span>
          <a
            href="https://www.linkedin.com/in/nh%C3%A2m-%C4%91%C3%A0o-03a561136/"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            @NhamDao
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            X:
          </span>
          <a
            href="https://x.com/Nhamkin"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            @Nhamkin
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            Facebook:
          </span>
          <a
            href="https://www.facebook.com/daovan.nham"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            daovan.nham
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            Skype:
          </span>
          <a
            href="skype:live:daonham95?chat"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            daonham95
          </a>
        </div>
      </div>
      <form
        className="flex flex-col gap-4 max-w-[400px] w-full"
        onSubmit={handleSubmitWithAction}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full p-2 border-none rounded-md focus:outline-none ring-1 ring-gray-300 focus:ring-[1.5px] focus:ring-blue-500 text-gray-800"
          />
          {errors.email && (
            <span className="text-red-500 text-sm flex items-center gap-1">
              <CircleAlert className="w-4 h-4" />
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
            {...register("message")}
            className="w-full p-2 border-none rounded-md focus:outline-none ring-1 ring-gray-300 focus:ring-[1.5px] focus:ring-blue-500 text-gray-800"
          />
          {errors.message && (
            <span className="text-red-500 text-sm flex items-center gap-1">
              <CircleAlert className="w-4 h-4" />
              {errors.message.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="p-2 text-white bg-black dark:text-black dark:bg-gray-200 rounded-md cursor-pointer"
          disabled={isExecuting}
        >
          {isExecuting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
