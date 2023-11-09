import { Link } from "react-router-dom"

import styles from "./css/Ola.module.css"

import Logo from "./imagens/Logo.png"
import imagemdefundo from "./imagens/imagem_de_fundo_ola_pc.png"



function Ola() {

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
          <img className={styles.imagemdefundo} src={imagemdefundo} alt="" />
          <div className={styles.conteudo}>
            <h1 className={styles.h1}>Olá</h1>
            <h2 className={styles.h2}>Bem-vindo ao site Begin DoorLock systems, onde você encontra uma grande variedade de sirenes, equipamentos de segurança residencial, tudo na melhor qualidade para sua segurança e proteção residencial, confira nossos equipamentos de última geração.</h2>
          </div>
        </main>
      </>
    )
  }
  
  export default Ola