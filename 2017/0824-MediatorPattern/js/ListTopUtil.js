/**
* ListTopUtil
*/
class ListTopUtil{
	constructor( node ) {
		//...
	}

	addEvent() {

		//...

		//글쓰기 버튼 클릭
		this.$node.on( 'click', '.btn-write', ( evt ) => {
			evt.preventDefault();
			this.onWrite.emit();
		});

		//썸네일뷰 버튼 클릭
		this.$node.on( 'click', '.btn-thumb', ( evt ) => {
			evt.preventDefault();
			this.onViewMode.emit( 'thumb' );
		});

		//카드뷰 버튼 클릭
		this.$node.on( 'click', '.btn-cards', ( evt ) => {
			evt.preventDefault();
			this.onViewMode.emit( 'card' );
		});

		//리스트뷰 버튼 클릭
		this.$node.on( 'click', '.btn-list', ( evt ) => {
			evt.preventDefault();
			this.onViewMode.emit( 'list' );
		});

		//...
	}
};

module.exports = ListTopUtil;
