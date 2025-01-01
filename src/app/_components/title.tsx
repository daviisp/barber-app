interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return (
    <h3 className="font-bold text-xs mt-6 mb-3 text-[#838896] uppercase">
      {text}
    </h3>
  );
};
