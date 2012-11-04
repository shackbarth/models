// ==========================================================================
// Project:   XT` Strings
// Copyright: ©2011 OpenMFG LLC, d/b/a xTuple
// ==========================================================================
/*globals XT */

// Place strings you want to localize here.  In your app, use the key and
// localize it using "key string".loc().  HINT: For your key names, use the
// english string with an underscore in front.  This way you can still see
// how your UI will look and you'll notice right away when something needs a
// localized string added to this file!
//

XT.stringsFor("en_US", {

  "_assigned": "Assigned",
  "_closed": "Closed",
  "_completed": "Completed",
  "_concept": "Concept",
  "_confirmed": "Confirmed",
  "_database": "Database",
  "_feedback": "Feedback",
  "_individual": "Individual",
  "_information": "Information",
  "_inProcess": "In Process",
  "_new": "New",
  "_organization": "Organization",
  "_resolved": "Resolved",
  
  // ********
  // Messages
  // ********
  
  "_assignedToRequiredAssigned": "Assigned to is required when status is 'Assigned'",
  "_attributeIsRequired": "{attr} is required.",
  "_attributeTypeMismatch": "The value of '{attr}' must be type: {type}.",
  "_attributeNotInSchema": "'{attr}' does not exist in the schema.",
  "_attributeReadOnly": "Can not edit read only attribute(s).",
  "_characteristicContextRequired": "You must set at least one characteristic context to true.",
  "_datasourceError": "Data source error: {error}",
  "_duplicateValues": "Duplicate values are not allowed.",
  "_lengthInvalid": "Length of {attr} must be {length}.",
  "_nameRequired": "A name is required.",
  "_productCategoryRequiredOnSold": "A Product Category is required for sold items.",
  "_recursiveParentDisallowed": "Record is not allowed to reference itself as the parent.",
  "_recordNotFound": "Record not found.",
  "_recordStatusNotEditable": "Record with status of `{status}` is not editable.",
  "_valueExists": "Record with {attr} of '{value}' already exists.",
  "_whatToDo": "What would you like to do?"
  
});

// TODO: Temporary until we get loaded from datasource
XT.locale.setLanguage("en_US");
