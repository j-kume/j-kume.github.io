//=============================================================================
//【ファイル名】
//    item.js
//【アプリ名】
//    XXXマスタ
//【備考】
//
//【タイプ】
//    ●PC用 / ○スマートフォン用
//-----------------------------------------------------------------------------
//  Copyright (c) 2019 XXXXXXX Inc.
//=============================================================================

(function () {

    'use strict';

    // =============================================
    // イベント： 新規保存実行前
    // =============================================
    kintone.events.on([
        'app.record.create.submit'
    ], function (event) {
        let record = event.record;

        return event;
    }); // end kintone.events.on ['app.record.create.submit']

    // =============================================
    // イベント： 編集保存実行前
    // =============================================
    let beforeEditSaveEvents = ['app.record.edit.submit', 'app.record.index.edit.submit'];
    kintone.events.on([
        'app.record.edit.submit', 'app.record.index.edit.submit'
    ], function (event) {
        let record = event.record;

        return event;
    }); // end kintone.events.on [beforeEditSaveEvents]

    // =============================================
    // イベント：登録/詳細画面 表示時
    // =============================================
    kintone.events.on([
        'app.record.create.show','app.record.edit.show', 'app.record.index.edit.show'
    ], function (event) {
        let record = event.record;
        return event;
    }); // end kintone.events.on ['app.record.create.show','app.record.edit.show', 'app.record.index.edit.show']

})();
