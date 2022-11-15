import styled from "styled-components";

const StyledFavorites = styled.div`
  li {
    padding: 16px;
    cursor: pointer;
  }

  a {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    text-decoration: none;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  p {
    margin-top: 10px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColorBase};
  }

  li {
    list-style: none;
  }
`;

export function Favorites(props) {
  return (
    <StyledFavorites>
      <li key={props.name}>
        <a href={`https://github.com/${props.name}`} target="_blank">
          <img
            src={`http://github.com/${props.name}.png`}
            alt="Foto de perfil"
          />
          <p>{props.name}</p>
        </a>
      </li>
    </StyledFavorites>
  );
}
