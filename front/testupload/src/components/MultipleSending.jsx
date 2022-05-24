import React from 'react';

const MultipleSending = () => {
  return (
    <div>
      <h1>multiple envoie</h1>
      <form method="POST" enctype="multipart/form-data" action="http://localhost:8000/uploaddufichiers">
      <input id="files" type="file" name="mesfichiers" multiple />
      <button input type='submit' formtarget="_blank"> envoyer </button>
      </form>
    </div>
  );
};

export default MultipleSending;