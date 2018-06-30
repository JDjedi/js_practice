import React from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import { mount } from "react-mounter";

import App from "../imports/client/App";
import Index from "../imports/client/Index";
import Gallery from "../imports/client/Gallery";
import Pricing from "../imports/client/Pricing";

FlowRouter.route("/", {
  name: "Home",
  action() {
    window.scrollTo(0, 0);
    mount(App, {
      content: <Index />
    });
  }
});

FlowRouter.route("/Gallery", {
  name: "Gallery",
  action() {
    window.scrollTo(0, 0);
    mount(App, {
      content: <Gallery />
    });
  }
});

FlowRouter.route("/Pricing", {
  name: "Pricing",
  action() {
    window.scrollTo(0, 0);
    mount(App, {
      content: <Pricing />
    });
  }
});
