(function (window, document) {
  'use strict';

  var layout    = document.getElementById( 'layout' );
  var menu      = document.getElementById( 'menu' );
  var menuLink  = document.getElementById( 'menuLink' );
  var gridItems = document.getElementsByClassName( 'grid-item-image' );
  var overlay   = document.getElementById( 'overlay' );

  overlay.onclick = function( event ) {
    var body = document.getElementsByTagName( 'body' )[0];
    // body.style.overflowY = 'scroll';
    body.style.position = 'static';
    overlay.style.display = 'none';
  };

  for( var i = 0; i < gridItems.length; i++ )
  {
    gridItems[i].onclick = function( event ) {
      // TODO: block arrow keys scroll
      var body = document.getElementsByTagName( 'body' )[0];
      // body.style.overflowY = 'hidden';
      body.style.position = 'fixed';
      window.scrollTo( 0, 0 );
      var src = event.target.src.replace( /_\.gif/i, '.gif' ).replace( /_\.jpg/i, '.jpg' ).replace( /_\.png/i, '.png' );
      overlay.innerHTML = '<img src="' + src + '"/>';
      overlay.style.display = 'block';
    };
  }

  function toggleClass(element, className) {
    var classes = element.className.split(/\s+/),
      length = classes.length,
      i = 0;

    for(; i < length; i++) {
      if (classes[i] === className) {
      classes.splice(i, 1);
      break;
      }
    }
    // The className is not found
    if (length === classes.length) {
      classes.push(className);
    }

    element.className = classes.join(' ');
  }

  menuLink.onclick = function (e) {
    var active = 'active';
    console.log('##');

    e.preventDefault();
    toggleClass(layout, active);
    toggleClass(menu, active);
    toggleClass(menuLink, active);
  };

}(this, this.document));
