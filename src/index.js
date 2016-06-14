/* globals Marionette, Backbone */

(function () {
  const Lib = {};

  // vendor
  Lib.ItemView = Marionette.ItemView;
  Lib.CollectionView = Marionette.CollectionView;
  Lib.CompositeView = Marionette.CompositeView;
  Lib.AppRouter = Marionette.AppRouter;
  Lib.Router = Marionette.Router;
  Lib.Behavior = Marionette.Behavior;
  Lib.Region = Marionette.Region;
  Lib.Layout = Marionette.LayoutView;
  Lib.Application = Marionette.Application;

  // own
  Lib.TableView = require('Table/');
  /*
    {
      columns: ['Name', 'Age', ''],
    }
   */
  Lib.TableRowView = require('TableRow/');
  /*
    {
      actions: ['duplicate', 'edit', 'delete'],
    }
   */
  Lib.List = require('List/');
  Lib.ListItem = require('ListItem/');
  Lib.Modal = require('Modal/');
  Lib.Dialog = require('Dialog/');
  Lib.Form = require('Form/');
  Lib.Grid = require('Grid/');
  Lib.BreadCrumbs = require('BreadCrumbs/');
  Lib.Dropdown = require('Dropdown/');
  Lib.Tags = require('Tags/');
  Lib.Select = require('Select/');
  Lib.Panel = require('Panel/');
  Lib.PanelItem = require('PanelItem/');
  Lib.Pagination = require('Pagination/');
  Lib.Actions = require('Actions/');
  Lib.Card = require('Card/');
  Lib.Radio = Backbone.Radio;
  Lib.channel = Lib.Radio.channel;
  Lib.Intercept = Backbone.Intercept;

  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  const root = (typeof self === 'object' && self.self === self && self) ||
            (typeof global === 'object' && global.global === global && global);

  root.OpenDash = Lib;
}());
