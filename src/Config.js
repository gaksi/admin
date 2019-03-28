const BASE_URL = '/api'

export default {
  PAGESIZE: 5,

  // 전체 공지사항 데이터 요청(페이징 포함)
  FETCH_NOTICE: BASE_URL + '/notice/list',
  // 공지사항 한 개 데이터 요청(페이징 포함)
  FETCH_ONE_NOTICE: BASE_URL + '/notice/detail',
  // 공지사항 추가
  ADD_NOTICE: BASE_URL + '/notice/write',
  // 공지사항 수정
  EDIT_NOTICE: BASE_URL + '/notice/edit',
  // 공지사항 삭제
  DELETE_NOTICE: BASE_URL + '/notice/del'
}
