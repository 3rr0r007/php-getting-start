<html>
  <head>
    <link href="style.css" rel="stylesheet" type="text/css">
    <script src="web-link.js"></script>
  </head>
  <body>
    <h2>Buongiorno 5IA</h2>
    <form id="email-form" method="POST" action="send.php"> <!--send.php code: https://gist.github.com/ganmahmud/fabe0821a230409f39b2#file-send-php-->
      <p><input type="text" id="name" name="name" placeholder="Inserisci nome" /></p>
      <p><input type="email" id="email" name="email" placeholder="Inserisci email" /></p>
      <p><textarea name="msg" id="msg" cols="22" placeholder="Scrivi il tuo messaggio qui"></textarea></p>
      <button type="submit">Send</button>
    </form>
  </body>
</html>
