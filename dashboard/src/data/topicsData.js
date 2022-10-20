export const kanbanGrid = [
  { headerText: '想法',
    keyField: 'Open',
    allowToggle: true },

  { headerText: '连载中',
    keyField: 'InProgress',
    allowToggle: true },

  { headerText: '已更完',
    keyField: 'Done',
    allowToggle: true,
    isExpanded: true },

  { headerText: '已停更',
    keyField: 'Close',
    allowToggle: true,
    isExpanded: false  },
];

export const kanbanData = [
  {
    Id: '三丽鸥系列',
    Status: 'Done',
    Summary: '三丽鸥',
    Assignee: '小红书',
  },
  {
    Id: '动物系列',
    Status: 'InProgress',
    Summary: '三丽鸥',
    Assignee: '小红书',
  },
  {
    Id: '花朵系列',
    Status: 'Done',
    Summary: '三丽鸥',
    Assignee: '小红书',
  },
  {
    Id: '节日系列',
    Status: 'InProgress',
    Summary: '三丽鸥',
    Assignee: '小红书',
  },
  {
    Id: '插画系列',
    Status: 'Close',
    Summary: '三丽鸥',
    Assignee: '小红书',
  },
  {
    Id: 'Vlog系列',
    Status: 'Close',
    Summary: '合集爆款',
    Assignee: '抖音',
  },
  
];

