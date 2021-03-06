/**
 * Langbar UI
 *
 * Copyright 2014, Outernet Inc.
 * Some rights reserved.
 *
 * This software is free software licensed under the terms of GPLv3. See
 * COPYING file that comes with the source code, or
 * http://www.gnu.org/licenses/gpl.txt.
 */
;(function (window, $) {
  var langbar = $('#languages');

  langbar.addClass('js').addClass('closed');

  langbar.find('span').on('click', toggleLanguages);
  langbar.hover(openLanguages, closeLanguages);

  function toggleLanguages(e) {
    langbar.toggleClass('closed');
  }

  function openLanguages() {
    langbar.removeClass('closed');
  }

  function closeLanguages() {
    langbar.addClass('closed');
  }
}(this, jQuery));
