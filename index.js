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
  <iframe src="http://localhost/wordpress/wp-admin/admin-ajax.php?action=h5p_embed&id=1" width="845" height="536" frameborder="0" allowfullscreen="allowfullscreen" title="Jugadas Poker"></iframe><script src="http://localhost/wordpress/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>
  </body>
  </html>`;

  // Envía la respuesta al cliente
  res.end(htmlContent);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
