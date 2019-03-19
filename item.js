//=============================================================================
//【ファイル名】
//    item.js
//【アプリ名】
//    商品マスタ
//【備考】
//
//【タイプ】
//    ●PC用 / ○スマートフォン用
//-----------------------------------------------------------------------------
//  Copyright (c) 2019 Sonic Garden Inc.
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

        // kintoneからのデータ取得
        return kintone.api(kintone.api.url('/k/v1/records', true), 'GET', {
            "app": kintone.app.getId(),
            "query": 'order by uid desc limit 1',
            "totalCount": true
        }).then(
            function(resp) {
                console.log("商品情報取得完了");
                console.log(resp);

                if (Number(resp.records.length) === 0) {
                    window.alert('対象データがありませんでした。');
                } else {

                    // 取得した商品データを格納
                    let itemRecords = resp.records;

                    record.uid.value = Number(itemRecords[0].uid.value) + 1;
                    record.no.value = ('0000' + record.uid.value).slice(-4);
                    record.lookup_key.value = record.no.value + ' ' + record.name.value;

                    return event;
                }
            },
            function(error) {
                console.log(error);
                console.log("データ取得失敗");
                return event;
            });
    }); // end kintone.events.on ['app.record.create.submit']

    // =============================================
    // イベント： 編集保存実行前
    // =============================================
    let beforeEditSaveEvents = ['app.record.edit.submit', 'app.record.index.edit.submit'];
    kintone.events.on([
        'app.record.edit.submit', 'app.record.index.edit.submit'
    ], function (event) {
        let record = event.record;

        record.lookup_key.value = record.no.value + ' ' + record.name.value;

        return event;
    }); // end kintone.events.on [beforeEditSaveEvents]

    // =============================================
    // イベント：登録/詳細画面 表示時
    // =============================================
    kintone.events.on([
        'app.record.create.show','app.record.edit.show', 'app.record.index.edit.show'
    ], function (event) {
        let record = event.record;
        record.uid.disabled = true;
        record.no.disabled = true;
        record.lookup_key.disabled = true;
        return event;
    }); // end kintone.events.on ['app.record.create.show','app.record.edit.show', 'app.record.index.edit.show']

})();
