import Image from "next/image";
import { Camera, Edit3, Home as HomeIcon } from "lucide-react";
import {
  IconBrandTabler,
  IconFileVector,
  IconJpg,
  IconBrandBlender,
  IconMapPinFilled,
  IconPhoneFilled,
  IconMailFilled,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="text-[#404040]">
      <div id="home">
        <div className="lg:bg-auto lg:bg-no-repeat lg:bg-center bg-cover bg-[url('./banner.jpeg')] h-80 lg:h-[500px]"></div>
        <div className="justify-center items-start flex lg:justify-end lg:text-end lg:pr-20 lg:-mt-[470px] -mt-72">
          <ul className="flex gap-6">
            <li>
              <a href="#home">
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
              <a href="#contacto">Contacto</a>{" "}
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
        <h1 className="text-center md:pt-24 lg:pt-56 pt-24" id="sobre">
          QUEM SOU EU?
        </h1>
        <blockquote>
          <p className="text-xs text-center italic">Eu amo a arte da imagem</p>
        </blockquote>
        <p className="px-8 text-justify py-6 lg:container sm:mx-auto lg:px-40 md:px-24">
          Sou brasileiro, do interior do estado de São Paulo no Brasil. Tive o
          meu primeiro contacto com fotografia aos cinco anos de idade quando
          ganhei de presente do meu pai uma câmera fotográfica Kodak de filme em
          rolo no ano de 1990 no dia do meu aniversário, no qual tenho a câmera
          até o dia de hoje. Iniciei meu trabalho de designer por curiosidade em aprender a desenvolver artes através do computador na minha adolescência onde tive meu primeiro emprego em uma gráfica e usando somente o CorelDraw como único programa vetorial e de edição de imagens. Em pouco tempo passei a me interessar por manipulação de imagens e foi onde conheci o Adobe Photoshop e desde então não parei mais. Eu trabalhei como designer gráfico no Brasil em uma gráfica, uma malharia e depois em uma estamparia, depois disso em uma empressa de comunicação visual em Lisboa por cinco anos onde aprendi não só a evoluir na arte de design mas também na criação, montagem e aplicação dos projectos desenvolvidos pela empresa. <br /> Sempre me interessei por arte, venho de uma família
          de artistas, meu pai José Carlos Lemes{" "}
          <span className="italic">(in memoriam)</span> foi um grande ilustrador
          realista, dentre os demais parentes próximos também na arte estão na
          área da música, como meu irmão Pablo Alexandrino por exemplo. <br /> Vivo em
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
        <h1
          className="flex flex-col text-center items-center justify-center text-white text-3xl tracking-widest"
          id="portfolio"
        >
          P O R T I F O L I O
        </h1>
      </div>

      <div className="text-xl text-center py-8">
        <h1> MEUS TRABALHOS</h1>
        <blockquote>
          <p className="text-xs text-center italic">
            Aqui está alguns de meus últimos trabalhos fotográficos
          </p>
        </blockquote>
      </div>

      <div className="flex">
        <div className="w-full px-6 image-full gap-6 grid grid-cols1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center">
          <picture>
            <img src="img/1.jpg" alt="imagem da praia de Carcavelos em Cascais" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/2.jpg" alt="imagem da baia de Cascais com vista para o Estoril" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/3.jpg" alt="imagem do arco do Terreiro do Paço em Lisboa" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/4.jpg" alt="imagem do bondinho elétrico do Chiado em Lisboa" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/5.jpg" alt="imagem do carrossel do centro de Cascais" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/6.jpg" alt="imagem da autoestrada do Alentejo sentido para o Algarve" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/7.jpg" alt="imagem de um cacho de uvas" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/8.jpg" alt="imagem de uma das portas do castelo de Óbidos" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/9.jpg" alt="imagem da praça da matriz de Tomar" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/10.jpg" alt="imagem de um semáfaro de trânsito apagado" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/11.jpg" alt="imagem da estação de comboios de Santa Apolónia em Lisboa" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/12.jpg" alt="imagem de um pombo na beira da praia" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/13.jpg" alt="imagem da Torre de Belém" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/14.jpg" alt="imagem de uma estrada para a Serra da Estrela" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/15.jpg" alt="imagem da entrada do museu do Parque Marechal Carmona" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/16.jpg" alt="imagem de barcos em Setúbal" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/17.jpg" alt="imagem da Avenida Liberdade em Braga" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/18.jpg" alt="imagem de um barco em alto mar" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/19.jpg" alt="imagem do centro de São Paulo - Brasil" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/20.jpg" alt="imagem urbana de um semáforo em São Paulo" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/21.jpg" alt="imagem da neve na Serra da Estrela" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/22.jpg" alt="imagem de uma rua no inverno em Braga" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/23.jpg" alt="imagem de uma esquina da cidade de São Paulo" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/24.jpg" alt="imagem de um cão" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/25.jpg" alt="imagem de uma escultura de um avião em Belém" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/26.jpg" alt="imagem do teleférico do Parque das Nações em Lisboa" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/27.jpg" alt="imagem do pôr do sol da Boca do Inferno em Cascais" className="rounded-lg mx-auto" />
          </picture>
          <picture>
            <img src="img/28.jpg" alt="imagem de uma casa de pássaro em uma árvore" className="rounded-lg mx-auto" />
          </picture>
        </div>
      </div>

      <div className="text-xl text-center py-8">
        <h1 id="contacto">CONTACTO</h1>
        <blockquote>
          <p className="text-xs text-center italic">
            Adoraria receber seu feedback!
          </p>
        </blockquote>
      </div>

      <div className="pb-8 w-full md:w-1/2 mx-auto">
        <picture>
          <img src="img/Barcelos.png" alt="" className="w-full mx-auto px-6" />
        </picture>
        <div className="w-full mx-auto px-6 py-4">
          <h1 className="flex gap-2 py-1">
            <IconMapPinFilled /> Barcelos, Braga - Portugal
          </h1>
          <h1 className="flex gap-2 py-1">
            <IconPhoneFilled />
            Phone: +351 939 630 124
          </h1>
          <h1 className="flex gap-2 py-1">
            <IconMailFilled />
            E-mail: jjjhonline@gmail.com
          </h1>
        </div>
      </div>

      <div>
        <div className="bg-[#404040] w-full">
          <div className="gap-8 flex items-center justify-center h-12 text-white">
            <a href="https://github.com/jjjhonline" target="_blank">
              <IconBrandGithub />
            </a>
            <a href="https://www.instagram.com/jhonatanlemesoficial/"target="_blank">
              <IconBrandInstagram />
            </a>
          </div>
          <a href="#home">
            <span className="flex justify-center pb-4 text-xs text-white">
              jhtn &copy; 2023 - Todos os direitos reservados.
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
