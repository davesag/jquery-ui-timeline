/** Timeline Widget for jQuery UI
 *  By Dave Sag
 *  Free for use under the BSD Licence.
 *  Please fork from https://github.com/davesag/jquery-ui-timeline-Widget
 *
 *  Use:
 *  :javascript
 *     $(function() {
 *       $('#my-timeline').timeline();
 *     })
 *  :html
 *  …
 *  <body>
 *    <div id = 'my-timeline'>
 *      <ol.ui-timeline-datelist>
 *        <li name='1965'>born.</li>
 *        <li name='1980'>programmed his first computer.</li>
 *        <li name='1983'>studied computer science.</li>
 *        <li name='1986'>founded a software company.</li>
 *        <li name='1987'>founded a graphic design company.</li>
 *        <li name='1989'>founded a bike courier company.</li>
 *        <li name='1991'>founded a rock and roll newspaper.</li>
 *        <li name='1993'>founded a web design company.</li>
 *        <li name='1999'>moved to London and worked at boo.com.</li>
 *        <li name='2000'>founded Carbon Planet.</li>
 *        <li name='2000'>moved to Amsterdam and worked at Risk2Risk.</li>
 *        <li name='2002'>freelanced.</li>
 *        <li name='2004'>worked at the Global Apparel Network BV as a senior software developer.</li>
 *        <li name='2006'>worked at the European Patent Office as a software quality expert.</li>
 *        <li name='2006'>returned to Australia as CEO of Carbon Planet.</li>
 *        <li name='2008'>Carbon Planet went public. Got a new CEO, I became COO.</li>
 *        <li name='2008'>founded Nostroma.</li>
 *        <li name='2010'>founded Vestalis Corp.</li>
 *        <li name='2010'>freelanced.</li>
 *      </ol>
 *    </div>
 *  </body>
 */

$(function() {
  $.widget("ui.timeline",{
    default_options: {
      arrowKeys:false,
      autoPlay:false,
      autoPlayDirection:'forward', // or 'backward'.
      autoPlayPause: 2000, // milliseconds.
      currentEventClass: '.ui-state-highlight',
      dateSelector:'ol.ui-timeline-datelist', // selector for the Ordered List of dates.
      datesSelectedClass:'selected',
      datesSpeed:'normal', // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'
      eventsAlpha:0.2,// value: integer between 0 and 1
      eventsAlphaSpeed:'normal', // value: integer between 100 and 1000 (recommended), default to 500 (normal)
      eventsSelector:'.ui-timeline-datelist', // usually the same as the dateSelector
      nextButtonSelector:'div.next-button',
      orientation:'horizontal', // or 'vertical'
      prevButtonSelector:'div.prev-button',
      startAt:0, // starts at 0.
      transitionSpeed:'fast' // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast
    },
    _init: function(){
      // basic stuff.
      var options = {},
          object = this,
          target = $(this.element);

      // stash it for now while we build the appropriate wrappers etc.
      target.hide().addClass('.ui-helper-reset .ui-widget .ui-corner-all .ui-widget-shadow');
      $.extend(options, this.default_options, this.option());

      // create a Timeline datamodel from the available options.
      
    },
    to_next:function() {
    
    },
    to_prev:function() {
    
    }
  })
})
