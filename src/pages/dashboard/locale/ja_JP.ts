const ja_JP = {
  title: "監視ダッシュボード",
  name: "ダッシュボード名",
  tags: "カテゴリータグ",
  ident: "英語識別子",
  ident_msg: "アルファベット、数字、アンダースコアを入力してください",
  search_placeholder: "ダッシュボード名、カテゴリータグ",
  refresh_tip: "更新間隔が{{num}}s未満の場合、データは更新されません",
  refresh_btn: "更新",
  share_btn: "共有",
  export_btn: "エクスポート（CSV）",
  clear_cache_btn: "キャッシュをクリア",
  clear_cache_btn_tip:
    "テーブルの列幅キャッシュをクリアします。ページをリフレッシュすると有効になります",
  inspect_btn: "調査",
  public: {
    name: "公開",
    unpublic: "非公開",
    public_cate: "タイプ",
    cate: {
      "0": "匿名アクセス",
      "1": "ログインアクセス",
      "2": "認証アクセス",
    },
    bgids: "認証ビジネスグループ",
  },
  default_filter: {
    title: "デフォルトフィルタ",
    public: "公開ダッシュボード",
    all: "所属ビジネスグループのダッシュボード",
    all_tip:
      "このオプションは、所属するビジネスグループに結びついたすべてのダッシュボードを表示します",
  },
  create_title: "ダッシュボードを作成",
  edit_title: "ダッシュボードを編集",
  add_panel: "グラフを追加",
  cluster: "クラスター",
  full_screen: "全画面",
  exit_full_screen: "全画面を退出",
  copyPanelTip:
    'グラフがコピーされました。"グラフを追加"をクリックして貼り付けてください。',
  batch: {
    import: "ダッシュボードをインポート",
    label: "ダッシュボード JSON",
    import_grafana: "Grafanaダッシュボードをインポート",
    import_grafana_tip:
      "インポートされたグラフは、夜莺が現在サポートしているグラフタイプと機能のみをサポートします。<a>問題フィードバック</a>",
    import_grafana_tip_version_error:
      "v7未満のバージョンのダッシュボード設定をインポートすることはできません",
    import_grafana_tip_version_warning:
      "v8未満のバージョンのダッシュボード設定をインポートする場合、部分のグラフがサポートされていない、またはグラフが正常にレンダリングされない問題が発生する可能性があります",
    continueToImport: "インポートを続行",
    noSelected: "ダッシュボードを選択してください",
    import_builtin: "内蔵ダッシュボードをインポート",
    import_builtin_board: "内蔵ダッシュボード",
    clone: {
      name: "名前",
      result: "結果",
      errmsg: "エラー情報",
    },
  },
  link: {
    title: "ダッシュボードリンク",
    name: "リンク名",
    url: "リンクアドレス",
    url_tip:
      "\n      変数の使用方法\n      <1 />\n      ${variable_name}: ダッシュボード変数値を表示\n      <1 />\n      ${__field.name}: シーケンス名を表示\n      <1 />\n      ${__field.value}: シーケンス値を表示\n      <1 />\n      ${__field.labels.X}: 指定したラベル値を表示\n      <1 />\n      ${__field.labels.__name__}: 指標名を表示\n      <1 />\n      ${__from}: 開始時間, ミリ秒\n      <1 />\n      ${__from_date_seconds}: 開始時間, 秒\n      <1 />\n      ${__from_date_iso}: 開始時間, ISO 8601/RFC 3339\n      <1 />\n      上記の構文は ${__to} に適用されます\n      ",
    isNewBlank: "新しいウィンドウで開くかどうか",
  },
  var: {
    btn: "変数を追加",
    title: {
      list: "変数リスト",
      add: "変数を追加",
      edit: "変数を編集",
    },
    name: "変数名",
    name_msg: "数字とアンダースコアのみをサポート",
    label: "表示名",
    type: "変数タイプ",
    type_map: {
      query: "クエリ (Query)",
      custom: "カスタム (Custom)",
      textbox: "テキストボックス (Text box)",
      constant: "定数 (Constant)",
      datasource: "データソース (Datasource)",
      hostIdent: "ホスト識別子 (Host ident)",
      businessGroupIdent: "ビジネスグループ識別子 (Business group ident)",
    },
    hide: "変数を非表示",
    hide_map: {
      yes: "はい",
      no: "いいえ",
    },
    definition: "変数定義",
    definition_msg1: "変数定義を入力してください",
    definition_msg2: "変数定義は有効なJSONでなければなりません",
    reg: "正規表現",
    reg_tip:
      "オプション、オプションをフィルタリングするか値を抽出するために正規表現を使用できます。ここに記入するのは<a>正規表現リテラル</a>で、それはスラッシュで囲まれたパターンで構成されます",
    multi: "複数選択",
    allOption: "全選択を含む",
    allValue: "カスタム全選択値",
    textbox: {
      defaultValue: "デフォルト値",
      defaultValue_tip:
        "オプション、初回のロード時のデフォルト値としてのみ使用",
    },
    custom: {
      definition: "カンマ区切りのカスタム値",
    },
    constant: {
      definition: "定数値",
      defaultValue_tip: "非表示の定数値を定義",
    },
    datasource: {
      definition: "データソースタイプ",
      defaultValue: "デフォルト値",
      regex: "データソースフィルタ",
      regex_tip:
        "オプション、オプションをフィルタリングするために正規表現を使用できます。ここに記入するのは<a>正規表現リテラル</a>で、それはスラッシュで囲まれたパターンで構成されます。",
    },
    businessGroupIdent: {
      ident: "ビジネスグループ識別子",
      invalid:
        "現在のビジネスグループの識別子が見つかりません。ビジネスグループ管理設定に行ってください",
    },
  },
  row: {
    edit_title: "グループを編集",
    delete_title: "グループを削除",
    name: "グループ名",
    delete_confirm: "グループを削除しますか？",
    cancel: "キャンセル",
    ok: "グループとチャートを削除",
    ok2: "グループのみを削除",
  },
  panel: {
    title: {
      add: "チャートを追加",
      edit: "チャートを編集",
    },
    base: {
      title: "パネル設定",
      name: "タイトル",
      name_tip:
        "テーブルタイプのチャートはタイトルを設定する必要があります。そうしないとパネル編集がテーブルヘッダーと競合します",
      link: {
        label: "リンク",
        btn: "追加",
        name: "リンク名",
        name_msg: "リンク名を入力してください",
        url: "リンクアドレス",
        url_msg: "リンクアドレスを入力してください",
        isNewBlank: "新しいウィンドウで開くかどうか",
      },
      description: "備考",
      repeatOptions: {
        title: "チャートの繰り返し",
        byVariable: "変数",
        byVariableTip: "変数の値によってチャートを繰り返す",
        maxPerRow: "1行あたりの最大表示数",
      },
    },
    options: {
      legend: {
        displayMode: {
          label: "表示モード",
          table: "テーブル",
          list: "リスト",
          hidden: "非表示",
        },
        placement: "位置",
        max: "最大値",
        min: "最小値",
        avg: "平均値",
        sum: "合計値",
        last: "現在値",
        columns: "表示列",
        behaviour: {
          label: "クリックで行動",
          showItem: "アイテムを表示",
          hideItem: "アイテムを非表示",
        },
        selectMode: {
          label: "選択モード",
          single: "単一選択",
          multiple: "複数選択",
        },
        heightInPercentage: "高さパーセンテージ",
        heightInPercentage_tip:
          "Legendの高さはパネルの最大高さのパーセンテージを占めます。最小値は20%、最大値は80%です",
      },
      thresholds: {
        title: "しきい値",
        btn: "追加",
      },
      tooltip: {
        mode: "モード",
        sort: "ソート",
      },
      valueMappings: {
        title: "値マッピング",
        btn: "追加",
        type: "条件",
        type_tip:
          "\n          <0>範囲値のデフォルト値: from=-Infinity; to=Infinity </0>\n          <1>特殊値Nullの説明: null、undefined、no dataに一致</1>\n        ",
        type_map: {
          special: "固定値(数値)",
          textValue: "固定値(テキスト値)",
          range: "範囲値",
          specialValue: "特殊値",
        },
        value_placeholder: "精確に一致する値",
        text: "表示テキスト",
        text_placeholder: "オプション",
        color: "色",
        operations: "操作",
      },
      colors: {
        name: "色設定",
        scheme: "色のスキーム",
        reverse: "色を反転",
      },
    },
    standardOptions: {
      title: "高度な設定",
      unit: "単位",
      unit_tip:
        "\n        <0>デフォルトでは SI Prefixes が適用されます。デフォルトの処理をしたくない場合は none を選択してください</0>\n        <1>Data(SI): 基数は1000、単位はB、kB、MB、GB、TB、PB、EB、ZB、YB</1>\n        <2>Data(IEC): 基数は1024、単位はB、KiB、MiB、GiB、TiB、PiB、EiB、ZiB、YiB</2>\n        <3>bits: b</3>\n        <4>bytes: B</4>\n      ",
      datetime: "時間のフォーマット",
      min: "最小値",
      max: "最大値",
      decimals: "小数点以下桁数",
      displayName: "表示名",
      displayName_tip: "シリーズ名をカスタム",
    },
    overrides: {
      matcher: {
        id: "マッチングタイプ",
        byFrameRefID: {
          option: "クエリ条件名による",
          name: "クエリ条件名",
        },
        byName: {
          option: "フィールド名による",
          name: "フィールド名",
        },
      },
    },
    custom: {
      title: "チャートスタイル",
      calc: "値の計算",
      calc_tip:
        "時系列データにはすべての時間点のデータを計算する必要があります。非時系列データはこの設定を無視します",
      maxValue: "最大値",
      baseColor: "基本色",
      serieWidth: "シリーズ名の幅",
      sortOrder: "並び順",
      textMode: "表示モード",
      valueAndName: "値と名前",
      value: "値",
      name: "名前",
      background: "背景",
      colorMode: "色のモード",
      valueField: "値のフィールド",
      valueField_tip:
        "Valueは予約語であり、時系列データの計算後のフィールド名として使用されます",
      valueField_tip2: "数値型のフィールドを選択する必要があります",
      nameField: "名前のフィールド",
      nameField_tip: "シリーズの名前として名前のフィールドの値を使用します",
      colSpan: "1行あたりの最大表示数",
      colSpanTip:
        'すぐに廃止されます。"自動"オプションを選択すると、下のレイアウト方向の設定が使用されます',
      colSpanAuto: "自動",
      textSize: {
        title: "タイトルのフォントサイズ",
        value: "値のフォントサイズ",
      },
      colorRange: "色",
      reverseColorOrder: "色の順序を反転",
      colorDomainAuto: "自動 min/max 値",
      colorDomainAuto_tip:
        "デフォルトでは、シリーズからminとmaxの値を自動的に取得します",
      fontBackground: "文字の背景色",
      detailName: "リンク名",
      detailUrl: "リンクアドレス",
      stat: {
        graphMode: "チャートモード",
        none: "表示しない",
        area: "ミニチャート",
        orientation: "レイアウト方向",
        orientationTip:
          '"自動"を選択すると、チャートの幅と高さに応じて自動的にレイアウト方向が選択されます',
        orientationValueMap: {
          auto: "自動",
          vertical: "垂直",
          horizontal: "水平",
        },
      },
      pie: {
        countOfValueField: "値フィールドのカウント",
        countOfValueField_tip:
          '有効にすると、"値フィールド"の値に基づいてカウントします。そうでない場合は、"値フィールド"の値をデータとして表示します',
        legengPosition: "凡例の位置",
        max: "最大表示ブロック数",
        max_tip:
          "指定したブロック数を超える場合は、他のブロックとしてまとめて表示します",
        donut: "ドーナツチャートモード",
        labelWithName: "ラベルに名前を含める",
        labelWithValue: "ラベルに値を表示する",
        detailName: "リンク名",
        detailUrl: "リンクアドレス",
      },
      table: {
        displayMode: "表示モード",
        showHeader: "ヘッダーを表示",
        seriesToRows: "シリーズの値を1行に表示",
        labelsOfSeriesToRows: "ラベルの値を1行に表示",
        labelValuesToRows: "指定した集計次元の値を1行に表示",
        columns: "表示する列",
        aggrDimension: "表示する次元",
        sortColumn: "デフォルトの並び順の列",
        sortOrder: "デフォルトの並び順",
        link: {
          mode: "リンクモード",
          cellLink: "セルリンク",
          appendLinkColumn: "リンク列を追加",
        },
        tableLayout: {
          label: "テーブルレイアウト",
          label_tip:
            "固定レイアウトでは、列のデフォルト幅は列数に応じて均等になり、横スクロールバーは表示されません。自動レイアウトでは、列のデフォルト最大幅は150pxで、テーブルの内容がはみ出すと横スクロールバーが表示されます。",
          auto: "自動",
          fixed: "固定",
        },
        nowrap: "セルを折り返さない",
        organizeFields: "フィールドの整理",
        colorMode_tip:
          '色モードは"値フィールド"の色設定に影響します。値モードでは、色が値のテキストに適用されます。背景モードでは、色がフィールドが含まれるセルの背景色に適用されます。',
      },
      text: {
        textColor: "テキストの色",
        textDarkColor: "ダークテキストの色",
        bgColor: "背景の色",
        textSize: "テキストのサイズ",
        justifyContent: {
          name: "水平方向の配置",
          unset: "設定しない",
          flexStart: "左寄せ",
          center: "中央寄せ",
          flexEnd: "右寄せ",
        },
        alignItems: {
          name: "垂直方向の配置",
          unset: "設定しない",
          flexStart: "上寄せ",
          center: "中央寄せ",
          flexEnd: "下寄せ",
        },
        content: "コンテンツ",
        content_placeholder: "MarkdownとHTMLをサポート",
        content_tip:
          "\n          <0>デフォルトはシンプルモードで、上記の設定でシンプルなカードスタイルをカスタマイズできます</0>\n          <1>MarkdownとHTMLをサポート</1>\n          <2>MarkdownまたはHTMLを入力する場合は、上記の配置設定を閉じることをお勧めします</2>\n        ",
      },
      timeseries: {
        drawStyle: "描画モード",
        lineInterpolation: "ライン補間",
        spanNulls: "空値を結ぶ",
        spanNulls_0: "オフ",
        spanNulls_1: "オン",
        lineWidth: "ラインの幅",
        fillOpacity: "透明度",
        gradientMode: "グラデーション",
        gradientMode_opacity: "オン",
        gradientMode_none: "オフ",
        stack: "スタック",
        stack_noraml: "オン",
        stack_off: "オフ",
        yAxis: {
          title: "Y軸の設定",
          rightYAxis: {
            label: "右側Y軸を表示",
            noraml: "オン",
            off: "オフ",
          },
        },
        showPoints: "ポイントを表示",
        showPoints_always: "表示",
        showPoints_none: "非表示",
        pointSize: "ポイントのサイズ",
      },
      iframe: {
        src: "iframeのURL",
      },
      heatmap: {
        xAxisField: "X軸",
        yAxisField: "Y軸",
        valueField: "値のフィールド",
      },
      barchart: {
        xAxisField: "X軸",
        yAxisField: "Y軸",
        colorField: "色のフィールド",
        barMaxWidth: "棒の最大幅",
        colorField_tip: "Nameは予約語であり、シリーズ名の値として使用されます",
      },
      barGauge: {
        topn: "最大表示数",
        combine_other: "その他",
        combine_other_tip:
          "最大表示数を超えるデータは、その他の項目としてまとめられます",
      },
    },
    inspect: {
      title: "検査",
      query: "クエリ",
      json: "チャート設定",
    },
  },
  export: {
    copy: "JSONの内容をクリップボードにコピー",
  },
  query: {
    title: "クエリ条件",
    transform: "データ変換",
    datasource_placeholder: "データソースを選択してください",
    datasource_msg: "データソースを選択してください",
    time: "時間選択",
    time_tip:
      "時間範囲を指定できます。デフォルトはダッシュボード全体の時間範囲です",
    prometheus: {
      maxDataPoints: {
        tip: "各曲線の最大データポイント数、計算式: step = (end - start) / maxDataPoints、デフォルト値は240で、最近1時間内のstepは15sです",
      },
      minStep: {
        tip: "最小のstep、計算式: step = max(step, minStep, safeStep)、safeStep = (end - start) / 11000",
      },
      step: {
        tag_tip:
          "計算式: step = max((end - start) / maxDataPoints, minStep, safeStep)、safeStep = (end - start) / 11000",
      },
    },
    expression_placeholder:
      "1つ以上のクエリに対して数学演算を行います。クエリを${refId}で参照し、例えば$A、$B、$Cなどです。2つのスカラ値の合計:$A + $B > 10",
    legendTip:
      "凡例名のオーバーライドまたはテンプレート、例えば{{hostname}}はhostnameラベルの値に置き換えられます",
    legendTip2:
      "凡例名のオーバーライドまたはテンプレート、例えば{{hostname}}はhostnameラベルの値に置き換えられます、現在は時系列データのみで有効です",
  },
  detail: {
    datasource_empty:
      "データソース情報がありません。まずデータソースを設定してください",
    invalidTimeRange: "無効な__fromと__toの値",
    invalidDatasource: "無効なデータソース",
    fullscreen: {
      notification: {
        esc: "全画面モードを終了するにはESCキーを押してください",
        theme: "テーマの切り替え",
      },
    },
    saved: "保存成功",
    expired:
      "ダッシュボードが他のユーザーによって変更されています。衝突を避けるために、ダッシュボードを最新の設定とデータで更新してください",
    prompt: {
      title: "保存されていない変更があります",
      message: "変更を保存しますか？",
      cancelText: "キャンセル",
      discardText: "放棄",
      okText: "保存",
    },
    noPanelToPaste: "貼り付け可能なグラフがありません",
  },
  settings: {
    graphTooltip: {
      label: "ツールチップ",
      tip: "すべてのグラフのツールチップの動作を制御",
      default: "デフォルト",
      sharedCrosshair: "共有十字線",
      sharedTooltip: "共有ツールチップ",
    },
    graphZoom: {
      label: "ズームの動作",
      tip: "すべてのグラフのズームの動作を制御",
      default: "デフォルト",
      updateTimeRange: "時間範囲を更新",
    },
  },
  visualizations: {
    timeseries: "時系列グラフ",
    barchart: "棒グラフ",
    stat: "指標値",
    table: "テーブル",
    pie: "円グラフ",
    hexbin: "六角ビン",
    barGauge: "ランキング",
    text: "テキストカード",
    gauge: "ゲージ",
    heatmap: "ヒートマップ",
    iframe: "内蔵文書(iframe)",
    row: "グループ",
    pastePanel: "グラフを貼り付け",
  },
  calcs: {
    lastNotNull: "最後の非空値",
    last: "最後の値",
    firstNotNull: "最初の非空値",
    first: "最初の値",
    min: "最小値",
    max: "最大値",
    avg: "平均値",
    sum: "合計",
    count: "数",
    origin: "元の値",
  },
};

export default ja_JP;
