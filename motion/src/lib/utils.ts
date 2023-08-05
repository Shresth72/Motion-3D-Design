import { isClerkAPIResponseError } from "@clerk/nextjs";
import { toast } from "sonner";
import * as z from "zod";

export function catchClerkError(err: unknown) {
  const unknownErr = "Something went wrong, please try again later.";

  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });
    return toast(errors.join("\n"));
  } else if (isClerkAPIResponseError(err)) {
    return toast.error(err.errors[0]?.longMessage ?? unknownErr);
  } else {
    return toast.error(unknownErr);
  }
}

export function absoluteUrl(path: string) {
  return `${
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000/"
  }${path}`;
}
