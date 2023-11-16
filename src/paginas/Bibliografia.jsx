import { Link } from "react-router-dom"

import styles from "./css/Bibliografia.module.css"

import Logo from "./imagens/Logo.png"
import usinainfo from "./imagens/logo-nova-blog-usinainfo.jpg"
import comofazer from "./imagens/como-fazer-coisas.png"
import faculdade from "./imagens/faculdade_de_tecnologia_de_batucatu.png"
import Brincando from "./imagens/brincando-com-ideias.jpg"
import Wanderley from "./imagens/wanderlay_patricio.jpg"


function Bibliografia() {

    return (
      <>
        <header className={styles.header}>
          <div className={styles.buttonLogo}>
          <button>
            <Link className={styles.home} to={"/"} >
              <img className={styles.Logo} src={Logo} alt="logo azul" />
              B.D.L. systems
            </Link>
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

          <div className={styles.biblioteca}>

            <div className={styles.grupodecima}>

            <div className={styles.grupo1}>
              <img className={styles.usinainfo} src={usinainfo} alt="retangulo roxo escuro que no lado esquerdo tem um itemcom um formato que parece uma bandeira verde água e um ponto em cima e do lado direio usinainfo eletrônica & robóticas" />
              <a className={styles.links} href="https://www.usinainfo.com.br/blog/10- projetos-com-arduino-para-fazer-em-2020/">10 Projetos com arduino <br/> para fazer em 2022</a>
            </div>

            <div className={styles.grupo2}>
              <img className={styles.usinainfo} src={usinainfo} alt="retangulo roxo escuro que no lado esquerdo tem um itemcom um formato que parece uma bandeira verde água e um ponto em cima e do lado direio usinainfo eletrônica & robóticas" />
              <a className={styles.links} href="https://www.usinainfo.com.br/blog/leitor-biometrico-arduino-sistema-de-cadastramento-e-leitura-de-digitais/">Leitor biométrico arduino:<br/>Sistema de cadastramento e<br/>leitura de digitais</a>
            </div>

            <div className={styles.grupo3}>
              <img className={styles.comofazer} src={comofazer} alt="retangulo branco com um cachorro reciclavel a esquerda e escrito como fazer as coisa na direita" />
              <a className={styles.links} href="http://www.comofazerascoisas.com.br/como-fazer-um-alarme-com-arduino-sensor-de-movimentos-pir.html">Como fazer um Alarme com<br/>Arduino e sensor de<br/> movimentos PIR.</a>
            </div>
            </div>

            <div className={styles.grupodebaixo}>

            <div className={styles.grupo4}>
              <img className={styles.faculdade} src={faculdade} alt="um predio desenhado com faculdade de tecnologia de botucatu escrito embaixo" />
              <a className={styles.links} href="http://www.jornacitec.fatecbt.edu.br/index.php/VIIJTC/VIIJTC/paper/viewFile/1590/2126">Automação de porta com <br /> acesso por autenticação <br /> biométrica com impressão <br /> digital</a>
            </div>

            <div className={styles.grupo5}>
              <img className={styles.canais} src={Brincando} alt="um circulo verde com a burda branca, com um desenho, em branco, de um led ligado no seu interior" />
              <a className={styles.links} href="https://www.youtube.com/@BrincandocomIdeias/videos">Canal Brincando com Ideias</a>
            </div>

            <div className={styles.grupo6}>
              <img className={styles.canais} src={Wanderley} alt="circulo roxo com um w no meio" />
              <a className={styles.links} href="https://www.youtube.com/@wanderleypatricio2793/videos">Canal Wanderley Patrício</a>
            </div>

            </div>
          </div>
          
        </main>
      </>
    )
  }
  
  export default Bibliografia