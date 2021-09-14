import { list } from "postcss";
import "./App.css";
import backgroundVideo from "./assets/videos/background.mp4";
import picture from "./assets/picture.jpeg";
import React, { Component } from "react";
import $ from "jquery";

// "homepage": "http://augustt0.github.io/Portfolio",

var currentPage = 0;

class AppComponent extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (a) => {
    console.log("this is:", a);
  };

  componentDidMount() {
    document.addEventListener("myVideo", this.handleContextMenu);
  }

  componentWillUnmount() {
    document.removeEventListener("myVideo", this.handleContextMenu);
  }

  handleContextMenu = (e) => {
    e.preventDefault();
  };
  
  handleMouseDown = e => {
    return 'false'
  }

  render() {
    return (
      <div className="App">
        <div className="App" oncontextmenu="return false">
        <div>
        <video
              autoPlay
              preload
              playsinline
              controlsList="nodownload"
              disablePictureInPicture
              muted
              loop
              id="myVideo"
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
        </div>
          <div className="space-y-2 flex flex-col justify-center xl:flex-row xl:justify-between xl:flex w-screen">
            <div className="relative text-center top-12 xl:left-12 text-white font-body xl:text-7xl text-5xl md:text-6xl">
              <div className="xl:space-y-8">
                <div className="xl:space-y-2">
                  <button onClick={this.handleClick(0)}>Augusto Cabrera</button>
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
            <div className="space-y-12">
              <div className="relative space-x-6 xl:space-x-12 xl:top-16 xl:right-16 text-white font-sans font-medium text-2xl md:text-3xl">
                <button onClick={() => this.handleClick(1)}>
                  Mis proyectos
                </button>
                <button onClick={() => this.handleClick(2)}>Contacto</button>
                <button onClick={() => this.handleClick(3)}>
                  Acerca de mí
                </button>
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
}

export default AppComponent;
