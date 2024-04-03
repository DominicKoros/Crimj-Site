import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between m-24">
      <div className="grid gap-4 grid-cols-3 grid-rows-3" >
        <h1 className="bg-slate-500">1</h1>
        <h1 className="bg-slate-500">2</h1>
        <h1 className="bg-slate-500">3</h1>
        <h1 className="bg-slate-500">4</h1>
      </div>
    </main>
  );
}
