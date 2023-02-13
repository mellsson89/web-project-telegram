import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from './styled/activation.module.scss'
import {useTranslation} from "react-i18next";
const ActivationSection = () => {
    const {t} = useTranslation();
    return (
        <section className={styled.section}>
            <div className={styled.oval}></div>
            <div className={styled.oval_two}></div>
            <h3 className={styled.title}>{t?.("activation.TitleOnePartOne")}<br /><span style={{color:'rgb(68, 165, 250)'}}>{t?.("activation.TitleOnePartTwo")}</span><br />{t?.("activation.TitleOnePartThree")}</h3>
            <Tabs className={styled.tabs}>

                    <TabList className={styled.tabs_list} >
                        <Tab><span className={styled.icon_one}>{t?.("activation.TextTabOne")}</span></Tab>
                        <Tab><span className={styled.icon_two}>{t?.("activation.TextTabTwo")}</span></Tab>
                        <Tab><span className={styled.icon_three}>{t?.("activation.TextTabThree")}</span></Tab>
                    </TabList>

                <div>
                    <TabPanel>
                        <div className={styled.tabs_custom}>
                            <h5 className={styled.tabs_title}>{t?.("activation.TextTabOne")}</h5>
                            <Tabs>
                                <TabList className={styled.tab_list}>
                                    <Tab>Curl(Bash)</Tab>
                                    <Tab>Python</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className={styled.tabs_content}>
                                        <pre style={{color:'white', lineHeight:'25px'}}>curl \ <br />
                                            -d '' \<br />
                                            -H 'accept: application/json' \<br />
                                            -H 'Authorization: Bearer &lt;Your token&gt;' \<br />
                                            -X 'POST' \<br />
                                            'https://userbot-api.tech/api/v1/telegram/send_message? <br /> chat_id=1234567890&amp;message=Hello%20World%21' \</pre>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className={styled.tabs_content}>
                                        <pre style={{color:'white', lineHeight:'25px'}}>
                                            import requests <br />
                                            r = requests.post("https://userbot-api.tech/api/v1/ <br />telegram/send_message", < br />
                                            {'params = {'}<br />
                                            "chat_id": "1234567890",<br />
                                            {'}, headers = {'} <br />
                                            "Authorization": "Bearer &lt;Your token>&gt;
                                            {'})'} <br />
                                            print(r.status_code, r.json())
                                        </pre>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className={styled.tabs_custom}>
                            <h5 className={styled.tabs_title}>{t?.("activation.TextTabTwo")}</h5>
                            <Tabs>
                                <TabList className={styled.tab_list}>
                                    <Tab>Curl(Bash)</Tab>
                                    <Tab>Python</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className={styled.tabs_content}>
                                        <pre style={{color:'white', lineHeight:'25px'}}>curl \ <br />
                                            -d '' \<br />
                                            -H 'accept: application/json' \<br />
                                            -H 'Authorization: Bearer &lt;Your token&gt;' \<br />
                                            -X 'POST' \<br />
                                            'https://userbot-api.tech/api/v1/telegram/send_photo? <br />chat_id=1234567890&photo_url=https%3A%2 <br />F%2Fvia.placeholder.com%2
                                            F300%3Ftext%3DTest'\</pre>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className={styled.tabs_content}>
                                        <pre style={{color:'white', lineHeight:'25px'}}>
                                            import requests <br />
                                            r = requests.post("https://userbot-api.tech/api/v1/telegram<br />/send_photo", params
                                            {'= {'}
                                            "chat_id": "1234567890", <br />
                                            "photo_url": "https://via.placeholder.com/300?text=Test" <br/>
                                            "caption": "Caption text" <br/>
                                            {'}, headers = {'} <br />
                                            "Authorization": "Bearer &lt;Your token&gt;"
                                            {'})'}
                                        </pre>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className={styled.tabs_custom}>
                            <h5 className={styled.tabs_title}>{t?.("activation.TextTabThree")}</h5>
                            <Tabs>
                                <TabList className={styled.tab_list}>
                                    <Tab>Curl(Bash)</Tab>
                                    <Tab>Python</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className={styled.tabs_content}>
                                        <pre style={{color:'white', lineHeight:'25px'}}>
                                            curl \ <br />
                                            -d '' \ <br />
                                            -H 'accept: application/json' \ <br />
                                            -H 'Authorization: Bearer &lt;Your token&gt;' \ <br />
                                            -X 'GET' \ <br />
                                            'https://userbot-api.tech/api/v1/telegram/search_user?phone<br />=79000000000'\
                                        </pre>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className={styled.tabs_content}>
                                        <pre style={{color:'white', lineHeight:'25px'}}>
                                            import requests <br />
                                            r = requests.get("https://userbot-api.tech/api/v1/telegram<br />/search_user", params
                                            {'= {'} <br />
                                            "phone": "79000000000", <br />
                                            {'}, headers = {'}
                                            "Authorization": "Bearer &lt;Your token&gt;" <br />
                                            {'})'} <br />
                                            print(r.status_code, r.json())
                                        </pre>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </TabPanel>
                </div>

            </Tabs>
        </section>
    );
};

export default ActivationSection;