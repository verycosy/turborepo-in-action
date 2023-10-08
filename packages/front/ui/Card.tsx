interface IProps {
  description: string;
}

export const Card = ({ description }: IProps) => {
  return (
    <div
      style={{
        border: '1px solid black',
      }}
    >
      {description}
    </div>
  );
};
