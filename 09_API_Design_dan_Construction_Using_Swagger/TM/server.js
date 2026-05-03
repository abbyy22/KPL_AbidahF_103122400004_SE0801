const http = require("http");

function hashNama(nama) {
  let hash = 0;
  for (let i = 0; i < nama.length; i++) {
    hash = (hash * 31 + nama.charCodeAt(i)) >>> 0;
  }
  return (hash % 100) + 1;
}

const server = http.createServer((req, res) => {
  if (req.method !== "POST" || req.url !== "/") {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    let payload;
    try {
      payload = JSON.parse(body);
    } catch {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "JSON tidak valid" }));
      return;
    }

    const { nama, tebakan } = payload;

    if (typeof nama !== "string" || typeof tebakan !== "number") {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Field 'nama' (string) dan 'tebakan' (number) wajib diisi" }));
      return;
    }

    const angkaRahasia = hashNama(nama);
    let jawaban;

    if (tebakan === angkaRahasia) {
      jawaban = `Benar sekali! Tebakannya adalah ${tebakan}.`;
    } else if (tebakan > angkaRahasia) {
      jawaban = "Tebakanmu terlalu tinggi!";
    } else {
      jawaban = "Tebakanmu terlalu rendah!";
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ jawaban }));
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});