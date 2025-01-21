import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const TermsandConditions = () => {
  const { i18n } = useTranslation();

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant='h2' color="darkred">
        {i18n.language === "en" ? "Terms & Conditions" : "Условия за ползване"}
      </Typography>
      <br />

      <Typography variant='p'>
        {i18n.language === "en" 
          ? "Using this site and placing an order through it is considered acceptance of the stated terms. If you DO NOT ACCEPT these terms, please do not use this website. Horreror.com reserves the right to change the terms at any time without prior notice, with the changed terms being published on the site."
          : "Използването на този сайт и направата на поръчка чрез него, се счита за съгласие с посочените условия. Ако НЕ ПРИЕМАТЕ тези условия, моля, не използвайте този уеб сайт. Horreror.com си запазва правото да променя условията по всяко време, без предварително известие, като променените условия ще бъдат публикувани в сайта."
        }
      </Typography>
      <br />

      <Typography variant='p'>
        {i18n.language === "en" 
          ? "Horreror.com is not responsible if the customer has provided incorrect or incomplete data in an order made to an address."
          : "Horreror.com не носи отговорност, ако клиентът е посочил неверни или непълни данни в направена поръчка на адрес."
        }
      </Typography>
      <br />

      <Typography variant='p'>
        {i18n.language === "en" 
          ? "Horreror.com guarantees that all products are brand new (unused) and are packaged in original packaging."
          : "Horreror.com гарантира, че всички продукти са фабрично нови (неупотребявани) и са опаковани в оригинална опаковка."
        }
      </Typography>
      <br /><br />

      <Typography variant='p' color="red">
        {i18n.language === "en" ? "The customer is obliged to:" : "Клиентът се задължава:"}
        <ul style={{marginTop: "0", color: "white"}}>
          <li>{i18n.language === "en" ? "to provide their full name, accurate and valid phone number, delivery address, and email address;" : "да посочи двете си имена, точен и валиден телефон, адрес за доставка и електронен адрес;"}</li>
          <li>{i18n.language === "en" ? "Horreror.com delivers orders only within the Republic of Bulgaria!" : "Horreror.com доставя поръчки само в рамките на република България!"}</li>
          <li>{i18n.language === "en" ? "to pay the price of the goods according to the terms described in the delivery and payment information;" : "да плати цената на стоката според условията описани в информацията за доставка и плащане на стоки;"}</li>
          <li>{i18n.language === "en" ? "to ensure access and the possibility of receiving the goods." : "да осигури достъп и възможност за получаване на стоката."}</li>
          <li>{i18n.language === "en" ? "Horreror.com accepts payments only in cash upon receipt of the order from the courier or office;" : "Horreror.com приема плащания само в брой при получаване на поръчката от куриер или офис;"}</li>
          <li>{i18n.language === "en" ? "to pay the delivery costs." : "да заплати разходите по доставката."}</li>
        </ul>
      </Typography>
      <br />

      <Typography variant='p' color="red">
        {i18n.language === "en" ? "The customer has the right to refuse to receive the goods ordered by him when it is delivered under one of the following conditions:" : "Клиентът има право да откаже получаването на заявената за покупка от него стока, когато тя му е доставена при едно от следните условия:"}
        <ul style={{marginTop: "0", color: "white"}}>
          <li>{i18n.language === "en" ? "the delivered goods clearly do not correspond to the goods ordered by the customer and this can be established by their ordinary inspection;" : "доставената стока явно не съответства на заявената за покупка от клиента и това може да се установи чрез обикновения й преглед;"}</li>
          <li>{i18n.language === "en" ? "the price that the customer has to pay does not correspond to the due price;" : "цената, която клиентът следва да заплати, не съответства на дължимата цена;"}</li>
          <li>{i18n.language === "en" ? "in case of discrepancy between the ordered and delivered goods, which could not be established at the time of delivery." : "при несъответствие между заявената за покупка и доставената стока, което не е било възможно да бъде установено в момента на доставката."}</li>
        </ul>
      </Typography>
      <br />

      <Typography variant='p' color="red">
        {i18n.language === "en" ? "The customer has the right to return the received goods within 14 working days from the date of receipt of the delivery, under the following conditions:" : "Клиентът има право да върне получената стока в рамките на 14 работни дни от датата на получаване на доставката, при следните условия:"}
        <ul style={{marginTop: "0", color: "white"}}>
          <li>{i18n.language === "en" ? "when it is in good commercial condition, original packaging, with original labels and contains all additional gifts;" : "когато тя е в добър търговски вид, оригинална опаковка, с оригинални етикети и съдържа всички допълнителни подаръци;"}</li>
          <li>{i18n.language === "en" ? "it has not been worn;" : "не е носена;"}</li>
          <li>{i18n.language === "en" ? "Horreror.com refunds the purchase amount if all conditions are met, after reviewing the returned order, Horreror.com refunds the full amount of the goods through courier companies Speedy and/or Econt within 14 working days via cash on delivery;" : "Horreror.com възстановява сумата на покупката, ако всички условия са на лице, след преглед на върнатата поръчка, Horreror.com възстановява пълната сума на стоката, чрез куриерски фирми Спиди и/или Еконт в рамките на 14 работни дни чрез наложен платеж;"}</li>
          <li>{i18n.language === "en" ? "the return costs are borne by the customer;" : "като разходите по връщането са за сметка на клиента;"}</li>
          <li>{i18n.language === "en" ? "if the above conditions are not met, Horreror.com does not refund the amount for the returned order." : "при неизпълнение на горе посочените условия Horreror.com не възстановява сумата по върнатата поръчка."}</li>
        </ul>
      </Typography>
      <br />
    </Box>
  )
}

export default TermsandConditions