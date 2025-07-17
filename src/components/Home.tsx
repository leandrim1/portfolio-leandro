import instagram from "../services/Instagram";
import email from "../services/Email";
import getTempo from "../services/GetTempo";
import gitHub from "../services/GitHub";
import getNextcent from "../services/GetNextcent";
import getApis from "../services/getApis";
import getRickandMorty from "../services/GetRickandMorty";

const Home = () => {
  return (
    <section className="h-full select-none">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-30">
          <div className="flex w-60 h-60 mt-15 rounded-lg trasition duration-75 hover:scale-110 sm:w-96 sm:h-96">
            <img
              src="/profile.png"
              alt=""
              className="rounded-full bg-purple-800"
            />
          </div>
          <div className="text-center xl:text-left mt-25 text-5xl">
            <h1>
              Olá, eu sou o <br />{" "}
              <span className="text-purple-800 mt-">Leandro Rodrigues :)</span>
            </h1>
            <div className="text-xl mt-2 text-gray-500">
              <span>Desenvolvedor Front-End</span>
            </div>
            <div className="flex flex-row xl:flex-row justify-center items-center gap-5">
              <div
                className="text-sm mt-7 text-center content-center text-amber-50 w-30 h-10 rounded-4xl bg-purple-800 transition duration-300 ease-in-out hover:scale-90 sm:w-40 sm:h-10"
                onClick={instagram}
              >
                <button className="">Instagram</button>
              </div>
              <div
                className="text-sm mt-7 text-center content-center w-30 h-10 border-2 rounded-4xl border-purple-800 transition duration-300 ease-in-out hover:bg-purple-800 hover:scale-90 hover:text-amber-50 sm:w-40 sm:h-10"
                onClick={email}
              >
                <button>E-mail</button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center text-3xl font-bold mt-10">Sobre mim</h1>
        <div className="text-center text-balance items-center text-lg mt-6 text-gray-500 sm:text-xl">
          <span>
            Desenvolvedor Front-end com conhecimento em JavaScript,Typescript,
            Tailwind, React.js, Material UI. Formado em um Curso de Tecnologia
            da Informação e Cursando Sistemas de Informação na Anhanguera
            Educacional.
          </span>
        </div>
      </div>
      <h1 className="text-center text-3xl font-bold mt-50">Habilidades</h1>
      <div className="flex flex-col justify-center place-items-center gap-15 mt-30 lg:flex-row ">
        <div className="w-30 h-30 rounded-tl-2xl border-b-2 bg-gray-900 text-center text-purple-800 pt-2 trasition duration-75 hover:scale-110">
          React.js
          <img
            src="/react.svg"
            alt=""
            className="justify-center pl-8 pt-4"
          />
        </div>
        <div className="w-30 h-30 rounded-tl-2xl border-b-2 bg-gray-900 text-center text-purple-800 pt-2 trasition duration-75 hover:scale-110">
          Typescript
          <img
            src="/typescript.svg"
            alt=""
            className="justify-center pl-8 pt-4"
          />
        </div>
        <div className="w-30 h-30 rounded-tl-2xl border-b-2 bg-gray-900 text-center text-purple-800 pt-2 trasition duration-75 hover:scale-110">
          Javascript
          <img
            src="/javascript.svg"
            alt=""
            className="justify-center pl-8 pt-4"
          />
        </div>
        <div className="w-30 h-30 rounded-tl-2xl border-b-2 bg-gray-900 text-center text-purple-800 pt-2 trasition duration-75 hover:scale-110">
          Html
          <img
            src="/html.svg"
            alt=""
            className="justify-center pl-8 pt-4"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center place-items-center gap-10 mt-10 lg:flex-row ">
        <div className="w-30 h-30 rounded-tl-2xl border-b-2 bg-gray-900 text-center text-purple-800 pt-2 trasition duration-75 hover:scale-110">
          Css
          <img
            src="/css.svg"
            alt=""
            className="justify-center pl-8 pt-4"
          />
        </div>
        <div className="w-30 h-30 rounded-tl-2xl border-b-2 bg-gray-900 text-center text-purple-800 pt-2 trasition duration-75 hover:scale-110">
          Material UI
          <img
            src="/material-ui.svg"
            alt=""
            className="justify-center pl-8 pt-4"
          />
        </div>
        <div className="w-30 h-30 rounded-tl-2xl border-b-2 bg-gray-900 text-center text-purple-800 pt-2 trasition duration-75 hover:scale-110">
          Visual Studio
          <img
            src="/visual-studio-code-2019.svg"
            alt=""
            className="justify-center pl-8 pt-4"
          />
        </div>
        <div className="w-30 h-30 rounded-tl-2xl border-b-2 bg-gray-900 text-center text-purple-800 pt-2 trasition duration-75 hover:scale-110">
          Tailwind Css
          <img
            src="/tailwindcss.svg"
            alt=""
            className="justify-center pl-8 pt-4"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center place-items-center gap-10 mt-10 lg:flex-row ">
        <div className="w-30 h-30 rounded-tl-2xl border-b-2 bg-gray-900 text-center text-purple-800 pt-2 trasition duration-75 hover:scale-110">
          MySQL
          <img
            src="/mysql.png"
            alt=""
            className="justify-center pl-8 pt-4"
          />
        </div>
        <div className="w-30 h-30 rounded-tl-2xl border-b-2 bg-gray-900 text-center text-purple-800 pt-2 trasition duration-75 hover:scale-110">
          React Native
          <img
            src="/react.svg"
            alt=""
            className="justify-center pl-8 pt-4"
          />
        </div>
      </div>
      <h1 className="text-center text-3xl font-bold mt-50">Projetos</h1>
      <h1 className="flex w-23 ml-10 text-2xl font-bold mt-20 border-b-2 pb-1 border-purple-800 sm:ml-30">
        Destaques
      </h1>
      <div className="flex flex-col justify-center place-items-center gap-10 mt-10 lg:flex-row ">
        <div className="w-80 h-40 border-b-2 border-b-purple-800 bg-[url(/public/bg-tempo.png)] pt-2 trasition duration-300 hover:scale-110 sm:w-90 sm:h-60" onClick={getTempo}></div>
      </div>
      <div className="flex flex-col justify-center place-items-center gap-10 mt-10 lg:flex-row ">
        <div className="w-80 h-40 border-b-2 border-b-purple-800 bg-[url(/public/bg-Nextcent.png)] pt-2 trasition duration-300 hover:scale-110 sm:w-90 sm:h-60" onClick={getNextcent}></div>
      </div>
      <div className="flex flex-col justify-center place-items-center gap-10 mt-10 lg:flex-row ">
        <div className="w-80 h-40 border-b-2 border-b-purple-800 bg-[url(/public/bg-Ap-is.png)] pt-2 trasition duration-300 hover:scale-110 sm:w-90 sm:h-60" onClick={getApis}></div>
      </div>
      <div className="flex flex-col justify-center place-items-center gap-10 mt-10 lg:flex-row ">
        <div className="w-80 h-40 border-b-2 border-b-purple-800 bg-[url(/public/bg-RickandMorty.png)] pt-2 trasition duration-300 hover:scale-110 sm:w-90 sm:h-60" onClick={getRickandMorty}></div>
      </div>
      <h1 className="text-center text-3xl font-bold mt-50">Colaboração</h1>
      <div className="flex flex-col justify-center place-items-center gap-20 mt-30 mb-40 lg:flex-row ">
        <div className="w-15 h-15 rounded-full border-b-2 bg-gray-900 text-center pt-2 trasition duration-75 hover:scale-110" onClick={gitHub}>
          <img
            src="/github.png"
            alt=""
            className="w-11 h-8 justify-center pl-4 pt-1.5"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
