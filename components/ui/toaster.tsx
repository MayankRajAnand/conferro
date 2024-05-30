"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
            className={cn(
              "border-none",
              "text-white ",
              title === "Success" ? "bg-green-500" : "bg-red-500"
            )}
            key={id}
            {...props}
          >
            <div className="grid gap-1">
              {title && (
                <ToastTitle className="font-extrabold text-lg">
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className="text-md">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
