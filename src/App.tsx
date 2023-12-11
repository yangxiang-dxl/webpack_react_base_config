import React, { useCallback, useEffect, useState } from 'react'
import './index.less'
import {Modal, Button} from 'antd';
import { useDelay } from './hooks';
import TodoList from './newtest';
import AnimatedList from './page';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Calendar from './component/Calendar';

const MyComponent = React.lazy(() => import('./myComponent'))
const HeavyComponent = () => {
    return <div>
        hello
        {
            new Array(500).fill(1).map((item, index) => {
                return <div className='item'>
                    <Button>hello</Button>
                </div>
            })
        }
    </div>
}

const item1 = {
    type: 3,
    id: 0,
    name: "汽车抵押",
    icon_url: "http://cdn-img.ludashi.com/c/202311/23/655f17553e3bd.png",
    version: "",
    update_time: "",
    category: ["实用工具"],
    recommend_lable: 0,
    size: 0,
    brief_desc: "大咖车主贷，有车随心贷",
    detail_desc:
      "0手续费，0押金，0套路。额度大，最高可贷150万。成数高，最高可贷评估价150%。审批快，快速预审最快当天放款。",
    update_log: "",
    download_url: "",
    md5: "",
    install_param: "",
    open_param: "",
    update_rate: 0,
    inside_tool_path: "",
    page_url: "http://www.cdluyi.cn/car-loan/index.html",
    download_name: "",
    // auto_run: '0',
    // is_download: '0',
    // appver: '',
    uninst_param: "",
    pay: false,
    source_enum_value: "",
    list_id: "201192",
    preview_img: [],
  };

  // 这个 item 可以
  const item2 = {
    type: 2,
    id: 0,
    name: "驱动检测",
    icon_url: "static/icon_local_4.png",
    version: "2.0.0.1640",
    update_time: "2022-08-25",
    category: ["驱动检测", "使用工具"],
    recommend_lable: 0,
    size: 15878,
    brief_desc: "专业解决驱动安装更新",
    detail_desc:
      "联合360驱动大师推出百万级的驱动库支持，驱动安装一键化，无需手动操作。独特的驱动体检技术，让你更直观了解您电脑的状态，强大的云安全中心让保证您所下载的驱动不带病毒，快一点，再快一点，体验一键化安装和升级的乐趣。",
    update_log: "解决线上已知BUG",
    download_url: "",
    md5: "",
    install_param: "",
    list_id: "168416",
    open_param: "",
    update_rate: 0,
    inside_tool_path: "\\DrvMgr\\DrvMgr.exe",
    page_url: "",
    download_name: "",
    preview_img: [],
    sizeText: "15.51MB",
  };


  const str1 = encodeURIComponent(JSON.stringify(item1))
  const str2 = encodeURIComponent(JSON.stringify(item2))


function App() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const defer = useDelay();
    const param = useSearchParams();
    console.log('params--->',param)
  return <div className='' >
    hello
    {/* {
        new Array(100).fill(0).map((item, index) => {
            return defer(index) && <HeavyComponent/>
            return <HeavyComponent key={index}/>
        })
    } */}
    {/* <Button>拜托你1</Button> */}
    {/* <AnimatedList /> */}
    <Button type='primary' onClick={() => {
        navigate(`/test?item=${str1}&item2=${str2}`)
    }}>hello</Button>
    <Calendar />
    
  </div>
}
export default App
