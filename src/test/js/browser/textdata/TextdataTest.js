test(
  'textdata :: Textdata.from',

  [
    'ephox.perhaps.Option',
    'ephox.robin.api.dom.Textdata',
    'ephox.robin.test.Assertions',
    'ephox.sugar.api.Element'
  ],

  function (Option, Textdata, Assertions, Element) {

    var a = Element.fromText('alpha');
    var b = Element.fromText(' beta');
    var c = Element.fromText('');
    var d = Element.fromText(' ');
    var e = Element.fromText('epsilon');
    var f = Element.fromText('foo');

    var check = function (expected, elements, current, offset) {
      var actual = Textdata.from(elements, current, offset);
      assert.eq(expected.text, actual.text());
      Assertions.assertOpt(expected.cursor, actual.cursor());
    };

    check({
      text: '',
      cursor: Option.some(0)
    }, [c], c, 0);

    check({
      text: 'alpha beta epsilonfoo',
      cursor: Option.some(13)
    }, [a, b, c, d, e, f], e, 2);

  }
);
