"use client"
import React, {useState} from 'react'
import ModalData from './ModalData'
import ModalDataApi from './modalDataApi';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import "./ModalCSS.css"

const ModalContainer = (props) => {
    const [modalData] = useState(ModalDataApi);
    const [showModal, setShowModal] = useState(false);

    const modalApiId = Array.isArray(props.id) ? props.id[0] : props.id;

    const closeModal = () => setShowModal(false);
    const { ref: myBtnRef} = useInView();

  return (
    <>
      <motion.button 
        ref={myBtnRef} 
        className={props.btnClass} 
        onClick={() => setShowModal(true)}
        initial={{scale: 0.9}}
        whileInView={{scale: 1}}
        viewport={{
          once: true
        }}
      >
        {props.btnLabel && <span>{props.btnLabel}</span>}
        {props.btnImageUrl && <img src={props.btnImageUrl}></img>}
      </motion.button>
      {showModal && 
        <ModalData closeModal={closeModal} modalData={modalData} modalApiId={modalApiId} />}
    </>
  )
}

export default ModalContainer
