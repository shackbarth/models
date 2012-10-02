/*jshint indent:2, curly:true eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, trailing:true
white:true*/
/*global enyo:true, XT:true, XV:true */

(function () {

  enyo.kind({
    name: "XV.Pullout",
    kind: "enyo.Slideable",
    classes: "pullout",
    value: -100,
    min: -100,
    unit: '%',
    events: {
      onHistoryItemSelected: ""
    },
    published: {
      selectedPanel: ""
    },
    components: [
      {name: "shadow", classes: "pullout-shadow"},
      {name: "grabber", kind: "onyx.Grabber", classes: "pullout-grabbutton",
        ondragfinish: "grabberDragFinish"},
      {kind: "FittableRows", classes: "enyo-fit", components: [
        {name: "client", classes: "pullout-toolbar"},
        {classes: "xv-pullout-header", name: "pulloutHeader", content: ""},
        {kind: "Scroller", name: "pulloutItems", fit: true, style: "position: relative;",
          components: [
          {fit: true, name: "history", kind: "Scroller", components: [
            {kind: "Repeater", name: "historyList",
              onSetupItem: "setupHistoryItem", count: 0, components: [
              {name: "historyItem"}
            ]}
          ]}
        ]}
      ]}
    ],
    /**
      Tries to pre-populate the history list from a cookie if present
     */
    create: function () {
      this.inherited(arguments);

      var that = this,
        callback = function () {
          that.preLoadHistory();
        };

      XT.getStartupManager().registerCallback(callback, true);
    },
    preLoadHistory: function () {
      var dbName = XT.session.details.organization,
        cookieValue = enyo.getCookie("history_" + dbName),
        historyArray,
        i,
        historyItem,
        mockModel = {};

      if (!cookieValue || cookieValue === 'undefined') {
        // There's no cookie yet for this parameter list
        return;
      }

      historyArray = JSON.parse(cookieValue);

      // Running through the array backwards allows us to preserve the
      // reverse chronology of the history list.
      for (i = historyArray.length - 1; i >= 0; i--) {
        historyItem = historyArray[i];
        // The mock model we create here is built to fool XT.addToHistory
        // into thinking it's a real model. This code is fragile to any
        // change in that function.
        mockModel.recordType = historyItem.modelType;
        mockModel.getValue = function () {
          return historyItem.modelName;
        };
        mockModel.get = function () {
          return historyItem.modelId;
        };
        XT.addToHistory(historyItem.workspaceType, mockModel);
      }
      this.refreshHistoryList();
    },
    /**
      Called whenever the pullout is pulled via the dragger. We ensure that if
      no panel is yet selected, we default to the history panel.
    */
    grabberDragFinish: function () {
      var name = this.getSelectedPanel() ? this.getSelectedPanel() : "history";

      this.togglePullout(this, {name: name, show: true});
    },
    /**
      Refreshes the history list.
     */
    refreshHistoryList: function () {
      this.$.historyList.setCount(XT.getHistory().length);
    },
    setupHistoryItem: function (inSender, inEvent) {
      var historyItem = inEvent.item.$.historyItem;
      var historyData = XT.getHistory()[inEvent.index];
      var modelTypeShow = ("_" + historyData.modelType.suffix().camelize()).loc();
      this.createComponent({
        container: historyItem,
        classes: "item enyo-border-box",
        style: "color:white",
        ontap: "doHistoryItemSelected",
        content: modelTypeShow + ": " + historyData.modelName,
        modelType: historyData.modelType,
        id: historyData.modelId,
        workspace: historyData.workspaceType
      });
    },
    getItem: function (name) {
      return this.$.pulloutItems.$[name] || this.$[name];
    },
    /**

      Sets the pullout to be the appropriate panel (either history or
      the apppropriate advanced search). May or may not show the panel,
      depending on inEvent.show.

      @param {Object} inSender
      @param {Object} inEvent
      @param {String} inEvent.name The name of the panel, or the word "history"
      @param {Boolean} inEvent.show Whether or not we want to show the panel
    */
    togglePullout: function (inSender, inEvent) {
      // Note that if you show history, then move to a list with a panel, then pull the
      // pullout, it will show the advanced search and not history.
      var name = inEvent.name,
        item = this.getItem(name),
        children = this.$.pulloutItems.children[0].children,
        i;

      if (!item) {
        // if we've moved to a list with no advanced search and pull the pullout
        // again show history instead.
        name = "history";
        item = this.getItem(name);
      }

      if (name === 'history') {
        this.$.pulloutHeader.setContent("_history".loc());
      } else {
        this.$.pulloutHeader.setContent("_advancedSearch".loc());
      }
      this.setSelectedPanel(name);
      if (item && item.showing && this.isAtMax()) {
        this.animateToMin();
      } else if (inEvent.show) {
        for (i = 0; i < children.length; i++) {
          children[i].hide();
        }
        item.show();
        item.resized();
        if (!this.isAtMax()) {
          this.render();
          this.animateToMax();
        }
      }
    }
  });

}());
