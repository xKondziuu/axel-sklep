'use client'

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
      </Main>
    </div>
  )
}
