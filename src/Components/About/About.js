import React from 'react';
import './About.css';
import Profile from '../Profile/Profile';

class About extends React.Component{
    render(){
        return(
            <div className="col-md-12 aboutCard">
                <div className="col-md-3">
                    <div className="profile">
                        <Profile imageSource="Anurag.jpg"/>
                        <span>SharePoint Framework (SPFx)</span>
                        {this.generateStarButton(9)}
                        <span>Azure Cognitive Services</span>
                        {this.generateStarButton(9)}
                        <span>Azure PaaS</span>
                        {this.generateStarButton(8)}
                        <span>React JS</span>
                        {this.generateStarButton(8)}
                        <span>ASP.NET MVC</span>
                        {this.generateStarButton(8)}
                        <span>Azure Service Bus</span>
                        {this.generateStarButton(8)}
                        <span>Redux</span>
                        {this.generateStarButton(7)}
                        <span>Node JS</span>
                        {this.generateStarButton(6)}
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="info">
                        <p>
                            I am a Lead Software Developer with 8.5 years of industry experience working in India and the United Kingdom. I specialize in Cloud Application Development using Azure PaaS/SaaS, Office 365, and React JS. Currently I am part of Avanade practice in Accenture, India and working for a client which is a multinational oil and gas company headquartered in London, United Kingdom. I have led several application development projects on cloud, the main technology stacks where I specialize are SharePoint Framework (SPFx), React JS, Azure Cognitive Services, Azure Functions (.NET Core), Azure App Services (C# Web Jobs), Azure Service Bus, Azure Storage, ASP.NET MVC, C#, JavaScript, and Node JS. Additionally, I am responsible for driving designs of the projects and represent projects in Architecture Board. I am passionate about software development and I prefer working on projects which have complex architecture and developed from scratch. In my free time I like to learn latest technologies from various MOOCs and do POCs on these technologies. Additionally, I like to share my knowledge with the community, so I write blogs, share projects on GitHub, and participate as a Technical Speaker in community events.
                        </p>
                        <p>I am a snooker enthusiast, in my free time i never miss an opportunity to play couple of frames. This has completely filled all the free time of my life as you never get fulfilled by playing this amazing sport. Additionally, i love to ride bikes. I own a Royal Enfield Classic 350 motorbike which i usually ride for an hour daily. </p>
                    </div>
                </div>
            </div>
        )
    }
    generateStarButton(buttonCount){
        var checkedDiv = [];
        var uncheckedDiv = [];
        var uncheckedStar = 10 - buttonCount;
        for(var i = 0; i<buttonCount; i++){
            checkedDiv.push(this.checkedStar());
        }
        for(var i = 0; i<uncheckedStar; i++){
            uncheckedDiv.push(this.unCheckedStar());
        }
        return(<div>{checkedDiv}{uncheckedDiv}</div>)
    }
    checkedStar(){
        return <span class='fa fa-star checked'></span>;
    }

    unCheckedStar(){
        return <span class="fa fa-star unchecked"></span>;
    }
}

export default About;