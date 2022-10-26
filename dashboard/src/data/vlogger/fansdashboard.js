

import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import {  FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';

export const RedFans  = '30,831';
export const DouyinFans = '3,770';

const numRedLikes = '151,000';
const numRedPosts = '87';

const numDouyinLikes = '23,000';
const numDouyinPosts = '59';



export const weekReportHighlight = [
    {
      icon: <BsCurrencyDollar />,
      amount: '2021/09/12',
      title: '爆款笔记',
      desc: '桃花',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'green-600',
    },
    {
      icon: <BsShield />,
      amount: '2022/02/03',
      title: '活动推广',
      desc: '宫崎骏',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
      pcColor: 'red-600',
    },
    {
      icon: <FiCreditCard />,
      amount: '2021/02/03',
      title: '节日热点',
      desc: '牛年壁纸',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'green-600',
    },
    {
      icon: <TiTick />,
      amount: '2021/02/03',
      title: '节日热点2',
      desc: '牛年壁纸',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
      pcColor: 'green-600',
    },
    {
        icon: <TiTick />,
        amount: '2021/02/03',
        title: '节日热点3',
        desc: '牛年壁纸',
        iconColor: 'rgb(228, 106, 118)',
        iconBg: 'rgb(255, 244, 229)',
        pcColor: 'green-600',
      },

  ];

  export const SparklineAreaData = [
    { x: 1, yval: 2 },
    { x: 2, yval: 6 },
    { x: 3, yval: 8 },
    { x: 4, yval: 5 },
    { x: 5, yval: 10 },
    { x: 6, yval: 9 },
    { x: 7, yval: 14 },
  
  ];
  
  export const weeklyStats = [
    {
      icon: <FiShoppingCart />,
      amount: '23000',
      title: '最多赞',
      desc: '三丽鸥 2022/02/01',
      iconBg: '#FB9678',
      pcColor: 'red-600',
    },
    {
      icon: <FiStar />,
      amount: '-$560',
      title: '最多收入',
      desc: '直播课 2021/08/21',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'red-600',
    },
    {
      icon: <BsChatLeft />,
      amount: '7000',
      title: '最多收藏',
      desc: '重绘童年',
      iconBg: '#00C292',
      pcColor: 'green-600',
    },
  ];
  

export const fansData = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: numRedLikes,
      percentage: '+1%',
      title: '小红书赞+收藏',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'green-600',
    },
    {
      icon: <BsBoxSeam />,
      amount: numRedPosts,
      percentage: '+2%',
      title: '小红书笔记数',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'green-600',
    },
    {
      icon: <FiBarChart />,
      amount: numDouyinLikes,
      percentage: '+1%',
      title: '抖音点赞数',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
  
      pcColor: 'green-600',
    },
    {
      icon: <HiOutlineRefresh />,
      amount: numDouyinPosts,
      percentage: '+2%',
      title: '抖音笔记数',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'green-600',
    },
  ];
  