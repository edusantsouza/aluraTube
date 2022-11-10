
import  {CSSReset}  from "../src/components/CSSReset";
import  {Menu} from "../src/components/Menu";
import  {Header} from "../src/components/Header";
import  {Timeline}  from "../src/components/Timeline";
import config from "../config.json";



function Homepage() {
  return (
      <>
        <CSSReset/>
          <Menu />
          <Header />
          <Timeline playlists={config.playlists}>
            Conteúdo
          </Timeline>
      </>
  );
}
export default Homepage;




