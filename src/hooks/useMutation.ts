import axios, { AxiosError } from "axios";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const queryClient = new QueryClient();

function useMutationRequest<T>(key?: string) {
  const {
    mutate: sendMessage,
    data: messageResponse,
    isPending: isSendingMessage,
  } = useMutation({
    mutationFn: async (payload: T) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_OPEN_AI_API_URL}`,
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: payload }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_API_KEY}`,
          },
        }
      );
      return res.data.choices[0].message.content;
    },
    onSuccess: (res) => {
    
    },
    onError: (error: AxiosError<any, any>) => {
      console.error(`${error?.message}`);
    },
  });

  return {
    sendMessage,
    messageResponse,
    isSendingMessage,
  };
}

export default useMutationRequest;
