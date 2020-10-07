import React from 'react';
import './createProducts.scss';
import { Layout } from 'antd';

export default function CreateProducts() {
  const { Header, Content } = Layout;

  const inputs = [
    {
      name: 'ID',
      placeholder: 'ID de Artículo',
      type: 'number',
    },
    {
      name: 'Name',
      placeholder: 'Nombre de Artículo',
      type: 'text',
    },
    {
      name: 'Presentation',
      placeholder: 'Unidad de medida',
      type: 'text',
    },
    {
      name: 'Price',
      placeholder: 'Precio',
      type: 'number',
    },
    {
      name: 'concept',
      placeholder: 'Concepto tecnico',
      type: 'text',
    },
    {
      name: 'imagen',
      placeholder: 'imagen',
      type: 'file',
    },
  ];

  return (
    <Layout>
      <Header className="layout-article">Artículos</Header>
      <Content>
        <h2 className="layout-article-title">
          Formulario Creación de Referencias
        </h2>
        <form>
          {inputs.map((input) => (
            <input
              key={input.name}
              className="layout-article_search-icon input_form"
              name={input.name}
              placeholder={input.placeholder}
              type={input.type}
            />
          ))}
          <div className="layout-article-button">
            <button className="layout-article-button" type="submit">
              Agregar Nuevo Artículo
            </button>
          </div>
        </form>
      </Content>
    </Layout>
  );
}
