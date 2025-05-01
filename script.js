document.getElementById('lyrics-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const artist = document.getElementById('artist').value.trim();
  const song = document.getElementById('song').value.trim();

  const output = document.getElementById('lyrics-output');
  const comment = document.getElementById('comment-box');
  output.textContent = 'Yükleniyor...';
  comment.textContent = '';

  fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.lyrics) {
        output.textContent = data.lyrics;
        comment.textContent = getRandomComment();
      } else {
        output.textContent = 'Şarkı sözleri bulunamadı.';
      }
    })
    .catch((err) => {
      console.error(err);
      output.textContent = 'Bir hata oluştu.';
    });
});

function getRandomComment() {
  const comments = [
    "Bu şarkının sözleri gerçekten derin 🌌",
    "Belki de seni anlatıyor bu satırlar 🎶",
    "Müziğin sihri burada gizli 🔮",
    "Her kelimesi bir duyguyu yakalıyor 🎧",
    "Bazen sözler her şeydir, müzikle birleşince 💙"
  ];
  return comments[Math.floor(Math.random() * comments.length)];
}