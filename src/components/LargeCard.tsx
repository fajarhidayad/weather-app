interface LargeCardProps {
  title: string;
  num: number;
  desc: string;
}

const LargeCard: React.FC<LargeCardProps> = ({
  title,
  num,
  desc,
  children,
}) => {
  return (
    <div className="bg-darkblue py-7 px-10 flex flex-col items-center justify-between space-y-4">
      <p>{title}</p>
      <h2 className="text-6xl font-bold">
        {num}
        <span className="text-4xl font-normal">{desc}</span>
      </h2>
      {children}
    </div>
  );
};

export default LargeCard;
