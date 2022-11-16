import React, { useEffect } from "react";
import Head from "next/head";
import config from "../config.json";
import { Menu } from "../src/components/Menu";
import { Header } from "../src/components/Header";
import { Timeline } from "../src/components/Timeline";
import { Section } from "../src/components/Section";
import { Favorites } from "../src/components/AddFavorite";
import { ButtonAdd } from "../src/components/AddFavorite/components/ButtonAdd";
import { OpenModal } from "../src/components/AddFavorite/components/ModalAddFav";
import { RegisterVideo } from "../src/components/RegisterVideo/index";
import { createClient } from "@supabase/supabase-js";

const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12eGxqbXp4bGJvdmF3Z3lxeWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNTQxMzksImV4cCI6MTk4MzkzMDEzOX0.UwTUw0goJq5SCI2KU_ti45SJem4eK-KWpEyjaY3ShbU";
const PROJECT_URL = "https://mvxljmzxlbovawgyqyjl.supabase.co";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

function Homepage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const [addFav, setAddFav] = React.useState("");
  const [reload, setReload] = React.useState("");
  const [seed, setSeed] = React.useState(1);
  const [listFav, setListFav] = React.useState([]);

  //Tirar isso da index
  const fetchData = () => {
    supabase
      .from("list_favorites")
      .select("*")
      .then((dados) => {
        const newSetListFav = [...listFav];
        dados.data.forEach((item) => {
          newSetListFav.push(item);
        });
        setListFav(newSetListFav);
      });
  };
  React.useEffect(() => {
    fetchData();
    setReload("");
  }, [reload]);

  const runListFav = (item) => {
    return <Favorites name={item.name} />;
  };
  return (
    <div
      onClick={(e) => {
        if (!e.target.classList.contains("modal-open")) {
          isVisible === true ? setIsVisible(false) : null;
        }
      }}
    >
      <Head>
        <title>AluraTube - Início</title>
        <meta name="description" content="Generic" />
        <link
          rel="icon"
          sizes="32x32"
          type="img/ico"
          href="../img/favicon.ico"
        />
      </Head>

      <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
      <Header />
      <RegisterVideo reload={reload} setReload={setReload} setSeed={setSeed} />
      <Timeline
        key={seed}
        valorDoFiltro={valorDoFiltro}
        listFav={listFav}
        reload={reload}
        setReload={setReload}
      >
        Conteúdo
      </Timeline>
      <Section>
        <ButtonAdd
          setListFav={setListFav}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
        {listFav.map((item) => {
          return runListFav(item);
        })}
        <OpenModal
          reload={reload}
          setReload={setReload}
          supabase={supabase}
          addFav={addFav}
          setAddFav={setAddFav}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      </Section>
    </div>
  );
}
export default Homepage;
