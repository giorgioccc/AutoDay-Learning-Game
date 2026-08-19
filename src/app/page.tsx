import { About } from "@/components/About";
import { SpinApp } from "@/components/SpinApp";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <h1 className="sr-only">
        AutoDay — real AI automation problems, no answers handed over
      </h1>
      <SpinApp />
      <About />
    </main>
  );
}
