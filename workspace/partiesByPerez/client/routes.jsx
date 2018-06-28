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
    mount(App, {
      content: <Index />
    });
  }
});

FlowRouter.route("/Gallery", {
  name: "Gallery",
  action() {
    mount(App, {
      content: <Gallery />
    });
  }
});

FlowRouter.route("/Pricing", {
  name: "Pricing",
  action() {
    mount(App, {
      content: <Pricing />
    });
  }
});
