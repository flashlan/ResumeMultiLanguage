import { DiagramEngine, DiagramModel, DefaultNodeModel, LinkModel, DiagramWidget } from "storm-react-diagrams";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import React, { Component, Suspense }  from 'react';
import { useTranslation } from 'react-i18next';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './fontawesome';

//import gsap from 'gsap';



require("storm-react-diagrams/dist/style.min.css");




export default () => {
    
    
    //1) setup the diagram engine
    const engine = new DiagramEngine();
    engine.installDefaultFactories();
    
    //2) setup the diagram model
    const model = new DiagramModel();
    
    
    
    //3-A) create a default node
   //const centro = new DefaultNodeModel("Start Game", "rgb(0,192,251)");
   //const rotaDevOps = new DiamonNodeWidget();
    
   // var node10 = new DiamondNodeModel();
   //node10.extras = { foo: 'bar' };
    
    //Box Good Start Poit
    const centro = new DefaultNodeModel("GOOD START POINT ", "rgb(0243, 238, 116)");
    const port1 = centro.addInPort(<div class="buttonr grey"><i className="fa fa-tasks fa-1x" /></div>);
    const port00 = centro.addInPort(" ");
    const port3 = centro.addInPort(<div class="buttonr grey"><i className="fa fa-tasks fa-1x" /></div>);
    const port2 = centro.addOutPort(<div class="buttonl grey"><i className="fa fa-tasks fa-1x" /></div>);
    const port03 = centro.addOutPort(" ");
    const port4 = centro.addOutPort(<div class="buttonl grey"><i className="fa fa-tasks fa-1x" /></div>);

    centro.setPosition(30, 130);
    
    //Box Data Science
    const node1 = new DefaultNodeModel("Data Science", "rgb(0,192,255)");
    const portIAIn = node1.addInPort(" ")
    const portIAOut = node1.addOutPort("Start");
    node1.setPosition(60, 350);
    
    //box math
    const boxmath = new DefaultNodeModel(<div class="buttonc grey"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> </div> 1 - MATEMÁTICA e ESTATISTICA </div>, "rgb(64,64,64)");
    const portMathIn = boxmath.addInPort(<div class="buttonr white"  ><div class="buttonr grey"><i className="ffa-li fa fa-square" /> </div> <a target="_blank" rel="noopener noreferrer" href="https://www.java.com/">Click</a></div>);
   
    const portMathOut1 = boxmath.addOutPort(<div class="buttonl black"  >Linear Algebra<div class="buttonl orange"><i className="fa fa-spinner fa-pulse fa-fw" /> </div> </div>);
    const portMathOut2 = boxmath.addOutPort(<div class="buttonl black"  >Estatística<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portMathOut3 = boxmath.addOutPort(<div class="buttonl black"  >Calculus<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portMathOut4 = boxmath.addOutPort(<div class="buttonl blue"  >Optimizations<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portMathOut5 = boxmath.addOutPort(<div class="buttonl blue"  >Functions<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portMathOut = boxmath.addOutPort(" ");
    boxmath.setPosition(250, 100);
    
    
    //Box PROGRAMACAO
    const boxAprenda = new DefaultNodeModel(<div class="buttonc grey"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> </div>2 - PROGRAMAÇÃO</div>, "rgb(64,64,64)");
    const portIAOutin = boxAprenda.addInPort(" ");
    const portAprendaPython = boxAprenda.addOutPort(<div class="buttonl blue"  >Python<div class="buttonl orange"><i className="fa fa-spinner fa-pulse fa-fw" /> </div> </div>);
    const portROut = boxAprenda.addOutPort(<div class="buttonl blue"  >R<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portJavaOut = boxAprenda.addOutPort(<div class="buttonl blue"  >Java<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portJSasOut = boxAprenda.addOutPort(<div class="buttonl blue"  >SAS<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portAprendaOut = boxAprenda.addOutPort(" ");
    boxAprenda.setPosition(650, 120);
    
    
    

    //PYTHON BOX
    const boxPython = new DefaultNodeModel(<div class="buttonc red"><div class="buttonc blue"><i className="fab fa-python zoom fa-2x" /></div> Libraries </div>  , "rgb(64,64,64)");
    const portPandasIn = boxPython.addInPort(<div class="buttonr white"  ><div class="buttonr grey"><i className="ffa-li fa fa-square" /> </div> Pandas</div>);
    const portNumpyIn = boxPython.addInPort(<div class="buttonr blue"  ><div class="buttonr green"><i className="ffa-li fa fa-check-square fa-1x" /> </div> Numpy</div>);
    boxPython.setPosition(1050, 100);
    
    //Box Statisitics
    const boxStatisitics = new DefaultNodeModel(<div class="buttonc grey"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> </div> 1 - Statisitics </div>, "rgb(64,64,64)");
    const portStatisiticsIn = boxStatisitics.addInPort(<div class="buttonr white"  ><div class="buttonr grey"><i className="ffa-li fa fa-square" /> </div> <a target="_blank" rel="noopener noreferrer" href="https://www.java.com/">Click</a></div>);
    const portStatisiticsOut1 = boxStatisitics.addOutPort(<div class="buttonl black"  >MySQL<div class="buttonl orange"><i className="fa fa-spinner fa-pulse fa-fw" /> </div> </div>);
    const portStatisiticsOut2 = boxStatisitics.addOutPort(<div class="buttonl black"  >Cassandra<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portStatisiticsOut3 = boxStatisitics.addOutPort(<div class="buttonl black"  >Hadoop<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portStatisiticsOut4 = boxStatisitics.addOutPort(<div class="buttonl blue"  >Optimizations<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portStatisiticsOut5 = boxStatisitics.addOutPort(<div class="buttonl blue"  >Functions<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portStatisiticsOut = boxStatisitics.addOutPort(" ");
    boxStatisitics.setPosition(980, 380);
    
    //Box DataWrangling
    const boxDataWrangling = new DefaultNodeModel(<div class="buttonc grey"><div class="buttonc blue"><i className="fa fa-flag fa-1x" /> </div> 1 - DataWrangling </div>, "rgb(64,64,64)");
    const portDataWranglingsIn = boxDataWrangling.addInPort(<div class="buttonr white"  ><div class="buttonr grey"><i className="ffa-li fa fa-square" /> </div> <a target="_blank" rel="noopener noreferrer" href="https://www.java.com/">Click</a></div>);
    const portDataWranglingOut1 = boxDataWrangling.addOutPort(<div class="buttonl black"  >MySQL<div class="buttonl orange"><i className="fa fa-spinner fa-pulse fa-fw" /> </div> </div>);
    const portDataWranglingsOut2 = boxDataWrangling.addOutPort(<div class="buttonl black"  >Cassandra<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portDataWranglingOut3 = boxDataWrangling.addOutPort(<div class="buttonl black"  >Hadoop<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portDataWranglingOut4 = boxDataWrangling.addOutPort(<div class="buttonl blue"  >Optimizations<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portDataWranglingOut5 = boxDataWrangling.addOutPort(<div class="buttonl blue"  >Functions<div class="buttonl grey"><i className="ffa-li fa fa-square" /> </div> </div>);
    const portDataWranglingOut = boxDataWrangling.addOutPort(" ");
    boxDataWrangling.setPosition(600, 550);
    
    // create links
    const linkDataScienceAprenda = portMathOut.link(portIAOutin);
    const linkAprendaPandas = portAprendaPython.link(portPandasIn);
    const linkAprendaNumpy = portAprendaPython.link(portNumpyIn);
    const linkDataScienceMath = portIAOut.link(portMathIn);
    const linkCentroDataScience = port4.link(portIAIn);
    const linkAprendaStatisitics = portAprendaOut.link(portStatisiticsIn);
    
    //4) add the models to the root graph
    model.addAll(centro, node1, boxAprenda, boxmath, boxPython, linkDataScienceAprenda, linkAprendaPandas, linkAprendaNumpy, linkDataScienceMath, linkCentroDataScience, boxStatisitics, linkAprendaStatisitics, boxDataWrangling);
    
    //5) load model into engine
    engine.setDiagramModel(model);
   
    
    //6) render the diagram!
    return  <section id="myroadmap">< DiagramWidget className="srd-demo-canvas" diagramEngine={engine} allowLooseLinks={false} smartRouting={false}/></section>;
};
