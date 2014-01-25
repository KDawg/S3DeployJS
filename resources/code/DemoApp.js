(function ($) {

  initialize();


  function initialize() {
    initAudioChoices();
  }


  function initAudioChoices() {
    $.ajax('./resources/lists/options.json', {
      dataType: 'json',
      success: function cbSuccess(masterList) {
        var DEFAULT_LIST = 0;
        initSoundList(masterList[DEFAULT_LIST]);
      }
    });
  }


  function initSoundList(soundList) {
    var i, prefix, soundEntry;
    var numSounds = soundList.sounds.length;

    $('#SoundList').empty();

    for (i = 0; i < numSounds; i++) {
      soundEntry = soundList.sounds[i];
      prefix = i.toString(10);

      MakeSoundEntry(prefix, soundEntry.audio, soundEntry.word);
      MakeSoundPlayer(prefix)();
    }

    $('#TestTitle').html(soundList.title);
    $('#Lesson').html(soundList.lesson);
  }


  function MakeSoundEntry(index, audioFile, word) {
    var soundList = $('#SoundList');
    var html =
      "<li>" +
        "<div id='StatusSound" + index + "' class='status-none'>&#0149;</div>" +
        "<button id='PlaySound" + index + "'>Play</button>" +
        "<input id='SpellSound" + index + "' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' value='" + word + "' />" +
        "<audio id='HearSound" + index + "' src='" + audioFile + "' preload='auto'></audio>" +
        "</li>";

    soundList.append(html);
  }


  function MakeSoundPlayer(index) {
    return function () {
      var playElName = '#PlaySound' + index;
      var audioElName = '#HearSound' + index;

      $(playElName).on('click', function () {
        $(audioElName).trigger('play')
      });
    }
  }

})(jQuery);