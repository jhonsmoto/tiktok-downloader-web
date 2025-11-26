async function downloadVideo() {
  const url = document.getElementById("url").value;

  const res = await fetch("https://api.tiklydown.me/api/download?url=" + encodeURIComponent(url));
  const data = await res.json();

  if (data.download_url) {
    document.getElementById("result").innerHTML =
      `<a href="${data.download_url}" target="_blank">Klik untuk Download Video</a>`;
  } else {
    document.getElementById("result").innerText = "URL tidak valid atau API error.";
  }
}
