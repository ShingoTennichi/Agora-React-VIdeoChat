// 3987f202c7514bb3a8a1e6becc39e77e
import { useState } from "react";

import AgoraUIKit from "agora-react-uikit";
import styles from './App.module.css';

type rtcProps = {
    appId: string,
    channel: string,
    token: string
}

function App() {
    const [videoCall, setVideoCall] = useState<boolean>(false);
    const rtcProps: rtcProps = {
        appId: process.env.REACT_APP_ID ?? "",
        channel: "test",
        token: process.env.REACT_APP_TOKEN ?? ""
    }

    const callbacks = {
        EndCall: () => setVideoCall(false)
    }

    // async function startVideoCall() {
    //     rtcProps.token = await fetch('http://localhost:8080/')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         return data;
    //     });
    // }

    console.log(rtcProps);
    return videoCall ? (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <h1>Video Chat</h1>
            </nav>
            <div className={styles.container}>
                <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
            </div>
        </div>
    ) :
        (
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <h1>Video Chat</h1>
                    <div>
                        <button onClick={() => setVideoCall(true)}>Start Video Call</button>
                        {/* <button onClick={() => startVideoCall()}>Start Video Call</button> */}
                    </div>
                </nav>
            </div>
        )
}

export default App;
