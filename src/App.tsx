import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setPageSettings } from "./store/slices/settingsSlice";
import SettingsService from "./services/SettingsService";


import PageNotFound from "./pages/NotFoundPage/PageNotFound";
import OverlayLoaderLoad from "./components/OverlayLoader/OverlayLoaderLoad";
import { toast } from "react-toastify";
import { ScrollToTop } from "./components";
import OverlayLoader from "./components/OverlayLoader/OverlayLoader";
import Router from "./routes/Router";

import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  const settings = useSelector((state: any) => state.settings.setting);
  const dispatch = useDispatch();

  const handleSetPageSettings = async() => {
  const response =     await SettingsService.getById(1)
  .then((res)=> dispatch(setPageSettings(res.data.data)))
  .catch((err) => console.error(err.response.data.message))
   
  };

  useEffect(() => {
    handleSetPageSettings();
  }, []);


  if (!settings) return <OverlayLoaderLoad />;
  return (
    <>
      <Helmet>
        <title>{settings.title}</title>
        <link rel="icon" href={settings.tabLogo} />
      </Helmet>
      <main>
        <ScrollToTop />
        <OverlayLoader />
        <Router />
      </main>
    </>
  );
}

export default App;
