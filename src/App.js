import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import {
  fetchGenres,
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums,
} from "./api/api";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchTopAlbums().then(setTopAlbums);
    fetchNewAlbums().then(setNewAlbums);
    fetchSongs().then(setSongs);
    fetchGenres().then(setGenres);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
      <Section title="Songs" data={songs} type="song" filters={genres} />
    </>
  );
}

export default App;
