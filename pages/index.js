
import  {CSSReset}  from "../src/components/CSSReset";
import React from "react";
import config from "../config.json";
import  {Menu} from "../src/components/Menu/indexMenu";
import  {Header} from "../src/components/Header";
import  {Timeline}  from "../src/components/Timeline";
import { Section } from "../src/components/Section";
import {Favorites} from "../src/components/Favorites" 
import { ButtonAdd } from "../src/components/ButtonAdd";
import { OpenModal } from "../src/components/ModalAddFav";




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
        <CSSReset/>
          <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} /> 
          <Header />
          <Timeline valorDoFiltro={valorDoFiltro} playlists={config.playlists}>
            Conteúdo
          </Timeline>
          <Section>
            {
              config.favoritos.map((item)=>{
                return(
                  <Favorites name={item.name} />
                  )
                })
              }
            <ButtonAdd isVisible={isVisible} setIsVisible={setIsVisible} />
            <OpenModal addFav={addFav} setAddFav={setAddFav} isVisible={isVisible} setIsVisible={setIsVisible}/>
          </Section>
      </div>
  );
}
export default Homepage;




