
function App() {
  return (
    <div>
      <div>
        <a href="http://localhost:8000/api">api </a>
        <a href="http://localhost:8000/coments">comments </a>
        <a href="http://localhost:8000/images">images</a>
      </div>
      <div>
        <h1>un envoie</h1>
        {/* <form method="POST" enctype="multipart/form-data" action="http://localhost:8000/uploaddufichier">
            <input type="file" name="monfichier" />
            <button> envoyer </button>
        </form> */}
        <hr/>
        <h1>multiple envoie</h1>
        <form method="POST" enctype="multipart/form-data" action="http://localhost:8000/uploaddufichiers">
            <input id="files" type="file" name="mesfichiers" multiple />
            <button> envoyer </button>
        </form>
      </div>
    </div>
  );
}

export default App;
