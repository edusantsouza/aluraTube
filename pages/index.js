
import  {CSSReset}  from "../src/components/CSSReset";
import  {Menu} from "../src/components/Menu";
import  {Header} from "../src/components/Header";
import  {Timeline}  from "../src/components/Timeline";
import { Section } from "../src/components/Section";
import { Adicionar } from "../src/components/addFav";
import {Favorites} from "../src/components/Favorites" 
import config from "../config.json";

const favoritos = [
  {name: "edusantsouza"},
  {name: "omariosouto"},
  {name: "peas"},
]

function Homepage() {
  return (
      <>
        <CSSReset/>
          <Menu />
          <Header />
          <Timeline playlists={config.playlists}>
            Conteúdo
          </Timeline>
          <Section>
            {
              favoritos.map((item)=>{
                return(
                  <Favorites name={item.name} />
                )
              })
            }
          </Section>
      </>
  );
}
export default Homepage;




