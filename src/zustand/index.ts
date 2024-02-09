import { MessageSchema } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  messagesList: MessageSchema[];
  addMessage: (message: MessageSchema) => void;
};

const useBotStore = create<Store>()(
  persist(
    (set) => ({
      messagesList: <MessageSchema[]>[],
      addMessage(message) {
        set((state) => {
          return {
            messagesList: [...state.messagesList, message],
          };
        });
      },
    }), //end of setter function for create
    {
      name: "message-list",
    }
  )
);

export { useBotStore };
