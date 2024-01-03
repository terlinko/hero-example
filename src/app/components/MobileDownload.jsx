'use client'
import { CloseOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

const MobileDownload = ()=>{
    const [mobile, setMobile] = useState(false);
    const [hide, setHide] = useState(false);
    useEffect(()=>{setMobile(isMobile)},[]);
    return(
            mobile&&!hide ?
            <div className="fixed drop-shadow z-50 bottom-0 w-full h-24 bg-opacity-95 bg-white text-black flex items-center justify-between">
            <div className="flex items-center">
                <div className="p-4" onClick={()=>{setHide(true)}}>
                    <CloseOutlined />
                </div>
                <div className="p-2">
                    <Image className="rounded-xl" src={'/logo-3.png'} width={64} height={64} alt='App logo' />
                </div>
                <div>
                    <div className=" font-bold">
                        KTS
                    </div>
                    <div className="text-sm">
                        대한민국을
                        <br/>티셔츠에 담으세요
                    </div>
                </div>
            </div>
            <Tooltip title={"아직 준비되지 않았습니다."}>
                <div className="bg-black text-white drop-shadow-md rounded-lg p-1.5 mr-4">
                    다운로드
                </div>
            </Tooltip>
            </div> : <></>

    )
}

export default MobileDownload;