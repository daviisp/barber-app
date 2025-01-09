interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return (
    <h3 className="font-bold text-xs md:text-sm  text-[#838896] uppercase">
      {text}
    </h3>
  );
};
