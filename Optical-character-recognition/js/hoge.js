let drag_target = document.getElementById('upload-target'),
    file_target = document.getElementById('upload-file'),
    SelectImg = '',
    Req_flag = true;

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
    let base64 = SelectImg.replace(new RegExp('data.*base64,'), '');
    let json_data = {img : base64};
    $.ajax({
        url: 'https://escape-cors-sprint07.herokuapp.com',
        type: 'POST',
        dataType:'json',
        headers : {'Content-Type' : 'application/json'},
        data: JSON.stringify(json_data)
      }).done(function(resp){
        res_obj = JSON.parse(resp);
        $('#ocr-result').html(res_obj.ocr_result);
        Req_flag = true;
      }).fail(function(err){
        console.error('アップロード失敗...');
        Req_flag = true;
    });
}

function setImage(){
    let img = document.getElementById('preview');
    img.src = SelectImg;
    let imgWidth = img.naturalWidth,
        imgHeight = img.naturalHeight;
    console.log('width:' + imgWidth)
    console.log('height:' + imgHeight)

}