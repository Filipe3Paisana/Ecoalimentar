import React from "react";

const Home = () => {
  return (
    <>
      <div className="image-container">
        <img src="main-img.png" alt="Imagem-main" className="main-image" />
        <div className="image-title">O Título Aqui</div> {/* Adicione o texto do título aqui */}
      </div>

      <div className="home-container">
        <div className="menu-item">
          <div className="menu-title">Consultoria</div>
          <a href="/consultoria">
            <br></br>
            <img src="work_logo.png" alt="Ícone 1" className="menu-icon" />
          </a>
        </div>
        
        <div className="menu-divider"></div>
        
        <div className="menu-item">
          <div className="menu-title">Formação</div>
          <a href="/formacao">
            <br></br>
            <img src="search.png" alt="Ícone 2" className="menu-icon" />
          </a>
        </div>
        
        <div className="menu-divider"></div>
        
        <div className="menu-item">
          <div className="menu-title">Auditoria</div>
          <a href="/auditoria">
            <br></br>
            <img src="auditoria.png" alt="Ícone 3" className="menu-icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
