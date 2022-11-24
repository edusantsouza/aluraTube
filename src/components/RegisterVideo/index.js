import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";
import React from "react";

const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12eGxqbXp4bGJvdmF3Z3lxeWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNTQxMzksImV4cCI6MTk4MzkzMDEzOX0.UwTUw0goJq5SCI2KU_ti45SJem4eK-KWpEyjaY3ShbU";
const PROJECT_URL = "https://mvxljmzxlbovawgyqyjl.supabase.co";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

const getThumb = (url) => {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
};

function useForm(props) {
  const [values, setValues] = React.useState(props.initialValues);
  return {
    values,
    handleChange: (e) => {
      const inputName = e.target.name;
      const value = e.target.value;
      setValues({ ...values, [inputName]: value });
    },
    clearInput: () => {
      setValues(props.initialValues);
    },
  };
}
const isBlank = (str) => {
  return !str || /^\s*$/.test(str);
};
const ModalAddVideo = ({
  formCadastro,
  isModal,
  setIsModal,
  values,
  setValues,
  reload,
  setReload,
}) => {
  return (
    //Aproveitar o modal para implementar a opção de adicionar playlist
    //Adicionar ao modal uma seleção de Playlist onde o video será armazenado
    isModal && (
      <form
        className="modal"
        onSubmit={(e) => {
          e.preventDefault();
          if (!isBlank(formCadastro.values.titulo && formCadastro.values.url)) {
            setIsModal(false);
            setValues(formCadastro.clearInput);
          } else {
            alert("Ops! Preencha corretamente os campos.");
          }
          supabase
            .from("list_video")
            .insert({
              title: formCadastro.values.titulo,
              url: formCadastro.values.url,
              thumb: getThumb(formCadastro.values.url),
              playlist: "videos",
            })
            .then((response) => {});
          setReload("value");
        }}
      >
        <div>
          <button
            type="button"
            className="close-modal"
            onClick={() => isModal && setIsModal(false)}
          >
            X
          </button>
          <input
            placeholder="Título do vídeo"
            name="titulo"
            value={formCadastro.values.titulo}
            onChange={formCadastro.handleChange}
          />
          <input
            placeholder="Url"
            name="url"
            value={formCadastro.values.url}
            onChange={formCadastro.handleChange}
          />
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    )
  );
};

export const RegisterVideo = ({ reload, setReload, setSeed }) => {
  const [isModal, setIsModal] = React.useState(false);
  const [values, setValues] = React.useState({ titulo: "", url: "" });
  const formCadastro = useForm({
    initialValues: { titulo: "", url: "" },
  });

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={(e) => setIsModal(true)}>
        +
      </button>
      <ModalAddVideo
        setSeed={setSeed}
        reload={reload}
        setReload={setReload}
        formCadastro={formCadastro}
        values={values}
        setValues={setValues}
        isModal={isModal}
        setIsModal={setIsModal}
      />
    </StyledRegisterVideo>
  );
};
