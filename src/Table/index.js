import wrapper from './wrapper.hbs';
import row from './row.hbs';
import empty from './empty.hbs';

export const EmptyRow = Marionette.ItemView.extend({
  template: empty,
  tagName: 'tr',
});

export const TableRow = Marionette.ItemView.extend({
  template: row,
  tagName: 'tr',
});

export const Table = Marionette.CompositeView.extend({
  template: wrapper,
  tagName: 'table',
  className: 'table table-bordered table-hover',
  childViewContainer: 'tbody',
  emptyView: EmptyRow,
  serializeData() {
    return {
      columns: this.columns,
    };
  },
  onRender() {
    if (this.footerView) {
      const FooterView = this.footerView;
      this.prv_footerView = new FooterView();
      this.$el.find('tfoot').html(this.prv_footerView.render().el);
    }
  },
  onBeforeDestroy() {
    if (this.prv_footerView) this.prv_footerView.destroy();
  },
});
