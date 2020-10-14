$(function () {
  function changeTab() {
    function changeActiveTab($this) {
      const $tab = $('.tab');
      $tab.removeClass('is-active');
      $this.addClass('is-active');
    }

    function changeActivePanel(tabIndex) {
      const $panel = $('.panel');
      $panel.removeClass('is-show').eq(tabIndex).addClass('is-show');
    }

    function init() {
      const $this = $(this);
      const tabIndex = $this.index();
      changeActiveTab($this);
      changeActivePanel(tabIndex);
    }

    $('.tab').on('click', init);

  }

  changeTab();

});