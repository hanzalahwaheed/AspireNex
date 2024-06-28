import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="h-screen bg-black">
      <Hero />;
      <p className="text-2xl md:text-4xl lg:text-7xl  font-bold inter-var text-center">
        Hey! I'm Hanzalah!
      </p>
    </div>
  );
}
