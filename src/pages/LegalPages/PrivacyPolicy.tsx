import React from "react";
import { Navbar, Footer } from "../../components";
import "./legalPage.css";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

type Props = {};

const PrivacyPolicy = (props: Props) => {
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
                  {t("collectiongAndUsingYourPersonalData")}
                </Link>
              </li>
              <li>
                <Link to="item-3" smooth={true} duration={400}>
                  {t("childrensPrivacy")}
                </Link>
              </li>
              <li>
                <Link to="item-4" smooth={true} duration={400}>
                  {t("linksToOtherWebsites")}
                </Link>
              </li>
              <li>
                <Link to="item-5" smooth={true} duration={400}>
                  {t("changesToThisPrivacyPolicy")}
                </Link>
              </li>
              <li>
                <Link to="item-6" smooth={true} duration={400}>
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="tabs_content">
            <div className="tab_head">
              <h1>{t("privacyPolicy")}</h1>
            </div>
            <div className="tab_body">
              <p>{t("lastUpdate")}</p>
              <p>
                {t("thisPrivacyPolicyDescribesOurPolicies")}
              </p>
              <p id="item-1">
                {t("weUseYourPersonalDataToProvide")}{" "}
                <Link
                  to="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
                  target="_blank"
                >
                  {t("freePrivacyPolicyGenerator")}
                </Link>
                .
              </p>
              <h2>{t("interpretationAndDefinitions")}</h2>
              <h3>{t("interpretation")}</h3>
              <p>
                {t("theWordsOfWhichTheInitialLetter")}
              </p>
              <h3>{t("definitions")}</h3>
              <p>{t("forThePurposesOfThisPrivacyPolicy")}:</p>
              <ul>
                <li>
                  <p>
                    <strong>{t("account")}</strong> {t("meansAUniqueAccountCreated")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("affiliate")}</strong> {t("meansAnEntityThatControls")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("company")}</strong> {t("referredToAsEither")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("cookies")}</strong> {t("areSmallFilesThatArePlaced")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("country")}</strong> {t("refersToTurkey")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("device")}</strong> {t("meansAnyDevice")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("personalData")}</strong> {t("isAnyInformationThatRelates")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("service")}</strong> {t("refersToTheWebsite")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("serviceProvider")}</strong> {t("meansAnyNaturalOrLegalPerson")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("usageData")}</strong> {t("refersToDataCollected")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("website")}</strong> {t("refersToRent2Go")}{" "}
                    <Link
                      to="https://rentogo.com.tr/"
                      rel="external nofollow noopener"
                      target="_blank"
                    >
                      https://rentogo.com.tr/
                    </Link>
                  </p>
                </li>
                <li>
                  <p id="item-2">
                    <strong>{t("you")}</strong> {t("meansTheIndividualAccessingOrUsing")}
                  </p>
                </li>
              </ul>
              <h2>{t("collectingAndUsingYourPersonalData")}</h2>
              <h3>{t("typesOfDataCollected")}</h3>
              <h4>{t("personalData")}</h4>
              <p>
                {t("whileUsingOurService")}:
              </p>
              <ul>
                <li>
                  <p>{t("emailAddress")}</p>
                </li>
                <li>
                  <p>{t("firstNameAndLastName")}</p>
                </li>
                <li>
                  <p>{t("phoneNumber")}</p>
                </li>
                <li>
                  <p>{t("usageData")}</p>
                </li>
              </ul>
              <h4>{t("usageData")}</h4>
              <p>
                {t("usageDataIsCollected")}
              </p>
              <p>
                {t("usageDataMayIncludeInformation")}
              </p>
              <p>
                {t("whenYouAccessTheService")}
              </p>
              <p>
                {t("weMayAlsoCollectInformation")}
              </p>
              <h4>{t("trackingTechnologiesandCookies")}</h4>
              <p>
                {t("weUseCookiesAndSimilarTracking")}:
              </p>
              <ul>
                <li>
                  <strong>{t("cookiesOrBrowserCookies")}</strong> {t("aCookieIsASmallFilePlaced")}
                </li>
                <li>
                  <strong>{t("webBeacons")}</strong> {t("certainSectionOfOurService")}
                </li>
              </ul>
              <p>
                {t("cookiesCanBePersistenetOrSession")}{" "}
                <Link
                  to="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking"
                  target="_blank"
                >
                  {t("freePrivacyPolicyWebsite")}
                </Link>{" "}
                {t("acticle")}
              </p>
              <p>
                {t("weUseBothSessionAndPersistent")}:
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
                    <strong>{t("cookiesPolicyNoticeAcceptanceCookies")}</strong>
                  </p>
                  <p>{t("typePersistentCookies")}</p>
                  <p>{t("administeredByUs")}</p>
                  <p>
                    {t("purposeTheseCookiesIdentify")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("functionalityCookies")}</strong>
                  </p>
                  <p>{t("typePersistentCookies")}</p>
                  <p>{t("administeredByUs")}</p>
                  <p>
                    {t("purposeTheseCookiesAllowUsTo")}
                  </p>
                </li>
              </ul>
              <p>
                {t("forMoreInformationAboutTheCookies")}
              </p>
              <h3>{t("useOfYourPersonalData")}</h3>
              <p>
                {t("theCompanyMayUsePersonalData")}:
              </p>
              <ul>
                <li>
                  <p>
                    <strong>{t("toProvideAndMaintainOurService")}</strong>,
                    {t("includingToMonitor")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("toManageYourAccount")}:</strong> {t("toManageYourRegistrationAsAUser")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("forThePerformanceOfAContract")}</strong> {t("theDevelopmentCompliance")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("toContactYou")}</strong> {t("toContactYouByEmailTelephoneCalls")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("toProvideYou")}</strong> {t("withNewsSpecialOffers")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("toManageYourRequest")}</strong> {t("toAttendAndManageYourRequestToUs")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("forBusinessTransfer")}</strong> {t("weMayUseYourInformationToEvaluate")}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>{t("forOtherPurposes")}</strong> {t("weMayUseYourInformation")}
                  </p>
                </li>
              </ul>
              <p>
                {t("weMayShareYourPersonalInformation")}
              </p>
              <ul>
                <li>
                  <strong>{t("withServiceProviders")}</strong> {t("weMayShareYourPersonalInformationWithService")}
                </li>
                <li>
                  <strong>{t("forBusinessTransfer")}</strong> {t("weMayShareOrTransferYourPersonalInformation")}
                </li>
                <li>
                  <strong>{t("withAffiliates")}</strong> {t("weMayShareYourInformationWithOurAffiliates")}
                </li>
                <li>
                  <strong>{t("withBusinessPartners")}</strong> {t("weMayShareYourInformationWithOurBusiness")}
                </li>
                <li>
                  <strong>{t("withOtherUsers")}</strong> {t("whenYouSharePersonalInformation")}
                </li>
                <li>
                  <strong>{t("withYourConsent")}</strong> {t("weMayDiscloseYourPersonal")}
                </li>
              </ul>
              <h3>{t("retentionOfYourPersonalData")}</h3>
              <p>
                {t("theCompanyWillRetainYourPersonalData")}
              </p>
              <p>
                {t("theCompanyWillAlsoRetainUsageData")}
              </p>
              <h3>{t("transferOfYourPersonalData")}</h3>
              <p>
                {t("yourInformationIncludingPersonalData")}
              </p>
              <p>
                {t("yourConsentToThisPrivacyPolicyFollowed")}
              </p>
              <p>
                {t("theCompanyWillTakeAllSteps")}
              </p>
              <h3>{t("deleteYourPersonalData")}</h3>
              <p>
                {t("youHaveTheRightToDeleteOrRequest")}
              </p>
              <p>
                {t("ourServiceMayGiveYouTheAbility")}
              </p>
              <p>
                {t("youMayUpdateAmendOrDelete")}
              </p>
              <p>
                {t("pleaseNoteHoweverThatWeMay")}
              </p>
              <h3>{t("disclosureOfYourPersonalData")}</h3>
              <h4>{t("businessTransaction")}</h4>
              <p>
                {t("ifTheCompanyIsInvolvedInAMerger")}
              </p>
              <h4>{t("lawEnforcement")}</h4>
              <p>
                {t("underCertainCircumstances")}
              </p>
              <h4>{t("otherLegalRequirements")}</h4>
              <p>
                {t("theCompanyMayDiscloseYourPersonalData")}
              </p>
              <ul>
                <li>{t("complyWithALegalObligation")}</li>
                <li>
                  {t("protectAndDefendTheRightsOrProperty")}
                </li>
                <li>
                  {t("preventOrInvestigatePossible")}
                </li>
                <li>
                  {t("protectThePersonalSafety")}
                </li>
                <li>{t("protectAgainstLegalLiability")}</li>
              </ul>
              <h3>{t("securityOfYourPersonalData")}</h3>
              <p id="item-3">
                {t("theSecurityOfYourPersonalData")}
              </p>
              <h2>{t("childrensPrivacy")}</h2>
              <p>
                {t("ourServiceDoesNotAddressAnyoneUnder")}
              </p>
              <p id="item-4">
                {t("ifWeNeedToRelyOnConsentAsALegalBasis")}
              </p>
              <h2>{t("linksToOtherWebsites")}</h2>
              <p>
                {t("ourServiceMayContainLinksToOtherWebsite")}
              </p>
              <p id="item-5">
                {t("weHaveNoControlOver")}
              </p>
              <h2>{t("changesToThisPrivacyPolicy")}</h2>
              <p>
                {t("weMayUpdateOurPrivacyPolicy")}
              </p>
              <p>
                {t("weWillLetYouKnowViaEmailAnd")}
              </p>
              <p id="item-6">
                {t("youAreAdvisedToReviewThisPrivacyPolicy")}
              </p>
              <h2>{t("contactUs")}</h2>
              <p>
                {t("ifYouHaveAnyQuestions")}
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

export default PrivacyPolicy;
