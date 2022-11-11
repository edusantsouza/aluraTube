
import  {CSSReset}  from "../src/components/CSSReset";
import React from "react";
import config from "../config.json";
import  {Menu} from "../src/components/Menu/indexMenu";
import  {Header} from "../src/components/Header";
import  {Timeline}  from "../src/components/Timeline";
import { Section } from "../src/components/Section";
import {Favorites} from "../src/components/Favorites" 
import { Adicionar } from "../src/components/ButtonAdd";
import { OpenModal } from "../src/components/ModalAddFav";


function Homepage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  return (
      <>
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
            <Adicionar/>
              <OpenModal />
          </Section>
      </>
  );
}
export default Homepage;




