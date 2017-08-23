/**
* Search
*/

import DropdownLayer from '../DropdownLayer';
import Util from '../Util';
import Observer from 'js-observer';

class Search{

  constructor() {
    //...
    this.onResetSearch = new Observer;

    this.dropdownLayer = new DropdownLayer;
  }

  addEvent() {

    $this.node.on( 'click', '.btn-delete', ( evt ) => {
      this.onResetSearch.emit( this.keyword );
    });

    //...
  }
};

module.exports = Search;
