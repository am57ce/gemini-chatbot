import { CoreMessage } from "ai";

import { Chat as PreviewChat } from "@/components/custom/chat";

export default async function Page() {
  // Directly render the chat without authentication checks
  return <PreviewChat id={"1"} />;
}
