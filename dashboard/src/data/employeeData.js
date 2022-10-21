import avatar from '../images/avatar.png';


const gridEmployeeProfile = (props) => (
    <div className="flex items-center gap-2">
      <img
        className="rounded-full w-10 h-10"
        src={props.EmployeeImage}
        alt="vlogger"
      />
      <p>{props.Name}</p>
    </div>
  );
  
  
export const employeesGrid = [
    { headerText: '博主',
      width: '150',
      template: gridEmployeeProfile,
      textAlign: 'Center' },

    { field: 'Name',
      headerText: '',
      width: '0',
      textAlign: 'Center',
    },

    { field: 'Platform',
      headerText: '主要平台',
      width: '170',
      textAlign: 'Center',
    },

    { field: 'Styles',
      headerText: '风格',
      width: '120',
      textAlign: 'Center' },

    { field: 'FansNumber',
      headerText: '粉丝量级',
      width: '125',
      textAlign: 'Center' },

      { field: 'PostsNumber',
      headerText: '更新数',
      width: '135',
      textAlign: 'Center' },
  ];
  
   

export const employeesData = [
    {
      Name: '巴辣辣',
      Platform: '小红书',
      Styles: '卡通 小女孩 教程',
      FansNumber: '15w+',
      PostsNumber: '300+',
      EmployeeImage:
      avatar,
    },
    {
        Name: '一只八子',
        Platform: '小红书',
        Styles: '人物 女孩头像',
        FansNumber: '15w+',
        PostsNumber: '300+',
        EmployeeImage:
        avatar,
    },
    {
        Name: '核桃',
        Platform: '小红书',
        Styles: '手帐 教程',
        FansNumber: '5w+',
        PostsNumber: '300+',
        EmployeeImage:
        avatar,
    },
   
 
  

      
  ];