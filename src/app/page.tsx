'use client'

import Image from 'next/image'
import Picture from './components/misc/picture'

import Header from './components/misc/header'
import Main from './components/misc/main'

import Container from './components/misc/containter'
import Wrapper from './components/misc/wrapper'

import TitledArea from './components/titledarea'
import FullHeight from './components/fullheight'
import ResponsiveText from './components/responsivetext'
import { FlexGrid } from './components/misc/flexgrid'
import Disclaimer from './components/disclaimer'
//
import OfferItem from './components/offeritem'
import Welcome from './components/welcome'
import DescribedPhoto from './components/describedphoto'
import Url from './components/misc/url'

import type { CustomFlowbiteTheme } from 'flowbite-react'
import { Carousel } from 'flowbite-react'
import React from 'react'

const topCarouselTheme: CustomFlowbiteTheme = {
  carousel: {
    indicators: {
      base: 'h-1.5 w-1.5 rounded-full opacity-70 drop-shadow-lg translate-y-[180%] lg:translate-y-[195%]'
    }
  }
}

const topCarouselControl = (dir: 'left' | 'right') => {
  // prettier-ignore
  return (
    <div className={`text-4xl opacity-65 hover:opacity-80 transition-opacity drop-shadow-lg lg:absolute lg:top-14 ${dir == 'left' ? 'lg:left-1 xs:left-0' : 'lg:right-1 xs:right-0'} xs:text-3xl +xs:p-0.5`}>
      <i className={`fa-light fa-angle-${dir}`} />
    </div>
  )
}

const servicesCarouselTheme: CustomFlowbiteTheme = {
  carousel: {
    indicators: {
      base: 'h-1.5 w-1.5 rounded-full opacity-70 drop-shadow-lg'
    }
  }
}

const servicesCarouselControl = (dir: 'left' | 'right') => {
  // prettier-ignore
  return (
    <div className={`text-4xl opacity-65 hover:opacity-80 transition-opacity drop-shadow-lg lg:absolute lg:top-14 ${dir == 'left' ? 'lg:left-1 xs:left-0' : 'lg:right-1 xs:right-0'} xs:text-3xl +xs:p-0.5`}>
      <i className={`fa-light fa-angle-${dir}`} />
    </div>
  )
}

