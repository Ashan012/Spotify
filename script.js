let getSongs = async () => {
  let api = await fetch("http://127.0.0.1:5500/songs");
  let res = await api.text();

  let div = document.createElement("div");
  div.innerHTML = res;
  let anchorTag = div.getElementsByTagName("a");

  let songs = [];
  for (let i = 0; i < anchorTag.length; i++) {
    let element = anchorTag[i];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
  }

  return songs;
};
let main = async () => {
  let newSong = await getSongs();
  console.log(newSong);

  //play song
  let audio = new Audio(newSong[0]);

  console.log(audio.currentTime, audio.currentSrc);
};
main();
