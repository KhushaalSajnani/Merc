'use client'
import React from 'react';
import { useEffect } from 'react';
import GridChildApi from './gridChildApi';
import Link from 'next/link';
import "./GridChildCSS.css"
import ModalContainer from '../modal/ModalContainer';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ChildComponentProps {
  childId: number;
  childName?: string;
  chipsOrder?: number;
  tagsOrder?: number;
  h1Order?: number;
  h2Order?: number;
  h3Order?: number;
  h4Order?: number;
  paragraphOrder?: number;
  assetOrder?: number;
  checkboxListOrder?: number;
  socialMediaOrder?: number;
  buttonOrder?: number;
  customHeaderCss?: string;
  modalTriggerOrder?: number;
}

const AnimatedGridChild = motion.div;


const GridChild: React.FC<ChildComponentProps> = ({ childName, childId, chipsOrder, tagsOrder, h1Order, h2Order, h3Order, h4Order, paragraphOrder, assetOrder, checkboxListOrder, socialMediaOrder, buttonOrder, customHeaderCss, modalTriggerOrder }) => {
  const gridChildData = GridChildApi;

  const [ref, inView] = useInView({
    triggerOnce: false, // Adjust the rootMargin as needed
    threshold:0.3
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false, // Adjust the rootMargin as needed
    threshold:0.3
  });

  const ks_anim = useAnimation();
  const ks_anim2 = useAnimation();

  const sectionAnimation = {
    initial: { y: 100 },
    animate: { y: 0 },
  };

  useEffect(() => {
    if(inView){
          ks_anim.start({
              y:0,
              transition:{
                  type:'tween',
                  ease:"easeInOut",
                  duration:0.5,
                  // delay:3,
                  // bounce:0.5
              }
          })
      }
    if(inView2){
      ks_anim2.start({
        opacity:1,
        // x:'30px',
        transition:{
          // type:'tween',
          ease:"easeInOut",
          duration:0.7,
          delay:0.5,
          // bounce:0.5
        }
      })
    }
  }, [ks_anim,ks_anim2,inView,inView2]);

  return (
    <>
      {
          gridChildData && gridChildData.filter( currentElement => currentElement.id == childId ).map((currentElement) => {
              return (
                <AnimatedGridChild
                  className={`${childName} flex flex-col gap-y-8 w-full justify-center`}
                  key={currentElement.id}
                  {...sectionAnimation}
                  ref={ref}
                >
                        {currentElement.Tags &&
                          currentElement.Tags.map((contentData) => (
                            contentData.tagText && (
                              <div key={contentData.id} className={`order-${tagsOrder}`}>
                                {contentData.tagLink ? (
                                  <Link href={contentData.tagLink}>
                                    <div className='w-max px-4 py-3 rounded-md bg-white'>{contentData.tagText}</div>
                                  </Link>
                                ) : (
                                  <div className='w-max px-4 py-3 rounded-md bg-white'>{contentData.tagText}</div>
                                )}
                              </div>
                            )
                          ))
                        }

                      {/* H1 title */}
                      {currentElement.headingH1 &&
                          currentElement.headingH1.map((headingContentData) => (
                            <div key={headingContentData.id} className={`order-${h1Order}`}>
                                {headingContentData.headingLink ?(
                                  <Link href={headingContentData.headingLink}>
                                      <h1 className={`text-h1 ${customHeaderCss}`}>{headingContentData.headingText}</h1>
                                  </Link>
                                ) : ( headingContentData.headingText &&
                                  <h1 className={`text-h1 ${customHeaderCss}`}>{headingContentData.headingText}</h1>
                                )}
                            </div>
                      ))}

                      {/* H2 title */}
                      {currentElement.headingH2 && currentElement.headingH2.length > 0 && (
                        currentElement.headingH2.map((headingContentData) => (
                          headingContentData.headingText && (  // Check if headingText is not an empty number
                            <div key={headingContentData.id} className={`order-${h2Order}`}>
                              {headingContentData.headingLink ? (
                                <Link href={headingContentData.headingLink}>
                                  <h2 className={`text-h2 ${customHeaderCss}`}>{headingContentData.headingText}</h2>
                                </Link>
                              ) : (
                                <h2 className={`text-h2 ${customHeaderCss}`}>{headingContentData.headingText}</h2>
                              )}
                            </div>
                          )
                        ))
                      )}




                      {/* H3 title */}
                      {currentElement.headingH3 && currentElement.headingH3.map((headingContentData) => (
                        headingContentData.headingText && (  // Check if headingText is not an empty number
                          <div key={headingContentData.id} className={`order-${h3Order}`}>
                            {headingContentData.headingLink ? (
                              <Link href={headingContentData.headingLink}>
                                <h3 className={`text-h3 ${customHeaderCss}`}>{headingContentData.headingText}</h3>
                              </Link>
                            ) : (
                              <h3 className={`text-h3 ${customHeaderCss}`}>{headingContentData.headingText}</h3>
                            )}
                          </div>
                        )
                      ))}

                      {/* H4 title */}
                      {currentElement.headingH4 && currentElement.headingH4.map((headingContentData) => (
                        headingContentData.headingText && (  // Check if headingText is not an empty number
                          <div key={headingContentData.id} className={`order-${h4Order}`}>
                            {headingContentData.headingLink ? (
                              <Link href={headingContentData.headingLink}>
                                <h4 className={`text-h4 ${customHeaderCss}`}>{headingContentData.headingText}</h4>
                              </Link>
                            ) : (
                              <h4 className={`text-h4 ${customHeaderCss}`}>{headingContentData.headingText}</h4>
                            )}
                          </div>
                        )
                      ))}


                      {/* Asset - image or video */}
                      {currentElement.Asset &&
                        currentElement.Asset.map((assetContentsData) => (
                          (assetContentsData.imageSrc || assetContentsData.videoSrc) && (
                           <div ref={ref}>
                             <motion.div key={assetContentsData.id} className={`order-${assetOrder} asset`}
                             animate={ks_anim}
                             initial={{y:'5vh'}}
                             >
                               {assetContentsData.imageSrc && (
                                   assetContentsData.imageContainerLink ? (
                                       <Link href={assetContentsData.imageContainerLink}>
                                         <img className='w-full h-full object-contain' src={assetContentsData.imageSrc} alt={assetContentsData.imageAlt} />
                                       </Link>
                                   ) : (
                                       <img className='w-full h-full object-contain' src={assetContentsData.imageSrc} alt={assetContentsData.imageAlt} />
                                   )
                               )}

                               {assetContentsData.videoSrc && (
                                   assetContentsData.videoContainerLink ? (
                                       <Link href={assetContentsData.videoContainerLink}>
                                         <video autoPlay className='w-full h-full'>
                                           <source src={assetContentsData.videoSrc} type="video/mp4" />
                                           Your browser does not support the video tag.
                                         </video>
                                       </Link>
                                   ) : (
                                       <video autoPlay className='w-full h-full'>
                                         <source src={assetContentsData.videoSrc} type="video/mp4" />
                                         Your browser does not support the video tag.
                                       </video>
                                   )
                               )}
                             </motion.div>
                           </div>
                          )
                        ))}


                      {/* Paragraph - I posess excellent communication skills... */}
                      {currentElement.Paragraph &&
                        currentElement.Paragraph.map((paraContentsData) => (
                          paraContentsData.paraData && (
                            <div key={paraContentsData.id} className={`order-${paragraphOrder}`}>
                              {paraContentsData.paraLink ? (
                                <Link href={paraContentsData.paraLink}>
                                  <p className='text-paragraph opacity-80'>{paraContentsData.paraData}</p>
                                </Link>
                              ) : (
                                <p className='text-paragraph opacity-80'>{paraContentsData.paraData}</p>
                              )}
                            </div>
                          )
                        ))}

                      {/* Checkbox List */}
                        {currentElement.CheckboxList &&
                          currentElement.CheckboxList.map((checkboxListData) => (
                            checkboxListData.listIcon && (
                              <div key={checkboxListData.id} className={`order-${checkboxListOrder} flex flex-row items-center w-full gap-2`}>
                                <div className='w-20 h-20 rounded-md checkbox-list-img-container flex items-center shrink-0'>
                                  <img src={checkboxListData.listIcon} className='w-full h-full object-contain' alt='List Icon' />
                                </div>
                                {checkboxListData.listItemText && <p className='text-paragraph text-left'>{checkboxListData.listItemText}</p>}
                              </div>
                            )
                          ))
                        }

                        {/* Social Media */}
                        {/* {currentElement.SocialMedia &&
                          currentElement.SocialMedia.map((socialMediaData) => (
                            socialMediaData.mediaLink && (
                              <div key={socialMediaData.id} className={`order-${socialMediaOrder} flex flex-row flex-wrap gap-2`}>
                                <Link href={socialMediaData.mediaLink}>
                                  <div className='w-20 h-20 items-center rounded-md'>
                                    <img src={socialMediaData.mediaIcon} className='w-full h-full object-contain' alt='Social Media Icon' />
                                  </div>
                                </Link>
                              </div>
                            )
                          ))
                        } */}

                        {currentElement.SocialMedia && (
                            <div className={`order-${socialMediaOrder} flex flex-row flex-wrap gap-2`}>
                              {currentElement.SocialMedia.map((socialMediaData) => (
                                socialMediaData.mediaLink && (
                                  <Link key={socialMediaData.id} href={socialMediaData.mediaLink}>
                                    <div className='w-20 h-20 mr-4 items-center socialMediaIconContainer rounded-md'>
                                      <img src={socialMediaData.mediaIcon} className='w-full h-full object-contain' alt='Social Media Icon' />
                                    </div>
                                  </Link>
                                )
                              ))}
                            </div>
                        )}


                        {/* Button */}
                        {currentElement.Button &&
                          currentElement.Button.map((buttonContentData) => (
                            buttonContentData.buttonText && (
                                <div ref={ref2}>
                                  <motion.div key={buttonContentData.id} className={`order-${buttonOrder}`}
                                      animate={ks_anim2}
                                              initial={{opacity:'0'}}
                                  >
                                    {buttonContentData.buttonLink ? (
                                      <Link href={buttonContentData.buttonLink}>
                                        <button className='filled-button py-4 px-8 my-4 rounded-full font-bold text-md'>{buttonContentData.buttonText}</button>
                                      </Link>
                                    ) : (
                                      <button className='filled-button py-4 px-8 my-4 rounded-full font-bold text-md'>{buttonContentData.buttonText}</button>
                                    )}
                                  </motion.div>
                                </div>
                            )
                          ))
                        }

                        {/* modal */}
                        {currentElement.ModalTrigger &&
                          currentElement.ModalTrigger.map((modalData) => (
                            <div key={modalData.id} className={`flex flex-row justify-end order-${modalTriggerOrder}`}>
                              <ModalContainer 
                              id = {modalData.id}
                              btnLabel = {modalData.modalTriggerLabel}
                              btnImageUrl = {modalData.modalTriggerImage}
                              btnClass = {modalData.modalTriggerClass} 
                              />
                            </div>
                          ))}

                  {/* </div> */}
                  </AnimatedGridChild>
              );
          }, [])
      }
    </>
  );
};

export default GridChild;
