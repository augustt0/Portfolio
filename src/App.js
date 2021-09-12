import "./App.css";
import backgroundVideo from "./assets/background.mp4";
import picture from "./assets/picture.jpeg";

function App() {
  return (
    <div className="App">
      <div className="App">
        <video
          autoPlay
          onContextMenu="return false;"
          disablePictureInPicture
          muted
          loop
          id="myVideo"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="space-y-2 flex flex-col justify-center xl:flex-row xl:justify-between xl:flex w-screen">
          <div className="relative text-center top-12 xl:left-12 text-white font-body xl:text-7xl text-5xl md:text-6xl">
            <div className="xl:space-y-8">
              <div className="xl:space-y-2">
                <p>Augusto Cabrera</p>
                <div className="flex flex-col text-left invisible xl:visible">
                  <p className="font-sans font-medium text-3xl">
                    Desarrollador de Software
                  </p>
                  <p className="font-sans font-medium text-2xl">
                    Creador de contenido
                  </p>
                </div>
              </div>
              <img
                className="hidden xl:block rounded-full h-64 w-64"
                src={picture}
              />
            </div>
          </div>
          <div className='space-y-12'>
            <div className="relative space-x-6 xl:space-x-12 xl:top-16 xl:right-16 text-white font-sans font-medium text-2xl md:text-3xl">
              <a href="http://localhost:3000/#">Acerca de mí</a>
              <a href="http://localhost:3000/#">Contacto</a>
              <a href="http://localhost:3000/#">Mis proyectos</a>
            </div>
            <img
              className="relative m-auto block xl:hidden rounded-full h-32 w-32 md:h-64 md:w-64"
              src={picture}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
