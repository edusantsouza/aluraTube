import React from "react";
import Head from "next/head";
import config from "../config.json";
import  {Menu} from "../src/components/Menu";
import  {Header} from "../src/components/Header";
import  {Timeline}  from "../src/components/Timeline";
import { Section } from "../src/components/Section";
import {Favorites} from "../src/components/AddFavorite" 
import { ButtonAdd } from "../src/components/AddFavorite/components/ButtonAdd";
import { OpenModal } from "../src/components/AddFavorite/components/ModalAddFav";
import {RegisterVideo} from "../src/components/RegisterVideo/index"




function Homepage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false)
  const [addFav, setAddFav] = React.useState("") 
 
  return (   
    <div onClick={(e)=>{
      if(!e.target.classList.contains('modal-open')){
        isVisible === true ? setIsVisible(false) : null
      }      
    }}>

          <Head>
                <title>AluraTube - Início</title>
                <meta name="description" content="Generic"/>
                <link rel="icon" sizes="32x32" type="img/ico"
                href="../img/favicon.ico"
                />
          </Head>

          <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} /> 
          <Header />
          <RegisterVideo/>
          <Timeline valorDoFiltro={valorDoFiltro} playlists={config.playlists}>
            Conteúdo
          </Timeline>
          <Section>
          <ButtonAdd isVisible={isVisible} setIsVisible={setIsVisible} />
            {
              config.favoritos.map((item)=>{
                return(
                  <Favorites name={item.name} />
                  )
                })
              }
            <OpenModal addFav={addFav} setAddFav={setAddFav} isVisible={isVisible} setIsVisible={setIsVisible}/>
          </Section>
      </div>

  );
}
export default Homepage;




