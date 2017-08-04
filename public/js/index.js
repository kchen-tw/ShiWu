// 當文件都下載完後執行
$(document).ready(function() {
    $('#result').hide();

    var genBar = function(item) {
        $name = $('<div>').attr('class', 'name').text(item.name);
        $col4 = $('<div>').attr('class', 'col-4').append($name);
        $prsbar = $('<div>')
            .attr('class', 'progress-bar')
            .attr('role', 'progressbar')
            .attr('aria-valuenow', '0')
            .attr('aria-valuemin', '0')
            .attr('aria-valuemax', '100')
            .css('width', item.score * 100 + "%")
            .text(item.score);
        $progress = $('<div>').attr('class', 'progress').append($prsbar);
        $col8 = $('<div>').attr('class', 'col-8').append($progress);
        $row = $('<div>').attr('class', 'row row-bar').append($col4).append($col8);
        return $row;
    }

    $.uploadPreview({
        input_field: '#intput-image-upload',
        preview_box: '#intput-image-preview',
        label_field: '#intput-image-label',
        label_default: '選擇影像',
        label_selected: '改變影像',
        success_callback: (file) => {

            var loader = new Loader($('.loader-wrapper'));
            loader.start();

            if (file) {
                var data = new FormData();
                data.append('upload', file);
                $.ajax({
                    type: "POST",
                    url: '/upload',
                    data: data,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function(data) {
                        console.log(data)
                        $('#result').show();
                        $result = $('#result').empty();
                        if (data.result) {
                            data = data.data;
                            for (i in data) {
                                $result.append(genBar(data[i]));
                            }
                        }

                        loader.end();
                    }
                });
            }
            // });
        }
    });




});