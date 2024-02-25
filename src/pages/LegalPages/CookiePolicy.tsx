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
              <h3>{t("youChoicesRegardingCookies")}</h3>
              <p>
                {t("ifYouPreferToAvoid")}
              </p>
              <p>
                {t("ifYouDoNotAcceptOurCookies")}
              </p>
              <p>
                {t("ifYouWouldLikeToDeleteCookies")}
              </p>
              <ul>
                <li>
                  <p>
                    {t("forTheChrome")}:{" "}
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
                    {t("forTheInternetExplorer")}:{" "}
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
                    {t("forTheFirefox")}:{" "}
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
                    {t("forTheSafari")}:{" "}
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
                {t("forAnyOtherWebBrowser")}
              </p>
              <h2>{t("moreInformationAboutCookies")}</h2>
              <p id="item-5">
                {t("youCanLearnMoreAboutCookies")}:{" "}
                <Link
                  to="https://www.freeprivacypolicy.com/blog/cookies/"
                  target="_blank"
                >
                  {t("cookiesWhatDoTheyDo")}?
                </Link>
                .
              </p>
              <h2>{t("contactUs")}</h2>
              <p>
                {t("ifYouHaveAnyQuestions")}:
              </p>
              <ul>
                <li>
                  {t("byVisitingThisPageOnOurWebsite")}:{" "}
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
