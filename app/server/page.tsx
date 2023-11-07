export default async function Server() {
  const data: number[] = await new Promise((res) => {
    setTimeout(() => res([1, 2, 3, 4, 5]), 5000);
  });
  return (
    <div className="">
      {data.map((n) => (
        <div key={n}>{n}</div>
      ))}
    </div>
  );
}
