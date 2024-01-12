import Image from 'next/image'
import GridContainer from './components/gridData/GridContainer'
import GridChild from './components/gridData/GridChild'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <section className='m-auto w-full max-parent-grid-container-width py-10'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
            <GridChild 
              childId={1}
              customHeaderCss="font-bold"
              childName="homeHeroTitle"
            />
        </GridContainer>
    </section>

    <section 
      className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-1">
            <GridChild 
              childId={2}
              childName="marcuryMap"
            />
        </GridContainer>
    </section>

    <section className='m-auto w-full max-parent-grid-container-width pb-40'>
        <GridContainer gridCols="grid-cols-1 text-center">
            <GridChild 
              childId={3}
              customHeaderCss="font-medium"
              childName="OurPortfolio"
            />
        </GridContainer>
    </section>

    <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
            <GridChild 
              childId={4}
              customHeaderCss=""
              childName="mPayBrief"
              h3Order={2}
              assetOrder={1}
              buttonOrder={3}
            />
            <GridChild 
              childId={5}
              childName="mPayHeroImage"
            />
        </GridContainer>
    </section>

    <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
          <GridChild 
              childId={6}
              childName="mTouchHeroImage"
            />
            <GridChild 
              childId={7}
              childName="mTouchBrief"
              h3Order={2}
              assetOrder={1}
              buttonOrder={3}
            />
        </GridContainer>
    </section>

    <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
          <GridChild 
              childId={8}
              childName="m360Brief"
              h3Order={2}
              assetOrder={1}
              buttonOrder={3}
            />
          <GridChild 
              childId={9}
              childName="m360HeroImage"
            />
        </GridContainer>
    </section>

    <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
          <GridChild 
              childId={10}
              childName="mHubHeroImage"
            />
            <GridChild 
              childId={11}
              childName="mHubBrief"
              h3Order={2}
              assetOrder={1}
              buttonOrder={3}
            />
        </GridContainer>
    </section>
    </>
  )
}