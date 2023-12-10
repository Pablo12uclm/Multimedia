import http from 'http';

const server = http.createServer((req, res) => {
  // Indica al navegador que la respuesta es HTML
  res.setHeader('Content-Type', 'text/html');

  // Escribe el contenido HTML que deseas mostrar
  const htmlContent = `<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
  <iframe src="https://h5p.org/h5p/embed/1466520" width="1090" height="713" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" title="Jugadas Poker"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>  </body>
  </html>`;

  // Envía la respuesta al cliente
  res.end(htmlContent);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
