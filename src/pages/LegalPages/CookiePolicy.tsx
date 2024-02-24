import React from "react";
import { Navbar, Footer } from "../../components";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

type Props = {};

const CookiePolicy = (props: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="legalPages container-fluid">
        <div className="secContainer">
          <div className="tabs_list">
            <ul>
              <li>
                <Link to="item-1" smooth={true} duration={400}>
                  {t("interpretationAndDefinitions")}
                </Link>
              </li>
              <li>
                <Link to="item-2" smooth={true} duration={400}>
                  {t("typeOfCookiesWeUse")}
                </Link>
              </li>
              <li>
                <Link to="item-3" smooth={true} duration={400}>
                  {t("yourChoicesRegardingCookies")}
                </Link>
              </li>
              <li>
                <Link to="item-4" smooth={true} duration={400}>
                  {t("moreInformationAboutCookies")}
                </Link>
              </li>
              <li>
                <Link to="item-5" smooth={true} duration={400}>
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="tabs_content">
            <div className="tab_head">
              <h1>{t("cookiesPolicy")}</h1>
            </div>
            <div className="tab_body">
              <p>{t("lastUpdate")}</p>
              <p>
                {t("thisCookiesPolicyExplains")}{" "}
                <a
                  href="https://www.freeprivacypolicy.com/free-cookies-policy-generator/"
                  target="_blank"
                >
                  {t("freeCookiesPolicyGenerator")}
                </a>
                .
              </p>
              <p>
                {t("cookiesDoNotTypicallyContainAnyInformation")}
              </p>
              <p id="item-1">
                {t("weDoNotStoreSensitivePersonalInformation")}
              </p>
              <h2>{t("interpretationAndDefinitions")}</h2>
              <h3>{t("interpretation")}</h3>
              <p>
                {t("theWordsOfWhichTheInitialLetter")}
              </p>
              <h3>{t("definitions")}</h3>
              <p>{t("forThePurposesOfThisCookiesPolicy")}:</p>
              <ul>
                <li>
                  <strong>{t("company")}</strong> {t("referredToAsEither")}
                </li>
                <li>
                  <strong>{t("cookies")}</strong> {t("meansSmallFilesThatArePlaced")}
                </li>
                <li>
                  <strong>{t("website")}</strong> {t("refersToRent2Go")}{" "}
                  <a
                    href="https://rentogo.com.tr/"
                    rel="external nofollow noopener"
                    target="_blank"
                  >
                    https://rentogo.com.tr/
                  </a>
                </li>
                <li id="item-2">
                  <strong>{t("you")}</strong> {t("meansTheIndividualAccessingOrUsing")}
                </li>
              </ul>
              <h2>{t("theUseOfTheCookies")}</h2>
              <h3>{t("typeOfCookiesWeUse")}</h3>
              <p>
                {t("cookiesCanBePersistentOrSessionCookies")}
              </p>
              <p>
                {t("weUseBothSessionAndPersistentCookies")}:
              </p>
              <ul>
                <li>
                  <p>
                    <strong>{t("necessaryEssentialCookies")}</strong>
                  </p>
                  <p>{t("typeSessionCookies")}</p>
                  <p>{t("administeredByUs")}</p>
                  <p>
                    {t("purposeTheseCookies")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("functionalCookies")}</strong>
                  </p>
                  <p>{t("typePersistentCookies")}</p>
                  <p id="item-3">{t("administeredByUs")}</p>
                  <p>
                    {t("purposeTheseCookiesAllowUsTo")}
                  </p>
                </li>
              </ul>
              <h3>Your Choices Regarding Cookies</h3>
              <p>
                If You prefer to avoid the use of Cookies on the Website, first
                You must disable the use of Cookies in your browser and then
                delete the Cookies saved in your browser associated with this
                website. You may use this option for preventing the use of
                Cookies at any time.
              </p>
              <p>
                If You do not accept Our Cookies, You may experience some
                inconvenience in your use of the Website and some features may
                not function properly.
              </p>
              <p>
                If You'd like to delete Cookies or instruct your web browser to
                delete or refuse Cookies, please visit the help pages of your
                web browser.
              </p>
              <ul>
                <li>
                  <p>
                    For the Chrome web browser, please visit this page from
                    Google:{" "}
                    <Link
                      to="https://support.google.com/accounts/answer/32050"
                      rel="external nofollow noopener"
                      target="_blank"
                    >
                      https://support.google.com/accounts/answer/32050
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    For the Internet Explorer web browser, please visit this
                    page from Microsoft:{" "}
                    <Link
                      to="http://support.microsoft.com/kb/278835"
                      rel="external nofollow noopener"
                      target="_blank"
                    >
                      http://support.microsoft.com/kb/278835
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    For the Firefox web browser, please visit this page from
                    Mozilla:{" "}
                    <Link
                      to="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                      rel="external nofollow noopener"
                      target="_blank"
                    >
                      https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    For the Safari web browser, please visit this page from
                    Apple:{" "}
                    <Link
                      to="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                      rel="external nofollow noopener"
                      target="_blank"
                    >
                      https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                    </Link>
                  </p>
                </li>
              </ul>
              <p id="item-4">
                For any other web browser, please visit your web browser's
                official web pages.
              </p>
              <h2>More Information about Cookies</h2>
              <p id="item-5">
                You can learn more about cookies:{" "}
                <Link
                  to="https://www.freeprivacypolicy.com/blog/cookies/"
                  target="_blank"
                >
                  Cookies: What Do They Do?
                </Link>
                .
              </p>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Cookies Policy, You can
                contact us:
              </p>
              <ul>
                <li>
                  By visiting this page on our website:{" "}
                  <Link
                    to="https://rentogo.com.tr/contact"
                    rel="external nofollow noopener"
                    target="_blank"
                  >
                    https://rentogo.com.tr/contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy;
