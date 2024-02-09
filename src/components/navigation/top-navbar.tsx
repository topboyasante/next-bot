import { ModeToggle } from "@/components/theme-provider/mode-toggle";

function TopNavbar() {
  return (
    <nav className="fixed w-full h-[7vh] z-[40] overflow-scroll bg-white dark:bg-black">
      <section className="flex h-full items-center border-b justify-between px-5">
        <p>GPT 3.5 Turbo</p>
        <ModeToggle />
      </section>
    </nav>
  );
}

export default TopNavbar;
