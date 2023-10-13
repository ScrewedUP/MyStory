import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import Link from "next/link";
import { Github } from "lucide-react";
export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Link href="https://github.com/ScrewedUP" target="__blank">
          <Button size="sm">
            <Github />
          </Button>
        </Link>
      </div>
    </div>
  );
};
