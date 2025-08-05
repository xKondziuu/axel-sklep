'use client'

import type { CustomFlowbiteTheme } from 'flowbite-react'
import { Carousel } from 'flowbite-react'
import ContactInfo from './components/contactinfo'
import Container from './components/containter'
import DescribedPhoto from './components/describedphoto'
import Disclaimer from './components/disclaimer'
import FlexGrid from './components/flexgrid'
import Footer from './components/footer'
import FullHeight from './components/fullheight'
import GalleryImage from './components/galleryimage'
import GoogleMaps from './components/maps'
import Header from './components/header'
import { Headers as RH } from './components/responsiveheaders'
import Main from './components/main'
import OfferItem from './components/offeritem'
import ResponsiveText from './components/responsivetext'
import TitledArea from './components/titledarea'
import Url from './components/url'
import Welcome from './components/welcome'
import Wrapper from './components/wrapper'

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

export default function Page() {
  return (
    <div id="root">
      <Header />
      <Main>
        <FullHeight id="start">
          <Welcome />
          <Container background="#333" whitetext>
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
        <Container background="#141414" whitetext>
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
                <DescribedPhoto src="https://placehold.co/576x324/222222/999999" alt="" title="Drobne naprawy">
                  Oferujemy również drobne naprawy i modyfikacje sprzętu elektronicznego. Klientów z poważniejszymi usterkami
                  sprzętu RTV kierujemy do zaufanych i sprawdzonych serwisantów, z którymi współpracujemy od lat,&nbsp;
                  <Url href="#serwis">więcej...</Url>
                </DescribedPhoto>
              </Carousel>
            </div>
          </Wrapper>
        </Container>
        <Container background="#fff">
          <Wrapper id="oferta">
            <TitledArea H={1} title="Nasza Oferta" className="mb-2 lg:mb-1 xs:mb-0">
              <FlexGrid className="h-56 flex-[0_1_25%] p-3 2xl:flex-[0_1_33.33%] lg:flex-[0_1_50%] sm:h-auto sm:flex-[0_1_100%] sm:flex-col">
                <FlexGrid.Item>
                  <OfferItem title="Akustyka">
                    <li>Głośniki</li>
                    <li>Mikrofony</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem title="Bezpieczniki">
                    <li>Polimerowe</li>
                    <li>Samochodowe</li>
                    <li>Termiczne</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem title="Preparaty chemiczne">
                    <li>Do lutowania</li>
                    <li>Termoprzewodzące</li>
                    <li>Smary i oleje</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem title="Wyświetlacze i LED">
                    <li>Taśmy LED RGB na metry</li>
                    <li>Wyświetlacze LED i LCD</li>
                    <li>Wyświetlacze segmentowe</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem title="Artykuły antenowe">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem title="Lista elementów">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem title="Lista elementów">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem title="Lista elementów">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem title="Lista elementów">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem title="Lista elementów">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem title="Lista elementów">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
                <FlexGrid.Item>
                  <OfferItem title="Lista elementów">
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </OfferItem>
                </FlexGrid.Item>
              </FlexGrid>
              <Disclaimer>
                Nie wszystkie produkty z oferty są dostępne od ręki, zachęcamy do kontaktu, aby sprawdzić dostępność.
              </Disclaimer>
            </TitledArea>
          </Wrapper>
        </Container>
        <Container background="url('https://placehold.co/1280x720/222222/999999')" whitetext>
          <Wrapper id="serwis">
            <TitledArea H={1} title="Usługi serwisowe">
              <div className="flex h-full w-[100vw] min-w-[320px] flex-col justify-center lg:px-6 +xl:max-w-[70rem]">
                <div className="w-full pt-2">
                  <ResponsiveText align="center">
                    Oferujemy drobne naprawy wybranych sprzętów elektronicznych, zgodnie z poniższymi zasadami. Chociaż nie jesteśmy
                    autoryzowanym serwisem, dokładamy wszelkich starań, aby każda naprawa została wykonana z najwyższą starannością.
                    Zastrzegamy sobie jednak prawo do odmowy naprawy w określonych przypadkach. Ze względu na wysokie
                    zainteresowanie, czas oczekiwania może być wydłużony w zależności od rodzaju urządzenia.
                  </ResponsiveText>
                </div>
                <div className="mx-8 pb-3 pt-6 lg:mx-0">
                  <div className="flex h-full flex-row flex-nowrap text-nowrap sm:mb-3 sm:flex-col sm:gap-3">
                    <div className="flex h-full w-[66.66%] flex-row flex-nowrap sm:w-full 2xs:flex-col">
                      <div className="w-full">
                        <TitledArea H={4} title="Co naprawimy?">
                          <ResponsiveText className="text-[1.15rem] tracking-normal xl:text-[1.07rem] lg:text-[0.97rem] sm:text-[0.92rem]">
                            <ul className="list-none text-center *:pb-3">
                              <li className="leading-tight">
                                Wybrane wymontowane
                                <br /> układy elektroniczne
                              </li>
                              <li>Kable i/lub wtyczki</li>
                              <li>Piloty telewizyjne</li>
                              <li>Słuchawki przewodowe</li>
                              <li>Wybrane głośniki</li>
                            </ul>
                          </ResponsiveText>
                        </TitledArea>
                      </div>
                      <div className="w-full">
                        <TitledArea H={4} title="Czego nie naprawimy?">
                          <ResponsiveText className="text-[1.15rem] tracking-normal xl:text-[1.07rem] lg:text-[0.97rem] sm:text-[0.92rem]">
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
                    </div>
                    <div className="w-[33.33%] sm:w-full">
                      <TitledArea H={4} title="Naprawy obejmują">
                        <ResponsiveText className="text-[1.15rem] tracking-normal xl:text-[1.07rem] lg:text-[0.97rem] sm:text-[0.92rem]">
                          <ul className="list-none text-center *:pb-3">
                            <li className="leading-tight">
                              Wymianę wskazanych <br />
                              elementów elektronicznych
                            </li>
                            <li>Kable i/lub wtyczki </li>
                            <li>Uszkodzone gniazdo</li>
                            <li>Przyciski, diody LED</li>
                            <li>Głośnik lub mikrofon</li>
                          </ul>
                        </ResponsiveText>
                      </TitledArea>
                    </div>
                  </div>
                </div>
              </div>
            </TitledArea>
          </Wrapper>
        </Container>
        <Container background="#fff">
          <Wrapper id="kontakt">
            <TitledArea title={'KONTAKT'} H={1}>
              <div className="flex h-fit w-full flex-row flex-nowrap gap-4 lg:flex-col lg:gap-4">
                <div className="h-fit w-full lg:w-full 2xs:w-full">
                  <div className="mb-14 font-fredoka leading-snug xl:mb-8 lg:mb-4">
                    <RH.H2 fo>AXEL Electronics 1</RH.H2>
                    <RH.H5>Janusz Struczak</RH.H5>
                  </div>
                  <div className="flex max-w-[40rem] flex-row flex-nowrap justify-between gap-6 lg:mx-auto lg:flex-row md:max-w-[36rem] sm:max-w-[32rem] 2xs:max-w-full 2xs:flex-col 2xs:gap-0">
                    <div className="flex flex-col justify-start">
                      <ContactInfo title="Adres fizyczny:" icon="fa-regular fa-location-dot">
                        ul. Dworcowa 28, <br />
                        50-456 Wrocław
                      </ContactInfo>
                      <ContactInfo title="Numery telefonów:" icon="fa-regular fa-phone">
                        71 342 94 43
                        <br />
                        71 330 65 49
                      </ContactInfo>
                    </div>
                    <div className="flex flex-col justify-start">
                      <ContactInfo title="Adres email:" icon="fa-regular fa-envelope">
                        <a href="mailto:axel@axel-sklep.com.pl">axel@axel-sklep.com.pl</a>
                      </ContactInfo>
                      <ContactInfo title="Godziny otwarcia:" icon="fa-regular fa-clock">
                        <table className="leading-tight">
                          <tbody>
                            <tr>
                              <td className="pr-2">pon. - pt.:</td>
                              <td>9:00 - 17:00</td>
                            </tr>
                            <tr>
                              <td className="pr-2">sobota:</td>
                              <td>10:00 - 14:00</td>
                            </tr>
                            <tr>
                              <td className="pr-2">niedziela:</td>
                              <td>nieczynne</td>
                            </tr>
                          </tbody>
                        </table>
                      </ContactInfo>
                    </div>
                  </div>
                  <div className="text-nowrap">
                    <Disclaimer>Telefony odbieramy tylko w godzinach otwarcia.</Disclaimer>
                  </div>
                </div>
                <div className="w-full flex-grow lg:h-80">
                  <GoogleMaps query="AXEL+1+Sklep+Elektroniczny" />
                </div>
              </div>
            </TitledArea>
          </Wrapper>
        </Container>
        <Container background="#141414" whitetext>
          <Wrapper id="galeria">
            <TitledArea title={'Galeria zdjęć'} H={1}>
              <div className="grid w-full grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
                <GalleryImage src="https://placehold.co/640x360/222222/999999" />
              </div>
            </TitledArea>
          </Wrapper>
        </Container>
      </Main>
      <Footer />
    </div>
  )
}
