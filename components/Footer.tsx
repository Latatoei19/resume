import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line pt-8 pb-12">
      <div className="mx-auto flex w-full max-w-[920px] flex-wrap justify-between gap-2.5 px-7 font-mono text-[0.78rem] text-ink-soft">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
