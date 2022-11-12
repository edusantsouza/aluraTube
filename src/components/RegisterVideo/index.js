import { StyledRegisterVideo } from "./styles";
import React from "react";

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
    return (!str || /^\s*$/.test(str));
  }
const ModalAddVideo = ({
  formCadastro,
  isModal,
  setIsModal,
  values,
  setValues,
}) => {
  return (
    isModal && (
      <form
        className="modal"
        onSubmit={(e) => {    
          e.preventDefault();
          if(!isBlank(formCadastro.values.titulo && formCadastro.values.url)){
          setIsModal(false);
          setValues(formCadastro.clearInput)
          } else {
            alert("Ops! Preencha corretamente os campos.")
          }
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

export const RegisterVideo = (props) => {
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
        formCadastro={formCadastro}
        values={values}
        setValues={setValues}
        isModal={isModal}
        setIsModal={setIsModal}
      />
    </StyledRegisterVideo>
  );
};
