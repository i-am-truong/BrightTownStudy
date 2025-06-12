/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import type { FlashcardSet } from "../types";
import { getFlashcardSetPublicById } from "../services/flashcardService";

export const useFlashcardSet = (
  id: string,
  _userId: string,
  _userRole: string
) => {
  const [flashcardSet, setFlashcardSet] = useState<FlashcardSet>(
    {} as FlashcardSet
  );

  useEffect(() => {
    fetchFlashcardSet(id);
  }, []);
  const fetchFlashcardSet = async (id: string) => {
    setFlashcardSet(await getFlashcardSetPublicById(id));
  };

  return { flashcardSet };
};
