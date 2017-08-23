//파라미터 정보 - 파라미터 셋팅, 파라미터 저장
import ParamInfo from './ParamInfo';

//리스트 상단 버튼 - 카드버튼, 리스트버튼, 썸네일버튼, 새로고침 버튼, 글쓰기 버튼
import ListTopUtil from './ListTopUtil';

//검색
import Search from './Search';

/**
 * Mediator Class List
 */
class List {
	constructor( node, options ){

		this.paramInfo = new ParamInfo();
		this.paramInfo.setParamByUrl();

    this.search = new Search();
    this.search.onSearch.add( () => {
      //...

      //변경된 파라미터 정보로 리스트 페이지 호출
      location.href = `${Config.listPage}?${this.paramInfo.getParam()}`;
    });

		this.listTopUtil = new ListTopUtil();
		this.listTopUtil.onViewMode.add( ( viewMode ) => {

			if( viewMode == 'card' ){
        //파라미터의 viewMode를 card로 변경
				this.paramInfo.setParam( [ 'viewMode', 'card' ] );
        //...

			}else if( viewMode == 'thumb' ){
				this.paramInfo.setParam( [ 'viewMode', 'thumb' ] );
        //...

			}else{
				this.paramInfo.setParam( [ 'viewMode', 'list' ] );
        //...
			}

      //변경된 파라미터 정보로 리스트 페이지 호출
			location.href = `${Config.listPage}?${this.paramInfo.getParam()}`;
		}, this );

  }
};

module.exports = List;
