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
      <div className="wrapper bg-dark">
        <main className="py-5">
          <div className="container">
            <div className="card">
              <div className="card-header">
                <h1 className="fw-bold fs-4">Inserisci i dati dell'articolo</h1>
              </div>
              <div className="card-body">
                <form className="row g-3" onSubmit={handleFormSubmit}>
                  {/* Title Input */}
                  <div className="col-md-6">
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Titolo"
                      value={newArticleTitle}
                      onChange={handleInputTitleChange}
                    />
                  </div>

                  {/* Author Input */}
                  <div className="col-md-6">
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Autore"
                      value={newArticleAuthor}
                      onChange={handleInputAuthorChange}
                    />
                  </div>

                  {/* Img Input */}
                  <div className="col-md-8">
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Immagine"
                    />
                  </div>

                  {/* Category Select */}
                  <div className="col-md-4">
                    <select className="form-select">
                      <option>Categoria</option>
                      <option>...</option>
                    </select>
                  </div>

                  {/* Content Input */}
                  <div className="col-12">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Contenuto"
                    />
                  </div>

                  <div className="col-12 d-flex">
                    <div>
                      {/* Submit Button */}
                      <button type="submit" className="btn btn-success">
                        <i className="fa-solid fa-plus fa-xl"></i>
                      </button>
                    </div>

                    <div className="form-check mx-3">
                      {/* Published Check */}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="pubCheck"
                      />
                      <label className="form-check-label" htmlFor="pubCheck">
                        Pubblicato
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Articles list */}
            <section>
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
                modificare un articolo: inserire i nuovi dati nel form e
                cliccare sul bottone di modifica dell'articolo interessato
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
