export default function Loading() {
  return (
    <main className="text-center pt-9 px-5 flex flex-col items-center justify-center min-h-52 ">
      {/* <h1 className="text-4xl font-bold mb-5 block h-5 w-32 bg-zinc-500 rounded-xl animate-pulse"></h1> */}
      <ul>
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className="mb-6">
            <p className="block h-2 w-44 bg-zinc-300 animate-pulse rounded-xl"></p>
          </li>
        ))}
      </ul>
    </main>
  );
}
