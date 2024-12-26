import React from 'react';

interface GeneratedComponentProps {
  mainImage: {
    src: string;
    alt: string;
    href: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
    href: string;
  };
  content: {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  };
}

export const GeneratedComponent = ({
  mainImage,
  secondaryImage,
  content,
}: GeneratedComponentProps) => {
  return (
    <div>
      <div className="hp-trends__item element-picker__highlight">
        <div className="hp-trends__image">
          <a href={mainImage.href}>
            <img src={mainImage.src} alt={mainImage.alt} className="" />
          </a>
        </div>
        {secondaryImage && (
          <div className="hp-trends__image desktop-only">
            <a href={secondaryImage.href}>
              <img
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                className=""
              />
            </a>
          </div>
        )}
        <div className="hp-trends__callout">
          <div className="hp-trends__callout-title">
            <h2>{content.title}</h2>
            <div className="hp-trends__callout_text">
              <p>{content.description}</p>
            </div>
          </div>
          <div className="primary darkbtn">
            <a href={content.ctaLink}>
              <span>{content.ctaText}</span>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        img {
          max-width: 100%;
          height: auto;
          border: 0px;
        }
        img {
          border: 0px;
          max-height: 100%;
          max-width: 100%;
        }
        p {
          margin-top: 0px;
          margin-bottom: 1rem;
        }
        p {
          font-size: 16px;
          line-height: 27px;
        }
        p {
          font-size: 16px;
          line-height: 27px;
          margin-top: 0px;
          margin-bottom: 1rem;
        }
        h1 {
          font-weight: 300;
          line-height: 1.1;
          font-size: 2.6rem;
          margin-top: 0px;
          margin-bottom: 2rem;
        }
        h1 {
          font: 300 2.6rem / 1.1 Helvetica, 'Open Sans', Montserrat, sans-serif;
          margin-top: 0px;
          margin-bottom: 2rem;
        }
        h2 {
          font-weight: 300;
          line-height: 1.1;
          font-size: 2.6rem;
          margin-top: 2.5rem;
          margin-bottom: 2rem;
        }
        h2 {
          font: 300 2.6rem / 1.1 Helvetica, 'Open Sans', Montserrat, sans-serif;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-top: 2.5rem;
          margin-bottom: 2rem;
        }
        * {
          box-sizing: border-box;
        }
        * {
          box-sizing: border-box;
        }
        a:hover {
          text-decoration: underline;
        }
        @media (min-width: 769px), print {
          font-size: 40px;
          margin-bottom: 40px;
        }
        @media (max-width: 767px) {
          font-size: 14px;
          font-size: 19px;
          letter-spacing: 3.5px;
          line-height: 30px;
          font-size: 14px;
          font-size: 30px;
        }
        @media print {
          background: 0px 0px !important;
          color: rgb(0, 0, 0) !important;
          filter: none !important;
          text-shadow: none !important;
          max-width: 100% !important;
        }
        @media (min-width: 768px), print {
          font-size: 40px;
          margin-bottom: 40px;
        }
        .hp-trends__item {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 500px;
          gap: 5px;
        }
        @media (max-width: 720px) {
          .hp-trends__item {
            display: flex;
            flex-direction: column-reverse;
            width: 100%;
            gap: 5px;
            height: 100%;
          }
          .hp-trends__item:nth-of-type(2n) {
            flex-direction: column;
          }
        }
        .hp-trends__image {
          flex-grow: 1;
          height: 500px;
        }
        a:active,
        .alink:active {
          color: rgb(255, 85, 1);
          text-decoration: underline;
        }
        .hp-trends__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hp-trends__image {
          flex-grow: 1;
          height: 500px;
        }
        @media (max-width: 1200px) {
          .desktop-only {
            display: none;
          }
        }
        a:active,
        .alink:active {
          color: rgb(255, 85, 1);
          text-decoration: underline;
        }
        .hp-trends__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hp-trends__callout {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-color: rgb(248, 247, 245);
          padding: 30px;
        }
        @media (min-width: 720px) {
          .hp-trends__callout {
            width: 40%;
          }
        }
        .hp-trends__callout-title h2 {
          margin: 0px;
          text-align: center;
          position: relative;
          font: 400 24px / 1.5 Helvetica, Arial, Montserrat, sans-serif;
          letter-spacing: 1.5px;
          text-transform: none;
          padding-bottom: 20px;
        }
        p:last-child {
          margin-bottom: 0px;
        }
        .hp-trends__callout_text p {
          padding-bottom: 30px;
          letter-spacing: 1.5px;
        }
        @media (max-width: 767px) {
          p:last-child {
            margin-bottom: 0px;
          }
          p:last-child {
            margin-bottom: 0px;
          }
        }
        a:active,
        .alink:active {
          color: rgb(255, 85, 1);
          text-decoration: underline;
        }
        .action.primary,
        a.action.primary,
        .products-grid.wishlist .product-item .box-tocart .tocart,
        .order-review-form .action.primary,
        .bundle-actions .action.primary.customize,
        .bundle-options-container
          .block-bundle-summary
          .box-tocart
          .action.primary,
        .box-tocart .action.tocart,
        .cart-summary .checkout-methods-items .action.primary.checkout,
        .block-minicart .block-content > .actions > .primary .action.primary,
        .methods-shipping .actions-toolbar .action.primary,
        .block-authentication .action.action-register,
        .block-authentication .action.action-login,
        .checkout-payment-method
          .payment-method-content
          > .actions-toolbar
          > .primary
          .action.primary,
        .form-address-edit .actions-toolbar .action.primary,
        .box-tocart .action.instant-purchase,
        .multicheckout .action.primary,
        .darkbtn > a,
        button.action-primary {
          display: inline-block;
          color: rgb(255, 255, 255);
          font-size: 12px;
          font-weight: 500;
          line-height: 1.5;
          text-transform: uppercase;
          letter-spacing: 3px;
          border: 1px solid rgb(31, 30, 30);
          padding: 16px 35px 14px;
          text-decoration: none;
          cursor: pointer;
          background: rgb(31, 30, 30);
          border-radius: 3px;
          box-shadow: none;
          transition: 0.2s;
          text-align: center;
        }
        .action.primary:hover,
        .action.primary:active,
        .action.primary:focus,
        .order-review-form .action.primary:hover,
        .bundle-actions .action.primary.customize:hover,
        .bundle-options-container
          .block-bundle-summary
          .box-tocart
          .action.primary:hover,
        .box-tocart .action.tocart:hover,
        .cart-summary
          .checkout-methods-items:hover
          .action.primary.checkout:hover,
        .block-minicart
          .block-content
          > .actions
          > .primary
          .action.primary:hover,
        .methods-shipping .actions-toolbar .action.primary:hover,
        .block-authentication .action.action-register:hover,
        .block-authentication .action.action-login:hover,
        .checkout-payment-method
          .payment-method-content
          > .actions-toolbar
          > .primary
          .action.primary:hover,
        .form-address-edit .actions-toolbar .action.primary:hover,
        .box-tocart .action.instant-purchase:hover,
        .multicheckout .action.primary:hover,
        .darkbtn > a:hover,
        button.action-primary:hover {
          background: rgb(248, 246, 243);
          color: rgb(31, 30, 30);
          border-color: rgb(183, 183, 183);
        }
        .hp-trends__callout .primary.darkbtn a {
          white-space: nowrap;
          letter-spacing: 2px;
          padding-left: 20px;
          padding-right: 20px;
        }
        @media (max-width: 767px) {
          .darkbtn a {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
