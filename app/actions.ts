"use server";

import { actionClient } from "@/lib/safe-action";
import { schema } from "./schema";

export const sendEmail = actionClient
  .schema(schema)
  .action(async ({ parsedInput }) => {
    console.log(parsedInput);
  });
