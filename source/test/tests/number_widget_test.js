/*jshint bitwise:true, indent:2, curly:true eqeqeq:true, immed:true,
latedef:true, newcap:true, noarg:true, regexp:true, undef:true,
trailing:true white:true*/
/*global XV:true, Backbone:true, enyo:true, XT:true */

(function () {
  "use strict";

  enyo.kind({
    name: "XT.NumberWidgetTest",
    kind: "enyo.TestSuite",
    components: [
      { kind: "XV.NumberWidget", name: "numberWidget" }
    ],
    getObj: function () {
      return this.$.numberWidget;
    },
    testGetValueIsNumberFromString: function () {
      this.getObj().setValue("10");
      var err = (typeof this.getObj().getValue() === 'number') ? "" : "getValue() not a number";
      this.finish(err);
    },
    testAcceptDecimal: function () {
      this.getObj().setValue(4.5);
      var err = this.getObj().getValue() === 4.5 ? "" : "widget not dealing with decimals";
      this.finish(err);
    },
    testEmptyStringAsNull: function () {
      this.getObj().setValue('');
      var err = this.getObj().getValue() === null ? "" : "Empty string input not being set to null";
      this.finish(err);
    },
    testNullAsNull: function () {
      this.getObj().setValue(null);
      var err = this.getObj().getValue() === null ? "" : "Null input not being set to null";
      this.finish(err);
    },
    testJunkAsNull: function () {
      this.getObj().setValue("invalid_junk");
      var err = this.getObj().getValue() === null ? "" : "Junk input not being set to null";
      this.finish(err);
    },
    testZero: function () {
      this.getObj().setValue(0);
      var err = this.getObj().getValue() === 0 ? "" : "Widget not handling input of zero";
      this.finish(err);
    }
  });
}());
