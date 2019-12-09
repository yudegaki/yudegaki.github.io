let drag_target = document.getElementById('upload-target'),
    file_target = document.getElementById('upload-file'),
    SelectImg = '',
    Req_flag = true,
    VOICE_API_KEY = 'plfl6q32q6t6s8ly';

drag_target.addEventListener('dragover', function (e) {
	e.preventDefault();
	e.stopPropagation();
	e.dataTransfer.dropEffect = 'copy';
});

drag_target.addEventListener('drop', function (e) {
	e.stopPropagation();
	e.preventDefault();
	const reader = new FileReader();
	reader.onload = function (e) {
        SelectImg = e.target.result;
        setImage();
    }
    reader.readAsDataURL(e.dataTransfer.files[0]);
});

file_target.addEventListener("change", function(e){
    let file = e.target.files,
        reader = new FileReader();
    //dataURL形式でファイルを読み込む
    reader.readAsDataURL(file[0]);
    //ファイルの読込が終了した時の処理
    reader.onload = function(){
      let dataUrl = reader.result;
      SelectImg = dataUrl;
      setImage();
    }
},false);

function SendImage(){
    if(!Req_flag)return;
    Req_flag = false;
    if(SelectImg == ''){
        alert('ゴミカスーーーーーー！　画像を選択してから送れーーーーー！');
        return;
    }
    //loadingイベントを挿入
    $('#add_loader').addClass('loader');
    
    let base64 = SelectImg.replace(new RegExp('data.*base64,'), '');
    let json_data = {img : base64};
    $.ajax({
        url: 'https://escape-cors-sprint07.herokuapp.com',
        type: 'POST',
        dataType:'json',
        headers : {'Content-Type' : 'application/json'},
        responseType:'arraybuffer',
        data: JSON.stringify(json_data)
      }).done((resp)=>{
        res_obj = JSON.parse(resp);
        $('#ocr-result').html(res_obj.ocr_result);
        Req_flag = true;
        $('#add_loader').removeClass('loader');
      }).fail((err)=>{
        console.error('アップロード失敗...');
        Req_flag = true;
        $('#add_loader').removeClass('loader');
    });
}

function setImage(){
    let img = document.getElementById('preview');
    img.src = SelectImg;
    img.onload = ()=>{
        let imgWidth = img.naturalWidth,
            imgHeight = img.naturalHeight;
        let client_w = document.getElementById('preview-target').clientWidth,
            client_h = document.getElementById('preview-target').clientHeight,
            set_px = Math.min(client_w,client_h);
        if(imgWidth > imgHeight){
            let per = imgHeight / imgWidth * set_px;
            $('#preview').css({
                'width' : set_px,
                'height' : per 
            })
        }  
        else{
            let per = imgWidth / imgHeight * set_px;
            $('#preview').css({
                'width' : per ,
                'height' : set_px
            })
        }
    }
}

function GetVoiceWAV(){
    Req_flag = false;
    $('#add_loader').addClass('loader');
    let send_text = $('#ocr-result').text();
    if(send_text == '')send_text='hello';
    console.log(send_text);
    let json_data = {
        format : 'wav',
        text : send_text
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://escape-cors-sprint07.herokuapp.com/voiceapi');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = 'arraybuffer';
    xhr.onload = function(e){
        $('#add_loader').removeClass('loader');
        PlayWav(this.response);
    }
    xhr.send(JSON.stringify(json_data));
}

function PlayWav(arrayBuffer){
    // AudioContextを作成
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx = new AudioContext();

    // decode処理
    audioCtx.decodeAudioData(arrayBuffer,(audioBuffer)=>{
        // AnalyserNodeを作成
        let analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        // AudioNodeを作成
        let source = audioCtx.createBufferSource();
        // bufferプロパティにAudioBufferを指定
        source.buffer = audioBuffer;
        // 音声出力先を指定
        source.connect(audioCtx.destination);
        // AnalyserNodeを指定
        source.connect(analyser);    

        //再生スタート
        source.start(0);
        $('#play')[0].setAttribute('disabled', 'disabled');
    });
    
}