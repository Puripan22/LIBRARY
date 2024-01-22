import React, { useState, useEffect ,useContext} from "react";
import Rating_History from "./Rating_History";
import { Modal } from "flowbite-react";
import ModalComment from "./ModalComment";
import { UserContext } from "../../../context";
function ModalComponent({data}) {
    const {openModal, setOpenModal} = useContext(UserContext);
    const {rating, setRating} = useContext(UserContext);
  useEffect(() => {
    // Update the modal visibility when the 'open' prop changes
    console.log(openModal)
  }, [openModal]);
  const CloseModal =()=>{
    setOpenModal(false)
    setRating(0)
  }
  return (
    <div>
      <Modal show={openModal} size="lg" onClose={CloseModal}>
        <Modal.Header>
          <Rating_History />
          {rating}
        </Modal.Header>
        <Modal.Body>
          <ModalComment dataFromModal={data}/>
        </Modal.Body>
        <Modal.Footer>
          <div className="h-12 w-36 border-2 border-solid border-black text-center rounded-lg bg-slate-200">
            <button
              type="submit"
              className="h-full w-full justify-center inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black rounded-lg focus:ring-4 focus:ring-primary-200"
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
