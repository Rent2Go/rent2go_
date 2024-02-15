import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { useDispatch, useSelector } from "react-redux";
import { setPageSettings } from "./store/slices/settingsSlice";

import Router from "./routes/Router";
import PrivateRoute from "./utils/PrivateRoute";

import OverlayLoader from "./components/OverlayLoader/OverlayLoader";
import { ScrollToTop } from "./components";

import SettingsService from "./services/SettingsService";

import "./App.css";

function App() {
  const settings = useSelector((state: any) => state.settings.setting);
  const dispatch = useDispatch();
  const handleSetPageSettings = async () => {
    const response = await SettingsService.getById(1);
    dispatch(setPageSettings(response.data.data));
  };

  useEffect(() => {
    handleSetPageSettings();
  }, []);

  if (!settings) return <div>Şeyhmus will be modify here .. :)</div>;

  return (
    <>
      <Helmet>
        <title>{settings.title}</title>
        <link rel="icon" href={settings.logo} />
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
