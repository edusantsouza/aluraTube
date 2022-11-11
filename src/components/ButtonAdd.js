import styled from "styled-components"


const AdicionarStyled = styled.div`
button{
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: solid rgba(178, 184, 194, .2) .5px;
  cursor: pointer;
  margin-top: 20px;
  background-color: #fff;
  
}

button:hover {
  opacity: 1;
  svg {
    fill: #000;
  }
}

svg{
  width: 50px;
  height: 50px;
  fill: rgba(178, 184, 194, 1);
}

`

export function Adicionar() {
  return (
    <AdicionarStyled>
              <button className="add-fav">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
              </button>   
    </AdicionarStyled>
  )
}