export default function Stat({ name, value}) {
  return (
    <div>
      <p className="number">
        {`${value}%`}
      </p>
      <p className="text">
        {name}
      </p>
    </div>
  );
}