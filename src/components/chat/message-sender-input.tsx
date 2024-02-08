"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import useMutationRequest from "@/hooks/useMutation";

function MessageSender() {
  const { sendMessage, isSendingMessage, messageResponse } =
    useMutationRequest("messages");

  type MessageInputValidation = {
    message: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageInputValidation>();

  function onSubmit(data: MessageInputValidation) {
    sendMessage(data.message);
    reset();
  }

  console.log(messageResponse);

  return (
    <div className="absolute bottom-5 w-full md:w-[82%]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5"
      >
        <div className="max-w-screen-md mx-auto flex items-center gap-5">
          <Input {...register("message")} placeholder="Message NextBotty..."/>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default MessageSender;
