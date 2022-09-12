Projet crée pour m'entrainer à manipuler les fichiers entre back(NodeJS) et le front (ReactJS).

Pour utiliser le Https vous devez instaler les certificats de securiter.

Pour générer un certificat auto-signé, exécutez ce qui suit dans votre shell :

  openssl genrsa -out key.pem
  openssl req -new -key key.pem -out csr.pem
  openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
  rm csr.pem