export default function HomePage() {
  return (
    <div id="root">
      <Header />
      <Main>
        <FullHeight>
          <Welcome />
          <Container color="#333333" whitetext>
            <Wrapper>
              <TitledArea H={2} title="Niezwykły sklep elektroniczny">
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
              {/* prettier-ignore */}
              <TitledArea H={2} title={<>Ponad <div className="text-neon inline-block">35 lat</div> doświadczenia</>}>
                <ResponsiveText align="center">
                  Zaistnieliśmy jako spółka już w 1989 roku i od tamtego czasu wiele się u nas zmieniło. Zawsze staramy się
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
                leftControl={topCarouselControl('left')}
                rightControl={topCarouselControl('right')}
                slideInterval={10000}
                pauseOnHover
              >
                <DescribedPhoto src="https://placehold.co/576x324/222222/999999" alt="" title="Początki firmy">
                  <i>Spółka Axel Electronics</i> powstała w grudniu 1989 roku, szybko zyskała zaufanie klientów oferując szeroki i
                  zróżnicowany asortyment. W listopadzie 1996 roku firma podjęła samodzielną działalność pod nazwą&nbsp;
                  <i>Axel Electronics I</i>, która funkcjonuje do dziś.
                </DescribedPhoto>
                <DescribedPhoto src="https://placehold.co/576x324/222222/999999" alt="" title="Dogodna lokalizacja">
                  Siedziba firmy mieści się w bliskim sąsiedztwie wrocławskiego Dworca Głównego. Ta dogodna lokalizacja umożliwia
                  przyjezdnym klientom szybkie zakupy oraz informację o innych sklepach podobnej branży w naszym mieście,&nbsp;
                  <Url href="#kontakt">więcej...</Url>
                </DescribedPhoto>
                <DescribedPhoto src="https://placehold.co/576x324/222222/999999" alt="" title="Zaufani dostawcy">
                  Naszymi kluczowymi dostawcami elementów i podzespołów elektronicznych są polscy importerzy, hurtownie oraz krajowi
                  producenci. Współpracujemy z wieloma wiodącymi firmami z branży elektronicznej zarówno z całego kraju, jak i z
                  zagranicy.
                </DescribedPhoto>
                <DescribedPhoto src="https://placehold.co/576x324/222222/999999" alt="" title="Sprawna wysyłka zamówień">
                  Klienci składający zamówienia telefonicznie, mailowo lub przez inne kanały mogą liczyć na ich możliwie szybką
                  realizację. Towar wysyłamy błyskawicznie za pośrednictwem wybranego przez klienta kuriera lub Poczty
                  Polskiej,&nbsp;
                  <Url href="#zamowienia">więcej...</Url>
                </DescribedPhoto>
                <DescribedPhoto src="https://placehold.co/576x324/222222/999999" alt="" title="Drobne naprawy">
                  Oferujemy również drobne naprawy i modyfikacje sprzętu elektronicznego. Klientów z poważniejszymi usterkami
                  sprzętu RTV kierujemy do zaufanych i sprawdzonych serwisantów, z którymi współpracujemy od lat,&nbsp;
                  <Url href="#serwis">więcej...</Url>
                </DescribedPhoto>
              </Carousel>
            </div>
          </Wrapper>
        </Container>
        <Container color="#eeeeee">
          <Wrapper>
            <TitledArea H={1} title="Nasza Oferta">
              <FlexGrid className="h-64 flex-[0_1_25%] p-2.5 2xl:flex-[0_1_33.33%] lg:flex-[0_1_50%] sm:flex-[0_1_100%]">
                <FlexGrid.Item>
                  <OfferItem src="https://placehold.co/640x360/222222/999999" title="Akustyka">
                    <li>Czujniki</li>
                    <li>Głośniki</li>
                    <li>Mikrofony</li>
                    <li>Sygnalizatory</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem src="https://placehold.co/640x360/222222/999999" title="Bezpieczniki">
                    <li>5,20mm oraz 6,30mm</li>
                    <li>Polimerowe</li>
                    <li>Samochodowe</li>
                    <li>Termiczne</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem src="http://www.axel-sklep.com.pl/media/galeria/img/9.jpg" title="Preparaty chemiczne">
                    <li>Czyszczenie i konserwacja</li>
                    <li>Do lutowania</li>
                    <li>Termoprzewodzące</li>
                    <li>Smary i oleje</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem src="http://www.axel-sklep.com.pl/media/galeria/img/8.jpg" title="Wyświetlacze i LED">
                    <li>LED 3mm, 5mm, SMD</li>
                    <li>Taśmy LED RGB na metry</li>
                    <li>Wyświetlacze LED i LCD</li>
                    <li>Wyświetlacze segmentowe</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem src="https://placehold.co/640x360/222222/999999" title="Artykuły antenowe">
                    <li></li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem src="https://placehold.co/640x360/222222/999999" title="Elementy elektroniczne">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem src="https://placehold.co/640x360/222222/999999" title="Elementy elektroniczne">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem src="https://placehold.co/640x360/222222/999999" title="Elementy elektroniczne">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem src="https://placehold.co/640x360/222222/999999" title="Elementy elektroniczne">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem src="https://placehold.co/640x360/222222/999999" title="Elementy elektroniczne">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem src="https://placehold.co/640x360/222222/999999" title="Elementy elektroniczne">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem src="https://placehold.co/640x360/222222/999999" title="Elementy elektroniczne">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
              </FlexGrid>
              <Disclaimer>
                Nie wszystkie produkty z oferty są dostępne od ręki, zachęcamy do kontaktu{' '}
                <div className="inline lg:hidden">telefonicznego, mailowego lub osobistego,</div>
                aby sprawdzić dostępność. <br className="lg:hidden" />W razie braku wybranego towaru, można go zamówić i odebrać w
                dogodnym terminie. Więcej informacji w sekcji <Url href="#zamowienia">Zamówienia</Url>.
              </Disclaimer>
            </TitledArea>
          </Wrapper>
        </Container>
        <Container color="#333333" whitetext>
          <Wrapper>
            <TitledArea H={1} title="Usługi serwisowe">
              <div className="-mx-2 -mt-2 flex h-full flex-row flex-nowrap lg:flex-col-reverse lg:flex-wrap lg:gap-4">
                <div className="flex h-full flex-[0_1_75%] justify-center p-4 xl:flex-[0_1_60%] lg:flex-[0_1_50%]">
                  <div className="flex h-full flex-col">
                    <div className="w-full">
                      <ResponsiveText align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet arcu nibh. Integer vestibulum, urna id
                        feugiat fermentum, libero augue sodales arcu, id auctor justo leo ut tellus. Mauris convallis porta viverra.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis scelerisque
                        quam vitae lorem congue efficitur. Cras egestas tristique tortor, a malesuada nisl semper viverra. Mauris
                        nec augue elementum, tristique ex quis, condimentum ligula. Pellentesque dictum elementum sagittis. Nulla
                        scelerisque ullamcorper convallis. In lectus erat, suscipit vel est sit amet, consequat pharetra magna.
                        Suspendisse potenti.
                      </ResponsiveText>
                    </div>
                    <div className="flex-grow pt-8">
                      <div className="flex h-full flex-row flex-nowrap">
                        <div className="size-full">
                          <TitledArea H={3} title="Co naprawimy?">
                            <ResponsiveText className="text-[1.15rem] tracking-normal xl:text-[1.07rem] lg:text-[1.07rem] xs:text-[0.95rem]">
                              <ul className="list-none text-center *:pb-3">
                                <li className="leading-tight">
                                  Wybrane wymontowane
                                  <br /> układy elektroniczne*
                                </li>
                                <li>Kable lub wtyczki</li>
                                <li>Piloty (dowolne)</li>
                                <li>Słuchawki przewodowe</li>
                                <li>Wybrane głośniki</li>
                              </ul>
                            </ResponsiveText>
                          </TitledArea>
                        </div>
                        <div className="size-full">
                          <TitledArea H={3} title="Czego NIE naprawimy?">
                            <ResponsiveText className="text-[1.15rem] tracking-normal xl:text-[1.07rem] lg:text-[1.07rem] xs:text-[0.95rem]">
                              <ul className="list-none text-center *:pb-3">
                                <li className="leading-tight">
                                  Wszelkich urządzeń <br />
                                  wielkogabarytowych
                                </li>
                                <li>Komputerów</li>
                                <li>Sprzętu AGD</li>
                                <li>Telefonów</li>
                                <li>Telewizorów</li>
                              </ul>
                            </ResponsiveText>
                          </TitledArea>
                        </div>
                        <div className="size-full">
                          <TitledArea H={3} title="Naprawy obejmują">
                            <ResponsiveText className="text-[1.15rem] tracking-normal xl:text-[1.07rem] lg:text-[1.07rem] xs:text-[0.95rem]">
                              <ul className="list-none text-center *:pb-3">
                                <li className="leading-tight">
                                  Wymianę wskazanych <br />
                                  elementów elektronicznych
                                </li>
                                <li>Wymianę kabla i/lub wtyczki </li>
                                <li>Wymianę uszkodzonego gniazda</li>
                                <li>Wymianę przycisków, diód LED</li>
                                <li>Wymianę głośnika lub mikrofonu</li>
                              </ul>
                            </ResponsiveText>
                          </TitledArea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[0_1_25%] justify-center p-4 xl:flex-[0_1_40%] lg:flex-[0_1_50%]">
                  <div className="flex h-full items-center justify-center rounded-xl lg:w-64">
                    <Picture src={'https://placehold.co/630x840/222222/999999'} alt="" className="rounded-xl" />
                  </div>
                </div>
              </div>
            </TitledArea>
          </Wrapper>
        </Container>
        <Container color="#eeeeee">
          <Wrapper>
            <TitledArea title={'KONTAKT'} H={1}></TitledArea>
          </Wrapper>
        </Container>
      </Main>
    </div>
  )
}
