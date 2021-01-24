import React, { useEffect } from 'react';
import { Layout } from 'antd';
// import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import './createProducts.scss';
import { useFormik } from 'formik';
import useInitialState from '../../../utils/hooks/initialState';

export default function CreateProducts() {
  const { Header, Content } = Layout;
  const { id } = useParams();
  const API = `https://backend-c.chestergalindo.vercel.app/api/articles/${id}`;
  const initialState = useInitialState(API);
  const article = initialState.data;
  // const [formArticle, setFormArticle] = useState();
  const formik = useFormik({
    initialValues: {
      IdPS: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // const inputs = [
  //   {
  //     name: 'IDPS',
  //     placeholder: 'ID de Artículo',
  //     type: 'number',
  //   },
  //   {
  //     name: 'Name',
  //     placeholder: 'Nombre de Artículo',
  //     type: 'text',
  //   },
  //   {
  //     name: 'Presentation',
  //     placeholder: 'Unidad de medida',
  //     type: 'text',
  //   },
  //   {
  //     name: 'Price',
  //     placeholder: 'Precio',
  //     type: 'number',
  //   },
  //   {
  //     name: 'concept',
  //     placeholder: 'Concepto tecnico',
  //     type: 'text',
  //   },
  //   {
  //     name: 'image',
  //     placeholder: 'imagen',
  //     type: 'file',
  //   },
  // ];

  const getArticleByID = () => {
    // setValue('Name', article && article.name);
    // setValue('Presentation', article && article.presentation);
    // setValue('Price', article && article.Price);
    // setValue('concept', article && article.concept);
    // setValue('image', article && article.image);
  };

  useEffect(() => {
    console.log(article && article.IdPS);
    if (id) {
      getArticleByID(id);
    }
  }, [id]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormArticle({ ...formArticle, [name]: value });
  // };

  // const onSubmit = () => {
  // if (window.location.pathname.includes('articulos/crear')) {
  //   addArticle(formArticle);
  //   toast('Nuevo articulo creado', { type: 'success', position: toast.POSITION.TOP_CENTER });
  //   reset();
  // } else {
  //   updatedArticle();
  //   toast('articulo Actualizado', { type: 'success', position: toast.POSITION.TOP_CENTER });
  // };

  return (
    <Layout>
      <Header className="layout-article">Artículos</Header>
      <Content>
        <h2 className="layout-article-title">
          Formulario Creación de Referencias
        </h2>
        <a href="/"> Home </a>
        <form onSubmit={formik.handleSubmit}>
          {/* {inputs.map((input) => ( */}
          <input
            className="layout-article_search-icon input_form"
            key="IDPS"
            name="IdPS"
            onChange={formik.handleChange}
            placeholder="ID de Artículo"
            type="number"
            value={formik.values.IdPS}
          />
          {/* // ))} */}
          <div className="layout-article-button">
            <button className="layout-article-button" type="submit">
              {window.location.pathname.includes('articulos/crear')
                ? 'Agregar Nuevo Artículo'
                : 'actualizar artículo'}
            </button>
          </div>
        </form>
      </Content>
    </Layout>
  );
}

// const addArticle = async (linkObject) => {
//   await db.collection('articles').doc().set(linkObject);
// };

// const updatedArticle = async (linkObject) => {
//   await db.collection('articles').doc(id).update(linkObject);
// };
