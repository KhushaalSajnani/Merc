import Image from 'next/image'
import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import Link from 'next/link'
import leafPattern from "../../../public/assets/patterns/leaf.svg"
import wheelPattern from "../../../public/assets/patterns/wheel.svg"

export default function MTouch() {
  return (
    <>
    <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
            <GridChild 
              childId={27}
              childName="mTouchBrief"
              customHeaderCss="font-bold"
              h2Order={2}
              assetOrder={1}
              buttonOrder={3}
            />
            <GridChild 
              childId={6}
              childName="mTouchHeroImage"
            />
        </GridContainer>
    </section>

    <section className='m-auto w-full max-parent-grid-container-width bg-tintGray rounded-xl px-12 py-20 mb-40 relative overflow-hidden'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
            <GridChild 
              childId={28}
              childName="CoveringTransitPayments !justify-start"
              customHeaderCss="font-bold"
              h3Order={2}
            />
            <GridChild 
              childId={29}
              childName="CoveringTransitPaymentsDetails"
              paragraphOrder={1}
              checkboxListOrder={2}
            />
        </GridContainer>
        <div className='patternPosition max709px:hidden'><img src={leafPattern.src} alt=""></img></div>
    </section>


    <section className='m-auto w-full max-parent-grid-container-width bg-tintYellow rounded-xl px-12 py-20 mb-40 relative overflow-hidden'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
            <GridChild 
              childId={30}
              childName="EnablingTransitCards !justify-start"
              customHeaderCss="font-bold"
              h3Order={2}
            />
            <GridChild 
              childId={31}
              childName="EnablingTransitCardsDetails"
              paragraphOrder={1}
              checkboxListOrder={2}
            />
        </GridContainer>
        <div className='patternPosition max709px:hidden'><img src={wheelPattern.src} alt=""></img></div>
    </section>

    {/* contact us and footer sections */}
    </>
  )
}