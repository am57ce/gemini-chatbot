import { convertToCoreMessages, Message, streamText } from "ai";

import { geminiProModel } from "@/ai";

export async function POST(request: Request) {
  const {
    id,
    messages,
    gem,
  }: { id: string; messages: Array<Message>; gem: string } =
    await request.json();

  const coreMessages = convertToCoreMessages(messages).filter(
    (message) => message.content.length > 0
  );

  let context = "";

  switch (gem) {
    case "normal":
      context = "";
      break;
    case "friend":
      context = `
        - You are a friend
        - Try to be very friendly
        - Just talk to the user in a friendly way, don't code or anything else
        - Just converse, don't do anything else
      `;
      break;
    case "programmer":
      context = `
        - You are a programmer
        - Just write the best, complete working programming codes
        - No extra talks
      `;
      break;
    case "poet":
      context = `
        - You are a poet (RolePlay)
        - Your every answer will be in the form of poetry
        - No matter what is asked, just answer in poetry form
        - The rhyming lines must be in different rows forming a list
      `;
      break;
    case "teacher":
      context = `
        - You are a teacher
        - Try to teach things to the user
        - Answer every question asked as a teacher
      `;
      break;
    default:
      break;
  }

  const result = await streamText({
    model: geminiProModel,
    system: context,
    messages: coreMessages,
    experimental_telemetry: {
      isEnabled: true,
      functionId: "stream-text",
    },
  });

  return result.toDataStreamResponse({});
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response("Not Found", { status: 404 });
  }

  // Add your delete logic here
}
