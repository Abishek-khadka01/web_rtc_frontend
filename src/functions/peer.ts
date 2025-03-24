class PeerConnection {

static peer: RTCPeerConnection | null = null; 
static configuration = {
    iceServers: [
      {
        urls: [
          "stun:stun.l.google.com:19302",
          "stun:global.stun.twilio.com:3478",
        ],
      },
    ],
  };


 private  static createPeerConnection = async () => {
    if(!this.peer){
        this.peer = new RTCPeerConnection(this.configuration);
    }
    return this.peer;
  }


static createOffer = async () => {
    if(!this.peer){
        this.peer = await this.createPeerConnection()
    }
    const offer = await this.peer.createOffer();
    await this.peer.setLocalDescription(offer);
    return offer

}


static createAnswer = async (offer : RTCSessionDescription )=>{

    if(!this.peer){
        this.peer = await this.createPeerConnection()
    }

if(offer){
    this.peer?.setRemoteDescription(offer)
    const answer = await this.peer?.createAnswer();
    await this.peer?.setLocalDescription(answer);
    return answer   
}


}


static AnswerReceive = async (answer : RTCSessionDescription )=>{
    if(!this.peer){
        this.peer = await this.createPeerConnection()
    }

    if(answer){
         const response = await this.peer?.setRemoteDescription(answer)
         return response
    }

}

static GetPeer =async  ()=>{
    if(!this.peer){
        this.peer = await  this.createPeerConnection()
    }
    return this.peer
}


}


export default PeerConnection