
;;;( function( $ ) {

  'use strict';

  var _config = { /* config */ };
  var _site = 'mxm';

  var _boardInfo = window._boardInfo;

  _config = {

    type: _boardInfo.type || 'list',

    board: _boardInfo.boardAlias || 'free',

    share: _boardInfo.share || {},

    list: ui.ncCommunity.List,

    view: ui.ncCommunity.View,

    comment: ui.ncCommunity.Comment,

    write: ui.ncCommunity.Write,

    $list: $( '#ncCommunityList' ),

    $view: $( '#ncCommunityView' ),

    $comment: $( '#ncCommunityComment' ),

    $write: $( '#ncCommunityWrite' ),

  };

  (function(){
    _setBoard( _createBoardOptions( _config.board ) );
  }());

  function _setBoard( _options ){

    var _board = new _config[ _config.type ]( _config[ '$' + _config.type ], _options );

    ( _config.type == 'view' ) && _board.onLoaded.add( function(){
      if( _options.isComment ){
        var _comment = new _config.comment( _config.$comment, _options );
        _comment.get();
      }
    });

    if( _config.type != 'write' )
      _board.get();
  }

  function _createBoardOptions( _board ) {

    var _options = {};

    switch( _board ){

      case 'notice':

        _options = {
          isListView: true,
          isCardView: true,
          isTopNotice: true,
          isWrite: false,
          isAdmin: true,
          isComment: false,
          isShare: false,
          prefixPath: '/launcher'
        };break;

    }

    _options.board = _config.board;
    _options.adminCommentImg = 'https://wstatic-cdn.plaync.com/uikit/nccommunity/img/mxm/gaia_web_cm.png';
    //_options.isShowNoticeComment = true;
    //_options.isUserInfoWithServer = true;
    //_options.isProfileWithCharId = true;
    _options.isBookmark = false;
    _options.imageUploadFrameUrl = _boardInfo.imageUploadFrameUrl;
    _options.isMyProfile = false;
    _options.share = _config.share;
    _options.site = _site;

    _options.isEmoticon = false;
    _options.emoticons = [];
    _options.isCommentUpload = false;
    _options.isCommentEmoticon = false;
    _options.isListCount = true;
    _options.isShowPrevNextArticle = true;

    return _options;
  }

})( jQuery );;;
