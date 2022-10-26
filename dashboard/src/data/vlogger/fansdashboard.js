import {  FiBarChart} from 'react-icons/fi';
import { BsBoxSeam} from 'react-icons/bs';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';


export const RedFans  = '30,831';
export const DouyinFans = '3,770';

const numRedLikes = '151,000';
const numRedPosts = '87';

const numDouyinLikes = '23,000';
const numDouyinPosts = '59';


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
  