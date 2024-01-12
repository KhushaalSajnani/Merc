import Image from 'next/image'
import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import Link from 'next/link'
import leafPattern from "../../../public/assets/patterns/leaf.svg"
import wheelPattern from "../../../public/assets/patterns/wheel.svg"

export default function Mercury360() {
  return (
    <>

      <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
          <GridChild 
              childId={32}
              childName="m360Brief"
              customHeaderCss="font-bold"
              h1Order={2}
              assetOrder={1}
            />
          <GridChild 
              childId={9}
              childName="m360HeroImage"
            />
        </GridContainer>
    </section>

    <section className='m-auto w-full max-parent-grid-container-width mb-40 relative overflow-hidden'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
            <GridChild 
              childId={33}
              childName="ExploreHeading"
              customHeaderCss="font-bold"
              h2Order={2}
            />
            <GridChild 
              childId={34}
              childName="advisoryTag bg-tintYellow !justify-between p-10"
              tagsOrder={1}
              h4Order={2}
              modalTriggerOrder={3}
            />
            <GridChild 
              childId={35}
              childName="techonologyTag bg-tintRed !justify-between p-10"
              tagsOrder={1}
              h4Order={2}
              modalTriggerOrder={3}
            />
            <GridChild 
              childId={36}
              childName="businessOperationsTag bg-tintGreen !justify-between p-10"
              tagsOrder={1}
              h4Order={2}
              modalTriggerOrder={3}
            />
            <GridChild 
              childId={37}
              childName="memberManagementTag bg-tintGray !justify-between p-10"
              tagsOrder={1}
              h4Order={2}
              modalTriggerOrder={3}
            />
            <GridChild 
              childId={38}
              childName="riskManagementTag bg-tintYellow !justify-between p-10"
              tagsOrder={1}
              h4Order={2}
              modalTriggerOrder={3}
            />
        </GridContainer>
    </section>


    {/* contact us and footer sections */}
    </>
  )
}