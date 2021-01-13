import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import './createProducts.scss';

export default function CreateProducts() {
  const { Header, Content } = Layout;
  const {
    register, handleSubmit, reset, setValue,
  } = useForm({
    defaultValues: {
      IDPS: '',
      Name: '',
      Presentation: '',
      Price: '',
      concept: '',
      image: '',
    },
  });
  const [formArticle, setFormArticle] = useState();
  const { id } = useParams();

  const inputs = [
    {
      name: 'IDPS',
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
      name: 'image',
      placeholder: 'imagen',
      type: 'file',
    },
  ];

  // const addArticle = async (linkObject) => {
  //   await db.collection('articles').doc().set(linkObject);
  // };

  // const updatedArticle = async (linkObject) => {
  //   await db.collection('articles').doc(id).update(linkObject);
  // };

  const getArticleByID = async () => {
    // const doc = await db.collection('articles').doc(id).get();
    // setValue('IDPS', doc.data().IDPS);
    // setValue('Name', doc.data().Name);
    // setValue('Presentation', doc.data().Presentation);
    // setValue('Price', doc.data().Price);
    // setValue('concept', doc.data().concept);
    // setValue('image', doc.data().image);
  };

  useEffect(() => {
    if (id !== '') {
      getArticleByID(id);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormArticle({ ...formArticle, [name]: value });
  };

  // const onSubmit = () => {
  //   if (window.location.pathname.includes('articulos/crear')) {
  //     addArticle(formArticle);
  //     toast('Nuevo articulo creado', { type: 'success', position: toast.POSITION.TOP_CENTER });
  //     reset();
  //   } else {
  //     updatedArticle();
  //     toast('articulo Actualizado', { type: 'success', position: toast.POSITION.TOP_CENTER });
  //   }
  // };

  return (
    <Layout>
      <Header className="layout-article">Artículos</Header>
      <Content>
        <h2 className="layout-article-title">
          Formulario Creación de Referencias
        </h2>
        <a href="/articulos"> Home </a>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          {inputs.map((input) => (
            <input
              className="layout-article_search-icon input_form"
              key={input.name}
              name={input.name}
              onChange={handleChange}
              placeholder={input.placeholder}
              type={input.type}
              ref={register}
            />
          ))}
          <div className="layout-article-button">
            <button className="layout-article-button" type="submit">
              {window.location.pathname.includes('articulos/crear')
                ? 'Agregar Nuevo Artículo'
                : 'actualizar artículo' }
            </button>
          </div>
        {/* </form> */}
      </Content>
    </Layout>
  );
}
