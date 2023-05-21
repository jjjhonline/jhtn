import Image from "next/image";
import { Home as HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="text-[#404040]">
      <div className="bg-cover bg-[url('./banner.jpeg')] h-80 lg:h-96">
        <div className="justify-center items-start flex pt-6">
          <ul className="flex gap-6">
            <li>
              <a href="#">
                <HomeIcon />
              </a>
            </li>
            <li>
              <a href="#">Sobre</a>{" "}
            </li>
            <li>
              <a href="#">Portfolio</a>{" "}
            </li>
            <li>
              <a href="#">Contacto</a>{" "}
            </li>
          </ul>
        </div>
        <h1 className=" bg-[#404040] py-2 px-2 w-80 text-3xl text-zinc-200 text-center my-16 mx-auto">
          JHTN & WEB BUILDER
        </h1>
      </div>

      <div>
        <h1 className="text-center pt-4">QUEM SOU EU?</h1>
        <blockquote>
          <p className="text-xs text-center italic">Eu amo a arte da imagem</p>
        </blockquote>
        <p className="px-8 text-justify py-6">
          Sou brasileiro, do interior do estado de São Paulo no Brasil. Tive o
          meu primeiro contacto com fotografia aos cinco anos de idade quando
          ganhei de presente do meu pai uma camera fotográfica Kodak de filme em
          rolo no ano de 1990 no dia do meu aniversário, no qual tenho a câmera
          até o dia de hoje. Sempre me interssei por arte, venho de uma família
          de artistas, meu pai José Carlos Lemes{" "}
          <span className="italic">(in memoriam)</span> foi um grande ilustrador
          realista, dentre os demais parentes próximos também na arte estão na
          área da música, como meu irmão Pablo Alexandrino por exemplo. Vivo em
          Portugal desde a primavera de 2018 com a família e ultimamente tenho
          dado foco nos meus trabalhos como designer gráfico, ilustrador e
          programador web, cada vez mais focado em Portugal. <br /> Meus conhecimentos
          como programador são nas áreas de HTML5, CSS e Nextjs. Tenho a
          fotografia como um início de um novo projeto em minha vida mas já
          possuo uma boa bagagem como designer gráfico em Adobe Illustator e
          Adobe Photoshop.
        </p>
      </div>

      <div>
        <h2 className="text-center">Meu desenvolvimento nas áreas:</h2>
        Fotografia
        <div className="">
          
        </div>
      </div>

      <div>Contacto</div>

      <div className="flex-1">
        <footer className="bg-zinc-400 flex gap-4 items-center justify-center py-6">
          Footer
        </footer>
      </div>
    </main>
  );
}
