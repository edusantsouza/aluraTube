import styled from "styled-components";
import { createClient } from "@supabase/supabase-js";
import React from "react";

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundBase};
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12eGxqbXp4bGJvdmF3Z3lxeWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNTQxMzksImV4cCI6MTk4MzkzMDEzOX0.UwTUw0goJq5SCI2KU_ti45SJem4eK-KWpEyjaY3ShbU";
const PROJECT_URL = "https://mvxljmzxlbovawgyqyjl.supabase.co";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function Timeline({ valorDoFiltro, reload, setReload }) {
  const [playlists, setPlaylist] = React.useState({
    videos: [],
  });

  const fetchDataVideos = () => {
    supabase
      .from("list_video")
      .select("*")
      .then((dados) => {
        const novasPlaylists = { ...playlists };
        dados.data.forEach((item) => {
          if (!novasPlaylists[item.playlist]) {
            novasPlaylists[item.playlist] = [];
          }
          novasPlaylists[item.playlist].push(item);
        });
        setPlaylist(novasPlaylists);
      });
  };
  const videos = playlists.videos;

  React.useEffect(() => {
    fetchDataVideos();
    setReload("");
  }, [reload]);

  return (
    <StyledTimeline>
      {
        <div>
          {Object.entries(playlists).map(
            (item, i) => {
              const listVideos = videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const valorDoFiltroNormalized = valorDoFiltro.toLowerCase();
                return titleNormalized.includes(valorDoFiltroNormalized);
              });

              // if (listVideos.length > 0) {
              return (
                <section>
                  <h2>{item[i]}</h2>
                  <div>
                    {listVideos.map((video) => {
                      return (
                        <a href={video.url}>
                          <img src={video.thumb} />
                          <span>{video.title}</span>
                        </a>
                      );
                    })}
                  </div>
                </section>
              );
            },
            // }
          )}
        </div>
      }
    </StyledTimeline>
  );
}
