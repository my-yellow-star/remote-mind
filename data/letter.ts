import { API_ORIGIN } from "@/lib/constant";

export interface LetterModel {
  id: number;
  to: string;
  from: string;
  envelopOption: string;
  paperOption: string;
  fontOption: string;
  fontColor: string;
  message: string;
  path: string;
}

export async function fetchLetter(path: string) {
  const res = await fetch(`${API_ORIGIN}/api/v1/letter/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    return (await res.json()) as LetterModel;
  } else {
    throw new Error("failed to fetch letter");
  }
}
