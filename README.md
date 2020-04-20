
Dies ist eine Cmsimple-XH - Implementation  eines Bootstrap 3 - Templates mit tiefer Ebenenverschachtelung.

Sie basiert auf Smartmenus - Bootstrap (https://github.com/vadikom/smartmenus-bootstrap) und ist daher genauso unter MIT - Lizenz.

Ein ähnliches Html-Beispiel ist auf https://codepen.io/costh/pen/YXYPGx zu sehen.

Eine Demo dieser Version läuft auf http://ulclean.mb-info.eu/Templates/bt3master5.

Das spezielle blaue bootstrap.min.css ist auf https://www.bootpress.org/bootstrap.html frei herunterladbar. 

Die dortigen herunterladbaren Templates laufen mit diesem Template durch einfachen Austausch der bootstrap.min.css.

Templates mit Seitenbalken können dank Bootstrap einfach über eine Änderung von

< div class="row"> -- >         < div class="col-md-12">  z.B in 

< div class="row"> -- >    < div class="col-md-2">   < div class="col-md-10"> erreicht werden

Das große bootstrap-min.js ist für die Navigation nicht notwendig sondern nur für Effekte im Content. 

Unter /js sind auch einzelne kleinere Js'se für Effekte im Template vorhanden.

P.S. Das Adminmenu wird leider etwas verdeckt wie bei manchen Templates. Bitte im CMS unter assets/core.css den Wert xh_adminmenu_fixed { z-index: 999999;} setzen.

Font Awesome ist im CMS auch als FA-Plugin enthalten.

Diese Version ist RC1. Es folgen weitere Templates mit Header und Seitenbalken.

Wünschen und Anregungen bitte unter Issues. 

