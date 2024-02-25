import React from 'react'
import './Disclaimer.css'
import { useTranslation } from 'react-i18next'

const Disclaimer = () => {
  const { t } = useTranslation();

  return (
    <div className='disclaimer'>
        <h2 className='mainHead1'>{t("disclaimer")}</h2>
        <div className='disclaimerPage'>
            <p id='par1'>{t("lastUpdatedFebruary14")}</p>
            <h3>{t("interpretationAndDefinition")}</h3>
            <h5>{t("interpretation")}</h5>
            <p id='par1'>{t("theWordsOfWhichTheInitialLetter")}</p>
            <h5>{t("definitions")}</h5>
            <p id='par1'>{t("forThePurposesOfThisDisclaimer")}</p>
            <ul>
            <li><strong>{t("company")}</strong> {t("referredToAsEitherTheCompany")}</li>
            <li><strong>{t("service")}</strong> {t("refersToTheWebsite")}</li>
            <li><strong>{t("you")}</strong> {t("meansTheIndividualAccessingOrUsing")}</li>
            <li><strong>{t("website")}</strong> {t("refersToRent2Go")} <a href="https://rentogo.com.tr/" rel="external nofollow noopener" target="_blank">https://rentogo.com.tr/</a></li>
            </ul>
            <h3>{t("disclaimer")}</h3>
            <p id='par1'>{t("theInformationContained")}</p>
            <p id='par1'>{t("thecompanyAssumes")}</p>
            <p id='par1'>{t("inNoEventShallTheCompany")} <a href="https://www.freeprivacypolicy.com/free-disclaimer-generator/" target="_blank">{t("freeDisclaimerGenerator")}</a>.</p>
            <p id='par1'>{t("theCompanyDoesNotWarrant")}</p>
            <h2>{t("externalLinksDisclaimer")}</h2>
            <p id='par1'>{t("theServiceMayContainLinksToExternal")}</p>
            <p id='par1'>{t("pleaseNoteThatTheCompanyDoesNotGuarantee")}</p>
            <h3>{t("errorsAndOmissionsDisclaimer")}</h3>
            <p id='par1'>{t("theInformationGivenByTheService")}</p>
            <p id='par1'>{t("theCompanyIsNotResponsible")}</p>
            <h3>{t("fairUseDisclaimer")}</h3>
            <p id='par1'>{t("theCompanyMayUseCopyrighted")}</p>
            <p id='par1'>{t("theCompanyBelievesThisConstitutes")}</p>
            <p id='par1'>{t("ifYouWishToUseCopyrighted")}</p>
            <h3>{t("viewsExpressedDisclaimer")}</h3>
            <p id='par1'>{t("theServiceMayContainViews")}</p>
            <p id='par1'>{t("commentsPublishedByUsers")}</p>
            <h3>{t("noResponsibilityDisclaimer")}</h3>
            <p id='par1'>{t("theInformationOnTheService")}</p>
            <p id='par1'>{t("inNoEventShallTheCompanyOrIts")}</p>
            <h3>{t("useAtYourOwnRiskDisclaimer")}</h3>
            <p id='par1'>{t("allInformationInTheService")}</p>
            <p id='par1'>{t("theCompanyWillNotBeLiableToYou")}</p>
            <h3>{t("contactUs")}</h3>
            <p id='par1'>{t("ifYouHaveAnyQuestionsAboutThisDisclaimer")}</p>
            <ul>
            <li>{t("byVisitingThisPageOnOurWebsite")}: <a href="https://rentogo.com.tr/contact" rel="external nofollow noopener" target="_blank">https://rentogo.com.tr/contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Disclaimer