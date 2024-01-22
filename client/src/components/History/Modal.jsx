import React, { useState, useEffect ,useContext} from "react";
import Rating_History from "./Rating_History";
import { Modal } from "flowbite-react";
import ModalComment from "./ModalComment";
import { UserContext } from "../../../context";
import axios from "axios";
function ModalComponent({data}) {
  const {book_id,student_id} = data
    const {openModal, setOpenModal} = useContext(UserContext);
    const {rating, setRating} = useContext(UserContext);
    const {postComment,setPostComment} = useContext(UserContext)
  useEffect(() => {
    // Update the modal visibility when the 'open' prop changes
    console.log(openModal)
    console.log(student_id)
  }, [openModal]);

  //useContext For Get Value from Child components
  const CloseModal =()=>{
    setOpenModal(false)
    setRating(0)
    setPostComment('')
  }

  const clickPost =async()=>{
    console.log("Click Post:",postComment," Rating:",rating)
    try {
      const response = await axios.post('/postComment',{
        student_id,
        book_id,
        rating,
        comment : postComment,
      })

      console.log(response.data)
      CloseModal()
    } catch (error) {
      console.error("Cant try")
    }
  }
  return (
    <div>
      <Modal show={openModal} size="lg" onClose={CloseModal}>
        <Modal.Header>
          <Rating_History />
        </Modal.Header>
        <Modal.Body>
          <ModalComment dataFromModal={data}/>
        </Modal.Body>
        <Modal.Footer>
          <div className="h-12 w-36 border-2 border-solid border-black text-center rounded-lg bg-slate-200">
            <button
              type="submit"
              className="h-full w-full justify-center inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black rounded-lg focus:ring-4 focus:ring-primary-200"
              onClick={clickPost}
            >
              Post comment
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalComponent;
