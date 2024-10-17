import { Box, Typography } from '@mui/material'
import React from 'react'

const Privacypolicy = () => {
  return (
    <Box width="80%" margin="80px auto">
      <Typography variant='h2' color="darkred">Privacy Policy</Typography>
      <br />

      <Typography variant='h3' color="red">1. Personal Information We Collect</Typography>
      <Typography variant='p'>
        We collect personal information only when you make a purchase on our website. The information we collect includes: 
        First Name, Last Name, Country, Street Address, City, Zip Code, Email Address, and Phone Number. 
        We do not collect any other personal data outside of what is necessary for processing and shipping your order. 
        We do not collect data through cookies or user accounts, and you are not required to create an account to make a purchase.
      </Typography>
      <br /><br />

      <Typography variant='h3' color="red">2. How We Collect Information</Typography>
      <Typography variant='p'>
        We collect your personal information solely during the checkout process. Once you submit your details, if you choose to pay online, you will be securely transferred to Stripe for payment processing. 
        If you choose the "Cash on Delivery" option, no further online interaction is required after submitting your shipping information.
      </Typography>
      <br /><br />

      <Typography variant='h3' color="red">3. Purpose of Data Collection</Typography>
      <Typography variant='p'>
        We collect your data for the sole purpose of processing and shipping your order. The information is used to ensure your products are delivered to the correct address and to contact you if there are any issues with your order.
      </Typography>
      <br /><br />

      <Typography variant='h3' color="red">4. Data Sharing</Typography>
      <Typography variant='p'>
        We do not share your personal information with third parties for any reason, except where necessary to complete your order (e.g., providing your shipping address to the courier service). 
        Payments are processed securely through Stripe, but we do not have access to your payment details.
      </Typography>
      <br />
      <br />

      <Typography variant='h3' color="red">5. Data Storage and Protection</Typography>
      <Typography variant='p'>
        All personal data is securely stored in our database, which is protected by encryption and other security measures. 
        Our website uses HTTPS to ensure that all data transmitted between your browser and our servers is encrypted. 
        Your data can only be accessed by us and is not visible to anyone else.
      </Typography>
      <br/><br/>

      <Typography variant='h3' color="red">6. User Rights</Typography>
      <Typography variant='p'>
        As we do not offer account creation, your information is not stored permanently for future use. Each time you make a purchase, you will need to provide your details again.
      </Typography>
      <br/><br/>

      <Typography variant='h3' color="red">7. Cookies and Tracking</Typography>
      <Typography variant='p'>
        We do not use cookies or other tracking technologies on our website.
      </Typography>
      <br/><br/>

      <Typography variant='h3' color="red">8. Children’s Privacy</Typography>
      <Typography variant='p'>
        We do not have a minimum age requirement for using our website, but our products are generally targeted toward an adult audience. 
        We do not knowingly collect personal information from children.
      </Typography>
      <br/><br/>

      <Typography variant='h3' color="red">9. Third-Party Services</Typography>
      <Typography variant='p'>
        We use Stripe as our payment processor. When you make a payment, you will be directed to Stripe's secure payment page, and your payment information will be handled by them according to their own privacy policy.
      </Typography>
      <br/><br/>

      <Typography variant='h3' color="red">10. Changes to the Privacy Policy</Typography>
      <Typography variant='p'>
        We are still determining how we will notify users of changes to this Privacy Policy. Once we establish this process, we will update this section accordingly.
      </Typography>
      <br/><br/>

      <Typography variant='h3' color="red">11. Contact Information</Typography>
      <Typography variant='p'>
        At this time, our contact details are being finalized. Once confirmed, we will provide an email address and phone number where you can reach us with any questions or concerns about your privacy or our privacy practices.
      </Typography>
    </Box>
  )
}

export default Privacypolicy