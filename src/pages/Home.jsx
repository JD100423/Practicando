import ListPost from "../componentes/listPost"
import ListCategories from "../componentes/listCategoria"
const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories />
      <ListPost url={"/posts"}/>
    </main>
  )
}

export default Home
