import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '../Layouts/MainLayout.jsx';
import App from '../Resolutions/Resolutions.jsx';
import About from '../partials/about.jsx';
import ResolutionDetail from '../Resolutions/ResolutionDetail.jsx';
FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<App />)
    })
  }
});

FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {
      content: (<About />)
    })
  }
});

FlowRouter.route('/resolutions/:id', {
  action(params) {
    mount(MainLayout, {
      content: (<ResolutionDetail id={params.id}/>)
    })
  }
});
