const zh_HK = {
  title: '機器列表',
  default_filter: '預置篩選',
  ungrouped_targets: '未歸組機器',
  all_targets: '全部機器',
  datasource: '數據源',
  search_placeholder: '模糊搜尋表格內容 (多個關鍵詞請用空格分隔)',
  ident_copy_success: '複製成功 {{num}} 條記錄',
  filterDowntime: '無更新超過',
  filterDowntimeMin: '{{count}} 分鐘',
  not_grouped: '未歸組',
  host_ip: 'IP',
  tags: '標籤',
  group_obj: '業務組',
  target_up: '狀態',
  mem_util: '記憶體',
  cpu_util: 'CPU',
  cpu_num: '核數',
  offset: '時間偏移',
  os: '作業系統',
  arch: 'CPU 架構',
  update_at: '更新時間',
  update_at_tip: `
    1分鐘內有過心跳：綠色 <1 />
    3分鐘內有過心跳：黃色 <1 />
    3分鐘內沒有心跳：紅色
  `,
  remote_addr: '來源 IP',
  agent_version: 'Agent 版本',
  note: '備註',
  organize_columns: {
    title: '顯示列',
  },
  targets: '監控機器',
  targets_placeholder: '請填寫監控機器的指標，一行一個',
  copy: {
    current_page: '複製當前頁',
    all: '複製全部',
    selected: '複製所選',
    no_data: '沒有可複製的資料',
  },
  bind_tag: {
    title: '繫結標籤',
    placeholder: '標籤格式為 key=value ，使用回車或空格分隔',
    msg1: '請填寫至少一項標籤！',
    msg2: '標籤格式不正確，請檢查！',
    msg3: '標籤 key 不能重複',
    render_tip1: '標籤長度應小於等於 64 位',
    render_tip2: '標籤格式應為 key=value。且 key 以字母或下劃線開頭，由字母、數字和下劃線組成。',
  },
  unbind_tag: {
    title: '解綁標籤',
    placeholder: '請選擇要解綁的標籤',
    msg: '請填寫至少一項標籤！',
  },
  update_busi: {
    title: '修改業務組',
    label: '歸屬業務組',
  },
  remove_busi: {
    title: '移出業務組',
    msg: '提示資訊：移出所屬業務組，該業務組的管理人員將不再有權限操作這些監控機器！你可能需要提前清空這批監控機器的標籤和備註資訊！',
    btn: '移出',
  },
  update_note: {
    title: '修改備註',
    placeholder: '內容如果為空，表示清空備註資訊',
  },
  batch_delete: {
    title: '批量刪除',
    msg: '提示資訊：該操作會把監控機器從系統內中徹底刪除，非常危險，慎重操作！',
    btn: '刪除',
  },
};

export default zh_HK;
