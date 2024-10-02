'use client'

import Image from 'next/image'
import { useScreen } from './hooks/useScreen'

import Header from './components/header'
import Main from './components/main'
import Shelf from './components/warehouse/shelf'
import Cabinet from './components/warehouse/cabinet'
import Item from './components/warehouse/item'
import TitledArea from './components/misc/titledarea'
import FullHeight from './components/misc/fullheight'
//
import Welcome from './components/welcome'

export default function HomePage() {
  const [ScreenWidth, ScreenHeight] = useScreen()

  return (
    <div id="root" style={{ height: '220vh' }}>
      <Header />
      <Main>
        <FullHeight>
          <Welcome />
          <Cabinet color="#333333" whitetext>
            <Shelf>
              <Item>
                <TitledArea title="Niezwykły sklep elektroniczny">
                  <div className="text-center lg:mb-2 lg:text-justify xs:mb-1 xs:text-left">
                    <span className="text-[1.05rem] tracking-normal xl:text-[0.97rem] lg:text-[0.97rem] xs:text-[0.85rem]">
                      Zajmujemy się sprzedażą detaliczną elementów i podzespołów elektronicznych oraz wielu innych produktów
                      pomocniczych związanych z elektroniką, sprzętem lutowniczym, pomiarowym, komputerowym, nagłaśniającym,
                      radioamatorskim i RTV. Udzielamy również porad dotyczących wyboru odpowiednich części oraz podzespołów
                      elektronicznych.
                    </span>
                  </div>
                </TitledArea>
              </Item>
              <Item>
                <TitledArea title="Ponad 30 lat doświadczenia">
                  <div className="text-center lg:text-justify xs:text-left">
                    <span className="text-[1.05rem] tracking-normal xl:text-[0.97rem] lg:text-[0.97rem] xs:text-[0.85rem]">
                      Zaistnieliśmy jako spółka już w 1986 roku i od tamtego czasu wiele się u nas zmieniło. Zawsze staramy się
                      dostarczać państwu usługi możliwie najwyższej jakości. Kierujemy się wieloletnim doświadczeniem w branży
                      elektronicznej i elektrycznej. U nas znajdą państwo dawno już nieprodukowane części do kultowych, starych
                      urządzeń elektronicznych i audio.
                    </span>
                  </div>
                </TitledArea>
              </Item>
            </Shelf>
          </Cabinet>
        </FullHeight>
        <Cabinet color="#141414" whitetext>
          <Shelf>
            <Item>
              <div className="flex w-full flex-row flex-nowrap items-center justify-center lg:flex-wrap +lg:gap-6 +lg:p-2">
                <div className="h-40 min-w-max p-4 *:h-full *:rounded-md lg:p-1 xs:h-[39vw] xs:min-h-[124px]">
                  {/* {ScreenWidth && ScreenHeight && (
                    <Image src={'https://placehold.co/800x450'} width={1280} height={720} alt="" loading="eager" />
                  )} */}
                  <img src="https://placehold.co/800x450" alt="" />
                </div>
                <div className="flex h-full max-w-[46rem] flex-grow flex-col flex-nowrap gap-3 py-6 lg:gap-px lg:py-3">
                  <div className="font-opensans font-bold tracking-wide opacity-90">
                    <h2 className="text-2xl xl:text-[1.25rem] lg:text-[1.15rem] xs:text-[1.05rem]">Początki firmy</h2>
                  </div>
                  <div className="mx-auto lg:text-justify xs:text-left">
                    <span className="text-[1.05rem] tracking-normal xl:text-[0.97rem] lg:text-[0.97rem] xs:text-[0.85rem]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur velit dapibus urna tincidunt, quis
                      luctus mauris euismod. Nunc vestibulum interdum dolor id maximus. In nec erat dolor. Nullam risus augue,
                      auctor et rhoncus lacinia eu consequat.
                    </span>
                  </div>
                </div>
              </div>
            </Item>
          </Shelf>
        </Cabinet>
        <Cabinet color="#ffffff">
          <Shelf>
            <TitledArea title="Nasza Oferta" big></TitledArea>
          </Shelf>
        </Cabinet>
      </Main>
    </div>
  )
}
