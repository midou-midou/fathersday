import React, { Component, Fragment } from "react";
import ReactAudioPlayer from 'react-audio-player';
import './fathercss.css';

class Father extends Component{
    //说明下state中的两个属性，lrc是从总歌词中选择的当前歌词，ms为总歌词
    constructor(props){
        super(props);
        this.state = {
           english_lrc: '',
           chinese_lrc: '',
           ps: '',
           double_index : 0,
           timer: null,
           ms : [{"time":0,"lrc":""},{"time":0,"lrc":""},{"time":2400,"lrc":"Hey, once upon a younger year"},{"time":2400,"lrc":"闪回到从前那些年"},{"time":4500,"lrc":"When all our shadows disappeared"},{"time":4500,"lrc":"阳光扫尽一切阴云"},{"time":6280,"lrc":"The animals inside came out to play"},{"time":6280,"lrc":"小动物们出来玩耍"},{"time":9940,"lrc":"Hey, When face to face with all our fears"},{"time":9940,"lrc":"当年我们直面所有恐惧"},{"time":12300,"lrc":"Learned our lessons through the tears"},{"time":12300,"lrc":"在泪水中学会渐渐长大"},{"time":13880,"lrc":"Make memories we knew would never fade"},{"time":13880,"lrc":"那些回忆 永不曾褪色"},{"time":17270,"lrc":"One day my father he told me"},{"time":17270,"lrc":"那天我父亲 对我说"},{"time":19440,"lrc":"Son, don't let this slip away"},{"time":19440,"lrc":"孩子 莫让时光虚度"},{"time":21560,"lrc":"He took me in his arms,I heard him say"},{"time":21560,"lrc":"在他的怀中 我听到他说着"},{"time":24920,"lrc":"When you get older"},{"time":24920,"lrc":"当你长大了"},{"time":26360,"lrc":"Your wild heart will live for younger days"},{"time":26360,"lrc":"这些激情 就只能活在童年里"},{"time":29420,"lrc":"Think of me if ever you're afraid"},{"time":29420,"lrc":"孤单惊慌时 就想想还有我在"},{"time":32490,"lrc":"He said, one day you'll leave this world behind"},{"time":32490,"lrc":"他说过 总有一天 你会远远离开"},{"time":36240,"lrc":"So live a life you will remember"},{"time":36240,"lrc":"一路且行且歌 每天都纵情度过"},{"time":40040,"lrc":"My father told me when I was just a child"},{"time":40040,"lrc":"听着这些 那时我还小"},{"time":43890,"lrc":"These are the nights that never die"},{"time":43890,"lrc":"当年几何 恍若仍在"},{"time":47240,"lrc":"My father told me"},{"time":47240,"lrc":"我父亲说过"},{"time":78700,"lrc":"When thunder clouds start pouring down"},{"time":78700,"lrc":"当万钧雷霆化雨而下"},{"time":80830,"lrc":"Light a fire they can't put out"},{"time":80830,"lrc":"惊雷倐逝燃天火"},{"time":82760,"lrc":"Carve your name into those shinning stars"},{"time":82760,"lrc":"闪烁留名在繁星下"},{"time":85840,"lrc":"He said go adventure far beyond these shores"},{"time":85840,"lrc":"他说 去海的那边远远探险吧"},{"time":88490,"lrc":"Don't forsake this life of yours"},{"time":88490,"lrc":"把握住你每一刻你精彩的生活"},{"time":90120,"lrc":"I'll guide you home no matter where you are"},{"time":90120,"lrc":"相隔天涯 还有家为你守着"},{"time":93490,"lrc":"One day my father he told me"},{"time":93490,"lrc":"那天我父亲 对我说"},{"time":95690,"lrc":"Son, don't let this slip away"},{"time":95690,"lrc":"孩子 时光匆匆莫留悔"},{"time":97710,"lrc":"When I was just a kid, I heard him say"},{"time":97710,"lrc":"稚嫩的我听见他说着"},{"time":101120,"lrc":"When you get older"},{"time":101120,"lrc":"当你长大了"},{"time":102480,"lrc":"Your wild heart will live for younger days"},{"time":102480,"lrc":"会想起当年不羁的岁月"},{"time":105540,"lrc":"Think of me if ever you're afraid"},{"time":105540,"lrc":"孤单惊慌时 就想想还有我在"},{"time":108650,"lrc":"He said, one day you'll leave this world behind"},{"time":108650,"lrc":"他说过 总有一天 你会远远离开"},{"time":112450,"lrc":"So live a life you will remember"},{"time":112450,"lrc":"要记住每个值得回忆的时刻"},{"time":116320,"lrc":"My father told me when I was just a child"},{"time":116320,"lrc":"听着这些 那时我还小"},{"time":120110,"lrc":"These are the nights that never die"},{"time":120110,"lrc":"那些夜晚 永远鲜活"},{"time":123350,"lrc":"My father told me"},{"time":123350,"lrc":"我父亲说过"},{"time":135300,"lrc":"These are the nights that never die"},{"time":135300,"lrc":"那些夜晚 永远鲜活"},{"time":138760,"lrc":"My father told me"},{"time":138760,"lrc":"我父亲说过"},{"time":169150,"lrc":"My father told me"},{"time":169150,"lrc":"我父亲说过"},{"time":170000,"lrc":"爸，父亲节快乐！"},{"time":170000,"lrc":"爸，父亲节快乐！"},{"time":170000,"lrc":""}]
        }
    }

    componentDidMount(){
        const me = this;      
        function settime(){
                if(me.state.double_index + 2 === me.state.ms.length - 1){
                    me.setState({
                        double_index: 0,
                        ps: "如果想在看一遍要重新刷新下网页哦！！"
                    })
                }
                else{
                    me.setState({
                        english_lrc:  me.state.ms[me.state.double_index].lrc,
                        chinese_lrc:  me.state.ms[me.state.double_index + 1].lrc,
                        double_index: me.state.double_index + 2
                    });
                } 
            setTimeout(settime, me.state.ms[me.state.double_index + 2].time - me.state.ms[me.state.double_index].time)
        }
        settime(); 
    }

    render(){
        return(
            <Fragment>
                <ReactAudioPlayer
                    src="assest/TheNights.mp3"
                    autoPlay
                    loop={true}
                />
                <div className="div-align">
                    <h1><span className="spanfont">{this.state.english_lrc}</span></h1>
                    <h1><span>{this.state.chinese_lrc}</span></h1>
                    <h5><span className="spanfont-ps">{this.state.ps}</span></h5>
                </div>
            </Fragment>
        )
    }

    componentWillUnmount(){
        console.log("success uninstall component")
        clearInterval(this.state.timer);
    }

}

export default Father