import { serve } from "inngest/next";
import { inngest } from "@/lib/ingest/client";
import { sendSignupEmail } from "@/lib/ingest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [sendSignupEmail],
});
