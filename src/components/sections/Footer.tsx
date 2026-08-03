import { CaveatNote } from "@/components/ui/CaveatNote";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-[18px] border-t border-line-faint px-7 py-[34px]">
      <span className="text-[11px] tracking-[0.26em] text-muted">
        © {new Date().getFullYear()} {profile.name.toUpperCase()}
      </span>

      <CaveatNote rotate={-1.5} className="text-[21px]">
        currently building the future
      </CaveatNote>

      <a
        href="#top"
        className="text-[11px] font-semibold tracking-[0.26em] text-muted"
      >
        BACK TO TOP ↑
      </a>
    </footer>
  );
}
