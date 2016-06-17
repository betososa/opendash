const Lib = Object.create(null);

import { Table, TableRow } from './Table/';

Lib.Table = Table;
Lib.TableRow = TableRow;
Lib.LayoutView = Marionette.LayoutView;
Lib.ItemView = Marionette.ItemView;

window.OpenDash = Lib;
