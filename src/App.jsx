import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [newArticleTitle, setNewArticleTitle] = useState("");
  const [newArticleAuthor, setNewArticleAuthor] = useState("");
  const [articlesData, setArticlesData] = useState([]);

  const handleInputTitleChange = (e) => {
    setNewArticleTitle(e.target.value);
  };

  const handleInputAuthorChange = (e) => {
    setNewArticleAuthor(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const articleList = [...articlesData];
    newArticleTitle && newArticleAuthor
      ? articleList.push({ title: newArticleTitle, author: newArticleAuthor })
      : alert("Nessun valore inserito");
    setArticlesData(articleList);
    setNewArticleTitle("");
    setNewArticleAuthor("");
  };

  const deleteArticle = (id) => {
    const updatedList = articlesData.filter((article, i) => i !== id);
    setArticlesData(updatedList);
  };

  const modifyArticle = (id) => {
    const updatedList = [...articlesData];
    newArticleTitle && newArticleAuthor
      ? (updatedList[id] = { title: newArticleTitle, author: newArticleAuthor })
      : alert("Nessun valore inserito");
    setArticlesData(updatedList);
    setNewArticleTitle("");
    setNewArticleAuthor("");
  };

  return (
    <>
      <header>
        <h1 className="p-4 fw-bold">React Form</h1>
      </header>

      <main>
        <div className="container">
          <section className="px-4">
            <h2 className="fs-5 ">Inserisci i dati dell'articolo</h2>
            <form className=" py-3" onSubmit={handleFormSubmit}>
              {/* Title input */}
              <div className="mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Titolo Articolo"
                  value={newArticleTitle}
                  onChange={handleInputTitleChange}
                />
              </div>

              {/* Author input */}
              <div className="mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Autore"
                  value={newArticleAuthor}
                  onChange={handleInputAuthorChange}
                />
              </div>

              {/* Submit button */}
              <button type="submit" className="btn btn-success">
                <i className="fa-solid fa-plus fa-xl"></i>
              </button>
            </form>
          </section>

          {/* Articles list */}
          <section className="px-4">
            <ul className="list-group">
              {articlesData.map((article, i) => {
                return (
                  <li key={i} className="list-group-item">
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="fw-bold">{article.title}</div>
                        <span>
                          <i>&#45; {article.author}</i>
                        </span>
                      </div>
                      <div>
                        <button
                          className="btn btn-warning mx-1"
                          onClick={() => modifyArticle(i)}
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </button>
                        <button
                          className="btn btn-danger mx-1"
                          onClick={() => deleteArticle(i)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          {articlesData.length > 0 && (
            <div className="form-text px-4 m-2">
              modificare un articolo: inserire i nuovi dati nel form e cliccare
              sul bottone di modifica dell'articolo interessato
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
