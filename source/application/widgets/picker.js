/*jshint node:true, indent:2, curly:true eqeqeq:true, immed:true, latedef:true, newcap:true, noarg:true,
regexp:true, undef:true, trailing:true, white:true */
/*global XT:true, XM:true, enyo:true, _:true */

(function () {

  // ..........................................................
  // ACCOUNT TYPE
  //

  enyo.kind({
    name: "XV.AccountTypePicker",
    kind: "XV.PickerWidget",
    collection: "XM.accountTypes"
  });

  // ..........................................................
  // CLASS CODE
  //

  enyo.kind({
    name: "XV.ClassCodePicker",
    kind: "XV.PickerWidget",
    collection: "XM.classCodes",
    nameAttribute: "code",
    orderBy: [
      {attribute: 'code'}
    ]
  });

  // ..........................................................
  // COMMENT TYPE
  //

  enyo.kind({
    name: "XV.CommentTypePicker",
    kind: "XV.PickerWidget",
    collection: "XM.commentTypes",
    orderBy: [
      {attribute: 'order'},
      {attribute: 'name'}
    ]
  });

  // ..........................................................
  // COUNTRY
  //

  enyo.kind({
    name: "XV.CountryPicker",
    kind: "XV.PickerWidget",
    collection: "XM.countries",
    orderBy: [
      {attribute: 'name'}
    ]
  });

  // ..........................................................
  // INCIDENT CATEGORY
  //

  enyo.kind({
    name: "XV.IncidentCategoryPicker",
    kind: "XV.PickerWidget",
    collection: "XM.incidentCategories",
    orderBy: [
      {attribute: 'order'},
      {attribute: 'name'}
    ]
  });

  // ..........................................................
  // INCIDENT RESOLUTION
  //

  enyo.kind({
    name: "XV.IncidentResolutionPicker",
    kind: "XV.PickerWidget",
    collection: "XM.incidentResolutions",
    orderBy: [
      {attribute: 'order'},
      {attribute: 'name'}
    ]
  });

  // ..........................................................
  // INCIDENT SEVERITY
  //

  enyo.kind({
    name: "XV.IncidentSeverityPicker",
    kind: "XV.PickerWidget",
    collection: "XM.incidentSeverities",
    orderBy: [
      {attribute: 'order'},
      {attribute: 'name'}
    ]
  });

  // ..........................................................
  // INCIDENT STATUS
  //

  enyo.kind({
    name: "XV.IncidentStatusPicker",
    kind: "XV.PickerWidget",
    collection: "XM.incidentStatuses",
    valueAttribute: "id"
  });

  // ..........................................................
  // OPPORTUNITY SOURCE
  //

  enyo.kind({
    name: "XV.OpportunitySourcePicker",
    kind: "XV.PickerWidget",
    collection: "XM.opportunitySources",
    orderBy: [
      {attribute: 'name'}
    ]
  });

  // ..........................................................
  // OPPORTUNITY STAGE
  //

  enyo.kind({
    name: "XV.OpportunityStagePicker",
    kind: "XV.PickerWidget",
    collection: "XM.opportunityStages",
    orderBy: [
      {attribute: 'name'}
    ]
  });

  // ..........................................................
  // OPPORTUNITY TYPE
  //

  enyo.kind({
    name: "XV.OpportunityTypePicker",
    kind: "XV.PickerWidget",
    collection: "XM.opportunityTypes",
    orderBy: [
      {attribute: 'name'}
    ]
  });

  // ..........................................................
  // PRIORITY
  //

  enyo.kind({
    name: "XV.PriorityPicker",
    kind: "XV.PickerWidget",
    collection: "XM.priorities",
    orderBy: [
      {attribute: 'order'},
      {attribute: 'name'}
    ]
  });

  // ..........................................................
  // PRODUCT CATEGORY
  //

  enyo.kind({
    name: "XV.ProductCategoryPicker",
    kind: "XV.PickerWidget",
    collection: "XM.productCategories",
    nameAttribute: "code",
    orderBy: [
      {attribute: 'code'}
    ]
  });

  // ..........................................................
  // PROJECT STATUS
  //

  enyo.kind({
    name: "XV.ProjectStatusPicker",
    kind: "XV.PickerWidget",
    collection: "XM.projectStatuses"
  });

  // ..........................................................
  // UNIT
  //

  enyo.kind({
    name: "XV.UnitWidget",
    kind: "XV.PickerWidget",
    collection: "XM.units",
    orderBy: [
      {attribute: 'name'}
    ]
  });
  
}());
