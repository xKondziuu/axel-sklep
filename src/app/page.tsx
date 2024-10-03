'use client'

import Image from 'next/image'
import Picture from './components/misc/picture'

import Header from './components/misc/header'
import Main from './components/misc/main'

import Shelf from './components/warehouse/shelf'
import Cabinet from './components/warehouse/cabinet'
import Item from './components/warehouse/item'
import TitledArea from './components/misc/titledarea'
import FullHeight from './components/misc/fullheight'
import ResponsiveText from './components/responsivetext'
//
import Welcome from './components/welcome'
import DescribedPhoto from './components/describedphoto'

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
                  <div className="contents lg:mb-2 xs:mb-1">
                    <ResponsiveText align="center">
                      Zajmujemy się sprzedażą detaliczną elementów i podzespołów elektronicznych oraz wielu innych produktów
                      pomocniczych związanych z elektroniką, sprzętem lutowniczym, pomiarowym, komputerowym, nagłaśniającym,
                      radioamatorskim i RTV. Udzielamy również porad dotyczących wyboru odpowiednich części oraz podzespołów
                      elektronicznych.
                    </ResponsiveText>
                  </div>
                </TitledArea>
              </Item>
              <Item>
                <TitledArea title="Ponad 30 lat doświadczenia">
                  <ResponsiveText align="center">
                    Zaistnieliśmy jako spółka już w 1986 roku i od tamtego czasu wiele się u nas zmieniło. Zawsze staramy się
                    dostarczać państwu usługi możliwie najwyższej jakości. Kierujemy się wieloletnim doświadczeniem w branży
                    elektronicznej i elektrycznej. U nas znajdą państwo dawno już nieprodukowane części do kultowych, starych
                    urządzeń elektronicznych i audio.
                  </ResponsiveText>
                </TitledArea>
              </Item>
            </Shelf>
          </Cabinet>
        </FullHeight>
        <Cabinet color="#141414" whitetext>
          <Shelf>
            <Item>
              <DescribedPhoto src="https://placehold.co/800x450" alt="" title="Początki firmy" />
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
