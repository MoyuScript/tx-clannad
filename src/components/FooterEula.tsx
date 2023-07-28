import React from 'react';

export interface FooterEulaProps {}

const FooterEula: React.FC<FooterEulaProps> = () => {
    return (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
            <p>
                本网络游戏适合年满12岁以上的用户使用：请您确定已如实进行实名注册。为了您的健康，请合理控制休息时间。
            </p>
            <p>
                抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。
            </p>
            <p>
                批准文号：新萌出审[2023]0721号 ISBN: 893-0-0721-1145-14
                粤网文[2023]0721-1919号
            </p>
            <p>出版单位：深渊市藤逊计算机系统有限公司</p>
            <p>本页面纯属恶搞，如有冒犯，拒绝沟通</p>
        </div>
    );
};

export default FooterEula;
