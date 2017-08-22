# Code Review

- https://rc-tw.ncsoft.com/mxm/launcher/index
- https://rc-tw.ncsoft.com/mxm/launcher/board/notice/list
- https://rc-tw.ncsoft.com/mxm/launcher/board/notice/view?articleId=93&viewMode=list&size=20



### 이슈

- 홈에서 카드순서 정렬
- 공홈의 게시판 CSS를 가져와서 사용할 경우 런처 게시판에서 css 재정의 : max-width
	https://rc-wstatic.plaync.co.kr/uikit/nccommunity/css/community_mxm.1.3.17-2.min.css
	.board-prev-next-article, .nc-community-comment, .nc-community-list, .view-body, .view-bottom, .view-header, .view-utils { max-width:1260px;}
- 공홈과 런처와 URL 동일하게 사용 필요
	공유하기 등의 기능에서 문제 발생
- 런처웹의 layout 설정
	useragent 체크로 layout 제어 필요


### 참고 
- 런처 static 리소스 : http://git.korea.ncsoft.corp/projects/FRONTEND_DEVELOP/repos/nc-launcher/browse
- MXM 런처 : http://git.korea.ncsoft.corp/projects/MXM_WEB/repos/mxm-global-web/browse/src/main/resources/templates/launcher?at=refs%2Fheads%2Fdevelop
- Contents Admin(rc) : https://rc-contents.ncsoft.net/contents/contents/content?contentStatusList=Activation&pageIndex=1&pageSize=20