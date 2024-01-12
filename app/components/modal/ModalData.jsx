import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCircleXmark
} from "@fortawesome/free-solid-svg-icons"
import ReactDOM from "react-dom"
import { useInView } from 'react-intersection-observer';
import leafPattern from "../../../public/assets/patterns/leaf.svg"
import mercuryLogoHallmark from "../../../public/assets/patterns/mercuryLogoHallmark.svg"

const ModalData = ({closeModal, modalData, modalApiId}) => {

    const { ref: myImageRef, inView: myImageInView } = useInView();
    const { ref: my1Ref, inView: my1InView } = useInView();
    const { ref: my2Ref, inView: my2InView } = useInView();
    const { ref: my3Ref, inView: my3InView } = useInView();
    const { ref: my4Ref, inView: my4InView } = useInView();
    const { ref: my5Ref, inView: my5InView } = useInView();


    // useEffect(() => {
    //     document.body.style.overflowY = "hidden";
    //     return () => {
    //         document.body.style.overflowY = "scroll";
    //     };
    // },[]);

    //let result = modalData.filter( mdata => mdata.id == modalApiId);
    //console.log(result);
    
        return ReactDOM.createPortal (
            <>
                <div className="modalWrapper" onClick={closeModal}></div>
                    <div className="modalDataContainer relative overflow-hidden">
                        

                                {
                                    modalData && modalData.filter( currentElement => currentElement.id == modalApiId).map((currentElement) => {
                                        //console.log(currentElement.id == 1);
                                        return (
                                            <div className="modalContentsContainer" key={currentElement.id}>
                                                { currentElement.memberImage &&
                                                <div className="memberImageContainer">
                                                    <img ref={myImageRef} className={myImageInView ? "memberImage memberImageScale" : "memberImage"} src={currentElement.memberImage} alt="" />
                                                </div>   
                                                }

                                                { currentElement.headline &&
                                                    <div ref={my1Ref} className={my1InView ? "black modalHeadline" : "gray modalHeadline"}>{currentElement.headline}</div>
                                                }
                                                <div className="modalBody">
                                                    <p ref={my2Ref} className={my2InView ? "black" : "gray"}>{currentElement.summary}</p><br />

                                                    <div className="modalBodyDescription">
                                                        { currentElement.description && currentElement.description.map(descriptionData => (
                                                            <div className="descriptionData" key="descriptionData.id">
                                                                <h2 ref={my3Ref} className="mark">{descriptionData.title}</h2><br />
                                                                <p ref={my4Ref}>{descriptionData.description}</p><br />
                                                            </div>
                                                        ), [])} 
                                                    </div>

                                                    {/* <span className="divider"></span><br /> */}

                                                    <div ref={my5Ref} className={my5InView ? "black badgeContent" : "gray badgeContent"}>
                                                        { currentElement.badges && currentElement.badges.map(badgeData => (
                                                            <div className="badgeContentData" key="data.id">
                                                                <span className="badgeValue">{badgeData.badgeValue}</span><br />
                                                                <span className="badgeCaption">{badgeData.badgeCaption}</span>                 
                                                            </div>
                                                        ), [])}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }, [])
                                }
                            
                        <div className="modalCloseButtonContainer">
                            <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={closeModal} />
                        </div> {/* modal close ends */}
                        <div className="gradientback"></div>
                        <div className="absolute right-10 bottom-10"><img src={mercuryLogoHallmark.src} /></div>
                        <div className="absolute left-0 bottom-0"><img src={leafPattern.src} /></div>
                    </div> {/* modal data container ends */}
            </>,
            document.querySelector(".modalDiv")
        );
};

export default ModalData;