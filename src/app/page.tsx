'use client'

import Image from 'next/image'
import Picture from './components/misc/picture'

import Header from './components/misc/header'
import Main from './components/misc/main'

//import Shelf from './components/warehouse/shelf'
//import Cabinet from './components/warehouse/cabinet'
//import Item from './components/warehouse/item'
import Container from './components/misc/containter'
import Wrapper from './components/misc/wrapper'

import TitledArea from './components/misc/titledarea'
import FullHeight from './components/misc/fullheight'
import ResponsiveText from './components/responsivetext'
//
import Welcome from './components/welcome'
import DescribedPhoto from './components/describedphoto'

import type { CustomFlowbiteTheme } from 'flowbite-react'
import { Carousel } from 'flowbite-react'

const topCarouselTheme: CustomFlowbiteTheme = {
  carousel: {
    indicators: {
      base: 'h-1.5 w-1.5 rounded-full opacity-70 drop-shadow-lg translate-y-[180%] lg:translate-y-[195%]'
    }
  }
}

export default function HomePage() {
  function CarouselControl(dir: 'left' | 'right') {
    // prettier-ignore
    return (
      <div className={`text-4xl opacity-65 hover:opacity-80 transition-opacity drop-shadow-lg lg:absolute lg:top-14 ${dir == 'left' ? 'lg:left-1 xs:left-0' : 'lg:right-1 xs:right-0'} xs:text-3xl +xs:p-0.5`}>
        <i className={`fa-light fa-angle-${dir}`} />
      </div>
    )
  }

  return (
    <div id="root" style={{ height: '220vh' }}>
      <Header />
      <Main>
        <FullHeight>
          <Welcome />
          <Container color="#333333" whitetext>
            <Wrapper>
              <TitledArea title="Niezwykły sklep elektroniczny">
                <div className="contents lg:mb-2 xs:mb-1">
                  <ResponsiveText align="center">
                    Zajmujemy się sprzedażą detaliczną elementów i podzespołów elektronicznych oraz wielu innych produktów
                    pomocniczych związanych z elektroniką, sprzętem lutowniczym, pomiarowym, komputerowym, nagłaśniającym,
                    radioamatorskim i RTV. Udzielamy również porad dotyczących wyboru odpowiednich części oraz podzespołów
                    elektronicznych.
                  </ResponsiveText>
                </div>
              </TitledArea>
            </Wrapper>
            <Wrapper>
              <TitledArea title="Ponad 30 lat doświadczenia">
                <ResponsiveText align="center">
                  Zaistnieliśmy jako spółka już w 1986 roku i od tamtego czasu wiele się u nas zmieniło. Zawsze staramy się
                  dostarczać państwu usługi możliwie najwyższej jakości. Kierujemy się wieloletnim doświadczeniem w branży
                  elektronicznej i elektrycznej. U nas znajdą państwo dawno już nieprodukowane części do kultowych, starych urządzeń
                  elektronicznych i audio.
                </ResponsiveText>
              </TitledArea>
            </Wrapper>
          </Container>
        </FullHeight>
        <Container color="#141414" whitetext>
          <Wrapper>
            <div className="w-[100vw] min-w-[320px] *:w-full lg:px-6 +xl:max-w-[73rem]">
              <Carousel
                theme={topCarouselTheme.carousel}
                leftControl={CarouselControl('left')}
                rightControl={CarouselControl('right')}
                slideInterval={20000}
                pauseOnHover
              >
                <DescribedPhoto src="https://placehold.co/800x450" alt="" title="Początki firmy">
                  <i>Spółka Axel Electronics</i> powstała w grudniu 1989 roku, szybko zyskała zaufanie klientów oferując szeroki i
                  zróżnicowany asortyment. W listopadzie 1996 roku firma podjęła samodzielną działalność pod nazwą&nbsp;
                  <i>Axel Electronics I</i>, która funkcjonuje do dziś.
                </DescribedPhoto>
                <DescribedPhoto src="https://placehold.co/800x450" alt="" title="Lorem ipsum dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur velit dapibus urna tincidunt, quis
                  luctus mauris euismod. Nunc vestibulum interdum dolor id maximus. In nec erat dolor. Nullam risus augue, auctor et
                  rhoncus lacinia eu consequat.
                </DescribedPhoto>
                <DescribedPhoto src="https://placehold.co/800x450" alt="" title="Lorem ipsum dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur velit dapibus urna tincidunt, quis
                  luctus mauris euismod. Nunc vestibulum interdum dolor id maximus. In nec erat dolor. Nullam risus augue, auctor et
                  rhoncus lacinia eu consequat.
                </DescribedPhoto>
                <DescribedPhoto src="https://placehold.co/800x450" alt="" title="Lorem ipsum dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur velit dapibus urna tincidunt, quis
                  luctus mauris euismod. Nunc vestibulum interdum dolor id maximus. In nec erat dolor. Nullam risus augue, auctor et
                  rhoncus lacinia eu consequat.
                </DescribedPhoto>
                <DescribedPhoto src="https://placehold.co/800x450" alt="" title="Lorem ipsum dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur velit dapibus urna tincidunt, quis
                  luctus mauris euismod. Nunc vestibulum interdum dolor id maximus. In nec erat dolor. Nullam risus augue, auctor et
                  rhoncus lacinia eu consequat.
                </DescribedPhoto>
              </Carousel>
            </div>
          </Wrapper>
        </Container>
        <Container color="#ffffff">
          <Wrapper>
            <TitledArea title="Nasza Oferta" big></TitledArea>
          </Wrapper>
        </Container>
      </Main>
    </div>
  )
}
