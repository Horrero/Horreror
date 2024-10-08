import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      quote: "NQKUV QUOTE",
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
      firstName: "",
      lastName: "",
      country: "",
      streetAddress: "",
      streetAddress2: "",
      city: "",
      
    },
  },
  bg: {
    translation: {
      quote: "Някъв Цитат",
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
      firstName: "",
      lastName: "",
      country: "",
      streetAddress: "",
      streetAddress2: "",
      city: "",
      
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
