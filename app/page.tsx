import Logomark from "@/components/logomark";
import { appName } from "@/lib/const";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-24">
      <div className="text-center">
        <Logomark />
        <h1 className="text-4xl font-bold mt-4">Welcome to {appName}</h1>
        <p className="text-lg mt-2 text-muted-foreground">
          Get started by building out your dashboard.
        </p>
      </div>
    </div>
  );
}