import Image from 'next/image'
import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import Link from 'next/link'
import HeroAssetShowcase from '@/app/components/heroAssetShowcase/HeroAssetShowcase'

export default function Company () {
  return (
    <>

      <HeroAssetShowcase />

    <section className='m-auto w-full max-parent-grid-container-width py-20'>
        <GridContainer gridCols="grid-cols-1 text-center">
            <GridChild 
              childId={51}
              customHeaderCss="font-medium"
              childName="theManagement"
            />
        </GridContainer>
    </section>

    {/* management people grid */}
    <section className='m-auto w-full pb-20'>
        <GridContainer gridCols="!flex !gap-5 justify-center flex-row flex-wrap !align-start pb-20 m-auto">
            <GridChild 
              childId={52}
              childName="muzafferHamid peopleManagementGrid h-full !justify-between"
              assetOrder={1}
              h4Order={2}
              paragraphOrder={3}
              socialMediaOrder={4}
            />
            <GridChild 
              childId={53}
              childName="gururaj peopleManagementGrid h-full !justify-between"
              assetOrder={1}
              h4Order={2}
              paragraphOrder={3}
              socialMediaOrder={4}
            />
            <GridChild 
              childId={54}
              childName="nihad peopleManagementGrid h-full !justify-between"
              assetOrder={1}
              h4Order={2}
              paragraphOrder={3}
              socialMediaOrder={4}
            />
            <GridChild 
              childId={55}
              childName="rizwan peopleManagementGrid h-full !justify-between"
              assetOrder={1}
              h4Order={2}
              paragraphOrder={3}
              socialMediaOrder={4}
            />
            <GridChild 
              childId={56}
              childName="ashish peopleManagementGrid h-full !justify-between"
              assetOrder={1}
              h4Order={2}
              paragraphOrder={3}
              socialMediaOrder={4}
            />
        </GridContainer>
    </section>

    {/* the board */}
    <section className='m-auto w-full max-parent-grid-container-width pb-20'>
        <GridContainer gridCols="grid-cols-1 text-center">
            <GridChild 
              childId={57}
              customHeaderCss="font-medium"
              childName="theManagement"
            />
        </GridContainer>
    </section>

    {/* board people grid */}
    <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="!flex justify-center flex-row flex-wrap !align-start pb-20 m-auto">
            <GridChild 
              childId={58}
              childName="muzafferHamid peopleManagementGrid h-full !justify-between"
              assetOrder={1}
              h4Order={2}
              paragraphOrder={3}
              socialMediaOrder={4}
            />
            <GridChild 
              childId={59}
              childName="gururaj peopleManagementGrid h-full !justify-between"
              assetOrder={1}
              h4Order={2}
              paragraphOrder={3}
              socialMediaOrder={4}
            />
            <GridChild 
              childId={60}
              childName="nihad peopleManagementGrid h-full !justify-between"
              assetOrder={1}
              h4Order={2}
              paragraphOrder={3}
              socialMediaOrder={4}
            />
        </GridContainer>
        <GridContainer gridCols="!flex justify-center flex-row flex-wrap !align-start pb-20 m-auto">
            <GridChild 
              childId={61}
              childName="nihad peopleManagementGrid h-full !justify-between"
              assetOrder={1}
              h4Order={2}
              paragraphOrder={3}
              socialMediaOrder={4}
            />
        </GridContainer>
        
    </section>

    {/* grow with us section */}
    <section className='m-auto bg-tintGray w-full py-20 mb-40'>
        <GridContainer gridCols="m-auto grid-cols-1 max-parent-grid-container-width text-center">
            <GridChild 
              childId={62}
              customHeaderCss="font-medium"
              childName="GrowWithUs m-auto"
              h2Order={1}
              paragraphOrder={2}
              buttonOrder={3}
            />
        </GridContainer>
    </section>
    
    {/* footer */}
    </>
  )
}