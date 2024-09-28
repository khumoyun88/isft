import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; // Optional: Import default styles

const AccordionComponent = () => {
  return (
    
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Inistitut Litsenziyaga egami?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            ISFT Instituti  2021-yil 12-Oktabrda  O'zbekiston Respublikasi Oliy Ta'lim, Fan va Innovatsiyalar Vazirligi tomonidan berilgan No 300690-sonli litsenziyaga asosan faoliyat ko'rsatadi.            
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Inistitutda moliyaviy chegirmalar mavjudmi?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            ISFT Inistitutida 300ta Grant va kam taminlangan , ijtimoiy himoyaga mutoj qatlamlar uchun yana 50 ta qo'shimcha Grand o'rinlari mavjud
            Shu bilan birga IELTS hamda CEFR sertifikati bor talabalarga 3.000.000 so'mgacha chegirma olish imkoniyatlari bor.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            ISFT Inistitutida qanday yo'nalishlar bor?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Inistitutda Iqtisodiyot,Bank ishi, Marketing,Xalqaro munosabatlar,axborot tizmlari va texnologiyalari kabi 15dan ortiq Kunduzgi, Sirtqi va Masofaviy ta'liim shakllarida o'qishinggiz mumkin mumkin.
         </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Inistitutida o'qish narxi qancha?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
          ISFT Inistitutida kantrakt narxlari ta’lim dasturiga qarab farq qiladi. Oʻrtacha oʻqish toʻlovlari yiliga 11.000.000-22.000.000soʻm atrofida. Albatta chegirmalar mavjud.
        </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            ertyuiytrertyuiuytrtyuiuytr
           ISFT Inistituti davlat tashkilotlari tomonidan tan olinadimi?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            poiuytrertyuioiuytrewoi
            Albatta Inistitut Oʻzbekiston Respublikasi Ta’lim vazirligi tomonidan litsenziyalangan, Iniustitut diplomi davlat tashkilotlari tomonidan tan olinadi. Shuningdek Inistitut Turkiya, Xitoy, Malayziya, Belorusiya, Qozog'iston, Buyuk Britaniya kabi davlatlar Universtitetlari bilan Memerendumga ega.
        </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
