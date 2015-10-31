Custom Sharing Buttons
======================

Just an artisanal configurable sharing buttons.

## Usage example

```javascript
$(function(){
  share({
    url: window.location.href,
    image_url: $('#image-id').attr('src'),
    caption: $('#title-id').text(),
    description: $('#description-id').text(),
    fb_id: 'facebook-button-or-link-id',
    fb_app_id: 'YOU FB APP ID HERE',
    tw_id: 'twitter-button-or-link-id',
    gp_id: 'gplus-button-or-link-id',
    pin_id: 'pinterest-button-or-link-id',
  });
});
```

## Test

```bash
$ python -m SimpleHTTPServer  # open your browser at http://localhost:8000/index.html
```
