import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <section className="px-6 md:px-20">
        <Hero />
      </section>
      <section className="px-6 md:px-20">
        <Projects />
      </section>
    </>
  );
}
