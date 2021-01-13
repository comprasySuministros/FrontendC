/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from 'antd';
import { AiTwotoneDelete, AiFillEdit } from 'react-icons/ai';
import { toast } from 'react-toastify';
import './home.scss';

export default function Home() {
  const history = useHistory();
  const { Header, Content } = Layout;
  const [search, setSearch] = useState('');
  const [articles, setArticles] = useState([]);

  const onDeleteArticle = async (id) => {
    if (window.confirm('are you sure you want to delete this link')) {
      await db.collection('articles').doc(id).delete();
      toast('Articulo eliminado', { type: 'error', position: toast.POSITION.TOP_CENTER });
    }
  };

  const editArticle = (id) => {
    history.push(`articulos/actualizar/${id}`);
  };

  const getArticles = async () => {
    db.collection('articles').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setArticles(docs);
    });
  };

  useEffect(() => {
    getArticles();
  }, []);

  function handleProductSearch(e) {
    setSearch(e.target.value.toLowerCase());
  }

  return (
    <Layout className="layout">
      <Header className="layout-article">Artículos</Header>
      <Content>
        <h2 className="layout-article-title">Catalogo de Artículos</h2>
        <a href="/articulos/crear"> admin </a>
        <section className="layout-article_search">
          <input
            className="layout-article_search-icon"
            name="search"
            placeholder="Escribe el Nombre del Artículo"
            type="search"
            onChange={handleProductSearch}
            value={search}
          />
        </section>
        <section className="layout-article_groupcard">
          { articles.map((article) => (
            <div className="layout-article_card" key={article.Name}>
              <img src={articles.image} alt={article.Name} />
              <span className="information">
                <p>
                  <strong>ID: </strong>
                  {article.IDPS}
                </p>
                <p>
                  <strong>Nombre: </strong>
                  {article.Name}
                </p>
                <p>
                  <strong>Presentación: </strong>
                  {article.Presentation}
                </p>
                <p>
                  <strong>Precio: </strong>
                  {article.Price}
                </p>
                <p>
                  <strong>Concepto tecnico: </strong>
                  {article.concept}
                </p>
                <button type="button">
                  <AiTwotoneDelete onClick={() => { onDeleteArticle(article.id); }} />
                </button>
                <button type="button">
                  <AiFillEdit onClick={() => { editArticle(article.id); }} />
                </button>
              </span>
            </div>
          ))}
        </section>
      </Content>
    </Layout>
  );
}
