'use client'
import Image from "next/image"
import { Tooltip } from "antd"
const AppStoreButton = ()=>{

    return(
            <Tooltip placement="bottom" title={"아직 준비되지 않았습니다."}>
                <div className="my-8 cursor-pointer" onClick={()=>{console.log('clicked')}}>
                    <Image src={'/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.svg'} height={62} width={200} alt='app store download button'/>
                </div>
            </Tooltip>
    )
}

export default AppStoreButton;