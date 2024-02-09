import MessageList from "@/components/chat/message-list";
import MessageSender from "@/components/chat/message-sender-input";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

function page() {
  return (
    <div className="pt-[8vh] h-full">
      <div className="h-[85%]">
        <ScrollArea className="h-full p-2">
          <MessageList/>
        </ScrollArea>
      </div>
      <div>
        <MessageSender />
      </div>
    </div>
  );
}

export default page;
