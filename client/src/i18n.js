import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      quote: "Cover yourself in mystery and style! Don't be afraid of the dark!",
      ourFeatureProducts: "Our Feature Products",
      orderNow: "Order Now",
      all: "All",
      newArrivals: "New Arrivals",
      bestSellers: "Best Sellers",
      topRated: "Top Rated",
      shoppingBag: "Shopping Bag",
      subtotal: "Subtotal",
      checkout: "Checkout",
      billingInformation: "Billing Information",
      shippingInformation: "Shipping Information",
      sameForShippingAddress: "Same for Shipping Address",
      next: "Next",
      contactInfo: "Contact Info",
      selectPaymentMethod: "Select Payment Method",
      card: "Card (Visa, Mastercard and other)",
      cashOnDelivery: "Cash on Delivery",
      back: "Back",
      placeOrder: "Place Order",
      success: "Success",
      successfullOrder: "You have successfully made an Order",
      congrats: "Congrats on making your purchase",
      category: "CATEGORY",
      description: "Description",
      releatedProducts: "Releated Products",
      firstName: "First Name",
      lastName: "Last Name",
      country: "Country",
      streetAddress: "Street Address",
      streetAddress2: "Street Address 2 (optional)",
      city: "City",
      zipCode: "Zip Code",
      email: "Email",
      phoneNumber: "Phone Number",
      ourStory: "Our Story",
      ourStoryLong: "We are a creative team of young people who want to change the world. Be a part of our journey. We appreciate every order and everyone of you is part of the family."
    },
  },
  bg: {
    translation: {
      quote: "Облечи се в загадки и стил. Не се страхувай от тъмното!",
      ourFeatureProducts: "Нашите Продукти",
      orderNow: "КУПИ СЕГА",
      all: "Всички",
      newArrivals: "Нови",
      bestSellers: "Бестселъри",
      topRated: "Най-Високо Оценени",
      shoppingBag: "Количка",
      subtotal: "ОБЩО",
      checkout: "Плащане",
      billingInformation: "Информация за Плащане",
      shippingInformation: "Информация за Доставката",
      sameForShippingAddress: "Същото за Адреса на Доставката",
      next: "Следващо",
      contactInfo: "Информация за Контакт",
      selectPaymentMethod: "Избери Начин за Плащане",
      card: "Карта (Visa Mastercard и други)",
      cashOnDelivery: "Заплащане при Доставянето",
      back: "Назад",
      placeOrder: "Плати",
      success: "Успешно",
      successfullOrder: "Вие успешно направихте поръчка",
      congrats: "Поздравления за вашата покупка",
      category: "КАТЕГОРИЯ",
      description: "Описание",
      releatedProducts: "Подобни продукти",
      firstName: "Име",
      lastName: "Фамилия",
      country: "Държава",
      streetAddress: "Адрес",
      streetAddress2: "Адрес 2 (избирателно)",
      city: "Град",
      zipCode: "Пощенски код",
      email: "Имейл",
      phoneNumber: "Телефоннен Номер",
      ourStory: "Нашата История",
      ourStoryLong: "Ние сме творчески екип от млади хора, които искат да променят света. Бъдете част от нашето пътуване. Оценяваме всяка поръчка и всеки от вас е част от семейството."
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lang") || "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
