interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return (
    <h3 className="font-bold text-xs  text-[#838896] uppercase">{text}</h3>
  );
};
