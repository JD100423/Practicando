import ListPost from "../componentes/listPost";
import { useParams } from "react-router-dom";


const SubCategoria = () => {
    const { subcategoria } = useParams()
    return (
        <ListPost url={`/posts?subcategoria=${subcategoria}`}/>
    )
}

export default SubCategoria