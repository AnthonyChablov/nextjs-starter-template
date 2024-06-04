import ParagraphText from "@/components/Text/ParagraphText";
import ClickeableButton from "@/components/Buttons/ClickeableButton";

export default function Home() {
  return (
    <>
      <ParagraphText text="123" mode="3xl" className="text-blue-300" />
      <ClickeableButton
        text="Click me"
        textSize="md"
        variant="solid"
        isLoading={false}
      />
    </>
  );
}
