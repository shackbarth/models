/*jshint indent:2, curly:true eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, strict:true, trailing:true
white:true*/
/*global XT:true, XM:true, Backbone:true, _:true */

(function () {
  "use strict";

  /**
    @class

    @extends XT.AccountDocument
  */
  XM.Customer = XM.AccountDocument.extend({
    /** @scope XM.Customer.prototype */

    recordType: 'XM.Customer',

    defaults: {
      isActive: true
    },

    requiredAttributes: [
      "isActive"
    ]

  });

  /**
    @class

    @extends XM.Comment
  */
  XM.CustomerComment = XM.Comment.extend({
    /** @scope XM.CustomerComment.prototype */

    recordType: 'XM.CustomerComment',

    sourceName: 'C'

  });

  /**
    @class

    @extends XM.CharacteristicAssignment
  */
  XM.CustomerCharacteristic = XM.CharacteristicAssignment.extend({
    /** @scope XM.CustomerCharacteristic.prototype */

    recordType: 'XM.CustomerCharacteristic'

  });

  /**
    @class

    @extends XM.Model
  */
  XM.CustomerCustomer = XM.Model.extend({
    /** @scope XM.CustomerCustomer.prototype */

    recordType: 'XM.CustomerCustomer',

    isDocumentAssignment: true

  });

  /**
    @class

    @extends XM.Model
  */
  XM.CustomerContact = XM.Model.extend({
    /** @scope XM.CustomerContact.prototype */

    recordType: 'XM.CustomerContact',

    isDocumentAssignment: true

  });


  /**
    @class

    @extends XM.Model
  */
  XM.CustomerItem = XM.Model.extend({
    /** @scope XM.CustomerItem.prototype */

    recordType: 'XM.CustomerItem',

    isDocumentAssignment: true

  });

  /**
    @class

    @extends XM.Model
  */
  XM.CustomerFile = XM.Model.extend({
    /** @scope XM.CustomerFile.prototype */

    recordType: 'XM.CustomerFile',

    isDocumentAssignment: true

  });

  /**
    @class

    @extends XM.Model
  */
  XM.CustomerImage = XM.Model.extend({
    /** @scope XM.CustomerImage.prototype */

    recordType: 'XM.CustomerImage',

    isDocumentAssignment: true

  });

  /**
    @class

    @extends XM.Model
  */
  XM.CustomerUrl = XM.Model.extend({
    /** @scope XM.CustomerUrl.prototype */

    recordType: 'XM.CustomerUrl',

    isDocumentAssignment: true

  });
  
  /**
    @class

    @extends XM.Model
  */
  XM.CustomerShipto = XM.Document.extend({
    /** @scope XM.CustomerShipto.prototype */

    recordType: 'XM.CustomerShipto'

  });
  
  /**
    @class

    @extends XM.Model
  */
  XM.CustomerType = XM.Document.extend({
    /** @scope XM.CustomerType.prototype */

    recordType: 'XM.CustomerType',
    
    documentKey: 'code'

  });

  /**
    @class

    @extends XM.Info
  */
  XM.CustomerRelation = XM.Info.extend({
    /** @scope XM.CustomerRelation.prototype */

    recordType: 'XM.CustomerRelation',

    editableModel: 'XM.Customer',

    descriptionKey: "name"

  });
  
  /**
    @class

    @extends XM.Model
  */
  XM.ShipCharge = XM.Document.extend({
    /** @scope XM.CustomerCharge.prototype */

    recordType: 'XM.ShipCharge',
    
    documentKey: 'name'

  });
  
  /**
    @class

    @extends XM.Model
  */
  XM.ShipVia = XM.Document.extend({
    /** @scope XM.CustomerVia.prototype */

    recordType: 'XM.ShipVia',
    
    documentKey: 'code'

  });
  
  /**
    @class

    @extends XM.Model
  */
  XM.ShipZone = XM.Document.extend({
    /** @scope XM.ShipZone.prototype */

    recordType: 'XM.ShipZone',
    
    documentKey: 'name'

  });

  // ..........................................................
  // COLLECTIONS
  //

  /**
    @class

    @extends XM.Collection
  */
  XM.CustomerRelationCollection = XM.Collection.extend({
    /** @scope XM.CustomerRelationCollection.prototype */

    model: XM.CustomerRelation

  });

}());
