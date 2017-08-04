(function($) {


    $.extend({
        uploadPreview: function(options) {

            // Options + Defaults
            var settings = $.extend({
                input_field: ".image-input",
                preview_box: ".image-preview",
                label_field: ".image-label",
                label_default: "Choose File",
                label_selected: "Change File",
                dragenter_style: "2px solid #0B85A1",
                drop_style: "2px dotted #0B85A1",
                no_label: false,
                success_callback: null,
            }, options);


            // add Drag and Drop effect
            var dragDropEffect = function() {
                // add Drag and Drop effect
                $(settings.preview_box).on('dragenter', function(event) {
                    event.stopPropagation();
                    event.preventDefault();
                    $(this).css('border', settings.dragenter_style);
                });
                $(settings.preview_box).on('dragover', function(event) {
                    event.stopPropagation();
                    event.preventDefault();  
                });
                $(settings.preview_box).on('drop', function(event) {     
                    $(this).css('border', settings.drop_style);     
                    event.preventDefault();     
                    var files = event.originalEvent.dataTransfer.files;
                    loadFiles(files);
                });

                $(document).on('dragenter', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                });
                $(document).on('dragover', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(settings.preview_box).css('border', settings.drop_style);
                });
                $(document).on('drop', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                });
            };

            var loadFiles = function(files) {
                var reader = new FileReader();
                if (files.length > 0) {
                    var file = files[0];
                    // Load file
                    reader.addEventListener("load", function(event) {
                        var loadedFile = event.target;

                        if (file.type.match('image')) {
                            // Image
                            $(settings.preview_box).css("background-image", "url(" + loadedFile.result + ")");
                            $(settings.preview_box).css("background-size", "cover");
                            $(settings.preview_box).css("background-position", "center center");
                            $(settings.preview_box).css("boder", settings.drop_style);
                        } else if (file.type.match('audio')) {
                            // Audio
                            $(settings.preview_box).html("<audio controls><source src='" + loadedFile.result + "' type='" + file.type + "' />Your browser does not support the audio element.</audio>");
                        } else {
                            alert("This file type is not supported yet.");
                        }
                    });

                    if (settings.no_label == false) {
                        // Change label
                        $(settings.label_field).html(settings.label_selected);
                    }

                    // Read the file
                    reader.readAsDataURL(file);

                    // Success callback function call
                    if (settings.success_callback) {
                        settings.success_callback(file);
                    }
                } else {
                    if (settings.no_label == false) {
                        // Change label
                        $(settings.label_field).html(settings.label_default);
                    }

                    // Clear background
                    $(settings.preview_box).css("background-image", "none");

                    // Remove Audio
                    $(settings.preview_box + " audio").remove();
                }
            };

            // Check if FileReader is available
            if (window.File && window.FileList && window.FileReader) {
                if (typeof($(settings.input_field)) !== 'undefined' && $(settings.input_field) !== null) {


                    dragDropEffect();


                    $(settings.input_field).change(function() {
                        var files = this.files;

                        loadFiles(files);

                    });
                }
            } else {
                alert("You need a browser with file reader support, to use this form properly.");
                return false;
            }
        }
    });
})(jQuery);