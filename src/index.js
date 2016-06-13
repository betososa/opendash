/* globals Marionette */

(function () {
  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  const root = (typeof self === 'object' && self.self === self && self) ||
            (typeof global === 'object' && global.global === global && global);

  // vendor
  root.ItemView = Marionette.ItemView;
  root.CollectionView = Marionette.CollectionView;
  root.CompositeView = Marionette.CompositeView;
  root.AppRouter = Marionette.AppRouter;
  root.Router = Marionette.Router;
  root.Behavior = Marionette.Behavior;
  root.Region = Marionette.Region;
  root.Layout = Marionette.LayoutView;
  root.Application = Marionette.Application;

  // own
  root.Table = require('Table/');
  /*
    {
      columns: ['Name', 'Age', ''],
    }
   */
  root.TableRow = require('TableRow/');
  /*
    {
      actions: ['duplicate', 'edit', 'delete'],
    }
   */
  root.List = require('List/');
  root.ListItem = require('ListItem/');
  root.Modal = require('Modal/');
  root.Dialog = require('Dialog/');
  root.Form = require('Form/');
  root.Grid = require('Grid/');
  root.BreadCrumbs = require('BreadCrumbs/');
  root.Dropdown = require('Dropdown/');
  root.Select = require('Select/');
  root.Radio = require('Radio/');
  root.Checkbox = require('Checkbox/');
  root.Panel = require('Panel/');
  root.PanelItem = require('PanelItem/');
  root.Pagination = require('Pagination/');
  root.Actions = require('Actions/');
  root.App = require('App/');
  root.Image = require('Image/');
  root.Upload = require('Upload/');
  root.Input = require('Input/');
  root.Card = require('Card/');
}());
