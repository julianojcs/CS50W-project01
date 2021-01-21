window.onload = function (e) {
  const frm = document.querySelector('#google_form')
  const inpupSearch = document.querySelector('#input_search')

  document.querySelector('#btn_search').addEventListener(
    'click',
    function (event) {
      frm.action = 'https://google.com/search'
      if (inpupSearch.value.trim() === '') {
        event.preventDefault()
      }
    },
    false
  )

  document.querySelector('#btn_doodles').addEventListener(
    'click',
    function (event) {
      frm.action = 'https://google.com/doodles'
      if (inpupSearch.value.trim() === '') {
        event.preventDefault()
      }
    },
    false
  )
}
