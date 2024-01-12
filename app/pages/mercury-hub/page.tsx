import Image from 'next/image'
import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import Link from 'next/link'
import leafPattern from "../../../public/assets/patterns/leaf.svg"
import wheelPattern from "../../../public/assets/patterns/wheel.svg"

export default function MercuryHub () {
  return (
    <>

    <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
        <GridChild 
              childId={39}
              childName="mHubPageBrief"
              h1Order={2}
              customHeaderCss="font-bold"
              assetOrder={1}
            />
          <GridChild 
              childId={10}
              childName="mHubHeroImage"
            />
        </GridContainer>
    </section>

    
    <section className='m-auto w-full max-parent-grid-container-width mHubGridSection pb-60'>
        <GridContainer gridCols="mHubGridSectionGridContainer grid-cols-6 min1280px:grid-rows-6 lgTablet: grid-cols-2 max709px:grid-cols-1">
            <div className='min1280px:grid bg-tintGray flex flex-col w-full row-start-1 row-span-2 col-start-1 col-span-4 max1279px:auto-rows-auto items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={40}
                      childName="schemeInABox"
                      h4Order={1}
                      customHeaderCss="font-bold"
                      paragraphOrder={2}
                    />
            </div>
            <div className='min1280px:grid bg-tintGray flex flex-col w-full row-start-3 row-span-2 col-start-1 col-span-2 max1279px:auto-rows-auto items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={41}
                      childName="readyToDeploy"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='min1280px:grid bg-tintGray flex flex-col w-full row-start-5 row-span-2 col-start-1 col-span-1 max1279px:auto-rows-auto items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={42}
                      childName="emvCompliant"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='min1280px:grid bg-tintGray flex flex-col w-full row-start-5 row-span-2 col-start-2 col-span-1 max1279px:auto-rows-auto items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={43}
                      childName="apiSupport"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='min1280px:grid bg-tintGreen flex flex-col w-full row-start-3 row-span-2 col-start-3 col-span-2 max1279px:auto-rows-auto items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={44}
                      childName="mHubGridCenter"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='min1280px:grid bg-tintGray flex flex-col w-full row-start-5 row-span-2 col-start-3 col-span-2 max1279px:auto-rows-auto items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={45}
                      childName="ensuresEfficient"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='min1280px:grid bg-tintGray flex flex-col w-full row-start-1 row-span-4 col-start-5 col-span-2 max1279px:auto-rows-auto items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={46}
                      childName="featureCheckList align-center !gap-y-6"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='min1280px:grid bg-tintGray flex flex-col w-full row-start-5 row-span-1 col-start-5 col-span-2 max1279px:auto-rows-auto items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={47}
                      childName="robustPaymentSolution text-center"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='min1280px:grid bg-tintGray flex flex-col w-full row-start-6 row-span-1 col-start-5 col-span-2 max1279px:auto-rows-auto items-center justify-center p-4 rounded-lg'>
                <GridChild 
                      childId={48}
                      childName="locallyDeployed text-center"
                      h4Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
        </GridContainer>
    </section>

    {/* mHub features and capabilities */}

    <section className='m-auto w-full max-parent-grid-container-width mHubGridSection pb-60'>
        <GridContainer gridCols="mHubGridSectionGridContainer lgTablet: grid-cols-2 max709px:grid-cols-1">
            <div className='min1280px:grid flex flex-col w-full'>
                <GridChild 
                      childId={49}
                      childName="mHubFeaturesHeading"
                      h2Order={1}
                      customHeaderCss="font-bold"
                    />
            </div>
            <div className='min1280px:grid flex flex-col w-full items-center justify-center'>
                <GridChild 
                      childId={50}
                      childName="featureCheckList align-center !gap-y-6"
                      checkboxListOrder={1}
                    />
            </div>
        </GridContainer>
    </section>


    {/* contact us and footer sections */}
    </>
  )
}