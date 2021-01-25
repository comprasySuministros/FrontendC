import React from 'react';
import { Layout } from 'antd';
// import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './createProducts.scss';
import useInitialState from '../../../utils/hooks/initialState';

export default function CreateProducts() {
  const { Header, Content } = Layout;
  const { id } = useParams();
  const API = `https://backend-c.chestergalindo.vercel.app/api/articles/${id}`;
  const initialState = useInitialState(API);
  const article = initialState.data;
  const { register, handleSubmit } = useForm({});
  console.log(article);
  const onSubmit = (data) => console.log(data);

  // useEffect( async () => {
  //   if (id) {
  //     // setValue('IdPS', article && article.IdPS);
  //     // setValue('name', 'cesar');
  //     }
  //   }
  // }, [id]);

  return (
    <Layout>
      <Header className="layout-article">Artículos</Header>
      <Content>
        <h2 className="layout-article-title">
          Formulario Creación de Referencias
        </h2>
        <a href="/"> Home </a>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="layout-article_search-icon input_form"
            key="IdPS"
            name="IdPS"
            placeholder="ID de Artículo"
            type="number"
            // value={article && article.name}
            onChange={register}
            ref={register}
          />
          <input
            className="layout-article_search-icon input_form"
            key="name"
            name="name"
            placeholder="Nombre de Artículo"
            type="text"
            // value={article && article.name}
            onChange={register}
            ref={register}
          />
          <input
            className="layout-article_search-icon input_form"
            key="presentation"
            name="presentation"
            placeholder="Unidad de medida"
            type="text"
            // value={article && article.presentation}
            onChange={register}
            ref={register}
          />
          <input
            className="layout-article_search-icon input_form"
            key="price"
            name="price"
            placeholder="Precio"
            type="number"
            // value={article && article.Price}
            onChange={register}
            ref={register}
          />
          <input
            className="layout-article_search-icon input_form"
            key="concept"
            name="concept"
            placeholder="concepto tecnico"
            type="text"
            // value={article && article.concept}
            onChange={register}
            ref={register}
          />
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

// const onSubmit = () => {
// if (window.location.pathname.includes('articulos/crear')) {
//   addArticle(formArticle);
//   toast('Nuevo articulo creado', { type: 'success', position: toast.POSITION.TOP_CENTER });
//   reset();
// } else {
//   updatedArticle();
//   toast('articulo Actualizado', { type: 'success', position: toast.POSITION.TOP_CENTER });
// };

// const [formArticle, setFormArticle] = useState();

// const addArticle = async (linkObject) => {
//   await db.collection('articles').doc().set(linkObject);
// };

// const updatedArticle = async (linkObject) => {
//   await db.collection('articles').doc(id).update(linkObject);
// };
