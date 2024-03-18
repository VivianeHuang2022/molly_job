import React from "react";
import "src/pages/PaymentPage.css";

const PaymentPage = () => {
  //中英文切换
  //调用支付接口，请求生成支付二维码
  //并跳转到二维码页面进行支付

  return (
    <div className="cards">
      {/* Super Pro Plan Card */}
      <article className="plan card">
        <div className="inner">
          <span className="pricing">
            ¥299 <small>/ unlimited</small>
          </span>
          <h2 className="title">Super Pro</h2>
          <p className="info">
            Tailored for ambitious students applying to multiple schools,
            offering unlimited document generations for crafting the perfect
            application for each program without any template restrictions.{" "}
          </p>
          <ul className="features">
            <li>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                <strong>Unlimited</strong> uses
              </span>
            </li>
            <li>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                <strong>All</strong> documents available
              </span>
            </li>
            <li>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                <strong>No</strong> template restrictions
              </span>
            </li>
          </ul>
          <button className="button">Choose plan</button>
        </div>
      </article>

      {/* Pro Plan Card */}
      <article className="plan card">
        <div className="inner">
          <span className="pricing">
            ¥99 <small>/ 7 uses</small>
          </span>
          <h2 className="title">Pro</h2>
          <p className="info">
            Designed for applicants targeting a select number of programs,
            providing 7 document generations to ensure each application is
            customized and compelling, with full access to all templates.{" "}
          </p>
          <ul className="features">
            <li>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                <strong>7</strong> generation opportunities
              </span>
            </li>
            <li>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                <strong>All</strong> documents available
              </span>
            </li>
            <li>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                <strong>No</strong> template restrictions
              </span>
            </li>
          </ul>
          <button className="button">Choose plan</button>
        </div>
      </article>

      {/* Standard Plan Card */}
      <article className="plan card">
        <div className="inner">
          <span className="pricing">
            ¥49 <small>/ 2 uses</small>
          </span>
          <h2 className="title">Standard</h2>
          <p className="info">
            {" "}
            Ideal for individuals focusing on one or two school applications,
            with 2 document generations and access to over 20 member templates
            to create standout applications.
          </p>
          <p>&nbsp;</p>
          <ul className="features">
            <li>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                <strong>2</strong> generation opportunities
              </span>
            </li>
            <li>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364
                  -6.364 1.414-1.414z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                <strong>All</strong> documents available
              </span>
            </li>
            <li>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                <strong>Over 20 </strong>member templates
              </span>
            </li>
          </ul>
          <button className="button">Choose plan</button>
        </div>
      </article>
    </div>
  );
};

export default PaymentPage;
