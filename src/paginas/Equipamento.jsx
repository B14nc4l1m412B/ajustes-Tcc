import { Link } from "react-router-dom"

import styles from "./css/Equipamento.module.css"

import Logo from "./imagens/Logo.png"
import Imagecomponentes from "./imagens/componentes.png"
import Brincando from "./imagens/brincando-com-ideias.jpg"

function Equipamento() {

    return (
      <>
        <header className={styles.header}>
          <div className={styles.buttonLogo}>
          <button>
            <img className={styles.Logo} src={Logo} alt="logo azul" />
            <Link className={styles.home} to={"/"} >B.D.L. systems</Link>
          </button>
          </div>
          <div className={styles.todomenu}>
            <Link className={styles.menu1} to={"/objetivo"}>Objetivo</Link>
            <Link className={styles.menu2} to={"/ideia"}>Nossa ideia</Link>
            <Link className={styles.menu3} to={"/equipamento"}>Equipamento</Link>
            <Link className={styles.menu4} to={"/bibliografia"}>Bibliografia</Link>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.conteudo}>

          <div className={styles.imgcomponentes}>
            <img className={styles.Imagecomponentes} src={Imagecomponentes} alt="imagem dos componentes" />
          </div>

          <div className={styles.conteudo2}>
          <div className={styles.lista}>
            <h1 className={styles.h1}>Componentes</h1>
            <ul>
              <li>Leitor ultrasonico: R$ 15,00</li>
              <li>Leitor biométrico: R$ 160,00</li>
              <li>LCD: R$ 40,00</li>
              <li>Arduino: R$ 130,00</li>
              <li>Cabos: R$ 27,00</li>
              <li>Protoboard: R$ 20,00</li>
              <li>Buzzer: R$ 10,00</li>
            </ul>
          </div>

          <div className={styles.youtube}>
            <div className={styles.imagem}>
              <img className={styles.Brincando} src={Brincando} alt="um circulo verde com a borda branca, com um desenho, em branco, de um led ligado no seu interior" />
              </div>
              <a className={styles.link} href="https://www.youtube.com/@BrincandocomIdeias/videos">Canal Brincando com Ideias</a>
          </div>
          </div>
          </div>
        </main>
      </>
    )
  }
  
  export default Equipamento