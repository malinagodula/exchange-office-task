const Card = (props) => {
  return (
    <>
      <div className="text-sm bg-white border border-slate-300">
        <div className="border-b p-6">{props.title}</div>
        {props.children}
      </div>
    </>
  );
};

export default Card;
