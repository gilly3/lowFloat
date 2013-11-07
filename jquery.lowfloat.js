/*
   Copyright 2013 Ivan Gilchrist

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
(function ($) {
    $.fn.lowFloat = function (options) {
        var opts = $.extend({}, $.fn.lowFloat.defaultOptions, options);
        this.each(function () {
            var container = $(this).parent().closest(opts.container);
            container.prepend(this);
            $(this).css({ float: opts.float, clear: opts.float });
            $("<div>").css({ width: 0, float: opts.float }).insertBefore(this);
        });
        var floaters = this;
        $(window).on("resize", function () {
            floaters.each(function () {
                var floater = $(this);
                var spacer = floater.prev();
                var container = floater.parent();
                var lastContent = container.find(opts.bottomContent);
                var floaterHeight = this.offsetHeight;
                var h = Math.max(0, container.height() - floaterHeight);
                spacer.height(h);
                while (h > 0 && floater.offset().top + floaterHeight > lastContent.offset().top + lastContent.height()) {
                    spacer.height(--h);
                }
                while (floater.offset().top + floaterHeight < lastContent.offset().top + lastContent.height()) {
                    spacer.height(++h);
                }
            });
        }).trigger("resize");
        return this;
    };
    $.fn.lowFloat.defaultOptions = {
        container: "*",
        bottomContent: "> :last-child",
        float: "right"
    };
})(jQuery);
