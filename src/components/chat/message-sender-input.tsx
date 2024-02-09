"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useMutationRequest from "@/hooks/useMutation";
import { MessageInputValidation } from "@/types";
import { useBotStore } from "@/zustand";
import { useForm } from "react-hook-form";
import Loader from "../ui/loader";

function MessageSender() {
  const addMessage = useBotStore((state) => state.addMessage);

  const { sendMessage, isSendingMessage } =
    useMutationRequest("messages");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageInputValidation>();

  function onSubmit(data: MessageInputValidation) {
    const newMessage = { role: "user", content: data.message };
    addMessage(newMessage);
    sendMessage(newMessage);
    reset();
  }

  return (
    <div className="absolute bottom-5 w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="p-5">
        <div className="max-w-screen-md mx-auto flex items-center gap-5">
          <Input
            {...register("message")}
            placeholder="Message NextBotty..."
            disabled={isSendingMessage}
          />
          <Button type="submit" disabled={isSendingMessage}>
            {isSendingMessage ? <Loader /> : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default MessageSender;
