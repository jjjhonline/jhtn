import Image from "next/image";
import { Camera, Edit3, Home as HomeIcon } from "lucide-react";
import {
  IconBrandTabler,
  IconFileVector,
  IconJpg,
  IconBrandBlender,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="text-[#404040]">
      <div className="bg-black">
        <div className="lg:bg-auto lg:bg-no-repeat lg:bg-center bg-cover bg-[url('./banner.jpeg')] h-80 lg:h-[500px]">
        </div>
        <div className="justify-center items-start flex lg:justify-end lg:text-end lg:pr-20 lg:-mt-[470px] -mt-72">
          <ul className="flex gap-6">
            <li>
              <a href="#">
                <HomeIcon />
              </a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>{" "}
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>{" "}
            </li>
            <li>
              <a href="#">Contacto</a>{" "}
            </li>
          </ul>
        </div>
        <div className="lg:pt-20">
          <h1 className=" bg-[#404040] py-2 px-2 w-80 text-3xl text-zinc-200 text-center my-16 mx-auto hover:bg-black/80">
            JHTN & WEB BUILDER
          </h1>
        </div>
      </div>

      <div>
        <h1 className="text-center md:pt-24 lg:pt-56 pt-24"id="sobre">QUEM SOU EU?</h1>
        <blockquote>
          <p className="text-xs text-center italic">Eu amo a arte da imagem</p>
        </blockquote>
        <p className="px-8 text-justify py-6 lg:container sm:mx-auto lg:px-40 md:px-24">
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
          programador web, cada vez mais focado em Portugal. <br /> Meus
          conhecimentos como programador são nas áreas de HTML, CSS e Nextjs.
          Tenho a fotografia como um início de um novo projeto em minha vida mas
          já possuo uma boa bagagem como designer gráfico em Adobe Illustator e
          Adobe Photoshop.
        </p>
      </div>

      <div className="lg:container sm:mx-auto md:px-52 px-10">
        <h2 className="text-center py-4">Meu desenvolvimento nas áreas:</h2>
        <h2 className="flex px-6 gap-3 items-center">
          <Camera />F o t o g r a f i a
        </h2>
        <div className="mx-6 text-center">
          <progress
            className="progress progress-warning w-full"
            value="75"
            max="100"
          ></progress>
          75%
        </div>
        <h2 className="flex px-6 gap-3 items-center pt-6">
          <IconFileVector />I l l u s t r a t o r
        </h2>
        <div className="mx-6 text-center">
          <progress
            className="progress progress-success w-full"
            value="97"
            max="100"
          ></progress>
          97%
        </div>
        <h2 className="flex px-6 gap-3 items-center pt-6">
          <IconJpg />P h o t o s h o p
        </h2>
        <div className="mx-6 text-center">
          <progress
            className="progress progress-success w-full"
            value="95"
            max="100"
          ></progress>
          95%
        </div>
        <h2 className="flex px-6 gap-3 items-center pt-6">
          <IconBrandBlender />B l e n d e r &nbsp; &nbsp;3 D
        </h2>
        <div className="mx-6 text-center">
          <progress
            className="progress progress-info w-full"
            value="85"
            max="100"
          ></progress>
          85%
        </div>
        <h2 className="flex px-6 gap-3 items-center pt-6">
          <IconBrandTabler />P r o g r a m a ç ã o&nbsp; &nbsp;W e b
        </h2>
        <div className="mx-6 text-center">
          <progress className="progress w-full"></progress>Em progresso
        </div>
      </div>

      <div className="bg-gradient-to-r from-zinc-500 to-gray-500 w-full h-24 mt-10 grid grid-cols-3 px-4">
        <div className=" flex flex-col text-center items-center justify-center text-white">
        <h1 className="text-2xl"> 55+ </h1>
        <h2>Projectos Concluídos</h2>
        </div>
        <div className=" flex flex-col text-center items-center justify-center text-white">
        <h1 className="text-2xl"> 89+ </h1>
        <h2>Clientes Satisfeitos</h2>
        </div>
        <div className=" flex flex-col text-center items-center justify-center text-white">
        <h1 className="text-2xl"> 150+ </h1>
        <h2>Reuniões Realizadas</h2>
        </div>
      </div>

        <div className="bg-gradient-to-tr from-emerald-500 to-cyan-600 w-full h-52 grid">
          <h1 className="flex flex-col text-center items-center justify-center text-white text-3xl tracking-widest" id="portfolio">
            P O R T I F O L I O
          </h1>
        </div>
    </main>
  );
}
