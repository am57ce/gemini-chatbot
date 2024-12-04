"use client";

import { Message } from "ai";
import { useChat } from "ai/react";
import { useState, useEffect } from "react";

import { Message as PreviewMessage } from "@/components/custom/message";
import { useScrollToBottom } from "@/components/custom/use-scroll-to-bottom";

import Gems from "./gems";
import { MultimodalInput } from "./multimodal-input";
import { Overview } from "./overview";

export function Chat({
  id,
  initialMessages,
}: {
  id?: string;
  initialMessages?: Array<Message>;
}) {
  const [gem, setGem] = useState("normal");

  useEffect(() => {
    const gemFromUrl = new URLSearchParams(window.location.search).get("gem");
    if (gemFromUrl) {
      setGem(gemFromUrl);
    }
  }, []);

  const { messages, handleSubmit, input, setInput, append, isLoading, stop } =
    useChat({
      id,
      body: { id, gem },
      initialMessages,
      maxSteps: 10,
      onFinish: () => {
        window.history.replaceState({}, "", `/chat/${id}`);
      },
    });

  const [messagesContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>();

  return (
    <div className="flex flex-row justify-center pb-4 md:pb-8 h-dvh bg-background">
      <div className="absolute size-fit right-4 bottom-28 md:bottom-32 lg:top-20 lg:left-4">
        <Gems gem={gem} setGem={setGem} />
      </div>
      <div className="flex flex-col justify-between items-center gap-4 mt-4 md:mt-0">
        <div
          ref={messagesContainerRef}
          className="flex flex-col gap-4 h-full w-dvw items-center overflow-y-scroll"
        >
          {messages.length === 0 && <Overview />}

          {messages.map((message) => (
            <PreviewMessage
              key={message.id}
              chatId={"1"}
              role={message.role}
              content={message.content}
              attachments={message.experimental_attachments}
              toolInvocations={message.toolInvocations}
            />
          ))}

          <div
            ref={messagesEndRef}
            className="shrink-0 min-w-[24px] min-h-[24px]"
          />
        </div>

        <form className="flex flex-row gap-2 relative items-end w-full md:w-[700px] max-w-[calc(100dvw-32px) px-4 md:px-0">
          <MultimodalInput
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            stop={stop}
            messages={messages}
            append={append}
          />
        </form>
      </div>
    </div>
  );
}
