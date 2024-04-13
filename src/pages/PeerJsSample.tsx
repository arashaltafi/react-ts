import { useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';

const PeerJsSample = () => {
    const [peerId, setPeerId] = useState<string | null>(null);
    const myVideoRef = useRef<HTMLVideoElement>(null);
    const partnerVideoRef = useRef<HTMLVideoElement>(null);
    let myPeer: Peer;
    let myStream: MediaStream;

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: false, audio: true })
            .then(stream => {
                myStream = stream;
                if (myVideoRef.current) {
                    myVideoRef.current.srcObject = stream;
                }

                myPeer = new Peer();

                myPeer.on("connection", (con) => {
                    console.log('connection: ' + con);

                    myPeer.on('open', id => {
                        console.log('My peer ID is: ' + id);
                        setPeerId(id);
                    });

                    myPeer.on('call', call => {
                        call.answer(stream);
                        call.on('stream', remoteStream => {
                            if (partnerVideoRef.current) {
                                partnerVideoRef.current.srcObject = remoteStream;
                            }
                        });
                    });
                });
            })
            .catch(err => {
                console.error('Error accessing media devices: ', err);
                alert('Error accessing media devices: ' + err);
            });

        return () => {
            myStream.getTracks().forEach(track => {
                track.stop();
            });
        };
    }, []);

    const callPeer = () => {
        const partnerId = prompt('Enter your friend\'s ID');
        if (partnerId) {
            navigator.mediaDevices.getUserMedia({ video: false, audio: true })
                .then(_ => {
                    const call = myPeer.call(partnerId, myStream);
                    call.on('stream', remoteStream => {
                        if (partnerVideoRef.current) {
                            partnerVideoRef.current.srcObject = remoteStream;
                        }
                    });
                })
                .catch(err => {
                    console.error('Error accessing media devices: ', err);
                });
        }
    };

    return (
        <div>
            <div>
                {peerId && <p>Your PeerJS ID: {peerId}</p>}
                <video ref={myVideoRef} autoPlay muted style={{ width: '300px', height: '200px' }}></video>
                <video ref={partnerVideoRef} autoPlay style={{ width: '300px', height: '200px' }}></video>
            </div>
            <button className='bg-red-500 text-white px-8 py-4 rounded-md' onClick={callPeer}>Call Peer</button>
        </div>
    )
}

export default PeerJsSample