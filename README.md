# img-proxy

An image proxy using rsz.io and weserv.nl to proxy requests and resize images

## Usage

Gumshoe.io as an example:
```
https://img.gumshoe.io/?url=<image-url>&w=<image-width>&h=<image-height>
```

Where *<image-url>* is the URL to the image you wish to proxy, and *<image-width> & <image-height>* (each optional) are the desired bounds of the new image. Crops to fit.