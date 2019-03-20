var BASE_URL = '/api'

export default {
  PAGESIZE: 5,

  // 전체 연락처 데이터 요청(페이징 포함)
  FETCH_NOTICE: BASE_URL + '/notice/list',
  // 연락처 추가
  ADD_NOTICE: BASE_URL + '/notice/write',
  // 연락처 업데이트
  EDIT_NOTICE: BASE_URL + '/notice/edit'
}
