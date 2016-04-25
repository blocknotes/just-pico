# just-pico

A simple Pico CMS theme made with PureCSS

## INSTALL

- Clone or copy just-pico folder in pico themes dir

- Enable the theme in the config.php file: `$config['theme'] = 'just-pico';`

## USAGE

Optionally set a logo in config.php file: `$config['site_logo'] = 'logo.png';`
The image file should be put in pico path: 'assets/images/logo.png'

There are 4 template files available:

- **index**: for standard pages

- **blog**: for blog/news index

- **blog-item**: for a single blog item

Put blog articles in pico path: 'content/blog/article-title.md'

- **gallery** For photo/image galleries - add a meta 'Images' in the page 

header to list the gallery images. Example:

```
Template: gallery
Images: gallery/img1.jpg, gallery/img2.jpg, gallery/img3.jpg
```

It will look for images in pico path: 'assets/images/gallery/img1.jpg', etc.
To add thumbnails create also a scaled copy of every image with an underscore before the extension: 'assets/images/gallery/img1_.jpg'

## PREVIEW

![Screenshot](https://github.com/blocknotes/just-pico/blob/master/screenshot.jpg)
