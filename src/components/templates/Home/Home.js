/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { Layout } from 'antd';
import './home.scss';
import { AiTwotoneDelete, AiFillEdit } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import API from '../../../utils/api';

export default function Home() {
  const history = useHistory();
  const { Header, Content } = Layout;
  const [search, setSearch] = useState('');
  // eslint-disable-next-line object-curly-newline
  const { isLoading, isError, data, error } = useQuery('todos', () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    // eslint-disable-next-line comma-dangle
    fetch(API).then((res) => res.json())
  );
  // eslint-disable-next-line function-paren-newline

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>`Error: ${error.message}`</span>;
  }

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
          {data &&
            data.data.map((article) => (
              <div className="layout-article_card" key={article.name}>
                <img src="none" alt={article.name} />
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
