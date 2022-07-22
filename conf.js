jsproxy_config({
  
  ver: '100',

  static_boost: {
    enable: true,
    ver: 62
  },

  node_map: {
   'mysite': {
      label: 'Cadence',
      lines: {
        [location.host]: 1,
      }
    }
  },

 
  node_default: 'mysite',

  
  node_acc: 'cfworker',

  
  assets_cdn: 'assets/',

  index_path: 'index_v3.html',

  direct_host_list: 'cors_v1.txt',

  
  inject_html: '<!-- custom html -->',

 
  url_handler: {
    'http://haha.com/': {
      content: 'Hello World'
    },
  }
})
