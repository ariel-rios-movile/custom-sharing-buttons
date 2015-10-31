var window_props = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600';

var share_fb = function(config) {
  window.fbAsyncInit = function(){
    FB.init({
      appId: config.fb_app_id,
      status: true,
      cookie: true,
      xfbml: true
    });
  };

  (function() {
    var e = document.createElement('script');
    e.async = true;
    e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
    document.getElementById(config.fb_id).appendChild(e);
  }());

  $('#' + config.fb_id).click(function(e){
    e.preventDefault();
    FB.ui({
      method: 'share',
      link: config.url,
      href: config.url,
      picture: config.image_url,
      caption: config.caption,
      description: config.description,
      message: '',
    });
  });
};

var share_tw = function(config) {
  $('#' + config.tw_id).click(function(){
      var url = 'https://twitter.com/intent/tweet?text='+config.caption+'&url='+encodeURIComponent(config.url);
      window.open(url, '', window_props);
  });
}

var share_gp = function(config) {
  $('#'+config.gp_id).click(function(){
    var url = 'https://plus.google.com/share?url='+encodeURIComponent(config.url);
    window.open(url, '', window_props);
    return false;
  });
}

var share_pin = function(config) {
  $('#' + config.pin_id).click(function(){
    var url = 'http://pinterest.com/pin/create/link/?url='+encodeURIComponent(config.url)+'&media='+encodeURIComponent(config.image_url)+'&description='+config.caption;
    window.open(url, '', window_props);
    return false;
  });
}

share = function(config) {
  share_fb(config);
  share_tw(config);
  share_gp(config);
  share_pin(config);
}
