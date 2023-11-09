import { Link } from "react-router-dom"

import styles from "./css/Ideia.module.css"

import Logo from "./imagens/Logo.png"
import cameras from "./imagens/cameras.jpg"
import digital from "./imagens/digital.png"

function Ideia() {

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
          <div className={styles.tudo}>
        <img  className={styles.camera} src={cameras} alt="duas cameras" />
          <div className={styles.conteudo}>
            <p className={styles.p}>Nosso produtos ajudam com a prenvenção de crimes. Normalmente, quando os criminosos percebem um sistema de segurança implantado no local, acabam recuando e desistindo de agir. Só de estarem presentes no ambiente, os equipamentos reduzem as chances de ocorrerem os delitos, por que as pessoas mal-intencionadas optam por locais onde possam trafegar sem serem vistos.</p>
            <img className={styles.digital} src={digital} alt="dedo com digital na frente" />
            <p className={styles.p}>Nosso Produto não é nada de novo ou diferente, já existe há algum tempo, pois podemos ver várias casas com sistemas de alarme quase idênticos aos nossos. A diferença do nosso sistema são os sensores de distância, então apenas nos adaptamos às nossas necessidades sem ser muito complexos ou muito inovador.</p>
          </div>
          </div>
        </main>
      </>
    )
  }
  
  export default Ideia