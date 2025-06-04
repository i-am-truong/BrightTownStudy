import {useNavigate, useParams } from "react-router-dom";
import {updateFlashcardSet} from "./services/flashcardService";
import {useFlashcardSet } from "./hooks/useFlashcardSet";
import ButtonToFlashcardSets from "./components/ButtonToFlashcardSets";
import FlashcardForm from "./components/FlashcardForm";
import type { FlashcardSet } from "./types";

const FlashcardsUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { flashcardSet } = useFlashcardSet(id || "");

  const handleSubmitEidt = async (data: FlashcardSet) => {
    if (id) {
      await updateFlashcardSet(id, data);
      navigate("/flashcard");
    } else {
      alert("Không tìm thấy ID của bộ flashcard để cập nhật.");
      navigate("/flashcard");
    }
  };
  
  return (
    <>
      <ButtonToFlashcardSets />
      <FlashcardForm FlashcardSet={flashcardSet} onSubmit={handleSubmitEidt} />
    </>
  );
};

export default FlashcardsUpdate;
