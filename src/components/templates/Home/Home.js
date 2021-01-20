/* eslint-disable operator-linebreak */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Layout } from 'antd';
import './home.scss';
import { AiTwotoneDelete, AiFillEdit } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import useInitialState from '../../../utils/hooks/initialState';

export default function Home() {
  const history = useHistory();
  const { Header, Content } = Layout;
  const [search, setSearch] = useState('');
  const API = 'https://backend-c.chestergalindo.vercel.app/api/articles';
  const initialState = useInitialState(API);
  const articles = initialState.data;

  const editArticle = (id) => {
    history.push(`articulos/actualizar/${id}`);
  };

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
          {articles
             && articles.map((article) => (
              <div className="layout-article_card" key={article.name}>
                <img src={articles.image} alt={article.name} />
                <span className="information">
                  <p>
                    <strong>ID: </strong>
                    {article.IdPS}
                  </p>
                  <p>
                    <strong>Nombre: </strong>
                    {article.name}
                  </p>
                  <p>
                    <strong>Presentación: </strong>
                    {article.presentation}
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
                    <AiTwotoneDelete />
                  </button>
                  <button type="button">
                    <AiFillEdit
                      onClick={() => {
                        editArticle(article.id);
                      }}
                    />
                  </button>
                </span>
              </div>
            ))}
        </section>
      </Content>
    </Layout>
  );
}
