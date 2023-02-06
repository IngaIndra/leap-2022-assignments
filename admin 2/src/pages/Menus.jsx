import { useEffect, useState } from "react";
import CategoryList from "../components/Categories/CategoryList";
import Heading from "../components/Heading";
import { toast } from "react-toastify";
import DynamicModal from "../components/utils/DynamicModal";
import CategoryCreate from "../components/Categories/CategoryCreate";
import CategoryEdit from "../components/Categories/CategoryEdit";
import axios from "axios";
// import useQuery from '../hooks/useQuery';
import { useParams } from "react-router-dom";

export default function Categories() {
  const [position, setPosition] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [menus, setMenus] = useState([]);
  const [modalContent, setModalContent] = useState(<></>);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8000/menu-positions" + id).then((res) => {
      setPosition(res.data);
    });
    axios
      .get("http://localhost:8000/menus?positionId=" + id)
      .then((res) => {
        setMenus(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Алдаа гарлаа");
      });
  }, []);

  const modalClose = () => {
    setModalContent(<></>);
    setModalShow(false);
  };
  const afterSubmit = (category) => {
    modalClose();
    // setCategories([...categories, category]);
  };

  const showCreateModal = () => {
    setModalContent(<CategoryCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
  };

  const afterEdit = (category) => {
    modalClose();
    // let newCategories = categories.map((cat) => {
    //   if (cat.id === category.id) {
    //     return category;
    //   }
    //   return cat;
    // });
    // setCategories(newCategories);
  };

  const showEditModal = (category) => {
    setModalContent(<CategoryEdit category={category} afterEdit={afterEdit} />);
    setModalShow(true);
  };

  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Categories" handleShow={showCreateModal} />
        <CategoryList items={categories} onEdit={showEditModal} />
      </div>
      <DynamicModal
        content={modalContent}
        show={modalShow}
        handleClose={modalClose}
        title="Create category"
      />
    </>
  );
}
