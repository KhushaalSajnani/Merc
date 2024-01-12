import Image from 'next/image'
import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import Link from 'next/link'

export default function Mpay() {
  return (
    <>

    <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
            <GridChild 
              childId={19}
              customHeaderCss="font-bold"
              childName="mPayBrief"
              h2Order={2}
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
        <GridContainer gridCols="grid-cols-3 smTablet:grid-cols-2 lgTablet:grid-cols-2 max709px:grid-cols-1">
              <GridChild 
                childId={20}
                customHeaderCss=""
                childName="mPayFeatureOne !justify-between bg-tintRed p-10"
                h3Order={1}
                modalTriggerOrder={2}
              />
            <GridChild 
              childId={21}
              customHeaderCss=""
              childName="mPayFeatureTwo !justify-between bg-tintGreen p-10"
              h3Order={1}
              modalTriggerOrder={2}
            />
            <GridChild 
              childId={22}
              customHeaderCss=""
              childName="mPayFeatureThree !justify-between bg-tintGray p-10"
              h3Order={1}
              modalTriggerOrder={2}
            />
        </GridContainer>
    </section>

    <section className='m-auto w-full max-parent-grid-container-width pb-20'>
        <GridContainer gridCols="grid-cols-1 text-center">
            <GridChild 
              childId={23}
              customHeaderCss="font-medium"
              childName="OurNetwork"
            />
        </GridContainer>
    </section>
    
    <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-3 smTablet:grid-cols-2 lgTablet:grid-cols-2 max709px:grid-cols-1">
            <GridChild 
              childId={24}
              customHeaderCss=""
              childName="networkOne !justify-between text-center border rounded-xl p-10"
              h2Order={1}
              h4Order={2}
            />
            <GridChild 
              childId={25}
              customHeaderCss=""
              childName="networkOne !justify-between text-center border rounded-xl p-10"
              h2Order={1}
              h4Order={2}
            />
            <GridChild 
              childId={26}
              customHeaderCss=""
              childName="networkOne !justify-between text-center border rounded-xl p-10"
              h2Order={1}
              h4Order={2}
            />
        </GridContainer>
    </section>


    {/* contact us and footer sections */}
    </>
  )
}