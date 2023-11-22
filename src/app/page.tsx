import Hero from "@/components/Hero"
export default function Home() {
  return (
    <>
      <main className="main_top flex flex-col items-center justify-center p-10">
        <Hero />
        <h1 className="header_title">Bienvenue sur Mon Portefolio</h1>
        <p className="header_subtitle">
          Je suis Franck Vienot et je vous accompagne dans vos développements web et votre
          transformation digitale
        </p>
        <button className="btn_primary">Cliquez ici</button>
      </main>
    </>
  )
}
