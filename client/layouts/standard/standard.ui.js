'use strict';

Admin.layouts.standard.ui.container = {
  controller: function() {
    return new Admin.layouts.standard.controller({
      init: true
    });
  },
  view: function() {
    let method = Admin.route.method === 'show' ? 'index' : Admin.route.method;
    let stageComponent = Admin.components[Admin.route.section][Admin.route.subsection][method].ui.container ;

    return [
      m.component(Admin.components.nav.secondary.ui.container),
      m('section.stage', [
        m('.contain', [
          m.component(stageComponent),
        ]),
        m.component(Admin.layouts.standard.ui.drawer)
      ])
    ];
  }
};

Admin.layouts.standard.ui.drawer = {
  controller: function() {
    return new Admin.layouts.standard.controller();
  },
  view: function() {
    let drawerComponent = (Admin.route.method === 'show') ? m.component(Admin.components[Admin.route.section][Admin.route.subsection][Admin.route.method].ui.container) : null;

    return m('aside.drawer' + (Admin.layouts.standard.state.hasDrawer() ? '.is-active' : ''), [
      m('.relative.fill-width.fill-height', [
        m('.absolute.top.right.z-top.padding-right-xsmall.padding-top-small', [
          m('a.icon-x-black.icon--small.icon--center', {
            href: '/' + Admin.route.section + '/' + Admin.route.subsection,
            config: m.route
          }, 'Close')
        ]),
        m('.row', [
          drawerComponent
        ])
      ])
    ]);
  }
};
