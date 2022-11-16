import styled from "styled-components";
import React from "react";

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};

  .banner {
    width: 100vw;
    height: 200px;
    background-image: url("https://media-exp1.licdn.com/dms/image/D5616AQF3wbEQpGLBww/profile-displaybackgroundimage-shrink_350_1400/0/1666885083116?e=1674086400&v=beta&t=1rGpuBBhq-9l1CJ__1mNgV_94oWAACYOC_hmI6dzFhY");
    background-size: contain;
  }

  .profile-pic {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user {
    font-family: Helvetica, sans-serif;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 112px;
    gap: 10px;
    width: 100%;
    padding: 16px 16px;
  }

  .user-info p,
  .user-info h2 {
    margin-block: 0;
  }

  #username-box {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .user-info p {
    margin-top: 10px;
    line-height: 18px;
    font-size: 16px;
    color: grey;
  }

  .user-info h2 {
    line-height: 28px;
    font-size: 24px;
  }

  #user-bio {
    font-size: 14px;
    margin-top: 10px;
  }

  svg > path {
    fill: ${({ theme }) => theme.textColorBase};
  }
`;

export function Header() {
  const [name, setName] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [profilePic, setProfilePic] = React.useState("");

  fetch("http://api.github.com/users/edusantsouza")
    .then((result) => result.json())
    .then((jsonBody) => {
      setName(jsonBody.name);
      setBio(jsonBody.bio);
      setProfilePic(jsonBody.avatar_url);
    });

  // O usuário está talhado no Fetch. Criar tela de Login de usuário.

  return (
    <StyledHeader>
      <div>
        <div className="banner"></div>
        <section className="user">
          <img className="profile-pic" src={profilePic} />
          <div className="user-info" id="user-info">
            <div id="username-box">
              <h2>{name}</h2>
              <a href="https://github.com/edusantsouza" target="_blank">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.24701C9.62543 2.24696 7.32833 3.09189 5.51977 4.63061C3.7112 6.16934 2.50921 8.30142 2.12888 10.6453C1.74855 12.9892 2.21471 15.392 3.44394 17.4237C4.67317 19.4553 6.58525 20.9832 8.838 21.734C9.338 21.822 9.525 21.522 9.525 21.259C9.525 21.022 9.513 20.234 9.513 19.397C7 19.859 6.35 18.784 6.15 18.222C5.92814 17.6748 5.57634 17.1898 5.125 16.809C4.775 16.622 4.275 16.159 5.112 16.147C5.43188 16.1816 5.7387 16.2929 6.00644 16.4713C6.27417 16.6497 6.49493 16.8901 6.65 17.172C6.78673 17.4177 6.9706 17.634 7.19107 17.8085C7.41153 17.9829 7.66427 18.1122 7.93478 18.1889C8.2053 18.2655 8.48828 18.288 8.76751 18.2551C9.04674 18.2222 9.31673 18.1345 9.562 17.997C9.60532 17.4884 9.83206 17.0128 10.2 16.659C7.975 16.409 5.65 15.547 5.65 11.722C5.63583 10.728 6.00258 9.76622 6.675 9.03401C6.36931 8.17023 6.40508 7.2223 6.775 6.38401C6.775 6.38401 7.612 6.12201 9.525 7.40901C11.1613 6.95896 12.8887 6.95896 14.525 7.40901C16.437 6.10901 17.275 6.38401 17.275 6.38401C17.645 7.22228 17.6808 8.17024 17.375 9.03401C18.0495 9.76496 18.4165 10.7276 18.4 11.722C18.4 15.559 16.062 16.409 13.837 16.659C14.0757 16.9009 14.2595 17.1913 14.3759 17.5105C14.4924 17.8297 14.5388 18.1703 14.512 18.509C14.512 19.847 14.5 20.922 14.5 21.259C14.5 21.522 14.687 21.834 15.187 21.734C17.4356 20.9769 19.342 19.4454 20.5658 17.4128C21.7897 15.3801 22.2513 12.9787 21.8684 10.6372C21.4854 8.29567 20.2828 6.16644 18.4752 4.62959C16.6676 3.09274 14.3726 2.2483 12 2.24701V2.24701Z"
                    fill={`white`}
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/eduardo-sant-souza/"
                target="_blank"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27V18.5Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
            <p>{bio}</p>
          </div>
        </section>
      </div>
    </StyledHeader>
  );
}
