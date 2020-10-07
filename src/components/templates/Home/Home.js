import React, { useState } from 'react';
import './home.scss';
import { Layout } from 'antd';

export default function Home() {
  const { Header, Content } = Layout;
  const [search, setSearch] = useState('');

  const products = [
    {
      ID: '000000000000064104',
      name: 'carne',
      presentation: 'unidad',
      price: '10.000',
      concept: 'si - dti',
      img:
        'https://www.javeriana.edu.co/image/journal/article?img_id=11774978&t=1595437977529',
    },
    {
      ID: '000000000000064105',
      name: 'silla',
      presentation: 'unidad',
      price: '10.001',
      concept: 'si - dti',
      img:
        'https://www.javeriana.edu.co/image/journal/article?img_id=11774978&t=1595437977529',
    },
    {
      ID: '000000000000064105',
      name: 'disco',
      presentation: 'unidad',
      price: '10.001',
      concept: 'si - dti',
      img:
        'https://www.javeriana.edu.co/image/journal/article?img_id=11774978&t=1595437977529',
    },
    {
      ID: '000000000000064105',
      name: 'herramienta',
      presentation: 'unidad',
      price: '10.001',
      concept: 'si - dti',
      img:
        'https://www.javeriana.edu.co/image/journal/article?img_id=11774978&t=1595437977529',
    },
    {
      ID: '000000000000064105',
      name: 'computador',
      presentation: 'unidad',
      price: '10.001',
      concept: 'si - dti',
      img:
        'https://www.javeriana.edu.co/image/journal/article?img_id=11774978&t=1595437977529',
    },
    {
      ID: '000000000000064105',
      name: 'escritorio',
      presentation: 'unidad',
      price: '10.001',
      concept: 'si - dti',
      img:
        'https://www.javeriana.edu.co/image/journal/article?img_id=11774978&t=1595437977529',
    },
  ];

  function handleProductSearch(e) {
    setSearch(e.target.value.toLowerCase());
  }

  const filterProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(search);
  });

  if (filterProducts.length === 0) {
    return (
      <Layout className="layout">
        <Header className="layout-article">Artículos</Header>
        <Content>
          <h2 className="layout-article-title">Catalogo de Artículos</h2>
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
            <h2>Artículo aun no Negociado</h2>
          </section>
        </Content>
      </Layout>
    );
  }
  return (
    <Layout className="layout">
      <Header className="layout-article">Artículos</Header>
      <Content>
        <h2 className="layout-article-title">Catalogo de Artículos</h2>
        <section className="layout-article_search">
          <input
            className="layout-article_search-icon search_icon"
            name="search"
            placeholder="Escribe el Nombre del Artículo"
            type="search"
            onChange={handleProductSearch}
            value={search}
          />
        </section>
        <section className="layout-article_groupcard">
          {filterProducts.map((product) => {
            return (
              <div className="layout-article_card" key={product.name}>
                <img src={product.img} alt={product.name} />
                <span className="information">
                  <p>
                    <strong>ID: </strong>
                    {product.ID}
                  </p>
                  <p>
                    <strong>Nombre: </strong>
                    {product.name}
                  </p>
                  <p>
                    <strong>Presentación: </strong>
                    {product.presentation}
                  </p>
                  <p>
                    <strong>Precio: </strong>
                    {product.price}
                  </p>
                  <p>
                    <strong>Concepto tecnico: </strong>
                    {product.concept}
                  </p>
                </span>
              </div>
            );
          })}
        </section>
      </Content>
    </Layout>
  );
}
