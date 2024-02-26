import React from "react";
import { Footer, Navbar } from "../../components";
import "./legalPage.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = {};

const TermsOfUse = (props: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="legalPages container-fluid">
        <div className="secContainer">
          <div className="tabs_list">
            <ul>
              <li>
                <a href="#item-1">{t("interpretationAndDefinitions")}</a>
              </li>
              <li>
                <a href="#item-3">{t("linksToOtherWebsites")}</a>
              </li>
              <li>
                <a href="#item-4">{t("asIsAndAsAvailableDisclaimer")}</a>
              </li>
              <li>
                <a href="#item-5">{t("governingLaw")}</a>
              </li>
              <li>
                <a href="#item-2">{t("severabilityAndWaiver")}</a>
              </li>
              <li>
                <a href="#item-6">{t("changesToTheseTermsAndConditions")}</a>
              </li>
              <li>
                <a href="#item-7">{t("contactUs")}</a>
              </li>
            </ul>
          </div>
          <div className="tabs_content">
            <div className="tab_head">
              <h1>{t("termsConditions")}</h1>
            </div>
            <div className="tab_body">
              <p>{t("lastUpdated")}</p>
              <p id="item-1">
                {t("pleaseReadTheseTerms")}
              </p>
              <h2>{t("interpretationAndDefinitions")}</h2>
              <h3>{t("interpretation")}</h3>
              <p>
                {t("theWordsOfWhich")}
              </p>
              <h3>{t("definitions")}</h3>
              <p>{t("forThePurposesOfThese")}</p>
              <ul>
                <li>
                  <p>
                    <strong>{t("affiliate")}</strong> {t("meansAnEntityThatControls")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("country")}</strong> {t("refersToTurkey")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("company")}</strong> {t("referredToAsEither")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("device")}</strong> {t("meansAnyDevice")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("service")}</strong> {t("refersToTheWebsite")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("termsAndConditions")}</strong> {t("alsoReferredAsTerms")}{" "}
                    <Link
                      to="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/"
                      target="_blank"
                    >
                      {t("freeTermsAndConditionsGenerator")}
                    </Link>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("thirdPartySocialMediaService")}</strong> {t("meansAnyServicesOrContent")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("website")}</strong> {t("refersToRent2Go")}{" "}
                    <Link
                      to="https://rentogo.com.tr"
                      rel="external nofollow noopener"
                      target="_blank"
                    >
                      https://rentogo.com.tr
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("you")}</strong> {t("meansTheIndividualAccessingOrUsing")}
                  </p>
                </li>
              </ul>
              <h2>{t("acknowledgment")}</h2>
              <p>
                {t("theseAreTheTermsAndConditions")}
              </p>
              <p>
                {t("yourAccessToAndUseOfTheService")}
              </p>
              <p>
                {t("byAccessingOrUsingTheService")}
              </p>
              <p>
                {t("youRepresentThatYouOver")}
              </p>
              <p id="item-3">
                {t("yourAccessToAndUseOfTheServiceIsAlso")}
              </p>
              <h2>{t("linksToOtherWebsites")}</h2>
              <p>
                {t("ourServiceMayContainLinks")}
              </p>
              <p>
                {t("theCompanyHasNoControlOver")}
              </p>
              <p>
                {t("weStronglyAdviseYouToRead")}
              </p>
              <h2>{t("termination")}</h2>
              <p>
                {t("weMayTerminateOrSuspend")}
              </p>
              <p>
                {t("uponTermination")}
              </p>
              <h2>{t("limitationOfLiability")}</h2>
              <p>
                {t("notwithstandingAndDamages")}
              </p>
              <p>
                {t("toTheMaximumExtentPermittedByApplicable")}
              </p>
              <p id="item-4">
                {t("someStatesDoNotAllow")}
              </p>
              <h2>{t("asIsAndAsAvailableDisclaimer")}</h2>
              <p>
                {t("theServiceIsProvideToYou")}
              </p>
              <p>
                {t("withoutLimitingTheForegoing")}
              </p>
              <p id="item-5">
                {t("someJurisdictionsDonotAllow")}
              </p>
              <h2>{t("governingLaw")}</h2>
              <p>
                {t("theLawsOfTheCountry")}
              </p>
              <h2>{t("disputesResolution")}</h2>
              <p id="item-2">
                {t("ifYouHaveAnyConcernOrDispute")}
              </p>
              <h2>{t("severabilityAndWaiver")}</h2>
              <h3>{t("severability")}</h3>
              <p>
                {t("ifAnyProvisionOfTheseTerms")}
              </p>
              <h3>{t("waiver")}</h3>
              <p>
                {t("exceptAsrovidedHerein")}
              </p>
              <h2>{t("translationInterpretation")}</h2>
              <p id="item-6">
                {t("thereTermsAndConditions")}
              </p>
              <h2>{t("changesToTheseTermsAndConditions")}</h2>
              <p>
                {t("weReserveTheRight")}
              </p>
              <p id="item-7">
                {t("byContinuingToAccessOrUseOurService")}
              </p>
              <h2>{t("contactUs")}</h2>
              <p>
                {t("ifYouHaveAnyQuestionsAbout")}
              </p>
              <ul>
                <li>
                {t("byVisitingThisPageOnOurWebsite")}:{" "}
                  <a
                    href="https://rentogo.com.tr/contact"
                    rel="external nofollow noopener"
                    target="_blank"
                  >
                    https://rentogo.com.tr/contact
                  </a>
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

export default TermsOfUse;
