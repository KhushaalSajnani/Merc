import Image from 'next/image'
import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import Link from 'next/link'
import ModalContainer from '@/app/components/modal/ModalContainer'
import HeroAssetShowcase from '@/app/components/heroAssetShowcase/HeroAssetShowcase'
import ImageSliderAutoCarousel from '@/app/components/image-slider-auto-carousel/ImageSliderAutoCarousel'
import AssetLightbox from '@/app/components/asset-lightbox/AssetLightbox'
import expandIcon from '../../../public/assets/icons/expand.svg'
import ContactUsForm from '@/app/components/form/ContactUsForm'
import CareersForm from '@/app/components/form/CareersForm'

export default function Careers () {
  return (
    <>
    <section className='m-auto w-full max-parent-grid-container-width'>
        <GridContainer gridCols="grid-cols-1 text-center">
            <GridChild 
              childId={63}
              customHeaderCss="font-medium"
              childName="CareersAtMercury"
              h1Order={1}
              paragraphOrder={2}
            />
        </GridContainer>
    </section>

      <ImageSliderAutoCarousel />

      <section className='m-auto w-full max-parent-grid-container-width pt-40'>
        <GridContainer gridCols="grid-cols-1 text-center">
            <GridChild 
              childId={68}
              customHeaderCss="font-medium"
              childName="OurInclusiveValues"
              h2Order={1}
            />
        </GridContainer>
    </section>

    <section className='ourInclusiveValues m-auto w-full max-w-7xl pt-20 pb-60'>
        <GridContainer gridCols="grid-cols-4 !gap-5 max1279px:grid-cols-2 max709px:!grid-cols-1">
          <GridChild 
              childId={64}
              childName="determination hover:scale-110 w-full bg-tintRed text-center h-80 items-center rounded-lg"
              customHeaderCss="font-bold"
              h4Order={2}
              assetOrder={1}
            />
            <GridChild 
              childId={65}
              childName="empathy hover:scale-110 w-full bg-tintRed text-center h-80 items-center rounded-lg"
              customHeaderCss="font-bold"
              h4Order={2}
              assetOrder={1}
            />
            <GridChild 
              childId={66}
              childName="agility hover:scale-110 w-full bg-tintRed text-center h-80 items-center rounded-lg"
              customHeaderCss="font-bold"
              h4Order={2}
              assetOrder={1}
            />
            <GridChild 
              childId={67}
              childName="diversity hover:scale-110 w-full bg-tintRed text-center h-80 items-center rounded-lg"
              customHeaderCss="font-bold"
              h4Order={2}
              assetOrder={1}
            />
        </GridContainer>
    </section>

    {/* Life At Mercury */}
    <section className='flex justify-center max-parent-grid-container-width m-auto w-full pb-20'>
            <GridContainer gridCols="grid-cols-1">
                <GridChild 
                  childId={78}
                  customHeaderCss="font-bold"
                  childName="Life At Mercury"
                  h2Order={1}
                />
            </GridContainer>
    </section>

    {/* people pictures */}
    <AssetLightbox />

    {/* How will you make a difference? */}
    <section className='flex justify-center m-auto w-full !py-32 mt-32 bg-tintGreen'>
            <GridContainer gridCols="grid-cols-1 max-parent-grid-container-width">
                <GridChild 
                  childId={76}
                  customHeaderCss="font-bold"
                  childName="makeADifference"
                  h2Order={1}
                  paragraphOrder={2}
                  checkboxListOrder={3}
                />
            </GridContainer>
    </section>

    {/* <section className='m-auto flex flex-row items-center w-full max-parent-grid-container-width py-20'>
      <ModalContainer 
              id = {9}
              btnLabel = "Our Inspiring Story"
              btnImageUrl = ""
              btnClass = "modalButtonMain" 
          />
    </section> */}

    {/* Meet Our Tribe */}
    <section className='m-auto w-full max-parent-grid-container-width pt-60 pb-20'>
        <GridContainer gridCols="grid-cols-1 text-center">
            <GridChild 
              childId={69}
              customHeaderCss="font-medium"
              childName="happyFaces"
            />
        </GridContainer>
    </section>

    {/* people grid */}
    <section className='m-auto flex !w-full min1280px:justify-center overflow-scroll pb-20'>
        <GridContainer gridCols="!flex !gap-5 ml-5 mr-5 !shrink-0 items-start flex-nowrap overflow-auto !flex-row pb-20">
            <GridChild 
              childId={70}
              childName="peopleContainer !gap-y-4 !w-72"
              assetOrder={1}
              h3Order={2}
              h4Order={3}
              paragraphOrder={4}
              customHeaderCss=''
            />
            <GridChild 
              childId={71}
              childName="peopleContainer !gap-y-4 !w-72"
              assetOrder={1}
              h3Order={2}
              h4Order={3}
              paragraphOrder={4}
              customHeaderCss=''
            />
            <GridChild 
              childId={74}
              childName="peopleContainer !gap-y-4 !w-72"
              assetOrder={1}
              h3Order={2}
              h4Order={3}
              paragraphOrder={4}
              customHeaderCss=''
            />
            <GridChild 
              childId={72}
              childName="peopleContainer !gap-y-4 !w-72"
              assetOrder={1}
              h3Order={2}
              h4Order={3}
              paragraphOrder={4}
              customHeaderCss=''
            />
            <GridChild 
              childId={73}
              childName="peopleContainer !gap-y-4 !w-72"
              assetOrder={1}
              h3Order={2}
              h4Order={3}
              paragraphOrder={4}
              customHeaderCss=''
            />
        </GridContainer>
    </section>

    {/* <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
          <GridChild 
              childId={74}
              childName="basharImage rounded-3xl overflow-hidden"
            />
          <GridChild 
              childId={75}
              childName="basharBrief"
              customHeaderCss="font-bold"
              h3Order={1}
              h4Order={2}
              paragraphOrder={3}
            />
        </GridContainer>
    </section> */}

<section className='m-auto w-full max-parent-grid-container-width my-32 flex justify-center'>
            <GridContainer gridCols="grid-cols-1 max-parent-grid-container-width">
                <GridChild 
                  childId={77}
                  customHeaderCss="font-bold"
                  childName="joinUsHeading"
                  h2Order={1}
                />
                <div className='max-w-3xl'><CareersForm /></div>
            </GridContainer>
    </section>
    
    {/* footer */}
    </>
  )
}