import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  skills : Skill[] =[
    {
      avatar:
      "../../assets/Tux.png",
      text :'My passion for the penguin started when I was 12, thanks to my brother. Solving system related issues had always been a nice challenge, especially at the begin, when to install an Arch Linux distro, you almost needed to be a rocket scientist!',
      title : 'Linux',
      value: 85,
      openModal : false
    },
    {
      avatar:
      "../../assets/java.png",
      text :'Java was my first OOP language. I learned it during my work experience @IMGT. It has been a while since I don\'t touch any code in Java, but I liked its solid community and versatility.',
      title : 'Java',
      value: 60,
      openModal : false
    },
    {
      avatar:
      "../../assets/cpp.png",
      text :'I learnt C++ for the project iMOKA: all the core part is written with that. It is fast, reliable and allows OOP. I loved the easy parallelization powered by OpenMP and I also enjoyed using the Machine Learning library MLPack.',
      title : 'C++',
      value: 93,
      openModal : false
    },
    {
      avatar:
      "../../assets/python.png",
      text :'Python was the first program language that I learnt, It was the one that introduced me to the wonderful world of programming. I started using it during my master and I never stopped. All of my ML and AI projects are written in Python using the libraries Tensorflow, scikit-learn, pandas and numpy.',
      title : 'Python',
      value: 95,
      openModal : false
    },
    {
      avatar:
      "../../assets/angular.png",
      text :'My second experience with Front End development was for the creation of the GUI of iMOKA. I used Electron for the BE and Angular for the Front End. Before I used some plain JS for the creation of websites, like the <a href="https://edcbs2.umontpellier.fr" target="_blank">website for my doctoral school</a>, but learning this amazing framework opened a new world for me! Since then, I\'m using it regularly for all my projects ( IRBase and the ongoing PCaProfiler) ',
      title : 'Angular',
      value: 87,
      openModal : false
    },
    {
      avatar:
      "../../assets/node.png",
      text :'My first experience with Back End development was for the creation of the GUI of iMOKA. I used Electron for the BE and I found it very flexible and with a strong community. Subsequently, I used Express for the development of web applications (IRBase and the ongoing PCaProfiler), and the richness of libraries and flexibility of the PL never let me down.',
      title : 'Node',
      value: 90,
      openModal : false
    },
    {
      avatar:
      "../../assets/docker.png",
      text :'I think that containers and Singualrity images are a great asset for any scientist: the increased level of reproducibility that those technologies allow should be a standard practice of any researcher. I create docker images for all my projects and I currently use them also for the development stage!',
      title : 'Docker',
      value: 70,
      openModal : false
    },{
      avatar:
      "../../assets/git.png",
      text :'All my projects are on GitHub ( in private if they are not published, sorry! ) and I think that this good practice should be taught during any IT related course, Bioinformatics included. The safety that I feel after pushing the code doesn\'t have a price!',
      title : 'Git',
      value: 74,
      openModal : false
    },{
      avatar:
      "../../assets/algo.png",
      text :'I have been studying and developing algorithms and efficient data structures for five years. The thrill to compare different solutions for a complex task, creating new ones or adapting the most suitable is what got me so involved in software development.',
      title : 'Algorithms and DS',
      value: 79,
      openModal : false
    },{
      avatar:
      "../../assets/sql.png",
      text :'Since my first job @IMGT, working with databases was a must. There, I learnt a lot about this field and the first approach with ORM using JPA. I recently learnt how to use Sequelize, an ORM for Node and TypeScript, and I really like it!',
      title : 'SQL and ORM',
      value: 75,
      openModal : false
    },{
      avatar:
      "../../assets/R.jpeg",
      text :'I have been using R since my Master\'s in Bioinformatics and It\'s my first choice when I have to do more classical bioinformatical analysis. It has a huge community and thousands of libraries. I have never created a tool in R and honestly, If I have to, I would rather write it in Python or C/C++ and then write a wrapper for it.',
      title : 'R',
      value: 91,
      openModal : false
    },{
      avatar:
      "../../assets/tf.png",
      text :'A well trained model can not only do tasks that a human would do in more time and less efficiently, but also find new patterns and identify novel logic! I have been studying ML and AI models since my Master\'s, I have been applying them in almost all my works and I have also been reviewing scientific papers related to this amazing field. Simply, my real passion!',
      title : 'ML and AI',
      value: 95,
      openModal : false
    },


  ]

  works: WorkItem[] = [
    {
      title: `<strong>iMOKA</strong>: <strong>i</strong>nteractive<strong> M</strong>ulti<strong>O</strong>bjective <strong>K</strong>-mer <strong>A</strong>nalysis`,
      href: "https://github.com/RitchieLabIGH/iMOKA",
      avatar:
        "https://github.com/RitchieLabIGH/iMOKA/blob/master/iMOKA/src/assets/images/256x256.png?raw=true",
        text : "My main PhD project. It's a method to select k-mers able to classify between two or more classes of samples in large cohorts of RNA-seq data."
    },
    {
      title: `<strong>IRFinder-S</strong>: a new version of the widely used software for the detection of intron retention events.`,
      href: "https://github.com/RitchieLabIGH/IRFinder",
      avatar:
      "../../assets/irfinder.png",
        text : "My second PhD project. Includes a CNN based filter to reduce the false positive IR based on image-like features."
    },
    {
      title: `<strong>IRBase</strong>: Intron retention database, hosted at IGH of Montpellier. (currently offline due to administrative issues)`,
      href: "https://irbase.igh.cnrs.fr/",
      avatar:
        "../../assets/IRbase_bw.png",
        text : "A web application to visualize IR events and compare them between different samples."
    },
    

  ];
  constructor() {
    this.skills.sort((a,b)=>b.value-a.value)
  }
}
interface WorkItem {
  title: string;
  href?: string;
  avatar: string;
  text : string;
}

interface Skill {
  title: string;
  value : number;
  avatar: string;
  text : string;
  openModal :boolean;
}
