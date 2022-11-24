export const indexTemplate = (content, token) => /*html*/ `
<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" sizes="16x16" href="//www.redditstatic.com/desktop2x/img/favicon/favicon-16x16.png">
  <title>React-Project</title>
  <script src="/static/client.js" type="application/javascript"></script>
  <script>
    window.__token__ = '${token}'
  </script>
  
</head>

<body>
  <div id="react_root">${content}</div>
  <div id="dropdown_root"></div>
</body>

</html>
`;
