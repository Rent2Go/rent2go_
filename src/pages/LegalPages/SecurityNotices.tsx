import React from "react";
import { Footer, Navbar } from "../../components";
import { Link } from "react-scroll";
import "./legal.css";
import { useTranslation } from "react-i18next";

type Props = {};

const SecurityNotices = (props: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="legal container">
        <div className="secContainer shadow-rounded-box">
          <div className="headingDiv">
            <h2>{t("securityNotice")}</h2>
            <img src="/assets/img/example.png" alt="example-text"/>
          </div>
          <div className="contentContainer nonNavbar">
            <div className="letterContainer ">
              <p>
                <small>{t("lastUpdatedFebruary")}</small>
              </p>

              <h2 id="interpretation">
                {t("importantInformationForRentogoUsers")}
              </h2>

              <p>
                {t("dearRentogoUsers")}
              </p>

              <p>
                <strong>{t("bewareOfSuspiciousEmails")}</strong> {t("beCautiousOfEmailsRequesting")}
              </p>

              <p>
                <strong>{t("useStrongPassword")}</strong> {t("ensureThatYouUseUnique")}
              </p>

              <p>
                <strong>{t("verifyWebsiteUrl")}</strong> {t("doubleCheckTheUrl")}
              </p>

              <p>
                <strong>{t("keepYourDevicesSecure")}</strong> {t("regularlyUpdateYourDevices")}
              </p>

              <p>
                {t("atRentogoWeAreCommitted")}
              </p>

              <h2 id="contact">{t("contactUs")}</h2>
              <p>
                {t("ifYouHaveAnyQuestion")}
              </p>

              <h4>{t("byVisitingThisPageOnOurWebsite")}: </h4>
              <Link
                to="/contact"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://rentogo.com.tr/contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SecurityNotices;
